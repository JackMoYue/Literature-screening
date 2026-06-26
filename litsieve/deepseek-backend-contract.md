# LitSieve DeepSeek Backend Contract

普通用户不需要填写模型地址、API Key 或后端代理地址。产品前端固定把材料提交到站点自己的 `/api/analyze`，站点后端再调用 DeepSeek。

## User Flow

1. 用户上传文献、PDF、图片、扫描件或粘贴文字。
2. 用户填写关键词、研究意图、材料类型、输出语言和匹配方式。
3. 用户点击“开始筛选”。
4. 后端完成全文读取、图片文字抽取、跨语言概念匹配和文献评估。
5. 前端只显示最终结果：内容概述、可用范围、选用或不选用原因、使用限制。

用户不应看到“需要 OCR”“等待识别”“后端代理地址”等技术中间状态。

## Frontend Request

`POST /api/analyze`

Content type: `multipart/form-data`

Fields:

- `request`: JSON string
- `files`: uploaded files
- `metadata_0`, `metadata_1`, ...: JSON metadata for each material

`request` example:

```json
{
  "keyword": "文学理论",
  "keywordMode": "concept",
  "outputLanguage": "英语",
  "materialType": "mixed",
  "intent": "筛选真正讨论文学理论或具体理论流派的文献",
  "rules": ["section", "method", "exclude", "ocr"],
  "threshold": 68,
  "modelPreference": "DeepSeek",
  "instructions": "Read every uploaded file completely. For PDFs/images, extract text internally. Translate concepts across languages automatically. Return only final user-facing literature evaluation in the requested output language."
}
```

## Backend Response

```json
{
  "results": [
    {
      "id": "file-1",
      "title": "Example title",
      "status": "keep",
      "score": 86,
      "tags": ["literary theory", "structuralism"],
      "contentSummary": "A concise summary in the selected output language.",
      "usableScope": "Which full text, chapter, section, or passage can be used.",
      "selectionReason": "Why this material should or should not be used.",
      "limitations": "Citation limits, source type limits, or verification notes.",
      "segments": [
        { "label": "Chapter 2", "score": 91, "text": "Short excerpt or locator" }
      ]
    }
  ]
}
```

Statuses:

- `keep`: 核心可用
- `maybe`: 局部可用或需精读确认
- `reject`: 已通读后不建议使用

The backend should call DeepSeek with the site-owned API key. Never expose that key in browser JavaScript.
