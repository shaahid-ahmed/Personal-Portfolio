export const data = {
  personal: {
    name: "Shaahid Ahmed Nadeem",
    tagline: "MS Computer Science student at NYU specializing in machine learning, quantitative research, and software engineering.",
    email: "sn4272@nyu.edu",
    github: "https://github.com/shaahid-ahmed",
    linkedin: "https://www.linkedin.com/in/shaahid-ahmed-n-00b236154/",
    location: "New York, NY",
    status: "SDE Intern @ AWS \u00b7 Summer 2026",
    focus: ["Machine Learning", "Speech & Audio", "Quantitative Research"]
  },
  education: [
    { degree: "M.S. in Computer Science", institution: "New York University", date: "Sep 2025 - May 2027", specialization: "Algorithms, ML, Statistical Methods" },
    { degree: "B.Tech in Computer Science and Engineering", institution: "Vellore Institute of Technology", date: "Sep 2021 - Jul 2025", specialization: "Specialization in AI and ML" }
  ],
  experience: [
    { company: "Amazon Web Services (AWS)", location: "Seattle, WA", role: "SDE Intern, Capacity Health Infrastructure", date: "May 2026 - Aug 2026", bullets: ["Architecting forecasting and visualization infrastructure for network capacity planning; modeling AWS topology as a graph to predict congestion and inform datacenter scaling decisions."] },
    { company: "Guhan Industrial Manufacturing Solutions", role: "Python Developer Intern", date: "Jul 2023 - Mar 2024", bullets: ["Built a graph-based toolpath optimization system for CNC Water-Jet machining, reducing operational time by 90%.", "Automated 2D geometry processing pipeline handling LINE, ARC, SPLINE, and CIRCLE entities at scale."] }
  ],
  research: [
    { institution: "Samsung R&D Institute", role: "Research Intern - Speech and Audio processing", date: "Nov 2024 - Jul 2025", bullets: ["Built 10,000+ sample MREC dataset spanning 100 real-world acoustic conditions for model training.", "Designed SOTA deep learning model achieving 35% ERLE improvement over baselines.", "Optimized inference pipeline to reduce latency by 40% under real-time computational constraints."] },
    { institution: "IIT Madras", location: "Chennai, India", role: "Research Intern - Combinatorial Optimization", date: "May 2024 - Jul 2024", bullets: ["Applied Reinforcement Learning (PPO) to a 2D bin-packing problem under geometric and material constraints, improving resource utilization by 22%.", "Engineered reward shaping and layout heuristics; validated against benchmark datasets, boosting packing efficiency by 30%."] },
    { institution: "NIT Tiruchirappalli", location: "Tiruchirappalli, India", role: "Research Intern - Machine Learning", date: "May 2022 - Jul 2022", bullets: ["Built ML classification models on 1500+ district-level records across 5 Southern Indian states.", "Published in IEEE ICSES 2023 achieving 92% accuracy on employability rate stratification."] }
  ],
  teaching: [
    {
      institution: "NYU Tandon Career Hub",
      location: "Brooklyn, NY",
      role: "LeetCode Bootcamp Instructor",
      date: "Sep 2026 - Present",
      bullets: [
        "Leading technical interview preparation sessions covering data structures, algorithms, and recurring LeetCode problem-solving patterns.",
        "Running live problem walkthroughs and mock interviews, coaching students on complexity analysis and on communicating their approach under time constraints."
      ]
    },
    {
      institution: "NYU Tandon Career Hub", location: "Brooklyn, NY",
      role: "Data Science Bootcamp Instructor",
      date: "Sep 2025 - Aug 2026",
      bullets: [
        "Teaching statistical modeling, ML fundamentals, and Python (NumPy, pandas) to 100+ students.",
        "Designed curriculum covering regression, classification, feature engineering, and model evaluation pipelines."
      ]
    },
    {
      institution: "Vellore Institute of Technology",
      location: "Vellore, India",
      role: "Teaching Assistant - BCSE209L: Machine Learning",
      date: "Jan 2024 - May 2024",
      bullets: [
        "Assisted in lectures and labs, guiding students through the practical implementation of foundational machine learning algorithms.",
        "Conducted weekly office hours to troubleshoot code, optimize models, and support student ML projects."
      ]
    }
  ],
  projects: [
    { id: "audio-denoising", title: "Diffusion-Based Audio Denoising", description: "Implemented a score-based diffusion model for audio enhancement; modeled stochastic signal degradation and learned the reverse diffusion process to achieve a PESQ score of 2.5.", techStack: ["Python", "PyTorch", "Score-Based Generative Models"], githubUrl: "https://github.com/shaahid-ahmed/Audio-Enhancement-using-a-Score-Based-Generative-Model", liveUrl: null, category: "Audio", featured: true, date: "Aug 2024 - Jan 2025" },
    { id: "rl-tetris-pro", title: "RL for Combinatorial Optimization", description: "Formulated 2D bin-packing as a Markov Decision Process; trained PPO agent to maximize space utilization under placement constraints.", techStack: ["Python", "Stable Baselines3", "OpenAI Gym"], githubUrl: "https://github.com/shaahid-ahmed/RL-Tetris-Pro", liveUrl: null, category: "ML", featured: true, date: "Jan 2024 - May 2024" },
    { id: "pathforge", title: "PathForge Graph-Based Toolpath Optimizer", description: "Engineered a DXF-to-G-code converter with graph-based path optimization, kerf compensation, reducing manual CNC programming effort by 95%.", techStack: ["Python", "NumPy", "shapely", "Flask", "ezdxf"], githubUrl: "https://github.com/shaahid-ahmed/pathforge", liveUrl: null, category: "CAD/CAM", featured: true, date: "Jul 2023 - Apr 2025" },
    { id: "ravemotion", title: "RAVEmotion", description: "Built a CNN-based classifier on Mel-spectrograms; achieved 75% accuracy across 8 emotion classes.", techStack: ["PyTorch", "Torchaudio", "Librosa", "Python"], githubUrl: "https://github.com/shaahid-ahmed/RAVEmotion", liveUrl: null, category: "Audio", featured: false, date: "Aug 2024 - Jan 2025" },
    { id: "parkinsons-xai", title: "XAI for Parkinson's Diagnosis", description: "Reengineered a time-series XAI method for image data using LRP and Grad-CAM to visualize diagnostic features.", techStack: ["Python", "SHAP", "Grad-CAM"], githubUrl: "https://github.com/shaahid-ahmed/TremorXAI", liveUrl: null, category: "ML", featured: false, date: "Aug 2024 - Jan 2025" },
    {
      id: "ai-signals",
      title: "AI Signals",
      description: "A full-stack interactive web application that provides AI-driven trading signals, market analysis, and actionable financial insights.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/shaahid-ahmed/AI-Signals",
      liveUrl: "https://ai-signals-coral.vercel.app/",
      category: "Web Dev", 
      featured: false, 
      date: "2024" 
    },
    {
      id: "dxf-editor",
      title: "Interactive DXF Editor",
      description: "A web-based CAD tool engineered for parsing, rendering, and manipulating DXF (Drawing Exchange Format) files directly in the browser.",
      techStack: ["JavaScript", "Canvas API", "Geometry Processing"],
      githubUrl: "https://github.com/shaahid-ahmed/Interactive-DXF-Editor",
      liveUrl: null,
      category: "CAD",
      featured: false,
      date: "2023"
    },
    {
      id: "credit-risk",
      title: "Credit Risk Analysis Model",
      description: "A predictive machine learning pipeline designed to evaluate financial datasets and classify credit default risk using ensemble methods.",
      techStack: ["Python", "scikit-learn", "pandas", "NumPy"],
      githubUrl: "https://github.com/lilNewbie/Credit-risk-analysis",
      liveUrl: null,
      category: "ML",
      featured: false,
      date: "2023"
    },
    {
      id: "auto-parking",
      title: "Automatic Parking Management System",
      description: "An automated tracking system built to monitor parking space availability, process vehicle entry/exit flows, and optimize lot capacity.",
      techStack: ["Python", "OpenCV", "Data Processing"],
      githubUrl: "https://github.com/lilNewbie/Automatic-Parking-Management-System",
      liveUrl: null,
      category: "Computer Vision",
      featured: false,
      date: "2022"
    },
    {
      id: "ml-implementations",
      title: "Machine Learning Implementations",
      description: "A comprehensive repository of foundational and advanced machine learning models, covering regression, classification, and deep learning architectures.",
      techStack: ["Python", "TensorFlow", "scikit-learn", "Jupyter"],
      githubUrl: "https://github.com/shaahid-ahmed/Machine-Learning-Projects",
      liveUrl: null,
      category: "ML",
      featured: false,
      date: "2022"
    }
  ],
  hackathons: [
    { name: "Morgan Stanley Code for Give", partner: "Lemon Tree", date: "Mar 2026", techStack: ["React", "Vite", "Supabase", "Python"], metrics: "Built geospatial platform processing 14,144 pantries; identified 539 high-risk locations with up to 14x distance variance." },
    { name: "JPMC Data for Good", partner: "Braven", date: "Oct 2025", techStack: ["Python", "pandas", "NumPy", "scikit-learn"], metrics: "Developed multi-factor ranking model optimizing partner selection across heterogeneous datasets."}
  ],
  publications: [
    {
      title: "Multi-Reference Echo Cancellation",
      venue: "IEEE Access",
      date: "2026",
      doi: "10.1109/ACCESS.2026.3709458",
      url: "https://ieeexplore.ieee.org/document/11593844"
    },
    {
      title: "Prediction of CKD Using Choas Based Particle Swarm Optimization (CBPSO) with Ensemble Method",
      venue: "IEEE - 2024 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES)",
      date: "2025",
      url: "https://ieeexplore.ieee.org/document/10910636"
    },
    {
      title: "A Machine Learning Approach for District-Wise Classification of Employability Rate in Southern Indian States",
      venue: "IEEE - 2023 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES)",
      date: "2024",
      url: "https://ieeexplore.ieee.org/document/10465328"
    }
  ],
  skills: {
    languages: ["Python", "C/C++", "JavaScript", "HTML/CSS", "SQL", "Java", "R"],
    ml: ["PyTorch", "TensorFlow", "scikit-learn", "NumPy", "pandas", "OpenAI Gym", "Stable Baselines3"],
    tools: ["Git", "Docker", "GCP", "Weights & Biases", "Flask"]
  }
};