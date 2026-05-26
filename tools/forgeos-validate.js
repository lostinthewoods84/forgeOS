#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REQUIRED_FILES = [
  'FEATURE-CARD.md',
  'PRD.md',
  'BUILD-PROMPT.md',
  'DONE.md',
  'LEARNING.md'
];

const REQUIRED_SECTIONS = {
  'FEATURE-CARD.md': [
    '# Feature:',
    '## 0. Context',
    '## 1. Outcome',
    '## 2. Ready Check',
    '## 3. Scope',
    '## 4. Done Signal'
  ],
  'PRD.md': [
    '# PRD:',
    '## Problem',
    '## Users',
    '## Requirements',
    '## Acceptance Criteria',
    '## Non-Goals'
  ],
  'BUILD-PROMPT.md': [
    '# Build Prompt:',
    '## Objective',
    '## Files In Scope',
    '## Constraints',
    '## Acceptance Criteria',
    '## Stop Conditions'
  ],
  'DONE.md': [
    '# Done Check:',
    '## Original Intent',
    '## What Changed',
    '## Validation',
    '## Gaps',
    '## Ship Decision'
  ],
  'LEARNING.md': [
    '# Learning:',
    '## Expected',
    '## Observed',
    '## Delta',
    '## Next Decision'
  ]
};

const PLACEHOLDER_PATTERNS = [/\[TBD\]/i, /\bTBD\b/i, /\[fill/i, /\[describe/i];

function exists(filePath) { return fs.existsSync(filePath); }
function read(filePath) { return fs.readFileSync(filePath, 'utf8'); }

function listFeatureDirs(root) {
  const featuresDir = path.join(root, 'features');
  if (!exists(featuresDir)) return [];
  return fs.readdirSync(featuresDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(featuresDir, entry.name));
}

function validateFeatureDir(featureDir) {
  const errors = [];
  const relativeDir = path.relative(process.cwd(), featureDir);

  for (const file of REQUIRED_FILES) {
    const filePath = path.join(featureDir, file);
    if (!exists(filePath)) {
      errors.push(`${relativeDir}: missing ${file}`);
      continue;
    }

    const content = read(filePath);
    for (const section of REQUIRED_SECTIONS[file]) {
      if (!content.includes(section)) errors.push(`${relativeDir}/${file}: missing section "${section}"`);
    }
    for (const pattern of PLACEHOLDER_PATTERNS) {
      if (pattern.test(content)) errors.push(`${relativeDir}/${file}: contains placeholder text`);
    }
  }
  return errors;
}

function main() {
  const featureDirs = listFeatureDirs(process.cwd());
  if (featureDirs.length === 0) {
    console.error('ForgeOS validation failed: no feature artifact directories found in /features.');
    process.exit(1);
  }
  const errors = featureDirs.flatMap(validateFeatureDir);
  if (errors.length > 0) {
    console.error('ForgeOS validation failed:\n');
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }
  console.log(`ForgeOS validation passed for ${featureDirs.length} feature artifact set(s).`);
}

main();
