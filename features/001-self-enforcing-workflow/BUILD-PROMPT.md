# Build Prompt: Self-Enforcing ForgeOS Workflow

## Objective

Implement automated workflow validation for ForgeOS.

## Files In Scope

- tools/forgeos-validate.js
- .github/workflows/forgeos-check.yml
- .github/pull_request_template.md
- .github/ISSUE_TEMPLATE/feature-card.yml

## Constraints

- Keep implementation lightweight
- Preserve human decision points
- Avoid vendor lock-in

## Acceptance Criteria

- Validation runs in GitHub Actions
- Missing files fail validation
- Placeholder content fails validation

## Stop Conditions

- Workflow becomes overly complex
- Validation attempts to replace human review
