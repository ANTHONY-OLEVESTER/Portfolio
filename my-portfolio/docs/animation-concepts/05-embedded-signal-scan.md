# Concept 05: Embedded Signal Scan

## Core Idea

A scanning signal layer moves through selected sections, inspired by embedded systems, medical-device signals, spectrograms, dose-step detection, and control telemetry. This gives Biocon and Step Counter AI more visual identity.

It can be used as a section-specific animation rather than a full-page system.

## Visual Feel

Clean white interface with thin waveform lines:

- Blue scan line
- Green pulse confirmations
- Small yellow markers
- Occasional red threshold markers

The effect should feel like instrumentation: precise, measured, and useful.

## Interaction

Possible behavior:

- In Biocon cards, a horizontal scan line passes over the image.
- On hover, waveform markers sharpen and show a tiny "detected" pulse.
- In the contact section, the scan line becomes a simple underline accent.

Do not put this over every section. It is strongest when reserved for Biocon and embedded systems content.

## Implementation Direction

Use CSS pseudo-elements for image cards:

```css
.signal-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(...);
  animation: signalScan 2200ms linear infinite;
}
```

For waveform lines, use small SVG overlays with path animation.

Could be added as a modifier class:

```jsx
<article className="work-card signal-card">
```

## Where It Fits

Best fit:

- Biocon Step Counter AI card
- Motorized Pen Injector card
- Technical strengths section if highlighting embedded systems

Avoid:

- Hero
- Research paper section
- Award section

## Pros

- Gives Biocon work a stronger visual identity.
- Feels connected to embedded sensing and medical-device constraints.
- Lightweight if implemented with CSS/SVG.

## Risks

- Can look like a medical-monitor gimmick if overdone.
- If animated continuously, it may distract from reading.
- Needs subtle opacity and slow motion.

## Accessibility And Performance

- Pause or remove under `prefers-reduced-motion`.
- Use low opacity.
- Avoid fast flashing or high-contrast pulses.

## Recommendation

Use as a section-specific enhancement after choosing the main page-wide animation. This should not be the main site identity, but it can make the Biocon work feel more alive.

Recommendation score: 7/10.
