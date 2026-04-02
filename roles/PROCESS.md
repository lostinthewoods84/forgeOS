ForgeOS Process

This file defines how work is controlled in the system.

It is not about how to build features.
It is about how work flows, when it stops, and who decides.

Core Principle

Human decision-making is the bottleneck.

The system must:

protect human attention
prevent upstream overproduction
ensure only validated work moves forward

AI accelerates execution.
Humans control flow.

Flow Control Model

Work moves through:

READY → PRD → BUILD → DONE → LEARNING

Each stage requires a human decision to advance.

No stage auto-advances.
No AI output is considered complete.

Definition of Ready (DoR)

A feature is READY only if:

The problem is clearly defined
The outcome is observable (success criteria)
Scope is explicitly bounded
“Not doing” prevents expansion

If any of these are missing:
→ Do not proceed

Definition of Done (DoD)

A feature is DONE only if:

It matches the original READY intent
No unintended scope was added
It is the simplest version that works
It has been tested by a human
It is safe to ship

If any of these fail:
→ Work is not done

Work In Progress (WIP) Limits
Rule

Do not start new work if current work is not DONE

Limits
1 active Feature Card per person
1 active BUILD per feature
Max 1 PRD in progress ahead of BUILD
Why
Prevents backlog of unvalidated AI output
Protects human review capacity
Forces completion before expansion
Violations Look Like
Multiple partially built features
Large PRDs waiting for review
AI generating faster than you can validate
Fix
Stop starting
Finish or kill current work
Stop Conditions (Critical)

AI tools must STOP, not guess, when:

Requirements are ambiguous
Multiple valid approaches exist
A decision impacts architecture
Required files or context are missing
Scope would need to expand
When STOP Happens

The system must:

Surface the issue clearly
Return control to human
Wait for decision
What Must NOT Happen
AI guessing
AI choosing an approach silently
AI expanding scope to “solve” ambiguity
Decision Points

Human decisions are required at:

Stage	Decision
READY	Is this worth building?
PRD	Does this match intent?
BUILD Prompt	Is scope controlled?
DONE	Should this ship?
LEARNING	What do we do next?
Rule

If a decision is required and not made → work stops

Overproduction Control
Problem

AI produces faster than humans can validate.

Rule

Do not generate work that cannot be reviewed immediately

Examples of Violations
Writing multiple PRDs ahead
Generating large unused prompts
Building features without READY clarity
Fix
Limit output to next actionable step only
Complete validation before generating more
Failure Handling

When something goes wrong:

Types of Failure
1. READY Failure
Problem unclear
Scope too large

→ Fix READY before continuing

2. PRD Failure
Scope drift
Missing behavior

→ Edit PRD

3. BUILD Failure
Wrong implementation
Scope expansion

→ Fix Build Prompt or re-run BUILD

4. DONE Failure
Doesn’t match intent
Doesn’t work in reality

→ Route back to PRD or BUILD

Rule

Do not patch forward. Fix at the source.

Modes of Operation
Standard (Default)
Full process
Required for all real features
Spike

Purpose: Learn quickly

Skip full PRD and strict BUILD
Time-boxed
Must produce LEARNING
Hotfix

Purpose: Fix production issue

Minimal process
Immediate fix

Required after:

Document decision within 24h
Prototype

Purpose: Explore new ideas

Relaxed constraints
Not production quality

Required:

Decision within 2 weeks:
Productize OR discard
Anti-Patterns (Do Not Allow)
1. AI-Led Development

AI deciding what to build or how to build it

→ Violates human bottleneck

2. Skipping READY

Jumping straight to building

→ Causes downstream chaos

3. Overbuilding

Adding features not defined

→ Creates review bottleneck

4. “Looks Good” Shipping

No real validation

→ Produces fragile systems

5. Parallel Work Explosion

Too many things in progress

→ Slows everything down

What This Process Guarantees

If followed:

Work stays aligned with intent
AI remains controlled and useful
Output stays reviewable
Learning compounds over time

If broken:

AI output piles up
Quality drops
System becomes unpredictable
Final Rule

Nothing moves forward without a human decision.

This is the control point.
This is what makes forgeOS work.