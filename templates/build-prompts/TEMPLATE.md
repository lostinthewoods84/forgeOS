# BUILD PROMPT: [Feature Name]

**Mode:** Standard | Spike | Hotfix | Prototype  
**Complexity:** Low | Medium | High  
**Estimated Files:** [number]  
**Date:** YYYY-MM-DD

---

## Constraints (READ FIRST)

You are acting as a constrained execution environment. You are NOT the architect.

### DO NOT MODIFY
- [List canonical files that must not change]
- [List services or modules outside scope]
- [List contracts or schemas that are frozen]

### DO NOT INTRODUCE
- New services without ARCH.md update
- New event types without EVENTS.md update
- Cross-service imports not already present
- [Domain-specific constraints]

---

## Context

### Current State
[Describe how the system works today. Be specific about files, data flow, user experience.]

### Target State
[Describe how the system should work after this change. Same level of specificity.]

### Why This Change
[One paragraph on the motivation. Link to DECISIONS.md if applicable.]

---

## Scope

### Files to Create
| File | Purpose |
|------|---------|
| `path/to/new-file.ts` | [what it does] |

### Files to Modify
| File | Changes |
|------|---------|
| `path/to/existing-file.ts` | [what changes] |

### Files NOT to Touch
- `path/to/protected.ts` - [why it's out of scope]

---

## Implementation

### Phase 1: [Phase Name]

**Goal:** [One sentence]

#### Step 1.1: [Step Name]

[Detailed instructions. Include code snippets if helpful.]

```typescript
// Example of expected implementation
```

#### Step 1.2: [Step Name]

[Continue with explicit steps]

### Phase 2: [Phase Name]

[Continue phases as needed]

---

## Acceptance Criteria

### Must Have
- [ ] [Specific, verifiable criterion]
- [ ] [Another criterion]

### Edge Cases to Handle
- [ ] [Edge case]: [expected behavior]

### Must NOT Break
- [ ] [Existing functionality that must still work]

---

## Testing Checklist

### Manual Tests
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | [action] | [result] |

### Automated Tests
- [ ] [Test file/case to add or verify]

---

## Handoff

When complete, confirm:
- [ ] Only files in scope were modified
- [ ] No architectural drift occurred
- [ ] All acceptance criteria met
- [ ] Tests pass

Report any discrepancies. Do not resolve architectural conflicts - flag them.

---

## References

- Decision: [link to DECISIONS.md entry]
- Spec: [link to relevant SPEC.md section]
- Flow: [link to relevant FLOWS.md section]
