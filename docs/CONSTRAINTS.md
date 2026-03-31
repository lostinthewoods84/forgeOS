# ForgeOS Constraints

Non-negotiable rules that keep the system working. These exist because speed without constraints produces waste, not progress.

---

## The Core Constraint

**Human decision-making is the bottleneck.**

- All meaningful progress requires human validation.
- AI can generate, transform, and execute, but it cannot be the final authority.
- The system must protect and optimize human attention, not overwhelm it.

Everything below follows from this.

---

## System Constraints

### 1. Do Not Overproduce

Generating more ideas, PRDs, or code than can be reviewed creates system failure.

When upstream produces faster than downstream can absorb:
- Review quality drops
- Decisions get worse
- Work gets wasted

**Rule:** Do not produce work that cannot be reviewed within a reasonable timeframe.

### 2. Limit Work in Progress

Work-in-progress (WIP) directly impacts decision quality.

- Too many parallel items reduce clarity.
- Validation slows as WIP increases.

**Rule:** Actively limit concurrent work at every stage. Prefer finishing over starting.

### 3. AI Accelerates Execution, Not Authority

AI is an execution engine, not a decision-maker.

AI should:
- Speed up iteration
- Reduce manual effort
- Expand exploration capacity

AI should not:
- Approve its own outputs
- Chain decisions without human checkpoints

**Rule:** Every critical step requires explicit human validation.

### 4. Optimize for Learning, Not Output

Output is not the goal. Learning is.

- Code, docs, and features are means, not outcomes.
- Progress = validated assumptions + real-world feedback.

**Rule:** Measure progress by what is proven, not what is produced.

---

## Operating Principles

**Pull, not push.** Work is only created when the next stage is ready to receive it.

**Review is sacred.** Protect time and space for thoughtful validation.

**Clarity over speed.** Fast wrong decisions are more expensive than slow correct ones.

**Tight feedback loops.** Every cycle should reduce uncertainty.

---

## Anti-Patterns

These indicate the system is being misused:

- AI generating large volumes of unreviewed artifacts
- Multiple PRDs or features progressing without validation
- Skipping human review for the sake of speed
- Treating AI confidence as a substitute for human judgment
- Starting new features before capturing LEARNING from the last one

---

## Summary

ForgeOS is not constrained by compute or generation speed. It is constrained by human judgment capacity.

The system succeeds by reducing cognitive load, limiting WIP, forcing validation, and converting output into learning.
