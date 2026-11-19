// THE WORLD TODAY — Thursday 19 November 2026 (Node 22, standard library only).
//
// The entry image was drawn ahead of time with PIL (draw.py in the build
// session, every pixel and every letter placed by code — no AI text, no
// network) and ships beside this file as entry.png. This program's only job
// is to place that exact image at /output/entry.png, deterministically.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

const digest = createHash('sha256').update(bytes).digest('hex');
console.log(`wrote ${target} (${bytes.length} bytes, sha256 ${digest})`);
