ForgeOS Workflow

How work flows through the system.

This is not a guideline — it is a controlled flow system designed to:

prevent AI overproduction
protect human decision-making (the bottleneck)
ensure only validated work ships

No stage is optional.
No stage is auto-approved by AI.

Core Principle

Human decision-making is the bottleneck.

AI accelerates execution.
Humans decide what moves forward.

The Flow
READY → PRD → BUILD → DONE → LEARNING → NEXT READY

Each transition is a hard gate.
If a gate fails → work loops backward.

Stage 1: READY
Purpose

Define and constrain the feature before any AI is used.

Input
Idea, problem, or opportunity
Output (Feature Card - READY)
What (one sentence)
Why it matters
Success criteria (observable)
Not doing (explicit exclusions)
Role

Human only

Advance When
Scope is clear and bounded
Success is measurable
“Not doing” prevents expansion
Do Not Advance When
You are unsure what success looks like
Scope is vague or open-ended
Failure Modes
Vague scope → AI invents features
Missing “Not doing” → scope explosion
Skipping READY → system drift
Stage 2: PRD
Purpose

Translate intent into structured, buildable requirements

Input
READY section
Output (Feature Card - PRD)
Requirements
Expected behavior
Edge cases
Acceptance criteria
Role
AI generates (ChatGPT / Claude)
Human reviews and edits
Handoff

READY → AI → PRD → Human approval

Advance When
Matches original intent (READY)
No AI-invented scope remains
Acceptance criteria are clear
Do Not Advance When
PRD is larger than intended
Behavior is ambiguous
You haven’t edited it
Failure Modes
AI adds features → delete them
Too abstract → causes guessing in BUILD
Accepted without reading → downstream failure
Stage 3: BUILD
Purpose

Convert requirements into controlled execution and implement

Input
PRD
Output (Feature Card - BUILD)
Build Prompt
Files affected
Constraints
Implemented changes
Step 3a: Build Prompt (Structuring)
Role

AI (Claude) generates
Human approves

Must Include
Exact files to modify
Files NOT to modify
Current state vs target state
Acceptance criteria
Constraints
Stop conditions (when to halt instead of guessing)
Handoff

PRD → Claude → Build Prompt → Human approval

Failure Modes
Loose scope → AI rewrites system
Missing constraints → file sprawl
No stop conditions → hallucinated decisions
Step 3b: Execution
Role

AI (Replit / Cursor / Claude Code) executes
Human monitors

Rules
Follow Build Prompt exactly
Do NOT expand scope
Stop on ambiguity
Do NOT modify unspecified files
Handoff

Approved Build Prompt → Execution Tool → Code Changes

Advance When
Only intended files changed
Feature behaves as expected
No unexplained changes
Do Not Advance When
Tool went off-script
Scope expanded
Behavior is unclear
Stage 4: DONE (HARD GATE)
Purpose

Decide if this should exist in production

Input
Working implementation
READY section (source of truth)
Output (Feature Card - DONE)
Pass / Fail decision
Gaps identified
Ship decision
Role

Human only
AI cannot mark work as done

DONE Criteria (ALL REQUIRED)
1. Goal Match
Matches original What / Why / Success
No drift from intent
2. Scope Integrity
No extra features added
AI additions removed or approved
3. Simplicity
Simplest version that works
No unnecessary complexity
4. System Fit
Matches existing patterns
No architectural violations
5. Reality Check (Critical)
Human tested
Works in real conditions (not just code)
6. Ship Decision
Good enough to ship? (yes/no)
If DONE = NO

DO NOT PROCEED

Instead:

Identify exact gap
Route back to:
PRD (if requirement issue)
BUILD (if implementation issue)
Failure Modes
Comparing against PRD instead of READY
Skipping DONE entirely
“Looks good” without testing
Shipping AI-generated output without validation
Stage 5: LEARNING
Purpose

Capture real-world feedback and close the loop

Input
Actual usage
Observed behavior
Output (Feature Card - LEARNING)
Expected
Observed
Delta
Decision (what to do next)
Role

Human (AI can assist analysis)

Advance When
Learning is captured
A clear next decision exists
Do Not Advance When
No real feedback
No decision made
Failure Modes
Skipped → repeated mistakes
Vague → no improvement
No decision → stalled progress
Feedback Loop (Critical)
DONE = NO → PRD or BUILD
LEARNING → NEXT READY

The system improves only through this loop.

System Rules (Non-Negotiable)
No stage is skipped
No AI output is trusted without review
DONE is required before anything ships
Work in progress must be limited
Overproduction is a system failure
Human decisions control flow
Operating Modes
Standard (Default)
Full workflow
Required for all real features
Spike
Purpose: learn quickly
Skip: full PRD + strict BUILD
Requirement: documented learning
Hotfix
Purpose: fix production issue
Skip: most stages
Requirement: document decision within 24h
Prototype
Purpose: explore new ideas
Requirement: decide within 2 weeks:
productize OR discard
What This System Prevents
AI hallucinations becoming production code
Feature creep from vague prompts
Overbuilding beyond human review capacity
Shipping unvalidated work
What This System Enables
Fast iteration with control
High-quality output from AI tools
Scalable solo or small-team development
Continuous learning and improvement

If the system feels slow, the issue is not the workflow.

The issue is:

unclear READY
weak constraints
or skipped gates