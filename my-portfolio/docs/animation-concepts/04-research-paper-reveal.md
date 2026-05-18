# Concept 04: Research Paper Reveal

## Core Idea

The portfolio behaves like a technical dossier being opened. Sections reveal as evidence layers: title, metrics, figures, videos, experience, award, contact. The animation is not a background effect as much as a page choreography.

This is subtle, formal, and very resume-friendly.

## Visual Feel

White document surface. Thin lines, small labels, and content blocks reveal with careful timing:

- Section label appears first.
- Title slides up slightly.
- Metrics fade in one by one.
- Figures reveal with a light clipping motion.
- Cards do not bounce or spin.

It should feel like a research deck, not a SaaS landing page.

## Interaction

Use scroll-triggered reveal:

- Hero loads immediately with profile photo and name.
- Credibility strip appears in sequence.
- Research metrics enter one by one.
- Figure cards reveal after metrics.
- Experience timeline rows appear as the reader reaches them.

This keeps attention moving without adding decorative noise.

## Implementation Direction

Use CSS with `IntersectionObserver`.

Component idea:

```jsx
function Reveal({ children }) {
  return <div className="reveal">{children}</div>;
}
```

Hook:

```jsx
useEffect(() => {
  const observer = new IntersectionObserver(...);
}, []);
```

CSS:

```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

Stagger child cards with CSS variables.

## Where It Fits

Best fit:

- Entire page
- Metrics
- Timeline rows
- Selected work cards

Avoid:

- Video playback elements
- Lightbox
- Header

## Pros

- Professional and subtle.
- Improves perceived quality without changing content.
- Keeps the resume/profile feel intact.
- Very low performance risk.

## Risks

- Too much reveal can feel slow.
- If every element animates, it becomes repetitive.
- Requires restraint: only animate section entrances and key evidence.

## Accessibility And Performance

- Respect `prefers-reduced-motion`.
- Keep animation duration under 500ms for most elements.
- Do not hide content from screen readers.
- Ensure content remains visible if JavaScript fails.

## Recommendation

This is the safest production animation system. It pairs well with the trajectory map.

Recommendation score: 9/10.
