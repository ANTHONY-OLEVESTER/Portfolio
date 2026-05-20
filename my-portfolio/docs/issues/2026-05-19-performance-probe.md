# Portfolio Performance Probe - 2026-05-19

## Scope

This is a measurement-only report. No animations, robots, conversations, videos, cards, or media were removed.

The goal is to identify what is making the website feel heavy and why scrolling can feel slow.

## Measurement Setup

| Item | Value |
|---|---:|
| App mode | Production build via `npm run build` |
| Local server | `vite preview --host 127.0.0.1 --port 4173` |
| Browser probe | Microsoft Edge headless, Chromium 148 |
| URL tested | `http://127.0.0.1:4173/Portfolio/` |
| Viewport | `1414 x 1007`, DPR `1` |
| Probe type | Performance API resource timing + DOM inspection + scripted scroll |
| Scroll test | 37 scroll steps to bottom, `260px` each, `140ms` spacing |
| Important limitation | YouTube iframe and range-video transfer sizes are partially hidden by browser/cross-origin reporting, so file-size inventory is more reliable than `transferSize` for those items. |

## Executive Summary

| Metric | Measured Value | Meaning |
|---|---:|---|
| Total `dist` footprint | `11.695 MB` | Everything deployed after build. |
| Static media/docs footprint | `11.372 MB` | Almost the entire deployed weight is media/PDF/video/image files. |
| Initial measured transfer | `2.602 MB` | What the browser actually pulled during the first render probe, excluding some opaque iframe/range-video cost. |
| Initial decoded resource weight | `2.839 MB` | Browser-decoded resource payload in the timing API. |
| DOMContentLoaded | `2471 ms` | Main app became parse/interactive-ready after about 2.47s in local preview. |
| Load event | `2472 ms` | Browser `load` fired at about the same point. |
| YouTube iframe response end | `6936 ms` | The public robotic arm embed continues loading well after the page itself is ready. |
| Initial DOM nodes | `546` | Not huge, but heavier than a static resume because of cards, SVGs, robots, overlays, and media. |
| DOM nodes after scroll | `591` | Robots/guide/runtime elements add DOM while the page runs. |
| Initial animated/transition elements | `103` | High for a portfolio page. |
| Animated/transition elements after scroll | `109` | Robot/guide layer adds active animation work. |
| CSS source size | `86.4 KB`, `4826 lines` | Large for a single-page portfolio; includes old experimental workshop systems. |
| CSS keyframes | `63` | High animation surface area. |
| CSS animation declarations | `70` | High continuous animation surface area. |
| Scroll long tasks | `10` tasks, `1476 ms` total | Strong evidence that main-thread work is interrupting smooth scroll. |
| Worst scroll long task | `366 ms` | A single long task above 100ms is very visible; 366ms feels like scroll freezing. |

## Current Top Suspects

| Rank | Suspect | Evidence | Why It Hurts Scroll |
|---:|---|---|---|
| 1 | YouTube iframe | `4364 ms` iframe resource duration, response end at `6936 ms` | Third-party embed injects its own scripts, layout, network work, and compositing. It keeps working after the app is loaded. |
| 2 | Too many active CSS animations/transitions | `103` animated/transition elements initially, `109` after scroll, `63` keyframes, `70` animation declarations | Even if each animation is small, combined animation/compositing work competes with scroll. |
| 3 | Robot ecosystem runtime | `robotSpeed`, spawn loop every `10000 ms`, `maxRobots: Infinity`, route traces, SVG robots, requestAnimationFrame follow bot | Robots are alive while scrolling; state changes, transforms, SVG paints, route traces, and guide bubbles all add runtime work. |
| 4 | Large visible media | Initial visible/rendered media includes `1.029 MB` spectrogram PNG, `0.477 MB` assembly image, `0.341 MB` pen injector, MP4 and iframe | Browser decodes and paints large images even when displayed much smaller than natural size. |
| 5 | Large CSS from accumulated experiments | `index.css` is `4826` lines with `245` `.robot...` selectors and `129` old workshop/rail/assembly related matches | CSS parse/match cost plus unused-but-loaded animation rules increase style overhead. |
| 6 | Scroll-driven React state | `useViewportWindow` updates React state on scroll via rAF; `ScrollCompanionRobot` runs rAF continuously; robot scheduler adds/removes nodes | React and JS work can land during scroll; the long-task probe confirms main-thread interruptions. |
| 7 | Rendered card density | `38` card/panel-like elements and `10` sections | Not extreme alone, but cards include overlays, anchors, images, SVGs, and robot anchors. |

## Build Artifact Inventory

### Full `dist` Weight

| Asset | Size MB | Notes |
|---|---:|---|
| `dist/assets/anthony-olevester-resume.pdf` | `3.860` | Largest deployed file. Not initially loaded unless resume link is clicked. |
| `dist/assets/final-year-project/final-year-project-thesis.pdf` | `2.442` | Large deployed PDF. Not initially loaded unless linked/opened. |
| `dist/assets/sim2sim/compare-triptych.mp4` | `1.768` | Loaded by demo video element; browser timing uses range/opaque values, so file inventory is more reliable. |
| `dist/assets/biocon/stepcounter-spectrogram.png` | `1.029` | Largest image and loaded initially. |
| `dist/assets/final-year-project/assembly-image.png` | `0.477` | Loaded in demos and selected work. |
| `dist/assets/biocon/pen-injector.png` | `0.341` | Loaded in selected work. |
| `dist/assets/final-year-project/thesis-page-49.png` | `0.338` | Deployed but not seen in initial rendered media list. |
| `dist/assets/index-vw1Xxnfq.js` | `0.254` | JS bundle decoded size. |
| `dist/assets/final-year-project/thesis-page-50.png` | `0.241` | Deployed but not seen in initial rendered media list. |
| `dist/assets/biocon/stepcounter-dose-read.png` | `0.220` | Loaded in demos. |
| `dist/media/hadron-shot.jpg` | `0.206` | Deployed, not seen in initial rendered media list. |
| `dist/assets/awards/biocon-rising-star-1.jpg` | `0.103` | Loaded in award section. |
| `dist/assets/awards/biocon-rising-star-2.jpg` | `0.102` | Loaded in award section. |
| `dist/assets/sim2sim/triptych-frame.png` | `0.071` | Loaded in research and as video poster. |
| `dist/assets/index-C5UZCAme.css` | `0.067` | CSS bundle decoded size. |
| `dist/assets/sim2sim/rollout-phys-p95.png` | `0.067` | Loaded in research and selected work. |
| `dist/assets/sim2sim/ee-traj-xy.png` | `0.056` | Loaded in research. |
| `dist/assets/biocon/stepcounter-training.png` | `0.031` | Deployed but not seen in initial rendered media list. |
| `dist/assets/profile/anthony-profile.jpg` | `0.021` | Loaded twice visually, one actual resource. |
| `dist/vite.svg` | `0.001` | Default leftover asset. |
| `dist/index.html` | `0.001` | HTML shell. |

### Source Hotspots

| Source File | Size | Why It Matters |
|---|---:|---|
| `src/index.css` | `86.4 KB` | Main style and animation weight. Contains current visuals plus old workshop/2.5D experiment CSS. |
| `src/App.jsx` | `21.4 KB` | Large single component rendering all sections/cards/lightbox/navigation. |
| `src/data/robotNarrationData.js` | `16.6 KB` | Copy/data only; bundle weight is acceptable, runtime cost low. |
| `src/data/portfolioData.js` | `14.1 KB` | Main portfolio content and asset references. |
| `src/components/RobotAgent.jsx` | `7.0 KB` | Per-robot lifecycle, timers, state changes, route phases. |
| `src/data/screenGuideData.js` | `6.0 KB` | Guide copy/data only; runtime cost low. |
| `src/data/robotEcosystemData.js` | `4.7 KB` | Robot job definitions; `maxRobots: Infinity` is important. |
| `src/components/RobotEcosystemLayer.jsx` | `4.5 KB` | Measures anchors, schedules robots, renders selected narration. |
| `src/components/ScrollCompanionRobot.jsx` | `4.3 KB` | Continuous rAF follower. |
| `src/components/CuteRobot.jsx` | `4.1 KB` | SVG robot shape rendered per robot. |

## Initial Resource Timing Waterfall

| Resource Type | Resource | Start ms | Duration ms | Response End ms | Transfer MB | Decoded MB | Notes |
|---|---|---:|---:|---:|---:|---:|---|
| iframe | YouTube embed | `2573` | `4364` | `6936` | `0` | `0` | Cross-origin transfer hidden; timing still shows it continues longest. |
| video | `/assets/sim2sim/compare-triptych.mp4` | `3273` | `838` | `4111` | `0` | `0` | Range/opaque timing hides full file weight; actual file is `1.768 MB`. |
| script | `/assets/index-vw1Xxnfq.js` | `1793` | `522` | `2315` | `0.079` | `0.254` | JS parse/execute contributes to initial readiness. |
| link | `/assets/index-C5UZCAme.css` | `1795` | `325` | `2119` | `0.015` | `0.067` | CSS file is not huge in bytes, but has many animation rules. |
| img | `/assets/biocon/stepcounter-spectrogram.png` | `2591` | `325` | `2916` | `1.030` | `1.029` | Largest initially loaded image. |
| img | `/assets/biocon/pen-injector.png` | `2591` | `293` | `2884` | `0.341` | `0.341` | Loaded in selected work. |
| img | `/assets/awards/biocon-rising-star-2.jpg` | `2592` | `264` | `2856` | `0.102` | `0.102` | Award image. |
| img | `/assets/awards/biocon-rising-star-1.jpg` | `2592` | `263` | `2854` | `0.103` | `0.103` | Award image. |
| img | `/assets/final-year-project/assembly-image.png` | `2590` | `242` | `2832` | `0.477` | `0.477` | Loaded in demo/work. |
| video range/poster | `/assets/sim2sim/compare-triptych.mp4` | `4106` | `215` | `4321` | `0.018` | `0.018` | Additional video request. |
| img | `/assets/biocon/stepcounter-dose-read.png` | `2590` | `200` | `2790` | `0.220` | `0.220` | Loaded in demos. |
| css | Google Fonts CSS | `2122` | `194` | `2317` | `0.001` | `0.013` | Font files themselves may be browser-managed/cached differently. |
| img | `/assets/sim2sim/rollout-phys-p95.png` | `2589` | `170` | `2760` | `0.067` | `0.067` | Research and work image. |
| video poster | `/assets/sim2sim/triptych-frame.png` | `2588` | `167` | `2755` | `0.072` | `0.071` | Research figure/poster. |
| img | `/assets/sim2sim/ee-traj-xy.png` | `2589` | `167` | `2757` | `0.056` | `0.056` | Research figure. |
| img | `/assets/profile/anthony-profile.jpg` | `2587` | `138` | `2726` | `0.021` | `0.021` | Profile/brand image. |
| other | `favicon.ico` | `3740` | `81` | `3821` | `0` | `0` | Missing/default favicon request. |

## Rendered Media: Element-Level Weight

| Section | Card/Area | Tag | Rendered Size | Natural Size | Load Duration ms | Transfer MB | Source |
|---|---|---|---:|---:|---:|---:|---|
| root | header brand | img | `42x42` | `400x400` | `138` | `0.021` | `/assets/profile/anthony-profile.jpg` |
| hero | profile photo | img | `76x76` | `400x400` | `138` | `0.021` | `/assets/profile/anthony-profile.jpg` |
| research | Open full figure | img | `521x293` | `1920x360` | `167` | `0.072` | `/assets/sim2sim/triptych-frame.png` |
| research | Open full figure | img | `521x293` | `1295x535` | `170` | `0.067` | `/assets/sim2sim/rollout-phys-p95.png` |
| research | Open full figure | img | `521x293` | `1040x800` | `167` | `0.056` | `/assets/sim2sim/ee-traj-xy.png` |
| demos | Final year project | iframe | `1150x647` | `1150x647` | `4364` | hidden | YouTube embed |
| demos | Research demonstration | video | `552x311` | `1920x368` | `838` | hidden | `/assets/sim2sim/compare-triptych.mp4` |
| demos | Research demonstration | source | `0x0` | `0x0` | `838` | hidden | `/assets/sim2sim/compare-triptych.mp4` |
| demos | Open full image | img | `552x311` | `702x599` | `242` | `0.477` | `/assets/final-year-project/assembly-image.png` |
| demos | Open full image | img | `552x311` | `1043x821` | `200` | `0.220` | `/assets/biocon/stepcounter-dose-read.png` |
| work | Open full image | img | `580x326` | `1295x535` | `170` | `0.067` | `/assets/sim2sim/rollout-phys-p95.png` |
| work | Open full image | img | `580x326` | `702x599` | `242` | `0.477` | `/assets/final-year-project/assembly-image.png` |
| work | Open full image | img | `580x326` | `1902x951` | `325` | `1.030` | `/assets/biocon/stepcounter-spectrogram.png` |
| work | Open full image | img | `580x326` | `1021x780` | `293` | `0.341` | `/assets/biocon/pen-injector.png` |
| award | Open full image | img | `281x158` | `1280x960` | `263` | `0.103` | `/assets/awards/biocon-rising-star-1.jpg` |
| award | Open full image | img | `281x158` | `1280x899` | `264` | `0.102` | `/assets/awards/biocon-rising-star-2.jpg` |

## Section-Level DOM and Media Cost

| Section | Cards | DOM Nodes Inside Cards | Animated Descendants | Images | Videos/Iframes | SVGs | Buttons/Links |
|---|---:|---:|---:|---:|---:|---:|---:|
| research | `8` | `75` | `6` | `3` | `0` | `1` | `6` |
| work | `4` | `60` | `0` | `4` | `0` | `0` | `4` |
| demos | `4` | `50` | `0` | `2` | `2` | `0` | `6` |
| experience | `3` | `30` | `0` | `0` | `0` | `0` | `0` |
| strengths | `6` | `19` | `0` | `0` | `0` | `0` | `0` |
| award | `3` | `18` | `0` | `2` | `0` | `0` | `2` |
| contact | `1` | `8` | `0` | `0` | `0` | `0` | `3` |
| hero | `3` | `6` | `0` | `0` | `0` | `0` | `0` |
| about | `2` | `2` | `0` | `0` | `0` | `0` | `0` |
| credibility/root | `4` | `0` | `0` | `0` | `0` | `0` | `0` |

## Card-Level DOM Cost

| Section | Card | Nodes | Animated | Images | Video/Iframe | SVG | Actions | Size |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| hero | AI + Robotics | `2` | `0` | `0` | `0` | `0` | `0` | `398x156` |
| hero | Control to Deployment | `2` | `0` | `0` | `0` | `0` | `0` | `398x201` |
| hero | Research + Execution | `2` | `0` | `0` | `0` | `0` | `0` | `398x201` |
| credibility/root | Biocon/control strip item | `0` | `0` | `0` | `0` | `0` | `0` | `295x108` |
| credibility/root | Sim-to-sim strip item | `0` | `0` | `0` | `0` | `0` | `0` | `295x108` |
| credibility/root | Robotics strip item | `0` | `0` | `0` | `0` | `0` | `0` | `295x108` |
| credibility/root | Award/research strip item | `0` | `0` | `0` | `0` | `0` | `0` | `295x108` |
| research | Zenodo publication panel | `44` | `6` | `0` | `0` | `1` | `3` | `639x1311` |
| research | bullet-card 1 | `1` | `0` | `0` | `0` | `0` | `0` | `287x143` |
| research | bullet-card 2 | `1` | `0` | `0` | `0` | `0` | `0` | `287x143` |
| research | bullet-card 3 | `1` | `0` | `0` | `0` | `0` | `0` | `287x143` |
| research | bullet-card 4 | `1` | `0` | `0` | `0` | `0` | `0` | `287x143` |
| research | Canonical visual comparison | `9` | `0` | `1` | `0` | `0` | `1` | `523x444` |
| research | Rollout physical error summary | `9` | `0` | `1` | `0` | `0` | `1` | `523x417` |
| research | End-effector trajectory overlay | `9` | `0` | `1` | `0` | `0` | `1` | `523x417` |
| demos | Final year project iframe card | `11` | `0` | `0` | `1` | `0` | `1` | `1180x969` |
| demos | Sim-to-sim local video card | `11` | `0` | `0` | `1` | `0` | `1` | `582x672` |
| demos | Final-year assembly image card | `14` | `0` | `1` | `0` | `0` | `2` | `582x672` |
| demos | Step-counter image card | `14` | `0` | `1` | `0` | `0` | `2` | `582x672` |
| experience | Biocon | `10` | `0` | `0` | `0` | `0` | `0` | `1178x304` |
| experience | Freelance / Startup Work | `10` | `0` | `0` | `0` | `0` | `0` | `1178x304` |
| experience | Independent Research | `10` | `0` | `0` | `0` | `0` | `0` | `1178x303` |
| work | Deterministic Sim-to-Sim Residual Correction | `15` | `0` | `1` | `0` | `0` | `1` | `582x570` |
| work | Modular Vision-Guided Robotic Arm | `15` | `0` | `1` | `0` | `0` | `1` | `582x570` |
| work | Smart Insulin Pen Step Counter | `15` | `0` | `1` | `0` | `0` | `1` | `582x615` |
| work | Motorized Intelligent Pen Injector | `15` | `0` | `1` | `0` | `0` | `1` | `582x615` |
| strengths | AI for physical systems | `3` | `0` | `0` | `0` | `0` | `0` | `383x221` |
| strengths | Robotics simulation | `4` | `0` | `0` | `0` | `0` | `0` | `383x221` |
| strengths | Control systems thinking | `3` | `0` | `0` | `0` | `0` | `0` | `383x221` |
| strengths | Embedded and edge execution | `3` | `0` | `0` | `0` | `0` | `0` | `383x230` |
| strengths | Applied AI/ML systems | `3` | `0` | `0` | `0` | `0` | `0` | `383x230` |
| strengths | Research-to-engineering translation | `3` | `0` | `0` | `0` | `0` | `0` | `383x230` |
| award | Award copy panel | `4` | `0` | `0` | `0` | `0` | `0` | `581x261` |
| award | Rising Star image 1 | `7` | `0` | `1` | `0` | `0` | `1` | `283x261` |
| award | Rising Star image 2 | `7` | `0` | `1` | `0` | `0` | `1` | `283x261` |
| about | About card 1 | `1` | `0` | `0` | `0` | `0` | `0` | `581x202` |
| about | About card 2 | `1` | `0` | `0` | `0` | `0` | `0` | `581x202` |
| contact | Start a conversation | `8` | `0` | `0` | `0` | `0` | `3` | `1180x172` |

## Animation and CSS Surface Area

| CSS Metric | Count / Size | Notes |
|---|---:|---|
| CSS source size | `88,447 bytes` / `86.4 KB` | Source CSS before build output naming. |
| CSS lines | `4826` | Very large for a portfolio page. |
| `@keyframes` blocks | `63` | Heavy animation vocabulary. |
| `animation:` declarations | `70` | Many rules can create continuous compositor/main-thread work. |
| `transition:` declarations | `14` | Fine alone, but adds style work across many cards. |
| `.robot...` selector matches | `245` | Robot system is now a major CSS subsystem. |
| `trajectory` selector/text matches | `55` | Full-page trajectory background remains active. |
| Old workshop/rail/assembly text matches | `129` | CSS from earlier experiments is still present and parsed. |

### Active Animation Rules Seen In CSS

| Area | Example Rules | Scroll Risk |
|---|---|---|
| Follow bot | `companionFloat`, `companionFloatUp` | Continuous side animation plus rAF movement. |
| Robot workers | `robotWorkerFocus`, `robotInstallNod`, `routeTraceFlow`, `packageBob` | Active while robots move/work/carry. |
| Work effects | `sparkBurst`, `scanPass`, `waveformLock`, `solderSpark`, `gaugeSettle`, `moduleReadyPop` | Active during work phases. |
| Full-page background | `drawTrajectoryLoop`, `checkpointLoop`, `signalRail`, `portPulse` | Always contributes to visual work. |
| Legacy workshop | `workshopRailDraw`, `ladderCurrent`, `assemblyCoreBreathe`, `moduleInstall`, `scrapDrop`, `repairReboot` | Not necessarily visible, but CSS is still loaded and matched. |
| Robot SVG internals | `treadRun`, `workArmBeat`, `robotLookAround`, `robotStatusBlink` | Runs per robot/SVG instance. |

## Robot Runtime Cost

| Element | Current Behavior | Performance Concern |
|---|---|---|
| `robotEcosystemConfig.maxRobots` | `Number.POSITIVE_INFINITY` | No hard cap. Robots are removed when their long route finishes, but long sessions can have several active robots. |
| `robotEcosystemConfig.spawnInterval` | `10000 ms` | New robot every 10s. Fine alone, but expensive with long routes and no cap. |
| `RobotAgent` | Multiple timers per robot phase, SVG robot, optional package, optional route trace, optional work effects | Every active robot adds DOM, animations, timers, and transitions. |
| `RobotRouteTrace` | SVG line during route phases | Adds SVG paint/composite work. |
| `RobotWorkEffect` | Domain-specific animated effects | Visually good, but adds animated DOM during work windows. |
| `ScrollCompanionRobot` | Continuous `requestAnimationFrame`, direct transform updates, scroll/resize listeners | More efficient than React state each frame, but still runs constantly. |
| `useViewportWindow` | Scroll listener schedules rAF and updates React state | Causes React re-renders during scroll; likely contributes to scroll jank. |
| `RobotSpeechBubble` | Queries `.site-shell` when rendered | Low cost unless constantly opened/closed. |

## Scripted Scroll Probe

The probe scrolled from top to bottom in 37 steps. The browser recorded 10 long tasks.

| Long Task # | Start ms | Duration ms | User-Visible Risk |
|---:|---:|---:|---|
| 1 | `10115` | `60` | Noticeable but small. |
| 2 | `10757` | `80` | Noticeable. |
| 3 | `12043` | `58` | Noticeable but small. |
| 4 | `12361` | `97` | Very noticeable; near 100ms. |
| 5 | `12801` | `78` | Noticeable. |
| 6 | `13106` | `366` | Severe scroll freeze/jank. |
| 7 | `13766` | `230` | Severe scroll freeze/jank. |
| 8 | `14130` | `298` | Severe scroll freeze/jank. |
| 9 | `14511` | `154` | Severe scroll freeze/jank. |
| 10 | `15168` | `55` | Noticeable but small. |

| Scroll Probe Aggregate | Value |
|---|---:|
| Scroll steps | `37` |
| Final scroll Y | `9540` |
| Page max scroll Y | `9540` |
| Long task count | `10` |
| Total long-task time | `1476 ms` |
| Worst long task | `366 ms` |

## Why The Page Feels Slow While Scrolling

| Cause | Evidence | Confidence |
|---|---|---:|
| Main-thread long tasks during scroll | Browser recorded `1476 ms` of long tasks while scrolling. | High |
| Third-party YouTube embed | Iframe keeps loading until `6936 ms`, much later than app load. | High |
| Many simultaneous animation surfaces | `103-109` animated/transition elements, `63` keyframes, trajectory background, robots, guide bot. | High |
| Large image decode/paint | `stepcounter-spectrogram.png` is `1.029 MB`, natural `1902x951`, rendered `580x326`. | High |
| CSS accumulation from experiments | `4826` CSS lines; `129` workshop/rail/assembly matches still present. | Medium-high |
| Robot spawn with no cap | Config is infinite; long routes plus 10s spawn can create multiple concurrent SVG robots. | Medium-high |
| React scroll-state update | `useViewportWindow` updates state on scroll; robot layer depends on viewport window. | Medium |
| Full-page background/compositing | trajectory layer and gradients are always present. | Medium |

## Element Weight Ranking

### Heaviest Loaded Media

| Rank | Element | File Weight | Rendered Size | Natural Size | Where |
|---:|---|---:|---:|---:|---|
| 1 | Step-counter spectrogram | `1.029 MB` | `580x326` | `1902x951` | Selected Work |
| 2 | Assembly image | `0.477 MB` | `552x311` / `580x326` | `702x599` | Demos + Selected Work |
| 3 | Pen injector image | `0.341 MB` | `580x326` | `1021x780` | Selected Work |
| 4 | Step-counter dose-read image | `0.220 MB` | `552x311` | `1043x821` | Demos |
| 5 | Award image 1 | `0.103 MB` | `281x158` | `1280x960` | Award |
| 6 | Award image 2 | `0.102 MB` | `281x158` | `1280x899` | Award |
| 7 | Triptych frame | `0.071 MB` | `521x293` | `1920x360` | Research |
| 8 | Rollout p95 | `0.067 MB` | `521x293` / `580x326` | `1295x535` | Research + Work |
| 9 | EE trajectory | `0.056 MB` | `521x293` | `1040x800` | Research |
| 10 | Profile photo | `0.021 MB` | `42x42` / `76x76` | `400x400` | Header + Hero |

### Heaviest Deployed But Not Necessarily Initial-Loaded

| Rank | Asset | File Weight | Initial Load? | Notes |
|---:|---|---:|---|---|
| 1 | Resume PDF | `3.860 MB` | No | Does not slow first scroll unless clicked, but increases deploy payload. |
| 2 | Final-year thesis PDF | `2.442 MB` | No | Same: deploy weight, not initial render. |
| 3 | Sim-to-sim MP4 | `1.768 MB` | Yes/partial | Browser loads video/range data in demo section. |
| 4 | Step-counter spectrogram | `1.029 MB` | Yes | Largest image actually loaded in probe. |

## File-Level Responsibility Map

| File | Responsibility | Perf Risk |
|---|---|---|
| `src/index.css` | All design, animation, robot, trajectory, workshop, media, responsive styling | Highest style/animation surface. |
| `src/components/TrajectoryBackdrop.jsx` | Full-page trajectory SVG/background system | Continuous visual/compositing layer. |
| `src/components/RobotEcosystemLayer.jsx` | Robot spawn, route measuring, selected narration | Runtime measurement and robot orchestration. |
| `src/components/RobotAgent.jsx` | Per-robot movement phases, timers, SVG, package, effects | Adds DOM/timers/animation per robot. |
| `src/components/ScrollCompanionRobot.jsx` | Follow bot and guide bubble | rAF loop + scroll listener. |
| `src/hooks/useViewportWindow.js` | React state updates on scroll | Possible scroll jank contributor. |
| `src/components/VideoCard.jsx` | YouTube iframe + local video + image cards | Largest third-party/runtime media cost. |
| `src/data/portfolioData.js` | Defines image/video/PDF asset usage | Determines what media loads. |
| `src/data/robotEcosystemData.js` | Robot speed/spawn/no-cap behavior | Runtime robot concurrency. |

## Priority Diagnosis

The lag is probably not caused by one single bad card. It is a stack:

1. Heavy media starts around the same time as the React app becomes interactive.
2. The YouTube iframe keeps loading for several seconds.
3. The page has many animated/composited layers active at the same time.
4. The robot layer continues to spawn animated SVG actors while the user scrolls.
5. Scroll updates trigger viewport state work and robot visibility calculations.
6. The CSS file includes current animation systems plus older unused workshop/2.5D systems.

## Keep-All-Features Optimization Ideas For Later

These are not removals. They keep the visual ideas but reduce runtime pressure.

| Idea | Keeps Feature? | Expected Impact | Notes |
|---|---|---|---|
| Lazy-load YouTube iframe behind a poster/click shell | Yes | Very high | The video stays; iframe loads only when user clicks. |
| Add `loading="lazy"` and `decoding="async"` to lower-page images | Yes | High | Images remain but decode later. |
| Convert large PNGs to WebP/AVIF while keeping same visuals | Yes | High | Especially spectrogram and assembly image. |
| Cap active robots to a sane number like 4-6 while preserving spawn loop | Yes | High | Keeps ecosystem alive but prevents runaway concurrency. |
| Pause offscreen robot animations/effects | Yes | High | Current visibility checks exist; can be stricter. |
| Move scroll viewport tracking to refs/throttled store instead of React state every scroll | Yes | Medium-high | Reduces React work during scroll. |
| Split/archive unused workshop CSS into non-imported docs or experiment stylesheet | Yes | Medium | No visual removal if unused rules are not active. |
| Use `content-visibility: auto` on large sections/cards | Yes | Medium-high | Browser can skip rendering offscreen sections. |
| Add `contain: layout paint style` where safe on cards/sections | Yes | Medium | Reduces layout/paint blast radius. |
| Preload only critical profile/hero assets, defer the rest | Yes | Medium | Keeps first viewport faster. |

## Raw Conclusion

The website feels slow because it is no longer a normal static portfolio. It is a live animated single-page app with:

- a third-party YouTube embed,
- a local MP4,
- large project images,
- a full-page trajectory background,
- a live robot ecosystem,
- a follow robot with guide UI,
- project narration bubbles,
- many CSS keyframes,
- and scroll-driven runtime state.

The biggest measured red flag is the scroll long-task profile: `10` long tasks totaling `1476 ms`, including `366 ms`, `298 ms`, and `230 ms` blocks. That is enough to make scrolling feel sticky or slow even on a local build.

## Follow-Up Optimization Pass

Implemented after this probe:

- Replaced eager YouTube iframe with a click-to-load poster button.
- Changed local MP4 preload from `metadata` to `none`.
- Added lazy/async image hints to lower-page project images.
- Added `content-visibility: auto` and intrinsic sizing to non-hero sections.
- Capped active robots at `5` instead of unlimited.
- Removed decorative card/media orb pseudo-elements and signal-rail hover animation.
- Generated WebP variants for heavy rendered project/award/research images and updated the site to use them.

Follow-up production probe:

| Metric | Before | After |
|---|---:|---:|
| DOMContentLoaded | `2471 ms` | `1574 ms` |
| Load event | `2472 ms` | `1576 ms` |
| Initial measured transfer | `2.602 MB` | `0.177 MB` |
| Initial decoded resource weight | `2.839 MB` | `0.416 MB` |
| Initial YouTube iframes | `1` | `0` |
| Initial videos | `1` | `1` |
| Initial animated/transition elements | `103` | `101` |
| Scroll long tasks | `10` | `1` |
| Total scroll long-task time | `1476 ms` | `111 ms` |
| Worst scroll long task | `366 ms` | `111 ms` |

Largest image reductions:

| Asset | Before | After WebP |
|---|---:|---:|
| Step-counter spectrogram | `1.029 MB` | `0.205 MB` |
| Final-year assembly image | `0.477 MB` | `0.027 MB` |
| Pen injector image | `0.341 MB` | `0.041 MB` |
| Step-counter dose-read image | `0.220 MB` | `0.027 MB` |
| Triptych frame | `0.071 MB` | `0.029 MB` |
| Rollout p95 figure | `0.067 MB` | `0.031 MB` |
| EE trajectory figure | `0.056 MB` | `0.023 MB` |
