<![CDATA[<p align="center">
  <img src="assets/ForgeOSLogo.png" alt="ForgeOS" />
</p>

**An event-driven AI factory that replaces agent-to-agent communication with structured, contract-based artifacts.**

Each step produces traceable outputs, making AI-assisted development deterministic, debuggable, and scalable.

---

## The Problem

Most AI workflows look like this:

```
Human > AI > Output > Problems > Human fixes > Repeat
```

Or worse, with agent frameworks:

```
Agent A > chats with > Agent B > chats with > Agent C > ??? > Output
```

The agents negotiate. They improvise. The output varies wildly. When something breaks, good luck debugging a conversation between AIs.

## The ForgeOS Approach

**Replace agent-to-agent communication with contract-based artifacts.**

<p align="center">
  <img src="assets/ForgeArch.png" alt="ForgeOS Architecture" />
</p>

Each layer:

- Reads from the previous artifact
- Operates within defined constraints
- Produces a traceable output
- Cannot modify upstream contracts

No agent chat. No negotiation. Just a production line.

---

## The Three Layers

| Layer | Job | Artifact Produced |
| --- | --- | --- |
| **Ideate** | Explore, iterate, refine | Requirements, PRDs, Options |
| **Structure** | Analyze, plan, engineer | Build Prompts, Specs, Code |
| **Execute** | Implement exactly what's specified | Working software, Git commits |

**Tools are interchangeable.** Today it might be ChatGPT, Claude, Replit. Tomorrow, different tools. The system survives because the contracts are in the repo, not in the tools.

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
│   ├── IDEA.md             # What you're building and why
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
- **Deterministic, not probabilistic.** Same inputs, same outputs (within the bounds of the spec).

---

## Getting Started

ForgeOS is not a standalone executable. It is a repository operating model: a set of files you add to your own project that define how AI tools should behave within it.

### Prerequisites

Clone or download the ForgeOS repo so you have the role definitions and templates available to copy from:

```bash
git clone https://github.com/lostinthewoods84/forgeOS.git
```

You will copy files from this repo into your own project. You do not build inside the ForgeOS repo itself.

### Step 1: Create your project and add the ForgeOS scaffolding

Start with a new (or existing) repository for whatever you are building.

```bash
mkdir my-project && cd my-project
git init

# Create the ForgeOS directory structure
mkdir -p .forge/roles docs prompts
```

Copy the role definitions and workflow from the ForgeOS repo into your project:

```bash
# From inside your project directory:
cp /path/to/forgeOS/roles/*.md .forge/roles/
cp /path/to/forgeOS/docs/WORKFLOW.md .forge/WORKFLOW.md
```

Copy the Build Prompt template:

```bash
mkdir -p templates/build-prompts
cp /path/to/forgeOS/templates/build-prompts/TEMPLATE.md templates/build-prompts/
```

You can also copy the Idea Brief template:

```bash
mkdir -p templates/idea-brief
cp /path/to/forgeOS/templates/idea-brief/TEMPLATE.md templates/idea-brief/
```

At this point your project should look like this:

```
my-project/
├── .forge/
│   ├── roles/
│   │   ├── ARCHITECT.md
│   │   ├── UX.md
│   │   ├── QA.md
│   │   └── PROCESS.md
│   └── WORKFLOW.md
├── docs/                   # empty for now
├── prompts/                # empty for now
└── templates/
    ├── build-prompts/
    │   └── TEMPLATE.md
    └── idea-brief/
        └── TEMPLATE.md
```

### Step 2: Start with an Idea Brief

Your first artifact is not a spec, a feature card, or a build prompt. It is a description of what you are trying to build and why.

Create `docs/IDEA.md` using the template, or just answer these questions:

```markdown
# Idea Brief

## What is it?
[A product, a game, a tool, an automation, a workflow, a solution to a problem.]

## Who is it for?
[Target user, customer, audience.]

## What problem does it solve?
[Why does this need to exist?]

## What does success look like?
[Outcomes, not implementation details.]

## Open questions
- [What don't you know yet?]
```

This is the raw starting point. It can be messy. The point is to get the idea out of your head and into the repo where AI tools can read it.

### Step 3: Turn the idea into a spec

Once the idea is clear enough to define scope, create `docs/SPEC.md`:

```markdown
# Spec

## Overview
[What does this system do?]

## Capabilities
- [Capability 1]
- [Capability 2]

## Constraints
- [What it must NOT do]

## Non-Goals
- [What is explicitly out of scope]
```

The progression is: **Idea Brief** (messy, exploratory) turns into **Spec** (clear, bounded). You do not need to have all the answers in the idea brief before writing a spec. You just need enough clarity to draw boundaries.

### Step 4: Start your decision log

Create `docs/DECISIONS.md` to record every meaningful choice:

```markdown
# Decisions

## YYYY-MM-DD: [Decision Title]
**Context:** [Why this came up]
**Decision:** [What was decided]
**Consequences:** [What this means going forward]
```

Decisions are the most important artifact in ForgeOS. They are what prevent AI tools from contradicting past choices.

### Step 5: Create Build Prompts when work is implementation-ready

The `prompts/` folder is for execution-ready artifacts, not raw ideas. When a piece of work is scoped, constrained, and ready to hand to an AI execution tool, create a Build Prompt using the template in `templates/build-prompts/TEMPLATE.md`.

A Build Prompt specifies:

- What mode (Standard / Spike / Hotfix / Prototype)
- What CAN'T be modified
- Current state and target state
- Acceptance criteria

### The artifact progression

```
Idea Brief       You don't know what you're building yet
     |
   Spec           You know what it does and doesn't do
     |
Build Prompt      You know exactly what to implement next
     |
  Commit          Working software in the repo
```

Each step narrows ambiguity. ForgeOS does not require you to start at any particular point. If you already know exactly what to build, skip straight to a Build Prompt. If you are starting from a napkin sketch, start with an Idea Brief. The system meets you where you are.

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
| --- | --- |
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
]]>