ForgeOS Workflow

How work flows from idea → production → learning in an AI-native system.

Core Principle

AI generates and executes. Humans decide and validate.

The system is not constrained by output.
It is constrained by human decision-making capacity.

All workflow design exists to:

Protect human attention
Prevent overproduction
Convert output into validated learning
The End-to-End Flow
IDEATE → STRUCTURE → EXECUTE → REVIEW → MERGE → LEARN → (repeat)

Each stage:

Produces explicit artifacts
Has a clear owner (AI vs Human)
Requires human approval before advancing
Stage 1: Ideate (Explore + Define)

Tool: ChatGPT
Owner: Human + AI (AI assists, human decides)

Purpose

Explore the problem space and converge on a direction.

Inputs
Rough idea or problem
Constraints and goals
Questions / unknowns
Outputs (Artifacts)
Refined problem statement
Options with tradeoffs
Chosen direction (explicit)
PRD or Feature Card
Human Approval Point

✅ Decision Required:

Which direction to pursue
Whether the problem is worth solving now

No decision → do not proceed

Handoff → Structure

Pass:

PRD / Feature Card
Explicit decision
Constraints and non-goals
Stage 2: Structure (Plan + Constrain)

Tool: Claude
Owner: AI (structure) + Human (approval)

Purpose

Turn decisions into a bounded, executable plan.

Inputs
PRD / Feature Card
Human decision
Canonical files (SPEC.md, ARCH.md, FLOWS.md, etc.)
Outputs (Artifacts)
Build Prompt (for execution)
Explicit file scope
Current state → target state mapping
Constraints (DO NOT MODIFY)
Acceptance criteria
Human Approval Point

✅ Decision Required:

Is scope correct?
Are constraints respected?
Are risks understood?

If unclear → send back to Ideate or refine

Handoff → Execute

Pass:

Build Prompt
File list
Acceptance criteria
Constraints
Stage 3: Execute (Implement + Build)

Tool: Replit / Claude Code / CI system
Owner: AI (execution)

Purpose

Implement exactly what was specified — nothing more.

Inputs
Build Prompt
Explicit file scope
Acceptance criteria
Constraints
Outputs (Artifacts)
Code changes
Test results
Modified files list
Deployment artifacts (if applicable)
Rules
No scope expansion
No architectural decisions
No “improvements” outside scope
Stop Conditions (Escalate to Human)
Ambiguity in requirements
Conflicting instructions
Unexpected architectural impact
Handoff → Review

Pass:

Code + changes summary
Test results
Confirmation of constraint adherence
Stage 4: Review (Validate + Decide)

Tool: Human (primary), AI (supporting)

Purpose

Validate that execution matches intent and quality standards.

Inputs
Code changes
Acceptance criteria
Original decision / PRD
Outputs (Artifacts)
Approval or rejection
Feedback / required changes
Human Approval Point

✅ Decision Required:

Does this meet the Definition of Done?
Is this safe to merge?
Is the outcome correct (not just the code)?
Handoff → Merge

Only approved work proceeds.

Stage 5: Merge (Commit + Finalize)

Tool: Git

Purpose

Make the decision permanent.

Inputs
Approved changes
Outputs (Artifacts)
Git commit
Updated system state
Rule

A commit is not just code — it is a recorded decision.

Each commit must:

Reference the decision (DECISIONS.md)
Reference the prompt used
Be scoped to a single logical change
Stage 6: Learn (Feedback + Adapt)

Tool: Human + AI

Purpose

Convert shipped work into validated learning.

Inputs
Real-world usage
Feedback (users, stakeholders, data)
Observed outcomes
Outputs (Artifacts)
Updated assumptions
New or revised decisions
Follow-up Feature Cards / PRDs
Human Approval Point

✅ Decision Required:

Did this solve the problem?
What did we learn?
What should we do next?
Feedback Loop
LEARN → feeds back into → IDEATE

This is where the system improves.

Handoff Summary (System View)
Stage	Produces	Human Approval	Next Stage
Ideate	PRD / Feature Card	Direction decision	Structure
Structure	Build Prompt	Scope + constraints	Execute
Execute	Code + artifacts	None (unless blocked)	Review
Review	Approval / feedback	Go / No-Go	Merge
Merge	Commit	Implicit	Learn
Learn	Insights + next steps	What next?	Ideate
Artifact Flow
Idea
  ↓
Feature Card / PRD
  ↓
Build Prompt
  ↓
Code Changes
  ↓
Commit (Decision)
  ↓
Learning / Insights
  ↓
Next Idea
Repository as Shared Memory

The repo is the single source of truth across all tools.

Key files:

SPEC.md → What the system does
ARCH.md → How it is structured
FLOWS.md → User experience
EVENTS.md → Contracts (if event-driven)
DECISIONS.md → Why things are the way they are
Critical Rules
1. Humans are the decision points

AI proposes and executes. Humans approve and validate.

2. No skipping approval points

Speed comes from clarity — not bypassing decisions.

3. Pull, not push

Work only moves forward when the next stage is ready.

4. No overproduction

Do not generate:

More PRDs than can be reviewed
More code than can be validated
More work than can be completed
5. Output is not progress

Progress = validated learning

Common Failure Modes
Symptom	Root Cause	Fix
Too many unfinished items	WIP too high	Stop starting, start finishing
Lots of code, little progress	No validation	Enforce Review stage
AI doing too much	Skipped approvals	Reinstate human checkpoints
Rework increasing	Poor DoR	Tighten Definition of Ready
Burnout / confusion	Overproduction	Reduce input, protect attention
System Reminder

This workflow is not about speed of generation.

It is about:

Controlling flow
Protecting decisions
Turning output into learning

If the system feels chaotic, the issue is not execution.

It is too much work entering the system.