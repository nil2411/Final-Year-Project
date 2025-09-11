# KrishiSaathi Backend (Multilingual AI Chatbot)

This service exposes a multilingual AI chatbot API for KrishiSaathi. It supports Hindi (hi), Marathi (mr), and English (en).

## Features

- Multilingual input/output via Google Cloud Translate API
- AI responses powered by OpenAI through LangChain
- Simple REST endpoint: `POST /api/chat/message`

## Requirements

- Node.js 18+
- OpenAI API Key
- (Optional but recommended) Google Cloud Translate credentials

## Setup

1. Install dependencies

```
npm install
```

2. Configure environment variables

- Copy `.env.example` to `.env` and fill in values.
- Set your OpenAI key in `.env` as `OPENAI_API_KEY`.
- For Google Translate, set `GOOGLE_APPLICATION_CREDENTIALS` to the path of your service account JSON file and `GOOGLE_PROJECT_ID` in `.env`.
  - On Windows (PowerShell):
    ```powershell
    setx GOOGLE_APPLICATION_CREDENTIALS "C:\\path\\to\\service-account.json"
    ```

3. Run the server (dev mode)

```
npm run dev
```

Server starts on `http://localhost:5000` by default.

## API

### POST /api/chat/message

Body:
```json
{
  "message": "कपास में कौन सा उर्वरक दें?",
  "lang": "hi" // optional, will auto-detect if omitted
}
```

Response:
```json
{
  "message": "...translated AI answer in Hindi...",
  "meta": { "detectedLang": "hi", "target": "hi", "processedIn": "en" }
}
```

Notes:
- If Google Translate is not configured, the service will fall back to returning the original text (no translation).
- You must provide a valid `OPENAI_API_KEY`.

## Quick Test

Use curl:
```bash
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message":"What fertilizer should I use for wheat?","lang":"en"}'
```

Or Hindi:
```bash
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message":"गेहूं के लिए कौन सा उर्वरक दें?","lang":"hi"}'
```

## Roadmap (Next)

- Add memory with RAG (Chroma/Pinecone)
- Add auth (JWT) and store conversation history in MongoDB
- Expose streaming responses
