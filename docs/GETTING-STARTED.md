# Getting Started with ForgeOS

A 15-minute guide to setting up your first AI-native workflow.

---

## Step 1: Create the Structure (2 minutes)

Add ForgeOS to your existing project:

```bash
mkdir -p .forge/roles
mkdir -p docs
mkdir -p prompts
```

Copy the role files into `.forge/roles/`:
- `ARCHITECT.md`
- `UX.md`
- `QA.md`
- `PROCESS.md`

---

## Step 2: Define Your System (5 minutes)

Create `docs/SPEC.md`:

```markdown
# [Your Project] Specification

## Overview
[One paragraph: what does this system do?]

## Core Capabilities
- [Capability 1]
- [Capability 2]
- [Capability 3]

## Out of Scope
- [What this system does NOT do]

## Key Constraints
- [Constraint 1, e.g., "Must work offline"]
- [Constraint 2, e.g., "No user data leaves the device"]
```

Create `docs/ARCH.md`:

```markdown
# [Your Project] Architecture

## Services / Modules
| Name | Responsibility |
|------|----------------|
| [Module 1] | [What it does] |
| [Module 2] | [What it does] |

## Key Files
| File | Purpose |
|------|---------|
| `src/[file]` | [What it contains] |

## Dependencies
- [External service or library]: [Why we use it]
```

---

## Step 3: Start Your Decision Log (1 minute)

Create `docs/DECISIONS.md`:

```markdown
# Decision Log

## YYYY-MM-DD: Adopted ForgeOS workflow

**Context:** We're using multiple AI tools and output is inconsistent.

**Decision:** Adopt ForgeOS structure with canonical files and role definitions.

**Consequences:** 
- All AI interactions must reference SPEC.md and ARCH.md
- Architectural changes require DECISIONS.md entry first
```

---

## Step 4: Try It (7 minutes)

### When Starting a Feature

1. **Ideate** (ChatGPT or similar)
   ```
   "I want to add [feature]. Here's my current SPEC.md: [paste].
   Help me think through the requirements and tradeoffs."
   ```

2. **Decide** (You)
   - Pick a direction
   - Add entry to DECISIONS.md

3. **Structure** (Claude or similar)
   ```
   "I need a Build Prompt for [feature].
   
   Here's my SPEC.md: [paste]
   Here's my ARCH.md: [paste]
   Here's the decision: [paste from DECISIONS.md]
   
   Create a Build Prompt following this template: [paste template]
   
   Constraints:
   - Do not add new services
   - Do not modify [protected files]
   "
   ```

4. **Execute** (Replit, Claude Code, or manual)
   - Give the Build Prompt to your execution layer
   - It implements exactly what's specified
   - It stops if it hits a conflict

5. **Merge** (You)
   - Review the changes
   - Verify acceptance criteria
   - Commit with reference to decision

---

## The Minimum Viable Setup

You don't need everything. Start with:

| File | Why |
|------|-----|
| `docs/SPEC.md` | Grounds AI in what your system does |
| `docs/DECISIONS.md` | Prevents contradictory changes |
| `.forge/roles/PROCESS.md` | Defines the workflow |

Add more as you feel the pain:
- ARCH.md when services start stepping on each other
- FLOWS.md when UI gets inconsistent
- QA.md when bugs keep reappearing

---

## Signs It's Working

- AI stops contradicting previous decisions
- You spend less time correcting, more time building
- New features align with existing architecture
- You can onboard a new AI tool without retraining it

---

## Signs You Need More Structure

| Symptom | Missing Piece |
|---------|---------------|
| AI invents new services | ARCH.md with service boundaries |
| UI is inconsistent | FLOWS.md with screen inventory |
| Same bugs reappear | QA.md with acceptance criteria |
| AI takes liberties | Stricter Build Prompt constraints |
| Can't remember why we did X | DECISIONS.md entries |

---

## Next Steps

1. Read [WORKFLOW.md](WORKFLOW.md) for the full process
2. Customize the role files for your domain
3. Create your first real Build Prompt
4. Iterate - add structure where you feel friction
