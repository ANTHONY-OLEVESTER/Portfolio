# Concept 07: Robot Worker Behavior System

## Updated Direction

The existing robot design is acceptable.

Do not restart with a new sprite system.

Do not archive the robot concept.

The issue is not the robot's existence. The issue is that the robot needs more life, better pacing, and a better relationship to the existing page.

The robot should feel like a worker moving through the real portfolio.

## Core Behavior

Each robot should:

1. spawn from an edge or quiet page area
2. move slowly to a source card
3. stop and work at the card
4. show tool/effect animation
5. package a module
6. carry it to a destination
7. hand it off
8. exit or continue to the next job

Movement must be constant-speed and distance-based.

## Constant-Speed Movement

Do not use fixed animation duration for every route.

Use:

```txt
durationMs = distancePx / speedPxPerMs
```

Recommended:

```txt
speed = 40px/s
speedPxPerMs = 0.04
```

Examples:

```txt
400px route = 10 seconds
800px route = 20 seconds
1200px route = 30 seconds
```

This makes long routes feel long and short routes feel short.

## Robot Count

Because movement is slow, one robot will not be enough.

Robots should spawn on a schedule.

Use:

```txt
spawnInterval = 10 seconds
```

Calculate approximate active robot count:

```txt
activeRobots = ceil(averageJobDuration / spawnInterval)
```

Example:

```txt
averageJobDuration = 45 seconds
spawnInterval = 10 seconds
activeRobots = 5
```

Recommended desktop limits:

- minimum: 2 active robots
- ideal: 4-5 active robots
- maximum: 6 active robots

Tablet:

- maximum: 2 active robots

Mobile:

- no moving robots

## Job Durations

Each job consists of:

```txt
spawn -> source travel -> work -> package -> destination travel -> handoff -> exit
```

Recommended timing:

- source travel: distance-based
- work: 6-10 seconds
- package: 1.5-2 seconds
- destination travel: distance-based
- handoff: 1-2 seconds
- exit: distance-based or fade

Average total job:

```txt
35-70 seconds
```

## Job Types

### Research Worker

Source:

- sim-to-sim research card or research figure

Work:

- scan beam
- trajectory check
- blue validation chip package

Destination:

- technical strengths or contact

### Mechanical Worker

Source:

- robotic arm project card

Work:

- hammer/wrench
- sparks
- arm module package

Destination:

- selected work summary or contact

### Embedded Worker

Source:

- step counter card

Work:

- waveform
- probe/solder
- sensor package

Destination:

- embedded strength card or contact

### Control Worker

Source:

- pen injector card

Work:

- gauge
- calibration
- actuator package

Destination:

- control strength card or contact

### Delivery Worker

Source:

- any completed package point

Work:

- no heavy tool work

Destination:

- contact section

Purpose:

- keeps the page moving while other robots are working

## Robot Life

The robot needs life through behavior, not just more sprites.

Add:

- small idle bounce
- head/visor look while stopped
- tool wiggle during work
- carrying lean when holding package
- small arrival overshoot
- pause before turning
- brief status light change

Avoid:

- wild dancing
- fast jittering
- random arm/leg disappearance
- movement that ignores distance

## Work Effects

Work effects should happen at the source card, not in a separate workshop.

### Research

- blue scan line
- tiny trajectory glyph
- green pass pulse

### Mechanical

- controlled sparks
- bolt spin
- hammer tap

### Embedded

- waveform lock
- solder sparkle
- signal pulse

### Control

- gauge needle settles
- motor ring spins
- feedback pulse

## Package Effects

After work:

- package appears near robot
- package attaches to robot
- robot carries it
- destination glows when delivered

Package colors:

- research: blue
- mechanical: green
- embedded: yellow
- control: red

## Routing

Use page anchors measured from DOM.

Each source/destination gets an anchor:

```js
{
  id: "sim-to-sim-card",
  type: "source",
  domain: "simulation",
  getAnchor: elementCenterOrEdge,
}
```

Routes should be generated from current DOM positions:

```js
const distance = Math.hypot(to.x - from.x, to.y - from.y);
const duration = distance / speed;
```

If path crosses important content, route through a midpoint near whitespace:

```txt
from -> safe midpoint -> destination
```

## Spawn Scheduling

Use a route queue.

Example:

```txt
0s: research worker
10s: mechanical worker
20s: embedded worker
30s: control worker
40s: delivery worker
```

When a robot completes:

- either exits
- or gets assigned next queued job

This creates continuous life without overwhelming the page.

## UI Integration

Existing cards should receive data attributes or class hooks:

```txt
data-robot-source="simulation"
data-robot-source="robotics"
data-robot-source="embedded"
data-robot-source="control"
data-robot-destination="contact"
```

The robot layer reads their positions and animates independently.

No need to restructure the page into a workshop.

## Implementation Components

Recommended:

```txt
RobotEcosystemLayer
RobotAgent
RobotPackage
RobotWorkEffect
useRobotAnchors
useRobotScheduler
```

### `RobotEcosystemLayer`

Global overlay positioned over the page.

Responsibilities:

- measure anchors
- create routes
- spawn robots
- coordinate work effects
- clean up completed robots

### `RobotAgent`

One robot instance.

Responsibilities:

- move at constant speed
- show work state
- show package state
- exit after delivery

### `RobotWorkEffect`

Card-level effect.

Responsibilities:

- scan
- sparks
- waveform
- gauge

### `useRobotScheduler`

Responsibilities:

- spawn one robot every N seconds
- limit active robots
- rotate job types
- calculate robot count from job duration

## Viewer Safety

Rules:

- Robots use `pointer-events: none`.
- Robots should be small.
- Robots should avoid buttons.
- Robots pause/work near card edges.
- Never cover important paragraphs for long.
- Disable on mobile.
- Respect reduced motion.

## Next Implementation Recommendation

Remove the separate workshop map.

Keep the current robot style.

Build:

1. `RobotEcosystemLayer`
2. data anchors on existing project cards/sections
3. constant-speed route calculation
4. multiple staggered robots
5. work effects at cards
6. package/delivery effects

This matches the desired direction better than rails, ladders, or a separate build arena.
