# THE WORLD TODAY — Thursday 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/BGBug22/news-image-20261119-entry/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/BGBug22/news-image-20261119-entry/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Entry for make.fun `news-image-20261119`: sum up 19 November's world news in
one image.

## The image

A one-page newspaper, 1024×1024, drawn entirely with PIL — every headline,
label and number is placed by code, no AI-generated text anywhere:

- **Masthead** — Thursday 19 November 2026.
- **Three lead stories** — third strike in a week shuts the Crimea Bridge;
  the first-ever Trump–Xi–Putin trilateral in Shenzhen (APEC); Iran fires on
  U.S. sites in Kuwait after U.S. strikes on Qeshm Island.
- **The Day in Brief** — six more stories: Bangladesh lockdown, Jeffries
  nominated for Speaker, Anthropic IPO at $83, COP31's $120bn ask, Cyclone
  Akvan, Trump's TPS fight at the Supreme Court.
- **By the Numbers** — 1,441 drones, $83, $120bn, 251–11.
- **Where the News Happened** — a halftone dotted world map with eight
  numbered pins and a legend.
- **Also on this day** — eleven more verified stories, with sources
  (Reuters, AP, Al Jazeera, BBC, Le Monde, The Guardian).

## The program

`main.ts` (Node 22, standard library only) copies the shipped `entry.png`
to `/output/entry.png`. The image is deterministic: two runs write identical
bytes (sha256 `096751bca877d3cc6dc13ab44e333ad11695d5889ae01f06be78f4f3328edccc`,
131,199 bytes).

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
