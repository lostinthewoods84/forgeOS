# ForgeOS

**An event-driven AI factory that replaces agent-to-agent communication with structured, contract-based artifacts.**

Each step produces traceable outputs, making AI-assisted development deterministic, debuggable, and scalable.

---

## The Problem

Most AI workflows look like this:

```
Human → AI → Output → Problems → Human fixes → Repeat
```

Or worse, with agent frameworks:

```
Agent A → chats with → Agent B → chats with → Agent C → ??? → Output
```

The agents negotiate. They improvise. The output varies wildly. When something breaks, good luck debugging a conversation between AIs.

## The ForgeOS Approach

**Replace agent-to-agent communication with contract-based artifacts.**

```
Human Decision
     ↓
[ Ideate ] → Requirements Artifact
     ↓
[ Structure ] → Build Prompt Artifact
     ↓
[ Execute ] → Code Artifact
     ↓
Git Commit (Source of Truth)
```

Each layer:
- Reads from the previous artifact
- Operates within defined constraints
- Produces a traceable output
- Cannot modify upstream contracts

No agent chat. No negotiation. Just a production line.

---

## The Three Layers

| Layer | Job | Artifact Produced |
|-------|-----|-------------------|
| **Ideate** | Explore, iterate, refine | Requirements, PRDs, Options |
| **Structure** | Analyze, plan, engineer | Build Prompts, Specs, Code |
| **Execute** | Implement exactly what's specified | Working software, Git commits |

**Tools are interchangeable.** Today it might be ChatGPT → Claude → Replit. Tomorrow, different tools. The system survives because the contracts are in the repo, not in the tools.

---

## The Repository Is the System

Your repo defines:
- **Roles** - Architect, UX, QA, Process Engineer (AI team members)
- **Specs** - Canonical definitions that AI must follow
- **Constraints** - What each layer can and cannot do
- **Artifacts** - Traceable outputs at each step

```
your-project/
├── .forge/
│   ├── roles/              # AI team role definitions
│   │   ├── ARCHITECT.md    # System boundaries, contracts
│   │   ├── UX.md           # User journeys, screen states
│   │   ├── QA.md           # Test criteria, failure modes
│   │   └── PROCESS.md      # Workflow rules, operating modes
│   └── WORKFLOW.md         # How work flows through the system
├── docs/
│   ├── SPEC.md             # What the system does
│   ├── ARCH.md             # How it's structured
│   ├── FLOWS.md            # User journeys
│   └── DECISIONS.md        # Logged decisions with rationale
├── prompts/                # Build Prompt artifacts (versioned)
└── src/                    # Your code
```

---

## Why This Works

### Traditional AI Workflow
Each session starts fresh. Context is lost. Decisions contradict each other. Architecture drifts.

### Agent Swarm Approach
Agents chat with each other. Conversations are non-deterministic. Debugging means reading AI-to-AI transcripts. Good luck.

### ForgeOS
- **Artifacts, not conversations.** Each step produces a document, not a chat log.
- **Contracts, not negotiations.** Constraints are defined upfront, not discovered through agent debate.
- **Traceable, not opaque.** When something breaks, you read the Build Prompt and see exactly what was specified.
- **Deterministic, not probabilistic.** Same inputs → same outputs (within the bounds of the spec).

---

## Quick Start

### 1. Add ForgeOS to Your Project

```bash
mkdir -p .forge/roles docs prompts
```

### 2. Define Your Roles

Copy the role files from `/roles` into `.forge/roles/`. These define how AI should behave at each layer.

### 3. Create Your First Spec

```markdown
# docs/SPEC.md

## Overview
[What does this system do?]

## Capabilities
- [Capability 1]
- [Capability 2]

## Constraints
- [What it must NOT do]
```

### 4. Start Your Decision Log

```markdown
# docs/DECISIONS.md

## 2024-XX-XX: [First Decision]
**Context:** [Why this came up]
**Decision:** [What we decided]
**Consequences:** [What this means going forward]
```

### 5. Use Build Prompts

Instead of ad-hoc prompting, create structured Build Prompts that specify:
- What mode (Standard / Spike / Hotfix)
- What CAN'T be modified
- Current state → Target state
- Acceptance criteria

See `/templates/build-prompts/TEMPLATE.md`.

---

## Core Principles

1. **Artifacts over conversations.** Every step produces a traceable document.

2. **Contracts over negotiations.** Constraints are defined in the repo, not discovered through AI chat.

3. **The repo is shared memory.** AI has no memory between sessions. The repo is the persistent context.

4. **Tools are replaceable.** The system survives tool changes because the contracts live in the repo.

5. **Humans are decision points.** AI proposes artifacts. Humans approve and merge. Commits are authoritative.

---

## When Something Breaks

Don't blame the AI. Check the system:

| Symptom | Missing Piece |
|---------|---------------|
| AI contradicts previous decisions | No DECISIONS.md |
| Architecture drifts | No ARCH.md with boundaries |
| UX inconsistent | No FLOWS.md |
| Execute layer takes liberties | Vague Build Prompt |
| Same bugs reappear | No QA role defining criteria |

**The fix is always: add more structure to the repo.**

---

## License

Apache 2.0

---

## Contributing

ForgeOS is a methodology. Contributions that clarify the model, add role templates, or share real-world patterns are welcome.

See [CONTRIBUTING.md](CONTRIBUTING.md).
