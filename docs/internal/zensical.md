# Zensical

## Getting started

- Upgrade `pip install --upgrade --force-reinstall zensical`
- New project `zensical new .`
- Start development server `zensical serve --open --dev-addr localhost:8000`
- Build project `zensical build --strict`
    - `--clean` - clean cache

## Blog frontmatter

```yaml
---
date:
    created: YYYY-MM-DD
    updated: YYYY-MM-DDT12:00:00

slug: xxx
draft: true

links:
    - Related links
    - internal links
    - external links
---
```

## Page frontmatter

```yaml
---
title:
description:

icon: https://zensical.org/docs/authoring/icons-emojis/#included-icon-sets
status: new | deprecated

hide:
    - navigation
    - toc
    - path
    - footer
    - feedback
    - tags
search:
    exclude: true
---
```

## Images

```
![Image title](url){ align=left, width="300", loading=lazy }
/// caption
Image caption
///

![Image title](url#only-light)
![Image title](url#only-dark)
```

HTML is a language.
