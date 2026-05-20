# Concept 06: Live Robotics Ecosystem

## Updated Direction

The ecosystem should run on the existing portfolio page.

No separate workshop arena.

No artificial rails.

No ladders.

No special new section where all building happens.

The existing sections and cards are the world. Robots move slowly through the real page, visit existing project cards, work on them, package parts, and deliver those parts to existing destination areas.

The page should feel like a living technical environment, not a game board.

## What The Viewer Should See

The viewer scrolls through the normal portfolio and notices:

- Tiny robots moving slowly between existing cards.
- Robots stop at project cards and work for a while.
- A robot packages a small module after work is complete.
- Another robot may arrive later to continue the pipeline.
- Modules are delivered to relevant destinations on the same page.
- Multiple robots are active, but not too many.
- Motion follows real distances on the page and feels physically paced.

The page stays readable. The animation is a secondary layer.

## Core Rule

Robots must behave as if they are moving through the actual UI.

They should not:

- teleport
- move on fake rails
- move at different speeds for different distances
- all finish at the same time
- cross directly over important text for long periods
- require a separate assembly map

They should:

- move at a constant speed
- take longer for longer distances
- work at the source card for visible time
- carry or package a part
- deliver to a meaningful existing destination
- spawn on a staggered schedule

## Existing Page As The World

### Sources

Source locations are existing cards/sections:

- Sim-to-sim research card.
- Final-year robotic arm card.
- Biocon Step Counter AI card.
- Pen Injector card.
- Research demo/video cards.
- Experience cards.

### Destinations

Destination locations should also be existing page elements:

- Contact section: “ready for deployment” delivery.
- Technical strengths section: capability routing.
- Research section: validation module delivery.
- Selected Work section: project part packaging.
- Award section: quality stamp / recognition delivery.

No new central arena is required.

## Robot Jobs

Each robot should have a job.

Examples:

### Research Courier

Source:

- Sim-to-sim research card.

Work:

- scans plots
- packages a blue validation chip

Destination:

- Technical strengths or contact section

Meaning:

- research output becomes employable technical strength

### Mechanical Builder

Source:

- Modular robotic arm project card.

Work:

- hammering / tightening
- short sparks
- packages arm-link module

Destination:

- selected work summary or contact section

Meaning:

- physical build becomes portfolio evidence

### Embedded Signal Robot

Source:

- Step Counter AI card.

Work:

- probes signal
- waveform stabilizes
- packages yellow sensor module

Destination:

- embedded strengths card or contact section

Meaning:

- embedded signal work becomes capability proof

### Control Calibration Robot

Source:

- Pen Injector card.

Work:

- gauge oscillates
- feedback settles
- packages actuator module

Destination:

- control systems strength card or contact section

Meaning:

- control/actuation work becomes hiring signal

## Constant-Speed Movement

Movement must be distance-based.

Do not assign every route the same animation duration.

Use:

```txt
duration = distance / robotSpeed
```

Recommended speed:

```txt
robotSpeed = 35 to 55 pixels per second
```

Example:

```txt
distance = 900px
speed = 45px/s
duration = 20s
```

This solves the old problem where robots rushed long paths and crawled short paths.

## Robot Count Calculation

Robots should spawn based on route duration and work time.

Each job has:

```txt
travelToSource
workTime
travelToDestination
handoffTime
returnOrExitTime
```

Total job time:

```txt
jobTime = travelToSource + workTime + travelToDestination + handoffTime + exitTime
```

Spawn interval:

```txt
spawnInterval = 10 seconds
```

Approximate robots needed:

```txt
robotsNeeded = ceil(jobTime / spawnInterval)
```

Example:

```txt
jobTime = 48 seconds
spawnInterval = 10 seconds
robotsNeeded = 5
```

This keeps the ecosystem alive without overloading the page.

## Robot Spawn Rules

Recommended:

- Spawn one robot every 8-14 seconds.
- Do not spawn all robots from the same side.
- Use 3-6 active robots on desktop.
- Use 0-2 active robots on tablet.
- Use no moving robots on mobile, only static signals.

Robots should have different jobs so the viewer sees variety:

- one scanning research
- one building mechanical module
- one probing embedded signal
- one calibrating actuator
- one delivering packaged module

## Robot Work Timing

Robots should spend more time working than traveling.

Recommended per source:

- arrive and align: 1-2 seconds
- work effect: 6-10 seconds
- package module: 2 seconds
- leave: distance-based

This makes them feel like workers, not delivery dots.

## Packaging Behavior

After working on a source card:

1. small module appears near the card
2. robot picks it up
3. package icon attaches to robot
4. card emits a small status label
5. robot moves to destination

Package visuals:

- blue chip for sim-to-sim
- green arm link for robotic arm
- yellow waveform core for step counter
- red actuator cylinder for pen injector

## No Rails / No Ladders

Do not draw heavy rails or ladders.

Instead use:

- subtle path glow under robot only while moving
- small dust/energy trail
- brief hover-like glow on destination
- route line that appears only during robot movement and fades behind it

This keeps the page clean and prevents the UI from becoming a map.

## Existing UI Integration

Robots should use existing card geometry.

Each card can expose invisible anchor points:

```txt
sourceAnchor
workbenchAnchor
destinationAnchor
exitAnchor
```

These anchors are measured with `getBoundingClientRect`.

The robot travels between anchors in page coordinates.

## Collision / Readability Rules

Robots may pass through whitespace and card edges.

Robots should avoid:

- button centers
- paragraph text blocks
- faces/photos
- video controls
- open image overlays

If route crosses text, route should curve around the card edge.

## Viewer Meaning

Every moving robot must communicate one of these:

- project evidence being processed
- engineering validation
- embedded signal reading
- control calibration
- packaged capability being delivered
- system recovery

If a robot is just wandering, remove it.

## Desktop / Mobile Behavior

Desktop:

- full robot ecosystem
- 3-6 robots active
- slow movement
- work effects on cards

Tablet:

- fewer robots
- reduced path distance
- less overlap

Mobile:

- no moving robots
- show static module badges or small status pulses only

## Implementation Recommendation

Replace the separate workshop section with:

1. A global `RobotEcosystemLayer` over the page.
2. Existing cards marked with data anchors.
3. Route definitions between existing sections.
4. Constant-speed movement using measured distances.
5. Multiple staggered robot instances.
6. Work effects triggered at source cards.
7. Package/delivery effects triggered at destinations.

Do not build another artificial workshop map.

## Success Criteria

This works if the viewer thinks:

- the whole page feels alive
- robots are doing meaningful work
- the project cards feel like real engineering sources
- the motion supports the portfolio story
- the page remains readable

This fails if:

- robots feel random
- robots move too fast
- robots cover content
- there are too many robots
- the site starts feeling like a game
