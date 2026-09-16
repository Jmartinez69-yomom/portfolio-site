// ---------------------------------------------------------------------------
// PROJECT DATA
// ---------------------------------------------------------------------------
// Each object below is one full-screen block on the Projects page.
// To edit a project:
//   1. Swap `image` for your own photo — drop the file in
//      public/images/projects/ and point `image` at "/images/projects/yourfile.jpg"
//      You can list MORE than one image per project in the `images` array
//      if you want a mini gallery instead of a single photo (see ProjectBlock.jsx).
//   2. Rewrite `description` in your own words — what's there now is drafted
//      from your resume bullets as a starting point.
//   3. `specs` is the little spec-sheet row (rendered in monospace) — update
//      the label/value pairs to whatever numbers matter for that project.
//   4. `tags` are short skill/tool chips shown under the title.
// ---------------------------------------------------------------------------

const projects = [
  {
    id: 'battlebots',
    title: 'RoboJackets BattleBots',
    role: 'Team Lead — previously Sub-Team Lead, Weapon System',
    dates: 'June 2025 – Present',
    tags: ['SolidWorks', 'Waterjet', 'Milling', 'Steel 4140/4130', 'Team Leadership'],
    // TODO: replace with a real photo of the robot, team, or CAD render
    image: '/images/projects/battlebots-01.jpg',
    description:
      "Lead a 15-person team building competition robots for the 30lb weight class, with a season goal of fielding \"multi-bots\" — a swarm of 2–20lb robots instead of one large one. Previously led the weapon subsystem, designing a vertical beater bar out of 4130 steel and a 12–13lb \"Drumlet\" weapon subsystem, manufactured with waterjet and milling.",
    specs: [
      { label: 'weight_class', value: '30 lb' },
      { label: 'team_size', value: '15' },
      { label: 'weapon_material', value: '4140 steel' },
    ],
  },
  {
    id: 'gtri',
    title: 'GTRI — Future of the Poultry Houses',
    role: 'Mechanical Engineer Student Assistant, Agriculture Technology Research Program',
    dates: 'February 2026 – Present',
    tags: ['Arduino', 'Stepper Motors', 'SolidWorks', 'Closed-Loop Control'],
    // TODO: replace with a photo of the tile-cleaning table, floor system, or the small-scale model
    image: '/images/projects/gtri-01.jpg',
    description:
      'Designed and fabricated an automated tile-cleaning table for a poultry-research floor system that maps chicken waste across a 5×6 tile grid, cutting cleaning time from 15–20 minutes by hand to under 30 seconds per tile. Also converted a small-scale demo from an unreliable open-loop stepper system to closed-loop control, improving positioning accuracy.',
    specs: [
      { label: 'tile_grid', value: '5 × 6' },
      { label: 'cleaning_time', value: '<30 sec' },
      { label: 'steppers', value: '4' },
    ],
  },
  {
    id: 'resrg',
    title: 'RESRG — Automotive Manufacturing',
    role: 'Industrial Engineering Intern',
    dates: 'May 2025 – August 2025',
    tags: ['Time Studies', 'OEE Tracking', 'Excel', 'Process Design'],
    // TODO: replace with a photo of the press cell, flow rack, or OEE dashboard
    image: '/images/projects/resrg-01.jpg',
    description:
      'Ran detailed time studies on two robotic press cells, mapping operator tasks and robot cycles to improve availability. Built an Excel-based OEE tracker across 20–25 cells, and designed a 9\'×2\'×6\' flow rack system that cut operator cycle time and raised one cell\'s OEE from 70% to 81%.',
    specs: [
      { label: 'oee_gain', value: '70% → 81%' },
      { label: 'cells_tracked', value: '20–25' },
      { label: 'cycle_time', value: '−10 sec' },
    ],
  },
  {
    id: 'creative-design-decision',
    title: 'Creative Design & Decision',
    role: 'Class Project — Project Manager & Fabricator',
    dates: 'May 2026 – Aug 2026',
    tags: ['SolidWorks', 'Decision Matrix', 'Laser Cutting', '3D Printing'],
    // TODO: replace with a photo of the drivetrain/lift system or team
    image: '/images/projects/creative-design-01.jpg',
    description:
      'Engineered a dual-motor, one-way-bearing drivetrain and cascade lift system, converting 100 RPM motor input into 200 RPM drive speed and 33 RPM lift speed to reach a 101" lift height on a $120 budget. Led a 4-person team as project manager and fabricator, placing 3rd in the class competition.',
    specs: [
      { label: 'lift_height', value: '101 in' },
      { label: 'budget', value: '$120' },
      { label: 'placement', value: '3rd / class' },
    ],
  },
  {
    id: 'vex',
    title: 'VEX VRC Robotics',
    role: 'Designer & Programmer',
    dates: 'August 2020 – May 2024',
    tags: ['Fusion 360', 'VEX Code', 'Autonomous Programming'],
    // TODO: replace with a photo of a VEX robot build or competition
    image: '/images/projects/vex-01.jpg',
    description:
      'Designed 15–20lb competition robots to complete tasks that changed every season, working within a 2-minute competitive match window. Iterated 3–5 full design cycles per season in Fusion 360 and programmed 15-second autonomous routines.',
    specs: [
      { label: 'robot_weight', value: '15–20 lb' },
      { label: 'match_window', value: '2 min' },
      { label: 'iterations', value: '3–5 / season' },
    ],
  },
]

export default projects
