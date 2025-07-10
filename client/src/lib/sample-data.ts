import { IStorage } from "../../server/storage";

export async function loadSampleData(storage: IStorage) {
  // Expanded sample projects with diverse operational units, locations, and comprehensive data
  const sampleProjects = [
    // Diabetes Projects
    {
      name: "MiniMed 780G Advanced Insulin Pump",
      description: "Next-generation automated insulin delivery system with advanced glucose monitoring and predictive algorithms",
      status: "Active",
      category: "Diabetes",
      function: "R&D",
      location: "Fridley",
      stage: "Validation",
      progress: 85,
      deadline: "2024-08-15",
      projectLeader: "Sarah Johnson",
      teamMembers: ["Sarah Johnson", "Michael Rodriguez", "Dr. Emily Chen"],
      roles: ["Project Manager", "Lead Engineer", "Clinical Specialist"],
      skills: ["Embedded Systems", "Regulatory Compliance", "Clinical Research"],
      milestones: ["FDA Submission Q2", "Clinical Trial Q3", "Launch Q4"],
      recentActivity: [
        { description: "Validation Plan v3.2 uploaded", time: "2 hours ago" },
        { description: "Clinical Trial Results submitted", time: "1 day ago" }
      ],
      timeline: [
        {
          id: "research",
          name: "Research & Development",
          description: "Algorithm development and initial testing",
          startDate: "2023-01-15",
          endDate: "2023-08-30",
          status: "completed" as const,
          milestones: ["Algorithm design", "Prototype development", "Lab testing"],
          deliverables: ["Research protocol", "Algorithm specifications", "Lab test results"]
        },
        {
          id: "clinical",
          name: "Clinical Trials",
          description: "Multi-center clinical validation study",
          startDate: "2023-09-01",
          endDate: "2024-06-30",
          status: "in_progress" as const,
          milestones: ["Patient recruitment", "Data collection", "Interim analysis"],
          deliverables: ["Clinical protocol", "Patient data", "Safety reports"]
        },
        {
          id: "regulatory",
          name: "FDA Approval",
          description: "Regulatory submission and approval process",
          startDate: "2024-07-01",
          endDate: "2025-03-31",
          status: "planned" as const,
          milestones: ["Pre-submission meeting", "510(k) submission", "FDA response"],
          deliverables: ["510(k) application", "Clinical data package", "FDA approval letter"]
        }
      ]
    },
    {
      name: "Guardian CGM Real-Time Monitoring",
      description: "Continuous glucose monitoring system with smartphone integration and predictive low glucose alerts",
      status: "Active",
      category: "Diabetes",
      function: "R&D",
      location: "Fridley",
      stage: "Testing",
      progress: 72,
      deadline: "2024-09-30",
      projectLeader: "Dr. Emily Chen",
      teamMembers: ["Dr. Emily Chen", "Sarah Johnson", "James Wilson"],
      roles: ["Clinical Lead", "Systems Engineer", "Software Developer"],
      skills: ["Glucose Monitoring", "Mobile Apps", "Data Analytics"],
      milestones: ["Sensor Validation Q2", "App Beta Testing Q3", "Regulatory Q4"],
      recentActivity: [
        { description: "Mobile app UI/UX review completed", time: "1 hour ago" },
        { description: "Sensor accuracy testing in progress", time: "3 hours ago" }
      ]
    },
    {
      name: "InPen Smart Insulin Pen",
      description: "Bluetooth-enabled insulin pen with dose tracking and smartphone integration",
      status: "Delayed",
      category: "Diabetes",
      function: "Product Development",
      location: "Dublin",
      stage: "Manufacturing",
      progress: 40,
      deadline: "2024-12-01",
      projectLeader: "Maria Santos",
      teamMembers: ["Maria Santos", "Liu Wei", "Dr. James Peterson"],
      roles: ["Product Manager", "Manufacturing Engineer", "Endocrinologist"],
      skills: ["Bluetooth Technology", "Manufacturing", "User Experience"],
      milestones: ["Design Freeze Q1", "Production Setup Q2", "Market Launch Q4"],
      recentActivity: [
        { description: "Manufacturing delays due to component shortage", time: "2 days ago" },
        { description: "Bluetooth connectivity issues resolved", time: "1 week ago" }
      ]
    },

    // Cardiac Projects
    {
      name: "Transcatheter Aortic Valve Replacement",
      description: "Minimally invasive valve replacement technology for severe aortic stenosis patients",
      status: "Active",
      category: "Cardiac",
      function: "R&D",
      location: "Santa Rosa",
      stage: "Testing",
      progress: 67,
      deadline: "2024-10-30",
      projectLeader: "Dr. Michael Chen",
      teamMembers: ["Dr. Michael Chen", "Lisa Wang", "Alex Thompson"],
      roles: ["Clinical Director", "Regulatory Manager", "Senior Engineer"],
      skills: ["Cardiac Devices", "FDA Compliance", "Electrophysiology"],
      milestones: ["Design Freeze Q1", "Animal Studies Q2", "First Human Implant Q3"],
      recentActivity: [
        { description: "Biocompatibility Test Report uploaded", time: "4 hours ago" },
        { description: "Design Review Meeting scheduled", time: "2 days ago" }
      ]
    },
    {
      name: "Implantable Cardiac Defibrillator",
      description: "Advanced ICD with remote monitoring and AI-powered arrhythmia detection",
      status: "Active",
      category: "Cardiac",
      function: "R&D",
      location: "Minneapolis",
      stage: "Development",
      progress: 58,
      deadline: "2024-11-15",
      projectLeader: "Dr. Robert Kim",
      teamMembers: ["Dr. Robert Kim", "Lisa Wang", "Carlos Rodriguez"],
      roles: ["Cardiac Specialist", "Regulatory Affairs", "Hardware Engineer"],
      skills: ["Cardiac Rhythms", "Remote Monitoring", "Battery Technology"],
      milestones: ["Prototype Testing Q2", "Clinical Validation Q3", "FDA Review Q4"],
      recentActivity: [
        { description: "Battery life optimization completed", time: "5 hours ago" },
        { description: "Arrhythmia detection algorithm updated", time: "1 day ago" }
      ]
    },
    {
      name: "Cardiac Ablation System",
      description: "RF ablation technology for treating atrial fibrillation with precision mapping",
      status: "On Hold",
      category: "Cardiac",
      function: "Clinical",
      location: "Galway",
      stage: "Planning",
      progress: 25,
      deadline: "2025-03-15",
      projectLeader: "Dr. Priya Patel",
      teamMembers: ["Dr. Priya Patel", "Thomas O'Brien", "Nina Johansson"],
      roles: ["Clinical Lead", "Systems Engineer", "Quality Assurance"],
      skills: ["RF Technology", "Cardiac Mapping", "Clinical Trials"],
      milestones: ["Protocol Development Q1", "Safety Testing Q2", "Clinical Study Q3"],
      recentActivity: [
        { description: "Project paused pending regulatory guidance", time: "1 week ago" },
        { description: "Safety protocol review completed", time: "2 weeks ago" }
      ]
    },

    // Surgical Projects
    {
      name: "Hugo Robotic Surgery Platform",
      description: "Robotic-assisted surgical system with AI-powered precision and haptic feedback",
      status: "Active",
      category: "Surgical",
      function: "R&D",
      location: "Boulder",
      stage: "Development",
      progress: 78,
      deadline: "2024-09-01",
      projectLeader: "Dr. Amanda Rodriguez",
      teamMembers: ["Dr. Amanda Rodriguez", "Kevin Chang", "Rachel Green"],
      roles: ["Surgical Director", "Robotics Engineer", "Software Architect"],
      skills: ["Robotic Systems", "AI/ML", "Surgical Procedures"],
      milestones: ["System Integration Q2", "Surgeon Training Q3", "Commercial Launch Q4"],
      recentActivity: [
        { description: "Haptic feedback system calibration completed", time: "3 hours ago" },
        { description: "Surgeon training program development ongoing", time: "1 day ago" }
      ],
      timeline: [
        {
          id: "design",
          name: "Design & Engineering",
          description: "System architecture and component design",
          startDate: "2022-03-01",
          endDate: "2023-02-28",
          status: "completed" as const,
          milestones: ["System architecture", "Component design", "Integration testing"],
          deliverables: ["Design specifications", "Component models", "Integration protocols"]
        },
        {
          id: "development",
          name: "Development & Testing",
          description: "Hardware and software development with extensive testing",
          startDate: "2023-03-01",
          endDate: "2024-08-31",
          status: "in_progress" as const,
          milestones: ["Alpha prototype", "Beta testing", "Safety validation"],
          deliverables: ["Working prototype", "Test results", "Safety documentation"]
        },
        {
          id: "validation",
          name: "Clinical Validation",
          description: "Clinical trials and surgeon training programs",
          startDate: "2024-09-01",
          endDate: "2025-06-30",
          status: "planned" as const,
          milestones: ["Clinical protocol", "Surgeon training", "Outcome analysis"],
          deliverables: ["Clinical data", "Training materials", "Outcome reports"]
        }
      ]
    },
    {
      name: "Valleylab Energy Platform",
      description: "Advanced electrosurgical generator with tissue sensing and automatic adjustment",
      status: "Active",
      category: "Surgical",
      function: "Manufacturing",
      location: "Boulder",
      stage: "Production",
      progress: 92,
      deadline: "2024-07-30",
      projectLeader: "Jennifer Martinez",
      teamMembers: ["Jennifer Martinez", "David Park", "Sophie Turner"],
      roles: ["Manufacturing Director", "Quality Engineer", "Process Engineer"],
      skills: ["Electrosurgery", "Manufacturing", "Quality Control"],
      milestones: ["Production Scale-up Q1", "Quality Validation Q2", "Market Launch Q3"],
      recentActivity: [
        { description: "Final quality batch testing completed", time: "1 hour ago" },
        { description: "Production line optimization finished", time: "6 hours ago" }
      ]
    },
    {
      name: "Surgical Staplers Innovation",
      description: "Next-generation surgical staplers with improved reliability and safety features",
      status: "Delayed",
      category: "Surgical",
      function: "Product Development",
      location: "Mansfield",
      stage: "Testing",
      progress: 55,
      deadline: "2024-11-30",
      projectLeader: "Mark Thompson",
      teamMembers: ["Mark Thompson", "Amy Chen", "Robert Johnson"],
      roles: ["Product Manager", "Mechanical Engineer", "Clinical Specialist"],
      skills: ["Surgical Devices", "Mechanical Engineering", "Clinical Testing"],
      milestones: ["Design Validation Q2", "Clinical Testing Q3", "Regulatory Review Q4"],
      recentActivity: [
        { description: "Testing delays due to component redesign", time: "3 days ago" },
        { description: "Safety review meeting scheduled", time: "1 week ago" }
      ]
    },

    // Neuromodulation Projects
    {
      name: "Spinal Cord Stimulation System",
      description: "Next-generation SCS technology for chronic pain management with AI-powered optimization",
      status: "Delayed",
      category: "Neuromodulation",
      function: "R&D",
      location: "Minneapolis",
      stage: "Development",
      progress: 45,
      deadline: "2024-12-01",
      projectLeader: "Jennifer Liu",
      teamMembers: ["Jennifer Liu", "David Kim", "Dr. Amanda Rodriguez"],
      roles: ["Lead Product Manager", "Hardware Engineer", "Clinical Researcher"],
      skills: ["Neurostimulation", "Clinical Trials", "FDA Submission"],
      milestones: ["Prototype Q2", "Clinical Validation Q3", "Regulatory Review Q4"],
      recentActivity: [
        { description: "Clinical trial protocol revision needed", time: "2 days ago" },
        { description: "Hardware optimization in progress", time: "1 week ago" }
      ]
    },
    {
      name: "Deep Brain Stimulation Platform",
      description: "Advanced DBS system for Parkinson's disease with MRI-compatible leads",
      status: "Active",
      category: "Neuromodulation",
      function: "Clinical",
      location: "Memphis",
      stage: "Clinical Trial",
      progress: 68,
      deadline: "2024-10-15",
      projectLeader: "Dr. Sarah Williams",
      teamMembers: ["Dr. Sarah Williams", "Michael Brown", "Dr. Lisa Chen"],
      roles: ["Clinical Director", "Biomedical Engineer", "Neurologist"],
      skills: ["DBS Technology", "MRI Compatibility", "Neurology"],
      milestones: ["Patient Enrollment Q1", "6-Month Follow-up Q2", "Data Analysis Q3"],
      recentActivity: [
        { description: "Patient enrollment ahead of schedule", time: "4 hours ago" },
        { description: "MRI compatibility testing successful", time: "2 days ago" }
      ]
    },
    {
      name: "Vagus Nerve Stimulation Therapy",
      description: "VNS therapy system for treatment-resistant depression and epilepsy",
      status: "Active",
      category: "Neuromodulation",
      function: "R&D",
      location: "Tolochenaz",
      stage: "Testing",
      progress: 71,
      deadline: "2024-09-15",
      projectLeader: "Dr. Pierre Dubois",
      teamMembers: ["Dr. Pierre Dubois", "Elena Rossi", "Hans Mueller"],
      roles: ["Research Director", "Clinical Engineer", "Regulatory Specialist"],
      skills: ["VNS Technology", "Psychiatry", "European Regulation"],
      milestones: ["CE Mark Application Q2", "Clinical Data Q3", "Market Access Q4"],
      recentActivity: [
        { description: "CE Mark documentation submitted", time: "1 day ago" },
        { description: "Clinical efficacy data analysis completed", time: "3 days ago" }
      ]
    },

    // Digital Health Projects
    {
      name: "AI Diagnostic Assistant",
      description: "Machine learning platform for early disease detection using imaging data and patient history analysis",
      status: "Active",
      category: "Digital Health",
      function: "R&D",
      location: "Minneapolis",
      stage: "Development",
      progress: 65,
      deadline: "2024-10-15",
      projectLeader: "Alex Park",
      teamMembers: ["Alex Park", "Jordan Kim", "Taylor Swift"],
      roles: ["Technical Lead", "Data Scientist", "UX Designer"],
      skills: ["Machine Learning", "Computer Vision", "Healthcare AI"],
      milestones: ["Data Collection Q2", "Model Training Q3", "Clinical Validation Q4"],
      recentActivity: [
        { description: "Model accuracy improved to 94.2%", time: "2 hours ago" },
        { description: "Clinical trial protocol approved", time: "1 day ago" }
      ]
    },
    {
      name: "Remote Patient Monitoring Platform",
      description: "Comprehensive RPM solution with wearable integration and predictive analytics",
      status: "Active",
      category: "Digital Health",
      function: "Software Development",
      location: "Bangalore",
      stage: "Development",
      progress: 82,
      deadline: "2024-08-30",
      projectLeader: "Rajesh Kumar",
      teamMembers: ["Rajesh Kumar", "Priya Sharma", "Arjun Patel"],
      roles: ["Software Architect", "Mobile Developer", "Data Engineer"],
      skills: ["Cloud Computing", "Mobile Development", "Data Analytics"],
      milestones: ["Beta Testing Q2", "Security Audit Q3", "Commercial Launch Q4"],
      recentActivity: [
        { description: "Beta testing phase completed successfully", time: "1 hour ago" },
        { description: "Security audit scheduled for next week", time: "2 days ago" }
      ]
    },
    {
      name: "Telehealth Integration Suite",
      description: "Unified platform for telehealth consultations with device data integration",
      status: "Completed",
      category: "Digital Health",
      function: "Software Development",
      location: "Tel Aviv",
      stage: "Deployment",
      progress: 100,
      deadline: "2024-06-15",
      projectLeader: "Dr. Rachel Cohen",
      teamMembers: ["Dr. Rachel Cohen", "Yuki Tanaka", "Omar Hassan"],
      roles: ["Product Director", "Software Engineer", "UX Designer"],
      skills: ["Telehealth", "Integration APIs", "Healthcare UX"],
      milestones: ["Platform Launch Q1", "User Adoption Q2", "Feature Enhancement Q3"],
      recentActivity: [
        { description: "Platform successfully launched", time: "1 month ago" },
        { description: "User adoption exceeding targets", time: "2 weeks ago" }
      ]
    },

    // Global Operations Projects
    {
      name: "Supply Chain Optimization Initiative",
      description: "Global supply chain transformation using AI and blockchain for transparency",
      status: "Active",
      category: "Operations",
      function: "Operations",
      location: "Singapore",
      stage: "Implementation",
      progress: 73,
      deadline: "2024-12-31",
      projectLeader: "Li Wei",
      teamMembers: ["Li Wei", "Maria Gonzalez", "Ahmed Al-Rashid"],
      roles: ["Operations Director", "Supply Chain Manager", "Technology Lead"],
      skills: ["Supply Chain", "Blockchain", "AI Optimization"],
      milestones: ["Pilot Launch Q1", "Regional Rollout Q2", "Global Deployment Q4"],
      recentActivity: [
        { description: "Blockchain pilot successful in APAC region", time: "2 hours ago" },
        { description: "AI model reducing delivery times by 15%", time: "1 day ago" }
      ]
    },
    {
      name: "Quality Management System Upgrade",
      description: "Digital transformation of quality management processes across all facilities",
      status: "Active",
      category: "Quality",
      function: "Quality Assurance",
      location: "Cork",
      stage: "Rollout",
      progress: 88,
      deadline: "2024-08-01",
      projectLeader: "Sean O'Sullivan",
      teamMembers: ["Sean O'Sullivan", "Emma Watson", "Carlos Silva"],
      roles: ["Quality Director", "Systems Analyst", "Process Engineer"],
      skills: ["Quality Systems", "Digital Transformation", "Process Improvement"],
      milestones: ["System Design Q1", "Pilot Testing Q2", "Full Rollout Q3"],
      recentActivity: [
        { description: "90% of facilities now using new QMS", time: "3 hours ago" },
        { description: "Training completion rate at 95%", time: "1 day ago" }
      ]
    },
    {
      name: "Regulatory Harmonization Project",
      description: "Standardizing regulatory processes across global markets for faster approvals",
      status: "Delayed",
      category: "Regulatory",
      function: "Regulatory Affairs",
      location: "Brussels",
      stage: "Planning",
      progress: 35,
      deadline: "2025-01-31",
      projectLeader: "Dr. Klaus Weber",
      teamMembers: ["Dr. Klaus Weber", "Francoise Dubois", "Yuki Nakamura"],
      roles: ["Regulatory Director", "Compliance Manager", "Regional Lead"],
      skills: ["Global Regulations", "Compliance", "Process Standardization"],
      milestones: ["Regulatory Mapping Q1", "Process Design Q2", "Implementation Q4"],
      recentActivity: [
        { description: "Regulatory mapping phase extended", time: "1 week ago" },
        { description: "Stakeholder alignment meeting scheduled", time: "3 days ago" }
      ]
    }
  ];

  // Expanded people data with diverse roles and locations
  const samplePeople = [
    {
      name: "Dr. Emily Chen",
      title: "Clinical Research Director",
      function: "Clinical",
      location: "Fridley",
      email: "emily.chen@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Clinical Trials", "Diabetes Research", "Glucose Monitoring", "Data Analytics"],
      patents: 6,
      publications: 12,
      yearsExperience: 10,
      bio: "Clinical research specialist focusing on diabetes care and continuous glucose monitoring technologies.",
      education: ["MD Endocrinology - Mayo Clinic", "PhD Clinical Research - University of Minnesota"],
      achievements: ["ADA Clinical Excellence Award", "Diabetes Technology Innovation Grant"]
    },
    {
      name: "Sarah Johnson",
      title: "Senior R&D Engineer",
      function: "R&D",
      location: "Fridley",
      email: "sarah.johnson@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Embedded Systems", "Diabetes Technology", "Regulatory Compliance", "Clinical Research"],
      patents: 12,
      publications: 8,
      yearsExperience: 15,
      bio: "Leading expert in diabetes technology with 15 years of experience in medical device development.",
      education: ["PhD Biomedical Engineering - University of Minnesota", "MS Electrical Engineering - MIT"],
      achievements: ["FDA Breakthrough Device Designation", "Medtronic Innovation Award 2023"],
      drmBelt: "green",
      fellowships: ["bakken_fellow"],
      cornerstoneTrainings: ["Design Controls", "Risk Management", "Statistical Process Control", "Human Factors"],
      abstractsData: [
        {
          title: "Advanced Insulin Pump Control Algorithms",
          conference: "2023 Diabetes Technology Conference: Global Session",
          presentationDate: "2023-09-12",
          description: "Novel control algorithms for automated insulin delivery systems with improved safety",
          contributors: ["Dr. Emily Chen", "Michael Rodriguez"],
          link: "/abstracts/insulin-algorithms-2023"
        }
      ],
      patentsData: [
        {
          title: "Automated Insulin Delivery Control System",
          patentNumber: "US10,987,654",
          filingDate: "2022-03-15",
          description: "Advanced control system for automated insulin pumps with predictive glucose management",
          inventors: ["Sarah Johnson", "Dr. Emily Chen", "Michael Rodriguez"],
          status: "Granted"
        }
      ],
      connections: [
        { projectId: "Lz4uI4DKk_39wc2-k4pdq", role: "Lead Engineer", skillsShared: ["Embedded Systems", "Diabetes Technology"] }
      ]
    },
    {
      name: "Alex Park",
      title: "Senior Data Scientist",
      function: "R&D",
      location: "Minneapolis",
      email: "alex.park@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Machine Learning", "Computer Vision", "Healthcare AI", "Python"],
      patents: 3,
      publications: 18,
      yearsExperience: 8,
      bio: "AI/ML specialist developing next-generation diagnostic tools and predictive healthcare solutions.",
      education: ["PhD Computer Science - Stanford", "MS Data Science - Carnegie Mellon"],
      achievements: ["Best Paper Award - MICCAI 2023", "AI Innovation Excellence Award"],
      drmBelt: "black",
      fellowships: ["tech_fellow"],
      cornerstoneTrainings: ["Design Controls", "Risk Management", "Clinical Research", "Quality Systems"],
      abstractsData: [
        {
          title: "Deep Learning for Medical Image Analysis in Cardiac Diagnostics",
          conference: "2023 Medical Imaging Conference: International Session",
          presentationDate: "2023-11-15",
          description: "Novel deep learning approach for automated cardiac anomaly detection with 97% accuracy",
          contributors: ["Dr. Emily Chen", "Sarah Johnson", "Dr. Michael Chen"],
          link: "/abstracts/cardiac-dl-2023"
        },
        {
          title: "AI-Powered Predictive Analytics for Diabetes Management",
          conference: "2024 S&T Conference: U.S. Session",
          presentationDate: "2024-03-20",
          description: "Machine learning models for predicting glucose trends and insulin requirements",
          contributors: ["Dr. Emily Chen", "Jennifer Liu"],
          link: "/abstracts/diabetes-ai-2024"
        }
      ],
      patentsData: [
        {
          title: "System and Method for AI-Driven Medical Device Diagnostics",
          patentNumber: "US11,234,567",
          filingDate: "2023-01-15",
          description: "Artificial intelligence system for real-time medical device performance analysis and predictive maintenance",
          inventors: ["Alex Park", "Sarah Johnson", "Dr. Amanda Rodriguez"],
          status: "Granted"
        },
        {
          title: "Machine Learning Algorithm for Glucose Prediction",
          patentNumber: "US11,345,678",
          filingDate: "2023-06-10",
          description: "Advanced ML algorithm for predicting blood glucose levels using continuous monitoring data",
          inventors: ["Alex Park", "Dr. Emily Chen"],
          status: "Pending"
        }
      ],
      connections: [
        { projectId: "n2nTn66b86zqcOR3Wo348", role: "Technical Lead", skillsShared: ["Machine Learning", "Healthcare AI"] },
        { personId: "fWATy_r5mQh4H6w4lx7Tx", relationship: "Research Collaborator", sharedProjects: ["AI Diagnostic Assistant"] }
      ]
    },
    {
      name: "Dr. Michael Chen",
      title: "Cardiac Clinical Director",
      function: "Clinical",
      location: "Santa Rosa",
      email: "michael.chen@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Cardiac Surgery", "TAVR Procedures", "Clinical Trials", "Interventional Cardiology"],
      patents: 8,
      publications: 25,
      yearsExperience: 18,
      bio: "Interventional cardiologist specializing in transcatheter valve procedures and structural heart disease.",
      education: ["MD Cardiothoracic Surgery - Johns Hopkins", "Fellowship - Cleveland Clinic"],
      achievements: ["ACC Innovation Award", "Pioneer in TAVR Technology"]
    },
    {
      name: "Dr. Amanda Rodriguez",
      title: "Surgical Systems Director",
      function: "R&D",
      location: "Boulder",
      email: "amanda.rodriguez@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Robotic Surgery", "AI/ML", "Surgical Procedures", "Systems Engineering"],
      patents: 15,
      publications: 20,
      yearsExperience: 12,
      bio: "Robotic surgery expert leading development of next-generation surgical platforms.",
      education: ["MD Surgery - Harvard Medical School", "PhD Biomedical Engineering - MIT"],
      achievements: ["Robotics Innovation Award", "Surgical Technology Pioneer"],
      drmBelt: "yellow",
      fellowships: ["tech_fellow", "bakken_fellow"],
      cornerstoneTrainings: ["Design Controls", "Risk Management", "Human Factors", "Cybersecurity", "Software Lifecycle"],
      abstractsData: [
        {
          title: "AI-Enhanced Robotic Surgery: Future of Precision Medicine",
          conference: "2024 S&T Conference: International Session",
          presentationDate: "2024-05-18",
          description: "Integration of artificial intelligence in robotic surgical systems for improved precision and outcomes",
          contributors: ["Kevin Chang", "Rachel Green", "Alex Park"],
          link: "/abstracts/ai-robotics-2024"
        }
      ],
      patentsData: [
        {
          title: "Haptic Feedback System for Robotic Surgery",
          patentNumber: "US11,567,890",
          filingDate: "2023-08-22",
          description: "Advanced haptic feedback mechanism for robotic surgical instruments",
          inventors: ["Dr. Amanda Rodriguez", "Kevin Chang", "Rachel Green"],
          status: "Granted"
        }
      ],
      connections: [
        { projectId: "hugo-robotic", role: "Director", skillsShared: ["Robotic Surgery", "AI/ML", "Systems Engineering"] }
      ]
    },
    {
      name: "Jennifer Liu",
      title: "Neuromodulation Product Manager",
      function: "Product Management",
      location: "Minneapolis",
      email: "jennifer.liu@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1594824388550-7ac8bc6d5696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Neurostimulation", "Product Strategy", "Clinical Trials", "Market Analysis"],
      patents: 5,
      publications: 14,
      yearsExperience: 11,
      bio: "Product management leader for neuromodulation therapies with focus on chronic pain solutions.",
      education: ["MBA - Wharton", "MS Biomedical Engineering - Northwestern"],
      achievements: ["Product Launch Excellence Award", "Neuromodulation Innovation Leader"]
    },
    {
      name: "Dr. Robert Kim",
      title: "Cardiac Rhythm Specialist",
      function: "Clinical",
      location: "Minneapolis",
      email: "robert.kim@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Cardiac Rhythms", "Electrophysiology", "Remote Monitoring", "Device Programming"],
      patents: 9,
      publications: 22,
      yearsExperience: 16,
      bio: "Electrophysiologist specializing in cardiac rhythm management and remote monitoring technologies.",
      education: ["MD Cardiology - Mayo Clinic", "Fellowship EP - Cleveland Clinic"],
      achievements: ["HRS Excellence Award", "Cardiac Rhythm Innovation Grant"]
    },
    {
      name: "Maria Santos",
      title: "Global Product Manager",
      function: "Product Management",
      location: "Dublin",
      email: "maria.santos@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Global Product Strategy", "Diabetes Care", "Market Access", "International Business"],
      patents: 2,
      publications: 7,
      yearsExperience: 13,
      bio: "Global product manager driving diabetes care innovation across international markets.",
      education: ["MBA - INSEAD", "MS Business Analytics - Trinity College Dublin"],
      achievements: ["Global Launch Excellence", "Diabetes Care Innovation Award"]
    },
    {
      name: "Rajesh Kumar",
      title: "Software Architecture Lead",
      function: "Software Development",
      location: "Bangalore",
      email: "rajesh.kumar@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Cloud Computing", "Mobile Development", "Healthcare APIs", "Microservices"],
      patents: 4,
      publications: 11,
      yearsExperience: 14,
      bio: "Software architect specializing in healthcare digital solutions and cloud-native applications.",
      education: ["MS Computer Science - IIT Bangalore", "BS Software Engineering - BITS Pilani"],
      achievements: ["Cloud Innovation Award", "Digital Health Pioneer"]
    },
    {
      name: "Dr. Sarah Williams",
      title: "Clinical Research Director",
      function: "Clinical",
      location: "Memphis",
      email: "sarah.williams@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["DBS Technology", "Neurology", "Clinical Trials", "Parkinson's Research"],
      patents: 7,
      publications: 28,
      yearsExperience: 19,
      bio: "Neurologist and clinical researcher specializing in deep brain stimulation for movement disorders.",
      education: ["MD Neurology - Vanderbilt", "PhD Neuroscience - Washington University"],
      achievements: ["Parkinson's Foundation Award", "Movement Disorder Society Recognition"]
    },
    {
      name: "Li Wei",
      title: "Global Operations Director",
      function: "Operations",
      location: "Singapore",
      email: "li.wei@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Supply Chain", "Operations Excellence", "Digital Transformation", "Global Strategy"],
      patents: 1,
      publications: 5,
      yearsExperience: 17,
      bio: "Operations leader driving global supply chain transformation and operational excellence initiatives.",
      education: ["MBA - NUS Business School", "MS Industrial Engineering - Tsinghua University"],
      achievements: ["Supply Chain Excellence Award", "Digital Transformation Leader"]
    },
    {
      name: "Dr. Klaus Weber",
      title: "Global Regulatory Director",
      function: "Regulatory Affairs",
      location: "Brussels",
      email: "klaus.weber@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Global Regulations", "MDR Compliance", "FDA Liaison", "Regulatory Strategy"],
      patents: 0,
      publications: 16,
      yearsExperience: 22,
      bio: "Regulatory affairs expert with extensive experience in global medical device approvals and compliance.",
      education: ["PhD Regulatory Science - University of Bonn", "JD Medical Law - University of Vienna"],
      achievements: ["Regulatory Excellence Award", "EU MDR Implementation Leader"]
    }
  ];

  // Create all projects
  for (const project of sampleProjects) {
    await storage.createProject(project);
  }

  // Create all people
  for (const person of samplePeople) {
    await storage.createPerson(person);
  }

  // Create sample activities
  const sampleActivities = [
    {
      projectId: "1",
      type: "document_upload",
      description: "Technical Specification v2.1 uploaded",
      documentType: "Technical Specification",
      fileName: "Tech_Spec_MiniMed_780G_v2.1.pdf",
      userId: "sarah.johnson@medtronic.com",
      metadata: { version: "2.1", category: "Technical" }
    },
    {
      projectId: "1",
      type: "milestone_update",
      description: "FDA Pre-submission meeting completed",
      userId: "dr.emily.chen@medtronic.com",
      metadata: { milestone: "FDA Submission Q2", status: "completed" }
    },
    {
      projectId: "2",
      type: "document_upload",
      description: "Clinical Protocol v1.3 uploaded",
      documentType: "Clinical Protocol",
      fileName: "Guardian_CGM_Clinical_Protocol_v1.3.pdf",
      userId: "dr.emily.chen@medtronic.com",
      metadata: { version: "1.3", category: "Clinical" }
    },
    {
      projectId: "3",
      type: "status_change",
      description: "Project status changed to Delayed",
      userId: "maria.santos@medtronic.com",
      metadata: { previous_status: "Active", new_status: "Delayed" }
    }
  ];

  // Create activities (they'll get auto-generated IDs)
  for (const activity of sampleActivities) {
    await storage.createActivity(activity);
  }

  // Create sample documents
  const sampleDocuments = [
    {
      projectId: "1",
      name: "Technical Specification v2.1",
      type: "Technical Specification",
      description: "Complete technical specifications for MiniMed 780G Advanced Insulin Pump",
      version: "2.1",
      status: "active",
      fileSize: 2450000,
      filePath: "/documents/tech_spec_minimed_780g_v2.1.pdf",
      uploadedBy: "sarah.johnson@medtronic.com",
      metadata: { 
        category: "Technical", 
        confidentiality: "Internal",
        review_status: "Approved",
        approved_by: "Dr. Emily Chen"
      }
    },
    {
      projectId: "1",
      name: "Design History File",
      type: "Design Control",
      description: "Comprehensive design history documentation for regulatory submission",
      version: "1.0",
      status: "active",
      fileSize: 15600000,
      filePath: "/documents/dhf_minimed_780g_v1.0.pdf",
      uploadedBy: "sarah.johnson@medtronic.com",
      metadata: { 
        category: "Regulatory", 
        confidentiality: "Confidential",
        review_status: "Under Review"
      }
    },
    {
      projectId: "2",
      name: "Clinical Protocol v1.3",
      type: "Clinical Protocol",
      description: "Clinical study protocol for Guardian CGM Real-Time Monitoring system",
      version: "1.3",
      status: "active",
      fileSize: 890000,
      filePath: "/documents/guardian_cgm_clinical_protocol_v1.3.pdf",
      uploadedBy: "dr.emily.chen@medtronic.com",
      metadata: { 
        category: "Clinical", 
        confidentiality: "Confidential",
        review_status: "Approved",
        irb_approval: "Pending"
      }
    },
    {
      projectId: "4",
      name: "Biocompatibility Test Report",
      type: "Test Report",
      description: "ISO 10993 biocompatibility testing results for TAVR device materials",
      version: "1.0",
      status: "active",
      fileSize: 1200000,
      filePath: "/documents/tavr_biocompatibility_report_v1.0.pdf",
      uploadedBy: "dr.michael.chen@medtronic.com",
      metadata: { 
        category: "Testing", 
        confidentiality: "Internal",
        review_status: "Approved",
        test_standard: "ISO 10993"
      }
    }
  ];

  // Create documents
  for (const document of sampleDocuments) {
    await storage.createDocument(document);
  }

  console.log("Sample data loaded successfully");
}