# How ForgeOS Works

ForgeOS is a repeatable loop for building software with AI tools. A single builder takes a feature from idea to production, captures what happened, and uses that to decide what to build next.

---

## The Loop

Every feature follows the same cycle:

```
Idea -> READY -> PRD -> BUILD -> DONE -> LEARNING -> Next Idea
```

The **Feature Card** is the unit of work. One card per feature. Every stage fills in one section of the card.

---

## What Happens at Each Stage

### READY (Human, 2 minutes)

You define the feature in plain language: what it is, why it matters, what success looks like, and what you're explicitly not building.

**Artifact produced:** READY section of the Feature Card.

**Why it matters:** READY is the input constraint. It prevents vague, unbounded work from entering the system. If you can't fill out READY clearly, the feature isn't ready to build.

**Decision point:** Should this feature be built right now? If yes, proceed. If not, stop.

---

### PRD (AI-assisted, 5 minutes)

An AI tool (e.g., ChatGPT) expands your READY section into structured requirements: behavior, edge cases, acceptance criteria.

**Artifact produced:** PRD section of the Feature Card.

**Why it matters:** The PRD turns a one-sentence idea into something specific enough to build against. It also surfaces edge cases and tradeoffs you might not have considered.

**Human responsibility:** Read the PRD. Cut anything the AI added that you didn't ask for. Add anything it missed. You own the requirements, not the AI.

---

### BUILD (AI-assisted, 5-15 minutes)

An AI structuring tool (e.g., Claude) turns the PRD into a Build Prompt: explicit instructions with file scope, constraints, and acceptance criteria. An execution tool (e.g., Replit, Claude Code, Cursor) implements it.

**Artifacts produced:** Build Prompt and code changes, captured in the BUILD section of the Feature Card.

**Why it matters:** The Build Prompt constrains the execution tool. It defines what can be changed, what cannot be changed, and what "done" looks like. Without it, AI tools invent scope, restructure code, and drift from the original intent.

**Human responsibility:** Review the Build Prompt before handing it to the execution tool. Is the file scope right? Are the constraints clear? If the execution tool starts going off-script, the Build Prompt was too loose.

---

### DONE (Human, 2 minutes)

You compare the result against what you wrote in READY. Does it match the goal? Is anything missing? Is it good enough to ship?

**Artifact produced:** DONE section of the Feature Card.

**Why it matters:** DONE is the output constraint. It prevents half-finished or drifted work from being accepted. You compare against your original intent, not against what the AI produced.

**Decision point:** Ship it, fix it, or discard it.

---

### LEARNING (Human, 2 minutes)

After the feature ships (or after testing), you capture what you expected, what actually happened, and what you'll do next.

**Artifact produced:** LEARNING section of the Feature Card.

**Why it matters:** This is the feedback loop. Without it, you're generating output but not learning. LEARNING is what turns a sequence of features into a product that improves over time.

**Decision point:** What do you build next? This feeds back into the next Idea.

---

## Where Decisions Happen

Decisions happen at four points in the loop. All of them belong to the human.

| Decision Point | Question | What Happens if You Skip It |
|----------------|----------|----------------------------|
| After READY | Should we build this? | Unbounded or unnecessary work enters the system |
| After PRD | Are these the right requirements? | AI-generated scope replaces your intent |
| After BUILD | Does this match the goal? | Drifted or incomplete work gets shipped |
| After LEARNING | What should we do next? | You build without feedback, repeating mistakes |

---

## When to Stop

The system is designed to stop you before wasted work happens.

**Stop before PRD** if you can't clearly state what the feature is and what success looks like. Go back to thinking. The idea isn't ready.

**Stop before BUILD** if the PRD doesn't match your intent, or if the scope has grown beyond what you originally wanted. Edit the PRD or re-scope.

**Stop before shipping** if the DONE check fails. The result doesn't match READY, or something critical is missing. Fix it or discard it.

**Stop before starting the next feature** if you haven't captured LEARNING from the last one. Skipping this breaks the feedback loop.

---

## The Core Constraint

The bottleneck in this system is not code generation. AI can produce code faster than you can review it.

The bottleneck is **human decision-making**: deciding what to build, whether the requirements are right, whether the result is good enough, and what to do next.

ForgeOS is designed around this constraint. Every stage either prepares you to make a better decision or captures the result of one.

---

## Summary

| Stage | Who | Time | Artifact | Purpose |
|-------|-----|------|----------|---------|
| READY | Human | 2 min | Feature Card section 1 | Define and constrain the work |
| PRD | AI + Human review | 5 min | Feature Card section 2 | Structure the requirements |
| BUILD | AI + Human review | 5-15 min | Feature Card section 3 | Produce and constrain the implementation |
| DONE | Human | 2 min | Feature Card section 4 | Validate against original intent |
| LEARNING | Human | 2 min | Feature Card section 5 | Capture feedback for the next cycle |
