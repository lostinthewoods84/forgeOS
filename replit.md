# ForgeOS

## Overview
ForgeOS is a workflow methodology and set of structured templates designed to turn "vibe coding" (fast, AI-driven development) into a production-ready, disciplined process. It is not an application framework — it is a documentation repository.

## Tech Stack
- **Runtime:** Node.js 20
- **Server:** Custom Node.js HTTP static file server (`server.js`)
- **Frontend:** Single HTML page (`index.html`) with inline CSS
- **Content:** Markdown documentation files

## Project Structure
```
/
├── server.js           # Static file server on port 5000
├── index.html          # Main documentation page
├── assets/             # Logo and architecture diagrams
│   ├── ForgeOSLogo.png
│   └── ForgeArch.png
├── docs/               # Detailed documentation
│   ├── GETTING-STARTED.md
│   ├── CONSTRAINTS.md
│   ├── OPERATING-MODEL.md
│   └── WORKFLOW.md
├── templates/          # Feature card and build prompt templates
│   ├── FEATURE-CARD.md
│   └── build-prompts/TEMPLATE.md
├── roles/              # AI persona role definitions
│   ├── ARCHITECT.md
│   ├── PROCESS.md
│   ├── QA.md
│   └── UX.md
├── examples/           # Real-world template examples
│   └── notification-button.md
└── README.md
```

## Workflow
- **Start application** — `node server.js` — serves on port 5000 (webview)

## Architecture
- The server is a simple Node.js HTTP server that serves static files from the project root.
- No database, no authentication, no API.
- All content is static HTML/Markdown.
