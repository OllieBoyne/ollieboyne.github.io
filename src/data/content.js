export const profile = {
  name: 'Ollie Boyne',
  fullName: 'Oliver Boyne',
  subtitle: 'Software Engineer at Google',
  location: 'Cambridge, UK',
  headshot: '/assets/sidebar/headshot.jpg',
  bioParagraphs: [
    [
      { text: "I'm a Software Engineer at Google in London, working on synthetic data for " },
      { text: 'Android XR', href: 'https://www.android.com/xr/' },
      { text: '. Previously, I did my PhD in Computer Vision at the ' },
      { text: 'University of Cambridge', href: 'http://www.eng.cam.ac.uk' },
      { text: ', supervised by ' },
      { text: 'Prof. Roberto Cipolla', href: 'http://mi.eng.cam.ac.uk/~cipolla/index.htm' },
      { text: ' and sponsored by ' },
      { text: 'Trya Srl', href: 'https://snapfeet.io/' },
      { text: ', focusing on accurate multiview 3D foot reconstruction from mobile phone images using synthetic data.' },
    ],
    [
      { text: 'Before my PhD, I graduated with a First Class MEng in Engineering (specialising in Mechanical Engineering) from Cambridge in 2020. I was also a coxswain during my time at Cambridge, competing for Cambridge in the ' },
      { text: "2025 Men's Boat Race", href: '#rowing' },
      { text: '.' },
    ],
  ],
  links: [
    { id: 'email', label: 'ollieboyne@gmail.com', shortLabel: 'Email', href: 'mailto:ollieboyne@gmail.com', external: false },
    { id: 'github', label: 'GitHub', shortLabel: 'GitHub', href: 'https://github.com/OllieBoyne', external: true },
    { id: 'linkedin', label: 'LinkedIn', shortLabel: 'LinkedIn', href: 'https://www.linkedin.com/in/ollie-boyne/', external: true },
    { id: 'cv', label: 'CV (PDF)', shortLabel: 'CV', href: '/assets/cv/cv_24.pdf', download: 'OBoyne_CV.pdf', external: false },
  ],
};

export const modalities = [
  { id: 'find', label: 'mesh', img: '/assets/research/FIND_x.png', targetId: 'find' },
  { id: 'synfoot', label: 'synthetic', img: '/assets/research/SynFoot_x.png', targetId: 'synfoot' },
  { id: 'found', label: 'normals', img: '/assets/research/FOUND_x.png', targetId: 'found' },
  { id: 'focus', label: 'correspondences', img: '/assets/research/FOCUS.png', targetId: 'focus' },
];

export const publications = [
  {
    id: 'gnm-head',
    venue: 'Technical report',
    title: 'GNM Head: A Generative aNthropometric Model of the human head',
    authors: [
      'S. Ploumpis*',
      'J. Bednarik*',
      'G. Zoss',
      'R. Guseinov',
      'L. Prasso',
      'P. Chandran',
      'O. Boyne',
      'V. Choutas',
      'T. Bolkart',
      'D. Wang',
      'M. Chai',
      'D. Qiu',
      'S. Winberg',
      'G. Rainer',
      'L. Bridgeman',
      'L. Helminger',
      'E. Collins',
      'D. Vicini',
      'J. Riviere',
      'Y. Boetzel',
      'A. Koumis',
      'S. Moschoglou',
      'J. Busch',
      'C. Herrera',
      'J. Still',
      'S. Ysebert',
      'P. Lincoln',
      'S. Orts Escolano',
      'C. Rhemann',
      'E. Wood*',
      'T. Beeler*',
      'S. Zafeiriou*',
    ],
    description:
      'Parametric 3D statistical model of the human head, face, and neck, including internal anatomy (eyeballs, teeth, and tongue). Open-sourced under Apache 2.0 with NumPy, JAX, PyTorch, and TensorFlow support.',
    media: {
      type: 'image',
      src: '/assets/research/gnm_head.gif',
      alt: 'GNM Head 3D parametric head model teaser',
      caption: 'GNM Head — A Generative aNthropometric Model of the human head (2026)',
      fit: 'contain',
      studioFrame: true,
    },
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2607.23687' },
      { label: 'GitHub', href: 'https://github.com/google/GNM' },
    ],
  },
  {
    id: 'focus',
    venue: '3DV 2025',
    title: 'FOCUS: Multi-View Foot Reconstruction from Synthetically Trained Dense Correspondences',
    authors: ['Oliver Boyne', 'Roberto Cipolla'],
    description:
      'Dense correspondence prediction trained from synthetic data, followed by (a) matching, triangulation and surface reconstruction; or (b) optimization of a parameterized foot model to fit the dense correspondences.',
    media: {
      type: 'video',
      src: '/assets/research/focus_splash.webm',
      poster: '/assets/research/FOCUS.png',
      alt: 'FOCUS multi-view foot reconstruction demonstration',
      caption: 'FOCUS — Multi-View Foot Reconstruction from Synthetically Trained Dense Correspondences (3DV 2025)',
      fit: 'contain',
      letterbox: true,
    },
    links: [
      { label: 'Project Page', href: 'https://ollieboyne.com/FOCUS' },
      { label: 'Paper', href: 'https://arxiv.org/abs/2502.06367' },
    ],
  },
  {
    id: 'found',
    venue: 'WACV 2024',
    title: 'FOUND: Foot Optimisation with Uncertain Normals for Surface Deformation using Synthetic Data',
    authors: ['Oliver Boyne', 'Gwangbin Bae', 'James Charles', 'Roberto Cipolla'],
    description:
      'Surface normal prediction trained from synthetic data, followed by multiview 3D shape reconstruction fusing multiview normals and uncertainty. Introduced SynFoot, a synthetic dataset of 50K foot renders.',
    media: {
      type: 'image',
      src: 'https://www.ollieboyne.com/FOUND/images/itw/sliders.gif',
      fallback: '/assets/research/FOUND_x.png',
      alt: 'Surface normal predictions on in-the-wild foot images',
      caption: 'FOUND — Surface normal predictions on in-the-wild foot imagery (WACV 2024)',
      fit: 'contain',
      studioFrame: true,
    },
    links: [
      { label: 'Project Page', href: 'https://ollieboyne.com/FOUND' },
      { label: 'SynFoot Dataset', href: 'https://github.com/OllieBoyne/SynFoot' },
    ],
  },
  {
    id: 'find',
    venue: 'BMVC 2022',
    title: 'FIND: An Unsupervised Implicit 3D Model of Articulated Human Feet',
    authors: ['Oliver Boyne', 'James Charles', 'Roberto Cipolla'],
    description:
      'A novel implicit generative model of human feet, capable of expressing shape and articulation. Built from our dataset, Foot3D, of high quality 3D scans of feet, which has over 120 downloads.',
    media: {
      type: 'image',
      src: '/assets/research/FIND_x.png',
      alt: 'FIND implicit 3D foot model mesh representation',
      caption: 'FIND — Unsupervised Implicit 3D Model of Articulated Human Feet (BMVC 2022)',
      fit: 'contain',
      studioFrame: true,
    },
    videoModal: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/ehp0z-u7zXg?autoplay=1',
      title: 'FIND Video Presentation',
      caption: 'FIND — BMVC 2022 Presentation Video',
    },
    links: [
      { label: 'Project Page', href: 'https://ollieboyne.com/FIND' },
      { label: '3D Demo', href: 'https://ollieboyne.com/FIND/3d-viewer' },
      { label: 'Foot3D', href: 'https://github.com/OllieBoyne/Foot3D' },
    ],
  },
  {
    id: 'wldo',
    venue: 'ECCV 2020',
    title: 'Who Left the Dogs Out? 3D Animal Reconstruction with Expectation Maximization in the Loop',
    authors: ['Benjamin Biggs', 'Oliver Boyne', 'James Charles', 'Andrew Fitzgibbon', 'Roberto Cipolla'],
    description:
      'End-to-end system to recover 3D shape and pose of dogs from images. Introduced SMBLD, a new deformable dog model, and StanfordExtra, a large scale dataset of 2D dog annotations, which has over 1400 downloads.',
    media: {
      type: 'image',
      src: '/assets/research/wldo_results.png',
      alt: '3D reconstructed dog meshes overlaid on real photographs',
      caption: 'Who Left the Dogs Out? — 3D Animal Reconstruction (ECCV 2020)',
      fit: 'contain',
      studioFrame: true,
    },
    videoModal: {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/kf86CBLwgJM?autoplay=1',
      title: 'WLDO Video Presentation',
      caption: 'Who Left the Dogs Out? — ECCV 2020 Presentation Video',
    },
    links: [
      { label: 'Project Page', href: 'https://sites.google.com/view/wldo' },
      { label: 'StanfordExtra', href: 'https://github.com/benjiebob/StanfordExtra' },
    ],
  },
];

export const datasetsAndThesis = [
  {
    id: 'synfoot',
    tag: 'Dataset · 2024',
    title: 'SynFoot',
    description:
      '50,000 synthetic foot renders for 3D reconstruction tasks, introduced with FOUND.',
    media: {
      type: 'image',
      src: '/assets/research/SynFootSplash.gif',
      fallback: '/assets/research/SynFoot_x.png',
      alt: 'SynFoot synthetic foot dataset preview',
      caption: 'SynFoot — 50,000 synthetic foot renders for reconstruction tasks',
      fit: 'contain',
      letterbox: true,
    },
    links: [{ label: 'GitHub', href: 'https://github.com/OllieBoyne/SynFoot' }],
  },
  {
    id: 'foot3d',
    tag: 'Dataset · 2022',
    title: 'Foot3D',
    description:
      'Dataset of high quality 3D scans of posed feet, released with FIND, with over 120 downloads.',
    media: {
      type: 'image',
      src: '/assets/research/foot3d.png',
      alt: 'Foot3D scanned and posed foot dataset meshes',
      caption: 'Foot3D — High-resolution dataset of scanned, posed feet',
      fit: 'contain',
      studioFrame: true,
    },
    links: [{ label: 'GitHub', href: 'https://github.com/OllieBoyne/Foot3D' }],
  },
  {
    id: 'canine-dynamics',
    tag: 'MEng Thesis · 2020',
    title: 'Estimation of Canine Dynamics from Monocular Video',
    description:
      'Method of identifying forces on dogs in motion from single-view video, integrating computer vision with computational biomechanics. Awarded the Sir George Nelson prize for best Mechanical project in the year.',
    media: {
      type: 'image',
      src: '/assets/research/canine_dynamics.png',
      alt: 'Pipeline estimating 3D dog pose and ground reaction forces from video',
      caption: 'MEng Thesis — Estimation of Canine Dynamics from Monocular Video (2020)',
      fit: 'contain',
      studioFrame: true,
    },
    links: [
      { label: 'Report (PDF)', href: '/assets/documents/canine_dynamics_iib_project_report.pdf' },
      { label: 'Code', href: 'https://github.com/OllieBoyne/dog-dynamics' },
    ],
  },
];

export const experience = [
  {
    id: 'google',
    org: 'Google UK',
    logo: '/assets/work/google_G.png',
    roles: [
      {
        title: 'Software Engineer',
        period: '2025 – Present',
        tech: 'Synthetic Data · Android XR',
        summary: [
          { text: 'I build and maintain pipelines producing synthetic data of humans for ' },
          { text: 'Android XR', href: 'https://www.android.com/xr/' },
          { text: '.' },
        ],
      },
      {
        title: 'Student Researcher',
        period: 'Feb – Oct 2024',
        tech: 'Python · Blender',
        summary:
          'Worked in the synthetic data team, developing pipelines for large scale synthetic dataset generation for training downstream tasks for AR and VR vision applications. Contributed to Blender Python tooling for data generation.',
      },
    ],
  },
  {
    id: 'trya',
    org: 'Trya Srl (Snapfeet)',
    logo: '/assets/work/snapfeet.png',
    roles: [
      {
        title: 'Technical Consultant',
        period: '2020 – 2025',
        tech: 'Python · PyTorch · Swift',
        summary:
          'Research and development for shoewear AR technologies and foot reconstruction algorithms. Built novel data labelling tools, trained efficient mobile models for inference, constructed methods for size and shape estimation from multiview images, and developed mobile applications to demonstrate results. Technology used by major footwear brands, including Hugo Boss.',
      },
    ],
  },
];

export const workHighlights = [
  {
    id: 'blendersynth',
    tag: 'Open Source · Python / Blender',
    title: 'BlenderSynth',
    description:
      'A Python library for generating large scale synthetic datasets using Blender, with support for custom Shader AOVs, node control, multithreading, and multiview rendering.',
    media: {
      type: 'image',
      src: '/assets/work/bsyn_splash_1.png',
      alt: 'BlenderSynth documentation and multi-pass AOV render showcase',
      caption: 'BlenderSynth — Open-source Blender Python toolkit for synthetic datasets',
      fit: 'contain',
      studioFrame: true,
    },
    links: [
      { label: 'Docs', href: 'https://ollieboyne.com/BlenderSynth' },
      { label: 'GitHub', href: 'https://github.com/OllieBoyne/BlenderSynth' },
    ],
  },
  {
    id: 'snapfeet',
    tag: 'Trya Srl · Mobile CV & AR',
    title: 'Snapfeet',
    description:
      'Shoewear AR try-on and multiview foot size and shape estimation for mobile devices, developed with Trya and used by major footwear brands including Hugo Boss.',
    media: {
      type: 'image',
      src: '/assets/work/trya_splash.png',
      alt: 'Snapfeet iOS application showing AR shoe visualization and 3D foot comfort fitting',
      caption: 'Snapfeet — Mobile AR shoewear try-on and 3D foot sizing',
      fit: 'contain',
      studioFrame: true,
    },
    links: [{ label: 'snapfeet.io', href: 'https://snapfeet.io/' }],
  },
];

export const personal = {
  rowing: {
    title: 'Rowing at Cambridge',
    tag: 'CUBC & Downing College · 2016 – 2025',
    intro: [
      { text: 'Coxswain for ' },
      { text: 'Cambridge University Boat Club', href: 'https://cubc.org.uk' },
      { text: ' and Downing College Boat Club.' },
    ],
    milestones: [
      { year: '2025', detail: "Coxed the Men's Blue Boat to victory in the 170th Men's Boat Race" },
      { year: '2022–23', detail: "Men's President of CUBC during the clean sweep win over Oxford, and President of the Men's Blues Committee" },
      { year: '2021–23', detail: "Selected in three consecutive years as coxswain for Goldie, the Men's reserve crew" },
      { year: '2018–19', detail: "Men's Captain of Downing College Boat Club, growing the squad to 50" },
    ],
    photos: [
      {
        src: '/assets/personal/br25-celebration.jpg',
        alt: 'Cambridge Men’s Blue Boat celebrating victory in the 170th Boat Race in 2025',
        caption: '170th Men’s Boat Race victory · 2025',
      },
      {
        src: '/assets/personal/br23-celebration-full.jpg',
        alt: 'CUBC trophy celebration after the 2023 clean sweep over Oxford',
        caption: 'CUBC clean sweep celebration · 2023 · Photo: Row360',
      },
    ],
  },
  dodo: {
    title: 'Dodo',
    tag: 'Godot · PC Puzzle Game · 250+ on Steam',
    icon: '/assets/personal/dodo.png',
    description:
      'A PC puzzle game my brother and I made using the open-source game engine Godot, with 250+ purchases on Steam.',
    links: [
      { label: 'Steam Store', href: 'https://store.steampowered.com/app/2700250/' },
      { label: 'Play Demo on itch.io', href: 'https://ollieboyne.itch.io/dodo-demo' },
    ],
  },
};
