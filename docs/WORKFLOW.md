# ForgeOS Workflow

How work flows through the AI-native team.

---

## The Three Layers

### Layer 1: Ideate + Iterate
**Tool:** ChatGPT (or equivalent conversational AI)  
**Job:** Explore the problem space, iterate on requirements, hold context

**Inputs:**
- Rough problem statement
- Constraints and goals
- Questions to answer

**Outputs:**
- Refined requirements
- Options with tradeoffs
- Recommendations
- PRD-style documentation

**What happens here:**
- Rapid back-and-forth exploration
- "What if we..." conversations
- Tradeoff analysis
- Context accumulation across a long conversation

**Does NOT produce:**
- Final decisions (human decides)
- Implementation code
- Architectural changes

---

### Layer 2: Structure + Engineer
**Tool:** Claude (or equivalent reasoning AI)  
**Job:** Turn decisions into structured plans, write production code

**Inputs:**
- Refined requirements from Layer 1
- Human decision on direction
- Reference to canonical files (SPEC.md, ARCH.md, FLOWS.md)

**Outputs:**
- Build Prompts for Layer 3
- Technical analysis with impact assessment
- Production-ready code
- Schema changes
- Documentation updates

**What happens here:**
- Structured analysis against existing architecture
- Explicit scope definition
- Constraint identification
- Detailed implementation plans

**Does NOT produce:**
- Executed changes (Layer 3 does that)
- Deployed code
- Merged commits

---

### Layer 3: Execute + Deploy
**Tool:** Replit, Claude Code, or cloud deployment  
**Job:** Implement exactly what's specified, build, test, deploy

**Inputs:**
- Build Prompt with explicit scope
- List of files to modify
- Acceptance criteria
- Constraints (what NOT to do)

**Outputs:**
- Working code changes
- Test results
- Git commits
- Deployment artifacts

**What happens here:**
- Constrained implementation
- No creative interpretation
- Strict adherence to scope
- Stop-and-report on conflicts

**Does NOT produce:**
- Architectural decisions
- New designs
- Scope expansions

---

## The Handoff Pattern

```
┌──────────────┐
│   IDEATE     │  Human + ChatGPT explore
└──────┬───────┘
       │ Human decides direction
       ▼
┌──────────────┐
│  STRUCTURE   │  Claude creates Build Prompt
└──────┬───────┘
       │ Human approves scope
       ▼
┌──────────────┐
│   EXECUTE    │  Replit implements exactly that
└──────┬───────┘
       │ Human reviews and merges
       ▼
┌──────────────┐
│     GIT      │  Commit = Decision is final
└──────────────┘
```

**Key principle:** Humans are the decision points. AI proposes, humans dispose.

---

## What Lives in the Repo

The repository is **shared memory** for all AI tools. Every tool reads from and writes to the same canonical files.

```
your-project/
├── .forge/
│   ├── roles/           # AI team member definitions
│   │   ├── ARCHITECT.md
│   │   ├── UX.md
│   │   ├── QA.md
│   │   └── PROCESS.md
│   └── WORKFLOW.md      # This file
├── docs/
│   ├── SPEC.md          # What the system does
│   ├── ARCH.md          # How it's structured
│   ├── FLOWS.md         # User journeys and screens
│   ├── EVENTS.md        # Event contracts (if event-driven)
│   └── DECISIONS.md     # Logged decisions with rationale
├── prompts/             # Active build prompts
│   └── [feature]-build-prompt.md
└── src/                 # Your code
```

---

## The Canonical Files

### SPEC.md
**What it is:** Defines what the system does. Behavior, requirements, capabilities.

**Who owns it:** Human (with AI assistance)

**When to update:** When system behavior changes

**Rule:** AI must not contradict SPEC.md. If implementation differs from spec, either fix implementation or update spec explicitly.

### ARCH.md
**What it is:** Defines how the system is structured. Services, boundaries, dependencies.

**Who owns it:** Architect role

**When to update:** When adding services, changing boundaries, or modifying contracts

**Rule:** Execute layer cannot introduce services or dependencies not in ARCH.md.

### FLOWS.md
**What it is:** Defines user journeys. Screens, states, transitions.

**Who owns it:** UX role

**When to update:** When adding screens or changing user flows

**Rule:** UI implementation must not invent screens or states not in FLOWS.md.

### EVENTS.md
**What it is:** Defines event contracts. Types, payloads, who emits what.

**Who owns it:** Architect role

**When to update:** When adding event types or changing contracts

**Rule:** Execute layer cannot add new event types without EVENTS.md update.

### DECISIONS.md
**What it is:** Log of architectural and design decisions with rationale.

**Who owns it:** Human

**When to update:** Before implementing any significant change

**Rule:** Every non-trivial change should trace back to a DECISIONS.md entry.

---

## Why This Works

### Traditional AI workflow:
```
Human → AI → Output → Problems → Human fixes → More problems → Entropy
```

### ForgeOS workflow:
```
Human → Repo defines rules → AI operates within rules → Consistent output → Repo updated → Repeat
```

The difference:
- **Without structure:** Each AI interaction starts fresh, drifts in different directions
- **With structure:** Each AI interaction is grounded in the same canonical context

---

## Common Failure Modes

| Symptom | Cause | Fix |
|---------|-------|-----|
| AI contradicts previous decisions | No DECISIONS.md | Start logging decisions |
| Architecture drifts over time | No ARCH.md | Define service boundaries |
| UX inconsistent across features | No FLOWS.md | Document user journeys |
| Execute layer takes liberties | Vague Build Prompt | Add explicit constraints |
| Same bug keeps reappearing | No QA role active | Define acceptance criteria upfront |

---

## Getting Started

1. **Create `.forge/roles/`** - Copy the role definitions
2. **Create `docs/SPEC.md`** - What does your system do?
3. **Create `docs/ARCH.md`** - What are the main pieces?
4. **Start DECISIONS.md** - Log your first decision
5. **Try one Build Prompt** - Use the template for a real feature

You don't need everything on day one. Start with SPEC.md and one role. Add more as you feel the pain of missing structure.
