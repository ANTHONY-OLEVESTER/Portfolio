# Live Robotics Ecosystem: End-to-End Implementation TODO

## Current State

The portfolio now has a working first implementation:

- `RobotEcosystemLayer` renders above the existing page.
- Robots use real project cards, demo cards, research panels, strengths, and contact as anchors.
- Robots move with distance-based constant speed.
- Robots spawn over time instead of all at once.
- Robots stop, work, show effects, carry a package, deliver it, and exit.
- The animation layer uses `pointer-events: none`, so it should not block links, videos, or image overlays.
- Moving robots are disabled on smaller screens and for reduced-motion users.

This is a good base, but it is still not the final premium ecosystem.

## Final Target

The final version should feel like the portfolio is a live engineering lab.

The page itself is the world. The robots are not decorative mascots and not game characters. They are small technical workers moving through the evidence on the page:

- Sim-to-sim research produces a validation module.
- Robotic arm work produces a mechanical module.
- Biocon Step Counter AI produces an embedded sensing module.
- Pen Injector work produces a control/actuation module.
- Applied AI work produces an AI pipeline module.
- The modules are delivered into strengths/contact/research areas as hiring signals.

The viewer should feel:

- The portfolio is alive.
- The work is technical and connected.
- Anthony can operate across AI, robotics, embedded systems, control, and simulation.
- The motion supports credibility rather than distracting from it.

## Phase 1: Stabilize The Current Base

- [ ] Confirm the robot layer never blocks any clickable UI.
- [ ] Confirm header, navigation, videos, image overlays, resume, email, LinkedIn, and GitHub links remain clickable.
- [ ] Test the page after scrolling to every major section.
- [ ] Watch a full robot loop from spawn to exit.
- [ ] Confirm every job type can spawn at least once:
  - simulation
  - robotics
  - embedded
  - control
  - AI
- [ ] Confirm robots are disabled below the chosen breakpoint.
- [ ] Confirm reduced-motion mode disables robot movement.
- [ ] Remove or archive unused workshop CSS once the new direction is approved.
- [ ] Decide whether the old `RoboticsWorkshop` experiment should stay archived or be deleted permanently.

## Phase 2: Refactor Into Clean Architecture

The current implementation works, but it should be split before it grows.

- [x] Move job definitions out of `RobotEcosystemLayer.jsx`.
- [x] Create `src/data/robotEcosystemData.js`.
- [x] Create a `useReducedMotion` hook file if reused elsewhere.
- [x] Split route measuring into a helper:

```txt
src/utils/robotRouting.js
```

- [x] Split scheduler logic into a hook:

```txt
src/hooks/useRobotScheduler.js
```

- [ ] Split components:

```txt
RobotEcosystemLayer
RobotAgent
RobotWorkEffect
RobotPackage
RobotRouteTrace
```

- [x] Split current working pieces into:
  - `RobotEcosystemLayer`
  - `RobotAgent`
  - `RobotWorkEffect`

- [ ] Add clear comments only where future editing will be confusing.
- [ ] Keep component APIs simple enough that new robot jobs can be added without touching animation internals.

## Phase 3: Better Anchors On Real UI

Right now anchors use biased center points from existing DOM elements. The next version needs more control.

- [x] Add explicit anchor metadata to major cards.
- [x] Support source anchors:

```txt
data-robot-source="simulation"
data-robot-source="robotics"
data-robot-source="embedded"
data-robot-source="control"
data-robot-source="ai"
```

- [x] Support destination anchors:

```txt
data-robot-destination="research"
data-robot-destination="simulation"
data-robot-destination="robotics"
data-robot-destination="embedded"
data-robot-destination="control"
data-robot-destination="ai"
data-robot-destination="contact"
```

- [x] Add optional fine-tuning attributes:

```txt
data-robot-anchor-x="0.18"
data-robot-anchor-y="0.38"
data-robot-work-x="0.24"
data-robot-work-y="0.52"
```

- [ ] Keep robots near card edges, not centered over text.
- [ ] Avoid video controls and CTA buttons.
- [ ] Avoid the profile photo and important hero copy.

## Phase 4: Smarter Routing

Current movement is direct point-to-point. The final version should use readable paths.

- [x] Add route segments instead of one straight transition.
- [x] Route through safe midpoints when source and destination are far apart.
- [ ] Prefer moving through whitespace gutters and card edges.
- [ ] Avoid crossing long blocks of text.
- [ ] Avoid sitting over buttons.
- [ ] Add a small route debug mode for development.
- [ ] Add `safeLane` concepts:

```txt
left gutter
right gutter
section top edge
section bottom edge
card side edge
```

- [ ] Add route calculation:

```txt
spawn -> source approach -> work point -> destination approach -> handoff point -> exit
```

- [x] Preserve constant speed across all segments.
- [ ] Add pause/turn timing between segments so robots feel intentional.

## Phase 5: Robot Life And Personality

The robot is acceptable now, but it needs more life.

- [ ] Add arrival alignment before work starts.
- [ ] Add small idle bounce while waiting.
- [ ] Add visor/head-look behavior while working.
- [ ] Add tool-specific work motion:
  - microscope inspection for research
  - hammer/wrench tap for robotics
  - solder/probe sparkle for embedded
  - gauge calibration for control
  - wrench/debug gesture for AI pipeline
- [ ] Add carrying lean when robot has a package.
- [ ] Add soft turn behavior based on movement direction.
- [ ] Add slight overshoot and settle on arrival.
- [ ] Add status-light states:
  - green idle
  - blue research scan
  - yellow embedded work
  - red control calibration
  - green delivery success
- [ ] Make failures rare, subtle, and meaningful if added later.

## Phase 6: Domain-Specific Work Effects

Current work effects are generic sparks and scan. The final version needs domain-specific visuals.

- [x] Research effect:
  - blue scan plane
  - tiny trajectory trace
  - PASS stamp pulse
  - residual correction chip

- [x] Robotics effect:
  - bolt tightening
  - controlled sparks
  - arm-link module forming
  - tiny assembly ticks

- [x] Embedded effect:
  - waveform lock
  - solder sparkle
  - sensor packet
  - signal confidence pulse

- [x] Control effect:
  - gauge needle settling
  - feedback loop ring
  - actuator cylinder
  - calibration pass pulse

- [x] AI effect:
  - data packet tiles
  - small neural link trace
  - pipeline block
  - evaluation check pulse

## Phase 7: Package And Delivery System

Packages should feel like real outputs of the project cards.

- [x] Replace text-only packages with visual module tokens.
- [x] Give each module a shape:
  - research: blue chip
  - robotics: green arm link
  - embedded: yellow sensor core
  - control: red actuator cylinder
  - AI: multicolor pipeline block
- [x] Show package creation near the source card.
- [x] Animate pickup after work completes.
- [x] Attach the package to the robot during carrying.
- [x] Trigger a destination glow on handoff.
- [x] Add a tiny delivered-state badge on destination cards.
- [x] Avoid permanent clutter after many loops.

## Phase 8: Multiple Robots And Scheduling

The current scheduler spawns a new robot every 10 seconds with no active robot cap during this experiment.

- [ ] Revisit active robot count only after visual path review.
- [x] Spawn a new robot every 10 seconds with no active cap for the current experiment.

```txt
spawnInterval = 10 seconds
maxRobots = no cap
```

- [x] Add route queue:

```txt
research -> robotics -> embedded -> control -> AI -> delivery
```

- [x] Prevent two robots from working on the same card at the same time unless intentional.
- [x] Prevent visual pileups near contact.
- [x] Remove random spawn delay variation for predictable visual review:

```txt
10s fixed
```

- [x] Allow high-priority jobs:
  - flagship research should appear often
  - final-year robotic arm should appear often
  - Biocon projects should appear enough to reinforce credibility

- [ ] Add optional idle courier jobs only if the page feels empty.

## Phase 9: Scroll Awareness

The current ecosystem exists over the whole page. It should become smarter about what the viewer is seeing.

- [x] Detect current viewport window for robot scheduling.
- [x] Prioritize jobs near or slightly below the visible viewport.
- [x] Avoid spawning robots far away from the user's current scroll position.
- [x] If a robot is off-screen, let it continue but do not waste too many active slots on invisible robots.
- [x] Add viewport-aware effects:
  - stronger effects for visible robots
  - lighter effects for off-screen robots
- [ ] Consider pausing spawn while user is interacting with videos or lightbox.

## Phase 10: Performance And Safety

The ecosystem must feel premium, not heavy.

- [ ] Keep robot count low.
- [ ] Use transform-based movement only.
- [ ] Avoid layout thrashing during animation.
- [ ] Measure anchors on spawn, resize, and major layout changes, not every frame.
- [ ] Use `ResizeObserver` if needed.
- [ ] Respect `prefers-reduced-motion`.
- [ ] Disable on mobile.
- [ ] Test CPU impact in Chrome performance tools.
- [ ] Confirm no memory leak from timeouts.
- [ ] Confirm cleanup removes active classes from cards.

## Phase 11: Responsive Behavior

- [ ] Desktop:
  - full ecosystem
  - 3 to 5 active robots
  - complete work effects

- [ ] Tablet:
  - 1 to 2 active robots
  - shorter route preference
  - reduced effects

- [ ] Mobile:
  - no moving robots
  - static status pulses only
  - maybe module badges on cards

- [ ] Test at:
  - 1440px
  - 1180px
  - 1024px
  - 900px
  - 768px
  - 390px

## Phase 12: Visual Polish

- [ ] Match robot colors with the Google-profile-inspired portfolio palette.
- [ ] Keep the motion playful but the page serious.
- [ ] Add subtle shadows so robots feel placed on the page.
- [ ] Add a very light route trail only while moving.
- [ ] Avoid permanent rails, ladders, or map UI.
- [ ] Tune robot scale:
  - large enough to notice
  - small enough not to dominate
- [ ] Tune z-index:
  - below header and lightbox
  - above cards enough to be visible
  - never blocking interaction

## Phase 13: Narrative Integration

Every robot action should support Anthony's positioning.

- [ ] Add micro-labels that feel technical, not childish.
- [ ] Avoid labels like "building robot" if they feel gimmicky.
- [ ] Use labels like:
  - residual model
  - validation chip
  - arm module
  - sensor pack
  - control loop
  - AI pipeline
- [ ] Make flagship research the strongest recurring route.
- [ ] Make Biocon routes visibly connect to embedded/control strengths.
- [ ] Make final-year robotic arm connect to robotics strength.
- [ ] Make delivery to contact feel like "ready for hiring conversation."

## Phase 14: Testing Checklist

- [ ] `npm run build`
- [ ] `npx eslint .`
- [ ] Manual desktop scroll test.
- [ ] Manual video interaction test.
- [ ] Manual image lightbox test.
- [ ] Manual header click test.
- [ ] Manual resume download link test.
- [ ] Manual reduced-motion test.
- [ ] Manual responsive breakpoint test.
- [ ] Manual long idle test for 3 to 5 minutes.
- [ ] Confirm no console errors.

## Phase 15: Cleanup Before Merge

- [ ] Remove unused CSS from previous workshop experiments.
- [ ] Delete or archive dead components.
- [ ] Keep docs for concept history, but make final implementation doc the source of truth.
- [ ] Check git status and stage only relevant files.
- [ ] Commit on experiment branch.
- [ ] Push branch.
- [ ] If approved, merge or cherry-pick into main.

## Priority Order

Do this next:

1. Clean architecture split.
2. Explicit anchor tuning.
3. Domain-specific work effects.
4. Smarter routing with safe midpoints.
5. Package visual tokens.
6. Scroll-aware scheduling.
7. Performance and responsive polish.
8. Remove old workshop leftovers.

## Definition Of Done

The live robotics ecosystem is complete when:

- Robots feel like they are working on the actual portfolio.
- The motion is slow, readable, and purposeful.
- Every robot route has a narrative reason.
- The ecosystem supports hiring credibility instead of becoming a toy.
- Technical work remains the main focus.
- The site is still fast, clickable, responsive, and production-ready.
