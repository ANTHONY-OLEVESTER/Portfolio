export const screenGuides = {
  hero: [
    {
      title: "Positioning layer",
      body:
        "This opening is built to frame Anthony as an applied AI and robotics engineer for physical systems: simulation, control, embedded logic, sensing, and engineering execution.",
      prompt: "Start with the research and demo sections if you want proof quickly.",
    },
    {
      title: "What to notice",
      body:
        "The key signal is breadth with a physical-systems spine: AI is connected to robotics, controls, embedded devices, and validation rather than presented as generic software.",
      prompt: "The robots are moving project evidence between sections.",
    },
  ],
  research: [
    {
      title: "Proof core",
      body:
        "This is the strongest technical proof point: a public sim-to-sim research package with metrics, code links, figures, and visual comparison artifacts.",
      prompt: "Look for the one-step p95 reduction and long-horizon rollout checks.",
    },
    {
      title: "Research discipline",
      body:
        "The important story is governance: deterministic pairing, alignment gates, holdout checks, rollout validation, and inspectable visual evidence.",
      prompt: "This section should matter to robotics simulation and reliability teams.",
    },
  ],
  demos: [
    {
      title: "Watch the build evidence",
      body:
        "The demos are here to prevent the portfolio from becoming only written claims. The robotic arm video shows physical work, and the sim-to-sim triptych shows technical validation.",
      prompt: "Watch the final-year robotic arm demo first.",
    },
    {
      title: "Video as evidence",
      body:
        "A strong technical portfolio should show motion, failure boundaries, and artifacts. This section is where visual proof supports the written claims.",
      prompt: "Open full media when a visual looks compressed.",
    },
  ],
  experience: [
    {
      title: "Experience thread",
      body:
        "This section connects Biocon control and embedded work, freelance/startup AI systems, and independent robotics research into one applied engineering story.",
      prompt: "The strongest pattern is research depth plus implementation.",
    },
    {
      title: "Biocon signal",
      body:
        "The Biocon work is valuable because it places AI and control thinking near physical product constraints: size, power, reliability, actuation, and safety-aware behavior.",
      prompt: "Pair this with the award section for credibility.",
    },
  ],
  work: [
    {
      title: "Selected work map",
      body:
        "These cards are the actual project anchors the robots are moving between: sim-to-sim research, robotic arm build, Biocon step counter, and motorized injector control.",
      prompt: "Click robot workers here later to see project-specific narration.",
    },
    {
      title: "No filler projects",
      body:
        "Each card should earn its space by showing a system Anthony actually built, analyzed, or integrated. The strongest cards combine image evidence with concise technical copy.",
      prompt: "Keep this section proof-heavy, not decorative.",
    },
  ],
  strengths: [
    {
      title: "Capability map",
      body:
        "This section translates the projects into hiring language: AI for physical systems, robotics simulation, control thinking, embedded execution, applied AI, and research-to-engineering translation.",
      prompt: "This is where recruiters understand role fit quickly.",
    },
    {
      title: "Why the robots deliver here",
      body:
        "The moving robots make sense in this section because each strength is fed by a project: simulation feeds reliability, robotics feeds physical build, embedded feeds sensing, and control feeds actuation.",
      prompt: "Good interaction here should clarify, not distract.",
    },
  ],
  award: [
    {
      title: "Credibility marker",
      body:
        "The Rising Star Award should read as evidence of trust inside a serious engineering environment, especially when paired with Biocon device and control work.",
      prompt: "Use this as proof of execution quality, not decoration.",
    },
    {
      title: "Why it matters",
      body:
        "Awards are only useful when connected to work. Here, it reinforces that the embedded/control contributions happened in a real company context.",
      prompt: "Keep the tone formal and evidence-based.",
    },
  ],
  about: [
    {
      title: "Personal technical thesis",
      body:
        "The about section should make the pattern explicit: Anthony builds intelligent systems for the physical world, where validation, uncertainty, and implementation detail matter.",
      prompt: "This is the human explanation behind the project evidence.",
    },
    {
      title: "Role direction",
      body:
        "The target roles are applied AI, robotics, simulation, control, embedded systems, and research engineering where technical depth and execution both matter.",
      prompt: "Hyderabad, Bengaluru, and remote are the location priorities.",
    },
  ],
  contact: [
    {
      title: "Conversion point",
      body:
        "This is where the portfolio turns into a hiring action. The copy is aimed at applied AI companies, robotics startups, simulation/control teams, and professors with research-heavy work.",
      prompt: "Email is the strongest primary action.",
    },
    {
      title: "Best-fit roles",
      body:
        "The strongest fit is work that combines AI or ML with physical constraints: robotics validation, simulation reliability, embedded sensing, control systems, or technical research execution.",
      prompt: "The contact section should stay clean and easy to click.",
    },
  ],
};

export const guideRobotFallback = {
  title: "Screen guide",
  body:
    "I am here to explain what is on screen and connect the moving robots back to the actual project evidence.",
  prompt: "Click me section by section once the guide UI is implemented.",
};

export function getScreenGuide(sectionId) {
  return screenGuides[sectionId] || [guideRobotFallback];
}
