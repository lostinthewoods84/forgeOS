# Run Your First Feature

This guide walks you through one full cycle of the ForgeOS loop. You'll take a feature from idea to shipped software in 15-30 minutes.

All you need is the Feature Card template and access to AI tools (ChatGPT, Claude, Replit or similar).

---

## Step 1: Copy the Feature Card

Create a new file in your project:

```bash
mkdir -p prompts
cp templates/FEATURE-CARD.md prompts/feature-[your-feature-name].md
```

This file will track your feature from start to finish. Every section gets filled in as you go.

---

## Step 2: Fill Out READY (2 minutes)

Open your Feature Card and fill in the READY section:

```markdown
## 1. READY

What:
Add a notification button to the header

Why:
Users need visibility into updates and system activity

Success:
- Bell icon in header
- Shows unread count
- Opens dropdown panel

Not doing:
- No backend persistence
- No email notifications
- No settings/preferences
```

READY is the input constraint. If you can't fill this out clearly, you're not ready to build.

**Stop here if:**
- You can't describe the feature in one sentence
- You don't know what "working" looks like
- The scope feels unbounded

---

## Step 3: Generate a PRD (5 minutes)

Take your READY section to ChatGPT (or any ideation tool) and ask it to expand into a PRD.

Example prompt:

```
I want to build this feature:

[paste your READY section]

Generate a short PRD with:
- Requirements
- Behavior description
- Edge cases
- Acceptance criteria

Keep it concise. One page max.
```

Paste the result into section 2 of your Feature Card.

**Your job here:** Read the PRD. Does it match your intent? If the AI added scope you didn't ask for, cut it. If it missed something, add it.

---

## Step 4: Generate a Build Prompt (5 minutes)

Take your PRD to Claude (or any structuring tool) and ask it to produce a Build Prompt.

Example prompt:

```
I need a build prompt for this feature.

Here's the PRD:
[paste PRD]

Create a build prompt that includes:
- Constraints (what NOT to modify)
- Current state vs target state
- Specific files to create or change
- Acceptance criteria

Use this template:
[paste from templates/build-prompts/TEMPLATE.md]
```

Paste the result into section 3 of your Feature Card.

**Your job here:** Review the file scope and constraints. Is the Build Prompt scoped to exactly what you want changed? Are there files it should not touch?

---

## Step 5: Implement (5-15 minutes)

Give the Build Prompt to your execution tool (Replit, Claude Code, Cursor, or manual coding).

The execution tool should:

- Implement exactly what the Build Prompt specifies
- Not expand scope
- Stop and ask if it hits ambiguity

If the tool starts inventing features or restructuring code you didn't ask about, the Build Prompt wasn't specific enough. Go back to Step 4 and tighten it.

---

## Step 6: DONE Check (2 minutes)

Fill in section 4 of your Feature Card:

```markdown
## 4. DONE

Does it match the goal? yes

What's missing:
- No empty state yet

Good enough to ship? yes (POC)
```

DONE is the output constraint. Compare the result against what you wrote in READY, not against what the AI produced along the way.

**Stop here if:**
- The result doesn't match the goal you wrote in READY
- There are missing pieces that matter for a first version
- You're not confident it works

---

## Step 7: Capture LEARNING (2 minutes)

After the feature ships (or after you've tested it), fill in section 5:

```markdown
## 5. LEARNING

Expected:
Users will click the notification button to check updates

Observed:
Low engagement (few clicks)

Delta:
Notifications may not be valuable yet

Decision:
Improve notification content before adding more features
```

This is the feedback loop. It turns output into insight and drives what you build next.

---

## That's It

You've completed one cycle:

**Idea -> READY -> PRD -> BUILD -> DONE -> LEARNING -> Next Idea**

The Feature Card captures everything. Commit it to your repo. It's your record of what was built, why, and what happened.

---

## Adding Structure as Complexity Grows

The loop above is enough to start. As your project grows, you'll feel specific kinds of friction. Add structure in response to that friction, not in advance of it.

| Friction | What to Add | Purpose |
|----------|-------------|---------|
| AI contradicts previous decisions | `docs/DECISIONS.md` | Log of decisions with rationale |
| Architecture drifts between sessions | `docs/ARCH.md` | Service boundaries and dependencies |
| UI becomes inconsistent | `docs/FLOWS.md` | Screen inventory and user journeys |
| AI takes liberties with implementation | Stricter Build Prompt constraints | Tighter execution scope |
| Same bugs reappear | `.forge/roles/QA.md` | Test criteria and acceptance standards |
| System behavior is undefined | `docs/SPEC.md` | What the system does (and does not do) |

### Role Definitions

ForgeOS includes four role definitions you can add to your project when you need them:

```bash
mkdir -p .forge/roles
cp roles/ARCHITECT.md .forge/roles/
cp roles/UX.md .forge/roles/
cp roles/QA.md .forge/roles/
cp roles/PROCESS.md .forge/roles/
```

These define how AI should behave when acting in each capacity. Include the relevant role file in your AI prompt to constrain its behavior.

| Role | When to Add |
|------|-------------|
| Architect | When services start stepping on each other |
| UX | When user flows need consistency |
| QA | When you need repeatable test criteria |
| Process | When workflow discipline starts slipping |

### Minimum Viable Setup

If you want more structure from the start, create three files:

1. `docs/SPEC.md` - What your system does
2. `docs/DECISIONS.md` - Why things are the way they are
3. `.forge/roles/PROCESS.md` - Workflow rules

Everything else can wait until you feel the need for it.
