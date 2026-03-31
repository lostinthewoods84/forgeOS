# ForgeOS Workflow

How work flows through the system, stage by stage.

Each stage of the Feature Card loop has defined inputs, outputs, ownership, and failure modes. When followed, the loop produces validated, shippable work. When stages are skipped or shortcut, the system breaks in predictable ways.

---

## Stage 1: READY

**Purpose:** Define and constrain the feature before any AI touches it.

**Input:** An idea, problem, or opportunity.

**Output:** READY section of the Feature Card, containing:
- What the feature is (one sentence)
- Why it matters
- What success looks like
- What is explicitly out of scope

**Role:** Human. This is entirely your job. AI does not participate in READY.

**Advance when:** You can clearly articulate all four fields. A second person (or your future self) could read this and understand what you're building.

**Do not advance when:** The scope is vague, success isn't defined, or you're unsure whether this is worth building.

### Common Failure Modes

| Failure | Symptom | Fix |
|---------|---------|-----|
| Vague scope | PRD balloons with AI-invented requirements | Write a tighter "What" and "Not doing" |
| Missing success criteria | Can't tell if the result is correct at DONE | Define observable outcomes before proceeding |
| Skipped entirely | Everything downstream drifts | Always start here, even for small features |

---

## Stage 2: PRD

**Purpose:** Expand the READY section into structured, buildable requirements.

**Input:** READY section of the Feature Card.

**Output:** PRD section of the Feature Card, containing:
- Detailed requirements
- Expected behavior
- Edge cases
- Acceptance criteria

**Role:** AI generates (e.g., ChatGPT). Human reviews and edits.

**Advance when:** The PRD matches your intent, covers edge cases, and has clear acceptance criteria. You've cut anything the AI added that you didn't ask for.

**Do not advance when:** The PRD has scope you didn't intend, is missing key behavior, or feels too large for one cycle.

### Common Failure Modes

| Failure | Symptom | Fix |
|---------|---------|-----|
| Scope creep from AI | PRD includes features you didn't ask for | Delete them. AI over-generates by default |
| Too abstract | Requirements can't be implemented without guessing | Add specific behavior descriptions and examples |
| Accepted without reading | Build Prompt inherits bad requirements | Always read and edit the PRD before proceeding |

### Tool Mapping

Any ideation or exploration tool works here. The tool's job is to expand and structure, not to decide.

Typical: ChatGPT, Claude, or any conversational AI.

---

## Stage 3: BUILD

**Purpose:** Turn requirements into constrained implementation instructions and execute them.

**Input:** PRD section of the Feature Card.

**Output:** BUILD section of the Feature Card, containing:
- Build Prompt (explicit instructions for the execution tool)
- Files affected
- Constraints
- Implemented code changes

This stage has two sub-steps:

### 3a: Generate the Build Prompt

A structuring tool (e.g., Claude) reads the PRD and produces a Build Prompt using the template in `templates/build-prompts/TEMPLATE.md`.

The Build Prompt specifies:
- What files to create or modify
- What files NOT to touch
- Current state vs. target state
- Acceptance criteria
- Constraints the execution tool must respect

**Role:** AI generates. Human reviews before passing to execution.

### 3b: Execute the Build Prompt

An execution tool (e.g., Replit, Claude Code, Cursor) implements the Build Prompt.

**Role:** AI executes. Human monitors.

The execution tool must:
- Follow the Build Prompt exactly
- Not expand scope beyond what's specified
- Stop and report if it encounters ambiguity or conflicts

**Advance when:** Implementation is complete, tests pass (if applicable), and only the specified files were changed.

**Do not advance when:** The execution tool went off-script, introduced changes you didn't ask for, or hit unresolved conflicts.

### Common Failure Modes

| Failure | Symptom | Fix |
|---------|---------|-----|
| Loose Build Prompt | Execution tool invents features or restructures code | Tighten file scope and constraints |
| No constraints section | Tool modifies files outside scope | Add explicit "DO NOT MODIFY" list |
| Skipped human review of Build Prompt | Bad instructions reach execution | Always review the Build Prompt before executing |
| Execution tool hits ambiguity | Tool guesses instead of stopping | Add stop conditions to the Build Prompt |

### Tool Mapping

Structuring: Claude or any tool capable of producing structured, scoped instructions.

Execution: Replit, Claude Code, Cursor, or manual implementation.

---

## Stage 4: DONE

**Purpose:** Validate the result against the original intent.

**Input:** Implemented feature + READY section of the Feature Card.

**Output:** DONE section of the Feature Card, containing:
- Whether it matches the goal
- What's missing
- Whether it's good enough to ship

**Role:** Human. This is a judgment call, not a test suite.

**Advance when:** The result matches what you defined in READY and is good enough to ship (even if imperfect).

**Do not advance when:** The result doesn't match your original intent, critical pieces are missing, or you're not confident it works.

### Common Failure Modes

| Failure | Symptom | Fix |
|---------|---------|-----|
| Compared against PRD instead of READY | Accepting AI-generated scope as the goal | Always compare against your original READY section |
| Skipped entirely | Broken or incomplete features get shipped | Two minutes. Fill out the section |
| "Good enough" without criteria | Ship decisions based on vibes | Refer to READY's success criteria |

---

## Stage 5: LEARNING

**Purpose:** Capture what actually happened after the feature shipped.

**Input:** Real-world usage, feedback, observed behavior.

**Output:** LEARNING section of the Feature Card, containing:
- What you expected to happen
- What actually happened
- What was different
- What you'll do next

**Role:** Human. AI can help analyze data, but the decision about what to do next is yours.

**Advance to next feature when:** You've captured the learning and made a decision about what to build next.

**Do not start a new feature when:** You haven't captured LEARNING from the last one.

### Common Failure Modes

| Failure | Symptom | Fix |
|---------|---------|-----|
| Skipped | Building without feedback; repeating mistakes | Require LEARNING before starting the next Feature Card |
| Too vague | "It went fine" without specifics | Fill in all four fields: Expected, Observed, Delta, Decision |
| No decision | Learning captured but no action taken | The Decision field should name a concrete next step |

---

## The Full Flow

```
READY ──── gate: is it clear? ──── PRD
                                     │
                              gate: does it match intent?
                                     │
                                   BUILD
                                     │
                              gate: does the Build Prompt scope right?
                                     │
                                   DONE
                                     │
                              gate: does it match READY?
                                     │
                                 LEARNING
                                     │
                              gate: what's next?
                                     │
                                 Next READY
```

Every gate is a human decision. The system does not advance without one.

---

## Operating Modes

Not every feature needs the full ceremony. ForgeOS supports four modes that adjust the level of process:

| Mode | When | What You Skip | What You Owe |
|------|------|---------------|-------------|
| **Standard** | Default for all features | Nothing | Full Feature Card |
| **Spike** | Time-boxed learning ("will this work?") | PRD, full Build Prompt | Written learnings within time-box |
| **Hotfix** | Production emergency | Everything except the fix | DECISIONS.md entry within 24h |
| **Prototype** | Exploring a new product area | Full process | Archive or productize decision within 2 weeks |

Standard Mode is the default. Use the others deliberately and declare which mode you're in before starting.

See `roles/PROCESS.md` for detailed rules on each mode.
