# Concept 02: Diffusion Field Overlay

## Core Idea

A soft field of particles, blur, or noise slowly resolves into clearer structure as the user scrolls. The metaphor is uncertainty becoming controlled behavior: raw simulation mismatch becoming corrected dynamics, noisy signals becoming usable evidence, rough prototypes becoming engineered systems.

This is the most abstract concept, but it can look premium if kept subtle.

## Visual Feel

Imagine a white page with a faint translucent diffusion layer:

- Light gray particle/noise texture
- Gentle blue/green density waves
- Occasional red/yellow micro accents
- No dark fog, no smoky gamer atmosphere

The field should look like scientific visualization, not decorative fog.

## Interaction

Possible behavior:

- At the hero, the field is soft and diffuse.
- As the research section enters, particles align into trajectory-like curves.
- Near selected work, the field becomes sparse and geometric.
- At contact, it fades back into clean white.

Hovering over figures could briefly sharpen the diffusion field around that card, like the system is focusing attention.

## Implementation Direction

There are three possible implementation levels.

CSS-only version:

- Use layered radial gradients and animated background positions.
- Lowest risk and easiest to deploy.
- Least impressive.

Canvas version:

- Use a fixed `<canvas>` with particles.
- Better visual quality.
- Must be carefully optimized.

Shader/WebGL version:

- Use Three.js or raw WebGL for a true diffusion/noise field.
- Most impressive.
- Highest risk and more testing required.

For this portfolio, start with canvas. If it looks too decorative, fall back to CSS.

## Data-Informed Variant

Make the field less abstract by mapping it to portfolio ideas:

- Sim-to-sim section: particles move from scattered points into paired trajectories.
- Biocon section: particles form waveform bands.
- Final-year project: particles form modular joint nodes.

This prevents the effect from feeling random.

## Where It Fits

Best fit:

- Hero background
- Transition into flagship research
- Very subtle page-wide layer

Avoid:

- Award section, where real images should carry credibility.
- Any section where the user needs to inspect plots carefully.

## Pros

- Premium, memorable, and modern.
- Communicates AI/simulation without relying on fake terminal text.
- Can make the site feel alive without many visible UI animations.

## Risks

- Easy to overdo.
- May feel too abstract for recruiters if not connected to real project evidence.
- Canvas or WebGL can become expensive on mobile.

## Accessibility And Performance

- Respect `prefers-reduced-motion`.
- Stop animation when the tab is hidden.
- Use low particle counts on mobile.
- Keep the canvas behind content and pointer-events disabled.

## Recommendation

Good experimental direction if you want the site to feel more premium and distinctive. I would prototype it, but I would only keep it if it stays very quiet.

Recommendation score: 8/10 for visual identity, 6/10 for hiring clarity.
