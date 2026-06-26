# LitSieve

LitSieve 是一个文献相关性筛选工具。用户上传论文、专著章节、报告、新闻、PDF、图片或粘贴文本后，系统读取全文，按用户的研究意图筛选材料，并输出内容概述、可用范围、选用或不选用原因和使用限制。

## Run Locally

```bash
python -m pip install -r requirements.txt
export DEEPSEEK_API_KEY="your_deepseek_api_key"
python server.py
```

Open:

```text
http://127.0.0.1:4173
```

## Environment Variables

| Name | Required | Description |
| --- | --- | --- |
| `DEEPSEEK_API_KEY` | Yes | DeepSeek API key used by the backend. Without it, the app refuses to generate screening conclusions instead of returning demo results. Never expose it in browser JS. |
| `DEEPSEEK_MODEL` | No | Defaults to `deepseek-chat`. |
| `DEEPSEEK_API_BASE` | No | Defaults to `https://api.deepseek.com/chat/completions`. |
| `HOST` | No | Use `0.0.0.0` on cloud platforms. |
| `PORT` | No | Defaults to `4173`; most platforms inject their own `PORT`. |
| `TESSERACT_LANG` | No | OCR language set, defaults to `eng+chi_sim+jpn`. |

## Deploy With Docker

```bash
docker build -t litsieve .
docker run -p 4173:4173 \
  -e DEEPSEEK_API_KEY="your_deepseek_api_key" \
  litsieve
```

## Deploy On PaaS

Use the `outputs/litsieve` folder as the app root.

Build command:

```bash
pip install -r requirements.txt
```

Start command:

```bash
HOST=0.0.0.0 python server.py
```

Set `DEEPSEEK_API_KEY` in the platform's environment variables.

Health check:

```text
/healthz
```

## Notes

- Text PDFs, `.docx` files, images, and image-based PDFs are parsed by the backend before model analysis.
- Image OCR requires Tesseract. The Dockerfile installs the full Tesseract language pack so scanned multilingual materials can be processed more broadly.
- The frontend does not create local demo screening conclusions when the backend is unavailable. If `DEEPSEEK_API_KEY` is missing or the model call fails, users see a service error rather than fabricated literature judgments.
- The backend refuses to generate a screening judgment when a file has no extractable body text. Titles and filenames are metadata only; they are never treated as evidence for relevance.
- The frontend never asks users for model URLs, backend proxy addresses, or API keys.
