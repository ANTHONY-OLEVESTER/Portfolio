# Concept 06: Live Robotics Ecosystem

## Working Name

**The Workshop That Builds Itself**

This concept turns the portfolio into a living robotics lab. The website is no longer just a page with cards. It becomes an engineered environment where each project contributes one part to a larger machine, small robots move through the interface, failures happen, parts get recycled, and the system keeps building.

The goal is not decoration. The goal is to make the visitor feel that Anthony builds physical intelligent systems, and that the page itself is a simulation of that mindset.

## North Star

The portfolio should feel like a clean white technical lab where a small robotic ecosystem is quietly operating behind and around the content.

Each project card becomes a source of a different robot component:

- Sim-to-sim research contributes the **controller brain** and validation logic.
- Final-year robotic arm contributes the **mechanical arm assembly**.
- Biocon step-counter work contributes the **sensor and signal module**.
- Intelligent pen injector work contributes the **actuation and dosing module**.
- Technical strengths contribute the **software stack and neural routing**.
- Award section contributes the **trust badge / certified build plate**.

Small robots travel between these sources, collect components, and assemble a larger robot or system diagram in a dedicated visual zone.

## Emotional Target

The visitor should think:

> This is not a generic portfolio. This person thinks in systems, robotics, validation, failure, repair, and iteration.

The interaction should feel alive, but still serious enough for recruiters, hiring managers, professors, robotics startups, and applied AI teams.

## Core Loop

The page has a subtle life cycle:

1. **Harvest**
   Small robots or carriers move to project cards and extract symbolic components.

2. **Transport**
   They travel along circuit rails, cable paths, or gantry tracks across the page.

3. **Assemble**
   Components are delivered to a central robot-building zone.

4. **Validate**
   The assembled piece is scanned, measured, and accepted or rejected.

5. **Failure**
   Sometimes a robot malfunctions, loses a component, stalls, or falls into an error state.

6. **Trash / Repair**
   Failed robots are moved into a small scrap bin. Some are recycled into parts.

7. **Rebuild**
   The system continues building. The loop never becomes chaotic, but it feels alive.

This creates a miniature world: life, work, failure, repair, and iteration.

## Visual Style

### Overall Aesthetic

- White lab environment.
- Thin technical SVG linework.
- Google-like formal color palette: blue, green, red, yellow, gray.
- Minimal shadows and clean panels.
- Motion should feel mechanical and purposeful.
- Avoid cartoon mascot styling.
- Avoid dark cyberpunk styling.
- Avoid childish robot faces unless extremely abstract.

Important revision:

The main robot can be cute and characterful, but it must still feel like a premium robotics portfolio element. The robot should be expressive enough to be memorable, but not so goofy that it makes the site feel unserious.

The right target is:

> Cute lab robot assistant, not toy mascot.

### Robots

Robots should be minimal and mechanical:

- Line-art robotic arms.
- Tiny gantry carriers.
- Small wheeled inspection bots.
- Sensor drones represented as crosshair modules.
- Cable crawlers that move along wires.
- Failed robots shown as collapsed line-art shells, not dramatic characters.

## Main Robot Character

We need one really good robot character.

This robot is the emotional anchor of the ecosystem. It is the worker that moves around the website, picks up parts, climbs rails, crosses bridges, carries modules, sometimes fails, gets repaired, and keeps building.

### Personality

The robot should feel:

- Smart.
- Curious.
- Helpful.
- Slightly clumsy sometimes.
- Hard-working.
- Technically credible.
- Cute without becoming childish.

It should not feel:

- Like a cartoon mascot for children.
- Like a gaming NPC.
- Like a random sticker pasted on the page.
- Like a humanoid robot trying too hard to be emotional.

### Visual Design

Recommended shape:

- Small rounded body.
- Two tread wheels or magnetic feet.
- Tiny articulated arms.
- Small display face or sensor visor.
- Backpack/tool module.
- One antenna or status light.
- Simple hands/grippers that can hold project parts.

Color:

- Mostly white/light gray body.
- Blue status light.
- Green success light.
- Yellow warning light.
- Red failure light only during rare breakdowns.

The robot should match the site palette.

### Movement Capability

The robot must be able to move in all directions:

- Left.
- Right.
- Up.
- Down.
- Diagonal along ramps.
- Along rails.
- Up ladders.
- Across section bridges.
- Into and out of project cards.

This means the UI itself must support robot navigation. We cannot just drop a robot on top of the page and hope it makes sense.

### Animation States

The main robot needs reusable states:

- `idle`
- `lookAround`
- `moveLeft`
- `moveRight`
- `moveUp`
- `moveDown`
- `climb`
- `carry`
- `assemble`
- `scan`
- `celebrate`
- `warning`
- `fail`
- `dragToTrash`
- `repair`
- `reboot`

Each state should be short and loopable.

### Expressions

The robot can have a tiny face/visor.

Possible expressions:

- Neutral: two small dots or visor glow.
- Focus: visor narrows.
- Carrying: slight effort bounce.
- Success: green blink.
- Warning: yellow blink.
- Failure: red flicker or X-shaped eyes.
- Reboot: loading dots.

Keep expressions very minimal.

### Holding Objects

The robot should visibly carry parts:

- Brain chip.
- Arm link.
- Sensor module.
- Actuator cylinder.
- Validation badge.
- Cable spool.

Parts should snap to the robot's hand/gripper while carrying.

This is important because the user specifically wants robots taking parts from projects and assembling something bigger.

## UI Changes Required For Robot Navigation

The current UI is card-based. A moving robot needs pathways. Therefore, the layout needs new infrastructure.

### Rails

Rails are thin tracks that robots can move along.

Use rails for:

- Horizontal movement above Selected Work.
- Vertical movement beside Experience.
- Small rails connecting cards to the central assembly dock.
- Bottom rail near Contact for final deployment.

Rail design:

- Thin gray line.
- Tiny blue/green connector nodes.
- Rail switches at intersections.
- Signal packets can travel on the same rails.

### Ladders

Ladders allow vertical robot movement.

Use ladders for:

- Moving from Selected Work row one to row two.
- Moving between research figures and flagship panel.
- Connecting timeline levels.

Ladder design:

- Minimal two-line ladder with small rungs.
- Very light gray by default.
- Brightens when robot climbs.

### Bridges

Bridges connect separated UI islands.

Use bridges for:

- Research panel to research figures.
- Demo section to Selected Work.
- Selected Work to Technical Strengths.

Bridge design:

- Dashed technical path.
- Shows direction arrow when active.
- Should never cross over important text.

### Elevators

Optional later.

Small vertical lift that moves robot between page sections.

Use only if needed, because elevators may become too visually complex.

### Workbenches

Some cards should have small workbench zones.

Use workbenches for:

- Component bays inside selected project cards.
- Assembly dock.
- Scrap bin.
- Repair bay.

Workbench design:

- Small tray or recessed slot.
- Component icon sits inside.
- Robot can pick component from it.

## Layout Implications

To support a moving robot, the UI needs more intentional empty corridors.

Changes to consider:

- Add slightly more vertical spacing between sections.
- Add rails in the whitespace between cards.
- Avoid cards touching too tightly.
- Create a clear assembly zone in Selected Work.
- Keep card content readable and untouched.
- Put robot paths around card edges, not over body text.
- Give media frames calibration corners but leave the center clean.

This may require changing the Selected Work section from a plain card grid into a workshop layout.

## Selected Work Workshop Layout

The Selected Work section should become the main robot playground.

### Current Structure

Currently it is a two-column card grid.

### Proposed Structure

Transform it into:

```txt
Selected Work Header

[ Assembly Dock / Robot Skeleton / Status Panel ]

[ Sim-to-Sim Card ] ---- rail ---- [ Robotic Arm Card ]
        |                             |
      ladder                       ladder
        |                             |
[ Step Counter Card ] ---- rail ---- [ Pen Injector Card ]

[ Scrap Bin ]              [ Repair Bay ]
```

This creates a small map.

### Behavior

- Robot starts near the assembly dock.
- Robot moves to one card.
- Card bay opens.
- Robot picks up a module.
- Robot returns to assembly dock.
- Module snaps into the larger robot.
- Loop continues.
- Rarely, robot fails and gets dragged to scrap or repair.

## Path Planning Model

For the first version, we should not build real pathfinding.

Instead use predefined paths.

### Path Data

Example:

```js
const robotPaths = {
  dockToSim: "M 420 90 L 250 90 L 250 220",
  simToDock: "M 250 220 L 250 90 L 420 90",
  dockToArm: "M 420 90 L 650 90 L 650 220",
  dockToSensor: "M 420 90 L 250 90 L 250 440",
  dockToActuator: "M 420 90 L 650 90 L 650 440",
  dockToTrash: "M 420 90 L 780 90 L 780 520",
};
```

### Why Predefined Paths

- Easier to control.
- Better visual quality.
- Safer for responsive design.
- Less chance of robot crossing text.
- Faster to implement.

Later, we can generate paths dynamically if needed.

## Robot Rendering Options

### Option A: SVG Robot

Best first choice.

Pros:

- Crisp.
- Easy to animate parts.
- Lightweight.
- Can move along SVG paths.
- Easy to recolor.

Cons:

- Harder to make extremely lifelike.

### Option B: CSS/HTML Robot

Pros:

- Easy to build with divs.
- Easy hover effects.

Cons:

- Harder to move cleanly on SVG rails.
- Less precise.

### Option C: Lottie

Pros:

- Could look polished.
- Supports complex character animation.

Cons:

- Extra asset workflow.
- Harder to customize dynamically.
- Could feel generic if not custom-made.

### Option D: Canvas / Three.js

Not recommended for first version.

Pros:

- Could become extremely rich.

Cons:

- Performance risk.
- Too much complexity.
- Can turn portfolio into a game.

## Recommendation

Use a custom SVG robot for version one.

Make it cute through:

- Shape.
- Small visor expression.
- Bounce.
- Carrying behavior.
- Failure/reboot animations.

Not through:

- Big cartoon eyes.
- Speech bubbles everywhere.
- Silly dance loops.

## Robot Scale

Recommended desktop size:

- Normal movement: 44-56px wide.
- Carrying part: 56-70px wide.
- Close inspection mode: 80-100px wide.

Mobile:

- Hide active robot movement or reduce to small static signals.
- Do not let robot cover content.

## Robot Timing

Default loop:

- Idle: 2-4 seconds.
- Move to card: 2-3 seconds.
- Pick up part: 1 second.
- Return: 2-3 seconds.
- Assemble: 1-2 seconds.
- Pause: 3-6 seconds.

Failure:

- Once every 30-60 seconds maximum.
- Never immediately on page load.
- Never while user is trying to click a button.

## Failure And Trash With Cute Robot

The robot can die/fail, but keep the tone engineering-focused.

Possible failure sequence:

1. Robot warning light turns yellow.
2. Robot drops component.
3. Robot freezes.
4. Visor shows small red error mark.
5. Tiny helper bot or conveyor moves it to scrap/repair.
6. Scrap bin receives broken robot.
7. Repair bay emits rebooted robot later.

This gives life/death/rebirth without becoming disturbing.

Better wording in UI:

- `FAULT DETECTED`
- `RECOVERING MODULE`
- `RECYCLED`
- `REBOOT COMPLETE`

Avoid:

- `DEAD`
- `KILLED`
- Violent visuals.

## Rails And Ladders As UI Design

Rails and ladders should become part of the visual identity.

They can replace some plain borders and dividers.

Examples:

- Section dividers become rails.
- Card corners become docking ports.
- Grid gaps become robot corridors.
- Image overlay corners become calibration brackets.
- Timeline vertical line becomes a conveyor rail.

This means the UI itself must evolve, not just receive an overlay.

## Revised MVP

The MVP should now include:

1. Custom cute SVG robot.
2. Selected Work workshop layout.
3. Rails between the four project cards.
4. Ladders between card rows.
5. Assembly dock.
6. Component bays on project cards.
7. Robot moving on predefined paths.
8. Robot carrying one visible part.
9. Robot placing part into assembly dock.
10. One rare fault/recycle animation.

This is much stronger than just wiring cards.

## Revised Implementation Phases

### Phase 1: Robot Character Prototype

Build the robot alone.

Tasks:

- Create `CuteRobot.jsx`.
- Add SVG body, wheels/feet, arms, visor.
- Add idle, move, carry, fail, reboot classes.
- Test size and personality.

Success:

- Robot looks memorable but not childish.

### Phase 2: Workshop Layout

Rework Selected Work.

Tasks:

- Add assembly dock.
- Add rails and ladders.
- Add component bays.
- Preserve existing project card content.

Success:

- The section reads as a workshop map.

### Phase 3: Path Movement

Make robot move.

Tasks:

- Define SVG paths.
- Move robot along one path.
- Carry one component.
- Return to dock.

Success:

- User immediately understands the robot is building something.

### Phase 4: Full Component Loop

Add all project parts.

Tasks:

- Sim-to-sim gives brain.
- Robotic arm gives arm link.
- Step counter gives sensor.
- Pen injector gives actuator.
- Assembly dock shows progress.

Success:

- The selected work section becomes an interactive build story.

### Phase 5: Fault / Trash / Repair

Add life-death-recycle loop.

Tasks:

- Rare fault event.
- Scrap bin.
- Repair bay.
- Reboot animation.

Success:

- It feels alive and funny, but not unserious.

### Phase 6: Extend To Full Page

Only after Selected Work works.

Tasks:

- Research inspection robot.
- Demo calibration drone.
- Timeline conveyor.
- Contact deployment signal.

Success:

- The whole page feels like one robotics ecosystem.

### Parts

Each project gives a symbolic part:

- **Brain module:** small chip / neural core.
- **Arm module:** articulated link.
- **Sensor module:** small waveform block.
- **Actuator module:** motor cylinder.
- **Validation module:** checkmark gauge.
- **Trust plate:** small certified badge.

The parts should be abstract enough to look premium and technical.

## Page-Level Story

### Hero

Hero introduces the lab.

Behavior:

- Background trajectories continue looping.
- A faint “system boot” sequence can happen once.
- Tiny status text says something like `LAB SYSTEM ONLINE`.
- No heavy robots here. Keep it clean.

Purpose:

- Establish that the page is alive.
- Do not distract from name, title, and positioning.

### Credibility Strip

Credibility items behave like four input stations.

Behavior:

- Each credibility item has a small connector port.
- A tiny signal packet leaves one item every few seconds.
- On hover, the item emits a part label, such as `CONTROL`, `SIM`, `ROBOTICS`, `RECOGNITION`.

Purpose:

- Make credibility feel like system inputs.

### Flagship Research

This is the brain and validation core.

Contribution:

- Provides the **controller brain**.
- Provides the **validation gate**.

Behavior:

- A robotic inspection arm scans the research panel.
- A tiny chip module is extracted from the research card and sent along a rail.
- The chip enters the assembly zone.
- If the assembly is incomplete, it waits in a queue.

Special detail:

- When the sim-to-sim card is active, paths should show raw, reference, and corrected lines.
- The validation gate can occasionally reject a component and send it to rework.

### Research Demos / Videos

This section acts like the visual evidence station.

Contribution:

- Provides **camera/sensor calibration data**.
- Provides **motion traces**.

Behavior:

- Calibration drone moves around video corners.
- Small crosshair pauses at image/video corners.
- A signal packet travels from the video frame to the central assembly.

Important:

- Never cover the video controls.
- Motion should stay around edges.

### Experience Timeline

This section acts like the production history conveyor.

Contribution:

- Biocon contributes embedded reliability.
- Freelance/startup contributes applied AI delivery.
- Independent research contributes simulation rigor.

Behavior:

- A vertical rail runs beside timeline cards.
- Tiny carrier bots move downward like a production line.
- Hovering a timeline card routes its carrier to the assembly zone.

### Selected Work

This is the main component warehouse.

Contribution mapping:

- Sim-to-sim residual correction: **brain + validation module**.
- Modular robotic arm: **arm + structure module**.
- Step Counter AI: **sensor + signal module**.
- Intelligent pen injector: **actuator + control module**.

Behavior:

- Each card has a tiny component bay.
- Small robots visit each bay and pick up one component.
- Components travel to a central assembly robot.
- When all four components are delivered, the larger robot briefly completes a build state.

This should be the most “crazy” section, but still controlled.

### Technical Strengths

This section is the neural routing layer.

Contribution:

- Provides software and reasoning pathways.

Behavior:

- Hovering a strength lights up related project cards.
- AI for physical systems links to sim-to-sim, robotic arm, and Biocon.
- Embedded execution links to pen injector and step-counter.
- Control systems links to robotic arm and intelligent pen injector.

No robot arms needed here. It should feel like a brain network.

### Award

This is the certified build plate.

Contribution:

- Provides the **recognition badge** or **quality stamp**.

Behavior:

- A small inspection stamp marks the final assembled robot/system as `RECOGNIZED`.
- Keep it prestigious. Do not make award photos feel like props.

### About / Contact

The system settles.

Behavior:

- The assembled robot becomes quiet.
- A final signal routes toward contact buttons.
- Contact section can show `READY FOR DEPLOYMENT`.

Purpose:

- Convert excitement into action.

## The Central Assembly Idea

We need one visual place where the loop makes sense.

Possible placements:

### Option A: Floating Mini Assembly Dock

A small fixed dock sits at the bottom-right or bottom-left of the viewport.

Pros:

- Always visible.
- Makes the life cycle easy to understand.

Cons:

- Can distract from content.
- Must be very subtle on mobile.

### Option B: Selected Work Assembly Dock

The robot assembly only happens inside Selected Work.

Pros:

- Less distracting.
- Strong thematic fit.
- Easier to make premium.

Cons:

- The full loop only becomes visible when user reaches that section.

### Option C: End-of-Page Assembly Reveal

Parts are collected throughout the page, then assembled near Contact.

Pros:

- Creates a journey.
- Strong narrative payoff.

Cons:

- Harder to implement and harder for visitors to notice.

## Recommendation

Start with **Option B: Selected Work Assembly Dock**.

Once stable, add a tiny global status dock later.

## Life And Death Loop

The user specifically wants life, death, trash, and recycling.

This can be powerful if handled tastefully.

### Robot Life States

Each tiny robot can have states:

- `idle`
- `moving`
- `carrying`
- `assembling`
- `validating`
- `failed`
- `recycled`

### Failure Events

Randomly, but rarely:

- A carrier bot stalls.
- A robot drops a component.
- A signal turns red.
- A validation gate rejects a part.
- A tiny robot collapses into a scrap pose.

### Trash / Scrap Bin

A small scrap bin can exist near the assembly dock.

Visual behavior:

- Failed robot slides into scrap bin.
- Scrap bin converts failure into small gray parts.
- Recycled parts later become a new bot or support component.

Tone:

- No gore, no comic drama.
- This is engineering failure and recycling, not violent death.
- It represents iteration, debugging, and resilience.

### Why This Works

This matches engineering reality:

- Systems fail.
- Bad parts are rejected.
- Components are repaired.
- Good engineering includes validation and recovery.

It can become a metaphor for simulation, robotics, and real-world development.

## Interaction Rules

### Default State

- Robots move slowly.
- Only one or two things active at a time.
- Most animations stay at 20-40% opacity.
- Cards remain readable.

### Hover State

- Hovering a project card activates its part.
- Related wires brighten.
- A robot carrier visits that card.
- The component is highlighted.

### Scroll State

- Each section unlocks a new source.
- Assembly progresses as the user scrolls.
- The system should not require precise interaction to feel alive.

### Random Events

- Rare failures happen every 20-40 seconds.
- Never more than one failure event at a time.
- Failure should be subtle and amusing, not annoying.

### Completion State

- When all parts are collected, the assembled robot/system pulses once.
- The page can show a tiny label: `SYSTEM ASSEMBLED`.
- Then loop restarts gently.

## Component Architecture

### React Components

Proposed components:

```txt
RoboticsEcosystem
RobotCarrier
AssemblyDock
ComponentBay
ScrapBin
SignalRail
CalibrationDrone
InspectionArm
```

### `RoboticsEcosystem`

Top-level coordinator.

Responsibilities:

- Knows active section.
- Knows active network domain.
- Tracks collected components.
- Triggers rare failure events.
- Decides which robots are visible.

### `RobotCarrier`

Small animated robot.

Props:

```txt
type: carrier | crawler | drone
state: idle | moving | carrying | failed | recycled
payload: brain | arm | sensor | actuator | validation | badge
pathId
```

### `AssemblyDock`

Central visual system.

Responsibilities:

- Shows incomplete robot skeleton.
- Accepts modules.
- Shows validation state.
- Shows completed state.

### `ComponentBay`

Attached to cards.

Responsibilities:

- Shows which component the card provides.
- Emits a signal on hover.
- Can visually “release” a component.

### `ScrapBin`

Small failure/recycling zone.

Responsibilities:

- Receives failed robots.
- Shows recycled gray parts.
- Occasionally emits a repaired mini-bot.

## Data Model

Example:

```js
const roboticsParts = [
  {
    id: "sim-brain",
    source: "Deterministic Sim-to-Sim Residual Correction",
    type: "brain",
    domain: "simulation",
    label: "Validation brain",
  },
  {
    id: "arm-link",
    source: "Modular Vision-Guided Robotic Arm",
    type: "arm",
    domain: "robotics",
    label: "Mechanical arm link",
  },
  {
    id: "sensor-core",
    source: "Smart Insulin Pen Step Counter",
    type: "sensor",
    domain: "embedded",
    label: "Signal sensor core",
  },
  {
    id: "actuator-core",
    source: "Motorized Intelligent Pen Injector",
    type: "actuator",
    domain: "control",
    label: "Actuation module",
  },
];
```

## Animation Techniques

### SVG

Use SVG for:

- Wires.
- Robot arms.
- Assembly dock.
- Scrap bin.
- Signal rails.

Why:

- Crisp at any resolution.
- Easy to animate paths.
- Lightweight.

### CSS Motion

Use CSS for:

- Path drawing.
- Hover pulses.
- Small robot bobbing.
- Signal movement.

### React State

Use React for:

- Active network.
- Component collection.
- Failure/recycle event state.
- Section activation.

### Avoid Heavy Libraries Initially

Do not add Three.js yet.

Reason:

- The portfolio must stay fast.
- 3D can become a toy quickly.
- SVG is enough for the first serious prototype.

## Motion Budget

This is important.

At any moment:

- Max 2 robot carriers moving.
- Max 1 failure/recycle event.
- Max 1 inspection arm active.
- Background trajectory remains subtle.
- No animation should cover text for more than a moment.

If everything moves, nothing feels alive. It becomes noise.

## Accessibility

Respect:

- `prefers-reduced-motion`
- Mobile performance
- Pointer interaction

Rules:

- All robot overlays use `aria-hidden="true"`.
- All robot overlays use `pointer-events: none`.
- On mobile, use simplified static robotics only.
- On reduced motion, show static assembly dock and no random failures.

## Performance Guardrails

- No canvas in first version.
- No Three.js in first version.
- Use only a few SVGs.
- Avoid layout animation.
- Animate `opacity`, `transform`, and `stroke-dashoffset`.
- Avoid hundreds of DOM nodes.
- Keep random events timer-based, not frame-loop-based.

## Implementation Phases

### Phase 1: Selected Work Assembly Dock

Goal:

Make the Selected Work section feel like project parts are being assembled.

Build:

- Add an assembly dock above or beside selected work cards.
- Add four component bays.
- Add one carrier robot moving along a path.
- Add part labels.
- Add completion pulse.

No failure loop yet.

### Phase 2: Failure And Scrap Bin

Goal:

Add life/death/recycling.

Build:

- Add one rare failure event.
- Add small scrap bin.
- Failed robot slides into scrap.
- Scrap bin emits recycled part.

Keep it rare and subtle.

### Phase 3: Section-Specific Robots

Goal:

Make the full page feel alive.

Build:

- Research inspection arm.
- Demo calibration drone.
- Timeline conveyor carriers.
- Award quality stamp.

### Phase 4: Scroll-Based Assembly Progress

Goal:

Make page journey meaningful.

Build:

- As user scrolls through sections, parts unlock.
- Assembly dock updates.
- Contact shows final `READY FOR DEPLOYMENT` state.

### Phase 5: Advanced Polish

Goal:

Make it feel custom and memorable.

Build:

- More expressive robot paths.
- Better component icons.
- Smarter hover relationship mapping.
- Microcopy around validation/failure/recycle.

## MVP Prototype

The first prototype should only include:

- Selected Work assembly dock.
- Four project component bays.
- One carrier robot.
- One completed robot skeleton.
- One completion pulse.
- No random death yet.

Why:

- It proves the core metaphor.
- It is easier to judge visually.
- It avoids overwhelming the site.

## What Good Looks Like

The user should understand the idea in 5 seconds:

> Each project contributes one part to a larger robotics system.

The animations should make the site feel:

- Alive.
- Engineered.
- Technical.
- Memorable.
- Premium.

## What Bad Looks Like

Avoid:

- Robots everywhere.
- Cartoon eyes or mascot behavior.
- Random motion with no meaning.
- Covering images/videos.
- Making cards harder to read.
- Making recruiters think this is a toy project.

## Open Questions For Review

1. Should the assembly dock be inside Selected Work only, or fixed globally?
2. Should robot failure be funny, serious, or almost invisible?
3. Should the final assembled object look like a robot arm, humanoid robot, or abstract cyber-physical system?
4. Should the system reset automatically, or only after the user scrolls away and returns?
5. Should the interaction be mostly automatic, mostly hover-driven, or both?

## Current Recommendation

Build this in the following order:

1. Selected Work assembly dock.
2. Component bays on the four selected project cards.
3. Carrier robot that transports parts.
4. Completed robot/system visual.
5. Rare failure and scrap bin.
6. Section-specific robots.

This gives us the crazy idea, but in a controlled engineering way.
