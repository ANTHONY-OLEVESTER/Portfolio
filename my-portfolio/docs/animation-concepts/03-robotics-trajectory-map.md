# Concept 03: Robotics Trajectory Map

## Core Idea

A full-page trajectory layer draws clean motion paths across the page, inspired by robot end-effector traces, rollout comparisons, controller paths, and simulation validation. It is technical, relevant, and less gimmicky than terminal animations.

This is probably the strongest concept for the portfolio.

## Visual Feel

The page remains white and formal. Thin paths move or draw gently across the background:

- Blue line: reference trajectory
- Green line: corrected trajectory
- Red line: raw mismatch or error
- Yellow dots: validation checkpoints

The animation should feel like a robotics/control diagram, not an abstract screensaver.

## Interaction

Suggested behavior:

- On first load, a few trajectory lines draw in slowly behind the hero.
- In the research section, the lines become more explicit: raw, reference, corrected.
- In the final-year robotics section, paths turn into modular joint arcs.
- In the Biocon section, the trajectories flatten into signal pulses.

Hovering over a project card could highlight one matching path color.

## Implementation Direction

Use SVG for the first prototype. This gives crisp lines, accessible scaling, and easy animation.

Create a component:

```jsx
function TrajectoryBackdrop() {
  return (
    <svg className="trajectory-backdrop" aria-hidden="true">
      <path className="trajectory trajectory-reference" d="..." />
      <path className="trajectory trajectory-corrected" d="..." />
      <path className="trajectory trajectory-raw" d="..." />
    </svg>
  );
}
```

CSS:

```css
.trajectory {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: drawTrajectory 1800ms ease-out forwards;
}
```

For a more advanced version, generate points from real image/plot data later, but start handcrafted.

## Where It Fits

Best fit:

- Hero background
- Research section
- Section dividers
- Selected work headers

Avoid:

- Dense content cards
- Award gallery

## Pros

- Directly supports robotics, simulation, and control positioning.
- More credible than a generic coding animation.
- Works well with white formal design.
- Can be implemented with SVG without heavy dependencies.

## Risks

- If too many lines are visible, it will clutter the resume feel.
- If paths are too decorative, the technical meaning weakens.
- Needs careful contrast so it does not interfere with reading.

## Accessibility And Performance

- SVG should be `aria-hidden`.
- Disable drawing animation for `prefers-reduced-motion`.
- Keep opacity low, around 0.12-0.2.
- Avoid animating layout properties.

## Recommendation

This is the best first animation prototype. It is visually interesting, technically relevant, and safe for a hiring portfolio.

Recommendation score: 9/10.
