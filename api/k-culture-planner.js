export const config = { runtime: 'edge' };

export default async function handler(req) {
    if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

    const { message, session_id } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        return new Response(`data: {"error": "API 키가 서버에 등록되지 않았습니다."}\n\n`, {
            headers: { 'Content-Type': 'text/event-stream', 'Access-Control-Allow-Origin': '*' }
        });
    }

    const fullPrompt = `당신은 한국 문화유산 탐방 루트를 설계해주는 AI입니다. 주어진 조건에 맞춰 친절하고 가독성이 높은 마크다운 형식으로 응답하세요.\n\n${message}`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: fullPrompt }] }] })
        });

        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = errorText;
            try {
                const errObj = JSON.parse(errorText);
                errorMessage = errObj.error.message || errorText;
            } catch(e) {}
            throw new Error(`API 오류: ${response.status} - ${errorMessage}`);
        }

        const stream = new ReadableStream({
            async start(controller) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                const encoder = new TextEncoder();
                
                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) {
                            controller.enqueue(encoder.encode(`data: {"status": "complete"}\n\n`));
                            break;
                        }
                        
                        const chunkStr = decoder.decode(value, { stream: true });
                        const lines = chunkStr.split('\n');
                        for (const line of lines) {
                            if (line.startsWith('data: ')) {
                                const dataStr = line.slice(6).trim();
                                if (!dataStr) continue;
                                try {
                                    const parsed = JSON.parse(dataStr);
                                    const textChunk = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                                    if (textChunk) {
                                        const out = `data: ${JSON.stringify({ token: textChunk })}\n\n`;
                                        controller.enqueue(encoder.encode(out));
                                    }
                                } catch (e) {
                                    // Parse error skipping
                                }
                            }
                        }
                    }
                } catch (err) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: "스트리밍 중 끊김 오류가 발생했습니다." })}\n\n`));
                } finally {
                    controller.close();
                }
            }
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/event-stream; charset=utf-8',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (err) {
        return new Response(`data: ${JSON.stringify({ error: err.message })}\n\n`, {
            headers: { 'Content-Type': 'text/event-stream', 'Access-Control-Allow-Origin': '*' }
        });
    }
}
