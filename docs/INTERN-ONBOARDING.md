# Intern Onboarding Guide: How We Build Software

This guide explains the way we build software using ForgeOS. It is written for a college student or early-career builder who is learning how to move from an idea to working software without getting lost in AI-generated noise.

The goal is not to memorize a process. The goal is to understand how to think, how to make decisions, how to use AI responsibly, and how to ship small, useful improvements.

---

## 1. The Core Idea

Modern AI tools can produce code very quickly. That is useful, but speed by itself is not the goal.

Fast output can create problems:

- unclear requirements
- duplicated work
- broken features
- lost context
- code that works in a demo but fails in real use
- features that do not actually solve the original problem

ForgeOS exists to control that chaos.

The way we build software is:

```text
Idea → READY → PRD → BUILD → DONE → LEARNING
```

Every meaningful piece of work should move through that loop.

The loop is more important than any single tool. Tools will change. The discipline should not.

---

## 2. High-Level Principles

### Principle 1: Start with the problem, not the code

Do not start by asking, “What should I build?”

Start by asking:

- What problem are we solving?
- Who has the problem?
- What does better look like?
- How will we know this worked?

Code is only valuable when it changes something useful for the user or the system.

### Principle 2: Small work beats big work

Large vague tasks create confusion. Small clear tasks create progress.

A good feature should be small enough that we can explain it, build it, test it, and learn from it without losing track of the original intent.

Bad task:

```text
Improve the admin console.
```

Better task:

```text
Fix the admin console layout so platform admins can use the full screen width when managing tenants.
```

### Principle 3: Artifacts matter more than conversations

AI conversations are useful, but they are not reliable project memory.

Important work should be captured in artifacts:

- Feature Card
- PRD
- Build Prompt
- Done Check
- Learning Note

These artifacts preserve intent across tools, people, and time.

### Principle 4: AI accelerates execution, not judgment

AI can help write code, summarize, generate options, and draft implementation plans.

AI should not silently decide what matters.

Humans still own:

- product direction
- tradeoff decisions
- scope control
- final approval
- whether the result is actually good enough

### Principle 5: Done means validated, not merely coded

A feature is not done because code was written.

A feature is done when we can compare the result against the original intent and say:

- this solves the problem
- this matches the acceptance criteria
- this did not create obvious regressions
- the remaining gaps are understood

### Principle 6: Learning closes the loop

Every feature should leave the system smarter than it started.

After building, ask:

- What did we expect?
- What actually happened?
- What surprised us?
- What should change next time?

This is how the process improves.

---

## 3. The ForgeOS Loop

### Step 1: Idea

An idea is an observation, request, pain point, or opportunity.

Examples:

- A user cannot complete a workflow on mobile.
- A page layout wastes screen space.
- A manual process is error-prone.
- A feature exists but is hard to discover.

At this stage, do not jump into implementation.

Capture the idea clearly.

### Step 2: READY

READY means the work is clear enough to enter the system.

Before building, answer:

- What is the user problem?
- What outcome do we want?
- What is in scope?
- What is out of scope?
- How will we know it worked?

If you cannot answer those questions, the work is not ready.

### Step 3: PRD

The PRD turns the ready idea into a buildable specification.

A good PRD explains:

- problem
- users
- requirements
- acceptance criteria
- non-goals
- edge cases

The PRD should be specific enough that someone else can build from it without needing to guess the intent.

### Step 4: BUILD

The build step turns the PRD into implementation.

This is where AI tools can help a lot.

But the build prompt must be constrained. It should tell the AI:

- what to change
- what files are likely involved
- what not to change
- what acceptance criteria must pass
- when to stop and ask for clarification

The goal is not to ask AI to “make it better.”

The goal is to give AI a bounded job.

### Step 5: DONE

The DONE step checks the result against the original intent.

Ask:

- Did we solve the actual problem?
- Did we meet the acceptance criteria?
- What changed?
- What still feels weak?
- Is this safe to ship?

If the answer is unclear, it is not done.

### Step 6: LEARNING

The learning step captures what the feature taught us.

This may include:

- product learning
- technical learning
- workflow learning
- AI prompting learning
- user behavior learning

This step prevents the team from repeating the same mistake over and over.

---

## 4. Your Role as an Intern

Your job is not just to write code.

Your job is to help move work through the system cleanly.

That means you should:

- ask clarifying questions when intent is unclear
- keep work small
- update artifacts as you learn
- avoid hidden assumptions
- test your changes
- explain tradeoffs plainly
- leave the repo easier to understand than you found it

You are expected to use AI tools, but you are also expected to verify their output.

Do not trust generated code just because it looks confident.

---

## 5. How to Approach a New Task

When you receive a task, use this sequence.

### 1. Restate the problem

Before doing anything else, write the problem in your own words.

Example:

```text
The admin console currently shows users in one flat list, which becomes hard to manage as more tenants and clubs are added.
```

### 2. Identify the user

Ask who this is for.

Examples:

- platform admin
- club admin
- race director
- timing operator
- mobile field user
- developer maintaining the system

Different users have different needs.

### 3. Define the outcome

Describe what should be better after the work is done.

Example:

```text
A platform admin can quickly find users by tenant, club, role, and approval status.
```

### 4. Limit the scope

Say what you are not doing.

Example:

```text
This does not redesign the full admin console. It only improves user management structure.
```

### 5. Create or update the artifact

Use the Feature Card or PRD.

Do not keep the important thinking only in chat.

### 6. Build in a small branch

Make focused changes.

Avoid mixing unrelated improvements into the same PR.

### 7. Validate

Test the actual workflow.

Do not only check that the app compiles.

### 8. Capture learning

Write down what changed, what worked, what did not, and what should happen next.

---

## 6. How We Use AI Tools

AI tools are part of the workflow, but they are not the workflow.

Use AI for:

- brainstorming options
- writing first drafts
- generating PRDs
- creating build prompts
- explaining unfamiliar code
- proposing implementation approaches
- checking for edge cases
- summarizing changes

Do not use AI to:

- make final product decisions without review
- silently expand scope
- rewrite large parts of the app without understanding them
- generate code you cannot explain
- skip testing

A good AI prompt includes:

- context
- goal
- constraints
- files involved
- acceptance criteria
- stop conditions

Bad prompt:

```text
Fix the app.
```

Better prompt:

```text
Fix the admin console layout so the main content uses the full available screen width on desktop. Do not change routing, authentication, tenant selection, or module permissions. Preserve existing mobile behavior. Return only the files that need to change and explain why.
```

---

## 7. Quality Bar

Good software is not just code that runs.

Good software is:

- understandable
- testable
- maintainable
- useful
- constrained
- aligned with the original problem

Before opening a PR, ask:

- Can I explain what changed?
- Can I explain why it changed?
- Did I avoid unrelated changes?
- Did I test the user workflow?
- Did I update the artifact?
- Did I leave notes for the next person?

---

## 8. Common Mistakes to Avoid

### Mistake 1: Starting with implementation

Do not start coding before understanding the outcome.

### Mistake 2: Accepting AI output too quickly

AI can produce plausible but wrong code. Read it. Test it. Question it.

### Mistake 3: Expanding scope mid-build

If you discover a new problem, capture it as a new idea. Do not quietly add it to the current task unless it is required to complete the outcome.

### Mistake 4: Treating a demo as done

A demo can look good while the workflow is still broken.

### Mistake 5: Losing the learning

If we do not capture what happened, we make the same mistakes again.

---

## 9. What Good Looks Like

A good intern contribution looks like this:

1. The problem is clearly stated.
2. The scope is small.
3. The artifact is updated.
4. The implementation matches the artifact.
5. The PR is focused.
6. The validation is explained.
7. The learning is captured.

The point is not to move fast at all costs.

The point is to move fast without losing control.

---

## 10. Mental Model

Think of software building like a production system.

Ideas enter the system. Some are not ready. Some become features. Features move through stages. Each stage should reduce uncertainty.

The most dangerous failure mode is producing a lot of code before we know whether we are solving the right problem.

ForgeOS is designed to prevent that.

The system should help us build less random software, make better decisions, and ship useful things more reliably.

---

## 11. First Assignment

Your first assignment is to take a small improvement and move it through the full ForgeOS loop.

You should produce:

- Feature Card
- PRD
- Build Prompt
- Done Check
- Learning Note
- Pull Request

The feature does not need to be large.

In fact, smaller is better.

A good first feature might be:

```text
Improve the README so a new contributor understands how to run ForgeOS validation locally.
```

Success means you completed the loop, not that you built something impressive.

---

## 12. Final Rule

When in doubt, slow down at the decision point.

Do not slow down because you are afraid to build.

Slow down because unclear decisions create expensive rework.

Once the decision is clear, build quickly and validate honestly.
