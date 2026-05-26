---
title: Builder Onboarding Guide
role_level: entry-level
status: active
---

# Builder Onboarding Guide: How We Build Software

This guide explains the way we build software using ForgeOS. It is written for someone early in their software-building journey who is learning how to move from an idea to working software without getting lost in AI-generated noise.

The goal is not to memorize a process. The goal is to understand how to think, how to make decisions, how to use AI responsibly, and how to ship small, useful improvements.

## 1. The Core Idea

Modern AI tools can produce code very quickly. That is useful, but speed by itself is not the goal.

Fast output can create unclear requirements, duplicated work, broken features, lost context, demo-only code, and features that do not solve the original problem.

ForgeOS exists to control that chaos.

```text
Idea → READY → PRD → BUILD → DONE → LEARNING
```

Every meaningful piece of work should move through that loop. The loop is more important than any single tool.

## 2. High-Level Principles

### Start with the problem, not the code

Start by asking what problem we are solving, who has the problem, what better looks like, and how we will know it worked.

### Small work beats big work

Large vague tasks create confusion. Small clear tasks create progress.

### Artifacts matter more than conversations

AI conversations are useful, but they are not reliable project memory. Important work should be captured in durable artifacts: Feature Card, PRD, Build Prompt, Done Check, and Learning Note.

### AI accelerates execution, not judgment

AI can help write code, summarize, generate options, and draft implementation plans. Humans still own product direction, tradeoffs, scope control, final approval, and validation.

### Done means validated, not merely coded

A feature is done when the result can be compared against the original intent and accepted honestly.

### Learning closes the loop

Every feature should leave the system smarter than it started.

## 3. The ForgeOS Loop

### Idea

An idea is an observation, request, pain point, or opportunity.

### READY

READY means the work is clear enough to enter the system. Clarify the problem, outcome, scope, non-scope, and success signal.

### PRD

The PRD turns the ready idea into a buildable specification.

### BUILD

The build step turns the PRD into implementation. The build prompt should be bounded and specific.

### DONE

DONE checks the result against the original intent.

### LEARNING

LEARNING captures what the feature taught us.

## 4. Your Role as a Builder

Your job is not just to write code. Your job is to help move work through the system cleanly.

That means asking clarifying questions, keeping work small, updating artifacts, avoiding hidden assumptions, testing changes, explaining tradeoffs plainly, and leaving the repo easier to understand than you found it.

## 5. How to Approach a New Task

1. Restate the problem.
2. Identify the user.
3. Define the outcome.
4. Limit the scope.
5. Create or update the artifact.
6. Build in a small branch.
7. Validate the workflow.
8. Capture learning.

## 6. How We Use AI Tools

Use AI for brainstorming options, writing first drafts, generating PRDs, creating build prompts, explaining unfamiliar code, proposing implementation approaches, checking edge cases, and summarizing changes.

Do not use AI to make final product decisions without review, silently expand scope, rewrite large parts of the app without understanding them, generate code you cannot explain, or skip testing.

## 7. Quality Bar

Good software is understandable, testable, maintainable, useful, constrained, and aligned with the original problem.

Before opening a PR, ask whether you can explain what changed, why it changed, whether unrelated changes were avoided, whether the user workflow was tested, whether the artifact was updated, and whether notes were left for the next person.

## 8. Common Mistakes to Avoid

- Starting with implementation before understanding the outcome.
- Accepting AI output too quickly.
- Expanding scope mid-build.
- Treating a demo as done.
- Losing the learning.

## 9. What Good Looks Like

A good contribution clearly states the problem, keeps scope small, updates the artifact, matches implementation to intent, keeps the PR focused, explains validation, and captures learning.

The point is not to move fast at all costs. The point is to move fast without losing control.

## 10. Mental Model

Think of software building like a production system. Ideas enter the system. Some are not ready. Some become features. Features move through stages. Each stage should reduce uncertainty.

The most dangerous failure mode is producing a lot of code before we know whether we are solving the right problem.

## 11. First Assignment

Take a small improvement and move it through the full ForgeOS loop.

Produce a Feature Card, PRD, Build Prompt, Done Check, Learning Note, and Pull Request.

Success means you completed the loop, not that you built something impressive.

## 12. Final Rule

When in doubt, slow down at the decision point. Once the decision is clear, build quickly and validate honestly.
