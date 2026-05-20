# Interactive Robot Narration System TODO

## Purpose

The next layer is not just more animation. It is an interactive explanation system.

Moving robots should become clickable technical storytellers. When a viewer clicks a robot, the robot explains what it is doing, why that project matters, what Anthony built, how it was achieved, and what measurable outcomes or evidence exist. Each click should cycle through a different high-signal explanation instead of repeating the same tooltip.

The side follow robot should become the user's guide. It should read the screen context, explain the visible section, and occasionally comment on what other robots are doing.

The goal is to make the page feel like a living engineering portfolio without turning it into a game or making recruiters work too hard.

## Research Pass Added

The first researched narration pass now exists in production data files:

```txt
src/data/robotNarrationData.js
src/data/screenGuideData.js
```

This pass uses the CV, final-year thesis, sim-to-sim media bundle, Biocon step-counter assets, and Biocon pen-injector image. The current copy is intentionally public-safe and avoids inventing metrics where the source material does not provide formal validation.

Evidence used:

- Sim-to-sim research: exact PASS metrics, behavioral gates, triptych video framing, rollout plots, and public research links.
- Final-year robotic arm: reassemblable module architecture, 3 DOF target, NEMA 17 stepper details, Arduino coordination, OpenCV palm landmarks, servo gripper, SolidWorks, Unity, PLA 3D printing, slip-ring and carbon-brush continuity.
- Biocon step counter: CV-backed KiCad step-counter framing, mobile monitoring, compact device constraints, spectrogram/waveform assets, neural-net workflow image, and approximate visual training-curve reading.
- Biocon pen injector: CV-backed motorized injector/control framing, mobile app controls, Bluetooth module, control board, display module, motor injector image, and early-stage IP note.
- Applied AI systems: CV-backed Rapture Twelve research engineering, OCR, speech-to-text, vision, anomaly detection, retrieval/vector infrastructure, EvoJAX, transformer-guided mutation, RNA structure correction, Docker, and evaluation loops.

Important caveat:

- The Biocon step-counter accuracy is treated as a visual artifact, not a certified production metric. The current copy says the chart "visually rises" toward the mid-90s and keeps a TODO to verify dataset size and formal test accuracy.
- Biocon pen-injector details stay architecture-level to avoid exposing anything sensitive.

## Product Goal

The viewer should understand:

- Every moving robot is tied to a real portfolio proof point.
- Each robot represents a project output moving through the portfolio.
- Clicking robots reveals technical detail without adding giant blocks of static text.
- The guide robot helps the user understand what section they are viewing.
- The system increases credibility, not distraction.

## Experience Principles

- Keep the interaction premium, calm, and readable.
- Never cover important buttons, video controls, or large text for long.
- Use concise technical copy, not childish mascot speech.
- Make robots feel alive, but not noisy.
- Make every explanation useful for hiring evaluation.
- Let users ignore the system completely if they only want to read the page.
- Respect reduced-motion and keyboard accessibility.

## Main Interaction Model

### Moving Robot Click

When the user clicks a moving robot:

1. The robot pauses or slows briefly.
2. A compact speech card appears near the robot.
3. The speech card title explains the current action.
4. The body gives one focused piece of evidence.
5. Clicking the same robot again cycles to the next explanation.
6. The card auto-dismisses after a calm delay unless hovered/focused.
7. The robot continues its route after the interaction.

Example click cycle:

```txt
Click 1: What I am building
Click 2: Why this project matters
Click 3: How Anthony built it
Click 4: What was achieved
Click 5: Numbers / evidence
Click 6: Hiring signal
```

### Follow Robot Guide

The follow robot should act like a screen-aware guide:

1. It follows the user's scroll with lag and catch-up.
2. It detects the active visible section.
3. It shows a small guide bubble when the section changes.
4. It explains what the viewer is looking at.
5. It can mention active robots in the same section.
6. It can suggest a next action, such as opening the paper, watching a demo, or checking contact.

Example guide behavior:

```txt
Hero: "This is the positioning layer: AI, robotics, control, embedded systems, and simulation."
Research: "The main proof point is the sim-to-sim paper. Look for measured error reduction and validation gates."
Demos: "The video area shows physical work, not only claims."
Contact: "This section is tuned for applied AI, robotics, simulation, and control roles."
```

## Content Architecture

Create a new data file:

```txt
src/data/robotNarrationData.js
```

This should contain all robot explanation content, separated from animation logic.

Suggested shape:

```js
export const robotNarration = {
  simulation: {
    title: "Residual model robot",
    shortLabel: "Sim-to-sim",
    cycles: [
      {
        eyebrow: "What I am building",
        title: "Building a residual correction module",
        body: "This robot represents the sim-to-sim residual model that corrects PyBullet behavior toward a MuJoCo reference.",
      },
    ],
  },
};
```

Each robot/domain should have:

- `title`
- `shortLabel`
- `domain`
- `accent`
- `cycles`
- `screenGuide`
- `cta`

Each cycle item should have:

- `eyebrow`
- `title`
- `body`
- `metric`
- `proof`
- `sourceSection`
- `ctaLabel`
- `ctaHref`

## Robot Narration Content

### Simulation Robot

Represents:

- Deterministic sim-to-sim residual correction.
- Zenodo paper.
- Triptych comparison.
- Long-horizon validation.
- PASS reports and behavioral gates.

Click cycle:

- What I am building: "I am carrying a residual correction module from the sim-to-sim research."
- Why it matters: "Simulator mismatch can make a robotics policy look good in one environment and fail in another."
- How it was achieved: "Anthony enforced deterministic episode-timestep pairing, blocked invalid training, and validated correction quality across one-step and rollout checks."
- What was achieved: "The corrected behavior closed the gap toward the MuJoCo reference instead of just improving training loss."
- Numbers: "One-step physical p95 error moved from 0.1196 to 0.0207 on the hard-mode PASS evaluation."
- Hiring signal: "This is useful for robotics simulation, validation, reliability, and control teams that need evidence-driven engineering."

Useful metrics:

- One-step phys p95: `0.1196 -> 0.0207`
- Teacher-forced rollout p95: `0.0173 / 0.0174 / 0.0222`
- Contact flag accuracy: `0.9911`
- End-effector distance to target: `8.394e-05` where relevant

### Robotics Robot

Represents:

- Modular Vision-Guided Robotic Arm.
- Final-year robotics project.
- Reconfigurable physical assembly.
- OpenCV-assisted gripper and motion mapping.
- Stepper and servo actuation.

Click cycle:

- What I am building: "I am assembling an arm module from the final-year robotic arm project."
- Why it matters: "The project demonstrates physical build execution, not just a simulation or slide deck."
- How it was achieved: "Anthony combined modular mechanical design, Arduino coordination, stepper-driven joints, servo gripper control, and OpenCV-based gesture interpretation."
- What was achieved: "The system showed reassembly architecture, motion mimicry, and visible physical demonstration through video."
- Numbers: "Use real thesis/demo numbers if available. Until then, mark this as evidence from build video and project report."
- Hiring signal: "This supports robotics prototyping, electromechanical integration, and practical controls-heavy execution."

Needed asset/content check:

- Extract any exact dimensions, joint counts, module count, actuator count, or test results from `Final year Project`.
- If no numeric performance data exists, avoid inventing numbers.
- Use "build evidence" instead of fake precision.

### Embedded Robot

Represents:

- Biocon Step Counter AI.
- Smart insulin pen step/dose monitoring.
- Embedded sensing and compact hardware constraints.
- Signal analysis and device integration.

Click cycle:

- What I am building: "I am carrying a sensor pack from the smart insulin pen step-counter workflow."
- Why it matters: "Medical-adjacent devices need reliable sensing under compact physical constraints."
- How it was achieved: "Anthony worked around embedded sensing, signal interpretation, logging, and hardware integration constraints."
- What was achieved: "The work helped convert a standard pen workflow toward smarter dose or step tracking."
- Numbers: "Pull validated counts, dataset size, or test accuracy from the Biocon Stepcounter-AI folder if present."
- Hiring signal: "This is useful for embedded AI, edge sensing, biomedical devices, and product-shaped ML systems."

Needed asset/content check:

- Inspect `Biocon Stepcounter-AI`.
- Extract real metrics only if available.
- If the folder contains images without formal metrics, use them as visual proof and avoid false claims.

### Control Robot

Represents:

- Motorized intelligent pen injector.
- Control systems and actuation logic.
- Safe physical behavior.
- Biocon engineering environment.

Click cycle:

- What I am building: "I am calibrating a control loop for motorized injector behavior."
- Why it matters: "Control work matters when software decisions become physical motion."
- How it was achieved: "Anthony contributed to sensing, motorized actuation logic, compact device constraints, and implementation detail."
- What was achieved: "The work shows comfort with physical-system constraints, not only web or model-layer software."
- Numbers: "Extract real actuation, sensor, dose, motor, or prototype data from the Biocon Pen Injector folder if available."
- Hiring signal: "This supports roles that need control thinking, embedded logic, and safety-aware actuation."

Needed asset/content check:

- Inspect `Biocon-Pen-Injector`.
- Identify which claims can be public and which should stay generic.
- Avoid exposing confidential Biocon details if the material is sensitive.

### AI Robot

Represents:

- Freelance/startup applied AI and ML systems.
- OCR, speech-to-text, retrieval, structured extraction, validation loops.
- Systems engineering around AI, not just model calls.

Click cycle:

- What I am building: "I am connecting an AI pipeline into a real workflow."
- Why it matters: "Applied AI becomes valuable when it survives messy data, evaluation, correction, and integration."
- How it was achieved: "Anthony built pipelines across OCR, speech-to-text, retrieval, extraction, and validation-driven correction."
- What was achieved: "The work shows ability to convert ambiguous requirements into working systems."
- Numbers: "Add project-specific metrics only where safe and available."
- Hiring signal: "This supports applied AI engineer, AI systems, multimodal pipeline, and automation roles."

## Follow Robot Guide Content

Create section-level guide data:

```txt
src/data/screenGuideData.js
```

Suggested shape:

```js
export const screenGuides = {
  hero: [
    {
      title: "Positioning layer",
      body: "This section frames Anthony as an applied AI and robotics engineer for physical systems.",
    },
  ],
};
```

Sections to cover:

- `hero`
- `research`
- `demos`
- `experience`
- `work`
- `strengths`
- `award`
- `about`
- `contact`

Guide bubble rules:

- Show on first load after a short delay.
- Show when active section changes.
- Do not show more than once every 8-12 seconds unless user clicks the guide robot.
- Clicking follow robot cycles through guide lines for the current section.
- If another robot is active nearby, guide can add a "robot watch" line.

Example guide lines:

```txt
Research:
"This is the strongest proof area. It has a public paper, metrics, figures, and code links."

Demos:
"These videos are here to show real technical execution. Watch the robotic arm demo first."

Award:
"This is credibility from an engineering environment, not decoration."

Contact:
"If the reader is hiring for AI, robotics, simulation, controls, or embedded systems, this is the conversion point."
```

## UI Components To Build

### `RobotSpeechBubble`

Purpose:

- Shows click-cycle narration for moving robots.

Props:

- `robotId`
- `domain`
- `position`
- `content`
- `cycleIndex`
- `onNext`
- `onClose`

Behavior:

- Anchors near the clicked robot.
- Flips left/right if near page edge.
- Uses domain accent color.
- Has title, body, optional metric chip, optional CTA.
- Does not block the robot path for too long.
- Has close button.

### `GuideSpeechBubble`

Purpose:

- Shows section-aware comments from the follow robot.

Props:

- `activeSection`
- `content`
- `position`
- `onNext`
- `onClose`

Behavior:

- Follows the side robot vertically.
- Shows concise explanation.
- Can be manually opened by clicking the follow robot.
- Auto-dismisses unless user interacts.

### `RobotInteractionProvider`

Purpose:

- Central state for active robot narration and guide narration.

Tracks:

- Active robot id.
- Active robot domain.
- Current cycle index per robot/domain.
- Active robot position.
- Active section.
- Last guide message time.
- Whether user dismissed guide bubbles.

Potential file:

```txt
src/context/RobotInteractionContext.jsx
```

### `useRobotNarration`

Purpose:

- Returns the correct narration cycle for a robot.
- Handles cycling.
- Keeps content lookup out of visual components.

Potential file:

```txt
src/hooks/useRobotNarration.js
```

### `useScreenGuide`

Purpose:

- Converts active section and visible robot activity into guide lines.
- Handles cooldowns.

Potential file:

```txt
src/hooks/useScreenGuide.js
```

## Required Changes To Existing Components

### `RobotAgent.jsx`

Current state:

- Robot is rendered with `aria-hidden="true"`.
- Robot layer uses `pointer-events: none`.
- Moving bots cannot be clicked yet.

Needed changes:

- Make robot agent clickable while keeping route traces and debug points non-clickable.
- Set pointer events only on `.robot-agent`.
- Add button semantics or wrap robot in a button-like element.
- Add `aria-label`, for example:

```txt
"Explain robotics robot: Arm module"
```

- On click, call `onRobotSelect(robot, position, phase)`.
- On keyboard Enter/Space, do the same.
- Do not make debug current dots clickable.
- Pause or mark selected robot visually.

Risk:

- Turning pointer events back on could block links if robot floats over content.
- Mitigation: only the robot's small SVG hitbox should accept clicks, not the whole layer.

### `RobotEcosystemLayer.jsx`

Needed changes:

- Own or connect to narration provider.
- Pass `onRobotSelect` into each `RobotAgent`.
- Render `RobotSpeechBubble`.
- Track the selected robot's live position.
- Close bubble if robot exits.
- Pause guide bubble if robot speech bubble is active.

### `ScrollCompanionRobot.jsx`

Needed changes:

- Make it clickable.
- Remove `aria-hidden`.
- Add `aria-label="Open portfolio guide"`.
- Send current vertical position to guide bubble.
- Use active section from app or context.
- Add guide states:
  - idle
  - section-intro
  - robot-commentary
  - manual-guide

### `App.jsx`

Needed changes:

- Provide active section to the guide system.
- Wrap page with `RobotInteractionProvider` if using context.
- Keep guide system below header z-index but above robot layer where needed.

## Pointer Event Strategy

Current:

```css
.robot-ecosystem-layer {
  pointer-events: none;
}
```

Target:

```css
.robot-ecosystem-layer {
  pointer-events: none;
}

.robot-agent,
.scroll-companion-robot,
.robot-speech-bubble,
.guide-speech-bubble {
  pointer-events: auto;
}

.robot-route-trace,
.robot-debug-layer,
.robot-work-effect,
.payload-token {
  pointer-events: none;
}
```

Click safety:

- Robot hitbox should be small.
- Bubble should close on outside click or after timeout.
- Bubbles should not appear over header nav or video controls.
- If bubble would overlap critical UI, shift it to side gutter.

## Speech Bubble Positioning

Use page-shell coordinates because robot positions are already relative to `.site-shell`.

Rules:

- Prefer right side of robot.
- If near right page edge, flip to left.
- If near top, push down.
- If near bottom of viewport, push up.
- Keep within site shell plus a small safe margin.
- Guide bubble should attach to side robot and use the outside gutter when possible.

Implementation helper:

```txt
src/utils/bubblePositioning.js
```

Functions:

- `getBubblePlacement(anchorPoint, shellRect, bubbleSize)`
- `clampBubbleToShell(point, bubbleSize, shellRect)`
- `getGuideBubblePlacement(companionPoint, viewportWindow)`

## Visual Design

Moving robot bubble:

- White glass panel.
- Domain accent strip.
- Small project label.
- Strong title.
- Concise body.
- Metric chip if available.
- Tiny "click robot again for next note" hint.

Follow robot guide bubble:

- Slightly warmer red/pink accent matching the guide robot.
- More human but still professional.
- Shorter than project bubbles.
- Should feel like a smart assistant, not a cartoon speech balloon.

Avoid:

- Giant chat UI.
- Typewriter effects everywhere.
- Dark terminal bubbles.
- Emoji.
- Excessive bouncing.

## Copy Tone

Robot copy should sound like:

```txt
"I am carrying the residual model output from the sim-to-sim project. The important part is not the model alone; it is the validation discipline around it."
```

Not:

```txt
"Beep boop I made AI magic!"
```

Guide copy should sound like:

```txt
"This section is the proof core. The public paper, metrics, figures, and code links make the research inspectable."
```

Not:

```txt
"Welcome to Anthony's awesome website!"
```

## Data Completeness TODO

Before final implementation, inspect local project folders for exact evidence:

- [ ] `Final year Project`
- [ ] `Biocon Stepcounter-AI`
- [ ] `Biocon-Pen-Injector`
- [ ] `important_media_bundle_of_Robotics_project_Sim_to_sim`
- [ ] `Anthony_Olevester_CV_Robotics_AI.pdf`

For each project, extract:

- [ ] What was built.
- [ ] Why it mattered.
- [ ] Technical methods.
- [ ] Tools and stack.
- [ ] Metrics or numbers.
- [ ] Public-safe claims.
- [ ] Best visual proof.
- [ ] Best CTA link or section link.

Important rule:

- [ ] Never invent metrics.
- [ ] If a project has no numeric metric, use concrete build evidence instead.
- [ ] Mark uncertain claims as TODO until verified.

## Implementation Phases

### Phase 1: Static Data And First Bubble

- [x] Create `robotNarrationData.js`.
- [x] Add initial narration cycles for simulation, robotics, embedded, control, and AI.
- [x] Create `RobotSpeechBubble.jsx`.
- [x] Add simple click handler to `RobotAgent`.
- [x] Render bubble at clicked robot position.
- [x] Cycle content on repeated click.
- [x] Auto-dismiss after 8-12 seconds.
- [x] Run build and lint.

### Phase 2: Safe Interactions

- [ ] Convert robot from `aria-hidden` to accessible interactive element.
- [ ] Add keyboard support.
- [ ] Keep route traces non-clickable.
- [ ] Make sure robots do not block page CTAs for long.
- [ ] Add close button to bubble.
- [ ] Add outside click and Escape close.
- [ ] Test with videos and image overlays.

### Phase 3: Follow Robot Guide

- [x] Create `screenGuideData.js`.
- [x] Make `ScrollCompanionRobot` clickable.
- [x] Create `GuideSpeechBubble.jsx`.
- [x] Show guide message when active section changes.
- [x] Add cooldown so it does not talk constantly.
- [x] Add manual click-to-cycle guide messages.
- [ ] Add guide mention of active robot if one is selected.

### Phase 4: Real Evidence Pass

- [ ] Extract final-year robotics metrics from the thesis/report.
- [ ] Extract step-counter AI details from local folder.
- [ ] Extract pen injector/control details from local folder.
- [ ] Add exact sim-to-sim numbers already present in `portfolioData.js`.
- [ ] Update all narration content with verified evidence.
- [ ] Add TODO comments only where a placeholder remains.

### Phase 5: Polish And Restraint

- [ ] Tune bubble size and placement.
- [ ] Add subtle entry/exit motion.
- [ ] Add selected robot highlight.
- [ ] Add "next note" indicator.
- [ ] Prevent bubble spam when many robots are clicked.
- [ ] Ensure mobile fallback is clean.
- [ ] Ensure reduced-motion users get static accessible content or no narration overlay.

### Phase 6: QA Checklist

- [ ] Click every robot domain.
- [ ] Click same robot repeatedly and verify cycle order.
- [ ] Click follow robot in every section.
- [ ] Scroll while bubble is open.
- [ ] Confirm bubble follows or closes gracefully.
- [ ] Confirm no links are blocked.
- [ ] Confirm video controls remain usable.
- [ ] Confirm header remains clickable.
- [ ] Confirm no console errors.
- [ ] Confirm build passes.
- [ ] Confirm lint passes.

## Open Design Questions

- Should robot speech pause the robot, slow it, or let it continue moving?
- Should a bubble follow the robot while it moves, or freeze at click position?
- Should only one robot bubble exist at a time?
- Should guide robot talk automatically on section change, or only after first user click?
- Should guide robot explain all sections, or stay silent unless the section is complex?
- Should the speech content be formal third-person or robot first-person?

Recommended decisions:

- One robot bubble at a time.
- Bubble freezes at click position for readability.
- Robot gets a selected glow but does not fully stop.
- Guide speaks automatically only on section change with cooldown.
- Moving robot uses first-person but serious technical wording.
- Guide robot uses second-person/contextual wording.

## Definition Of Done

This feature is done when:

- Clicking any moving robot gives useful project-specific narration.
- Repeated clicks cycle through multiple evidence points.
- The follow robot can explain the current section.
- The copy is technically credible and recruiter-friendly.
- The system does not block normal portfolio use.
- No fake metrics or vague hype are present.
- The experience feels alive, but still premium and professional.
