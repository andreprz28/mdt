import { IStorage } from "../../server/storage";

export async function loadSampleData(storage: IStorage) {
  // Sample projects
  const sampleProjects = [
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
        { description: "Issue identified: Battery optimization", time: "6 hours ago" },
        { description: "Technical Review postponed", time: "3 days ago" }
      ]
    },
    {
      name: "Deep Brain Stimulation Platform",
      description: "Advanced DBS system for Parkinson's disease with adaptive stimulation algorithms",
      status: "Active",
      category: "Neuromodulation",
      function: "R&D",
      location: "Minneapolis",
      stage: "Validation",
      progress: 78,
      deadline: "2024-07-20",
      projectLeader: "Dr. Amanda Rodriguez",
      teamMembers: ["Dr. Amanda Rodriguez", "Jennifer Liu", "Dr. Michael Patel"],
      roles: ["Clinical Director", "Product Manager", "Neurosurgeon"],
      skills: ["Deep Brain Stimulation", "Parkinson's Research", "Surgical Implants"],
      milestones: ["Clinical Trial Complete Q1", "FDA Submission Q2", "Launch Q3"],
      recentActivity: [
        { description: "Clinical trial data analysis completed", time: "2 hours ago" },
        { description: "FDA pre-submission meeting scheduled", time: "1 day ago" }
      ]
    },
    {
      name: "AI-Powered Surgical Navigation",
      description: "Machine learning-enhanced surgical guidance system with real-time imaging",
      status: "Planning",
      category: "Surgical",
      function: "R&D",
      location: "Dublin",
      stage: "Concept",
      progress: 15,
      deadline: "2025-03-15",
      projectLeader: "Dr. Amanda Rodriguez",
      teamMembers: ["Dr. Amanda Rodriguez", "Quinn Johnson", "Taylor Brown"],
      roles: ["Principal Investigator", "Software Lead", "Clinical Specialist"],
      skills: ["Machine Learning", "Medical Imaging", "Neurosurgery"],
      milestones: ["Market Research Q1", "Concept Validation Q2", "Prototype Q3"],
      recentActivity: [
        { description: "Market Research Report completed", time: "1 day ago" },
        { description: "Initial Concept Presentation scheduled", time: "1 week ago" }
      ]
    },
    {
      name: "Robotic Surgical System",
      description: "Next-generation robotic platform for minimally invasive spine surgery",
      status: "Active",
      category: "Surgical",
      function: "R&D",
      location: "Dublin",
      stage: "Testing",
      progress: 63,
      deadline: "2024-12-31",
      projectLeader: "Dr. Elena Vasquez",
      teamMembers: ["Dr. Elena Vasquez", "Quinn Johnson", "Marcus Thompson"],
      roles: ["Surgical Lead", "Robotics Engineer", "Systems Integrator"],
      skills: ["Robotic Surgery", "Spine Procedures", "Precision Engineering"],
      milestones: ["Prototype Demo Q2", "Surgeon Training Q3", "Clinical Pilot Q4"],
      recentActivity: [
        { description: "Robotic arm calibration completed", time: "3 hours ago" },
        { description: "Surgeon feedback session scheduled", time: "2 days ago" }
      ]
    },
    {
      name: "Patient Remote Monitoring Platform",
      description: "Comprehensive digital health platform for chronic disease management",
      status: "Active",
      category: "Digital Health",
      function: "R&D",
      location: "Remote",
      stage: "Development",
      progress: 52,
      deadline: "2024-10-15",
      projectLeader: "Taylor Brown",
      teamMembers: ["Taylor Brown", "Alex Park", "Dr. Samantha Lee"],
      roles: ["Digital Health Lead", "Software Architect", "Clinical Informaticist"],
      skills: ["Digital Health", "Cloud Computing", "Data Security"],
      milestones: ["MVP Launch Q2", "Pilot Programs Q3", "Scale Deployment Q4"],
      recentActivity: [
        { description: "HIPAA compliance review completed", time: "1 hour ago" },
        { description: "Patient portal beta testing started", time: "4 hours ago" }
      ]
    },
    {
      name: "AI Diagnostic Assistant",
      description: "Machine learning platform for early disease detection and diagnostic support",
      status: "Planning",
      category: "Digital Health",
      function: "R&D",
      location: "Shanghai",
      stage: "Concept",
      progress: 25,
      deadline: "2025-01-30",
      projectLeader: "Dr. Wei Zhang",
      teamMembers: ["Dr. Wei Zhang", "Alex Park", "Dr. Priya Sharma"],
      roles: ["AI Research Lead", "Data Scientist", "Clinical Advisor"],
      skills: ["Machine Learning", "Medical AI", "Diagnostic Imaging"],
      milestones: ["Algorithm Development Q1", "Clinical Validation Q2", "Regulatory Q3"],
      recentActivity: [
        { description: "Training dataset compilation started", time: "2 hours ago" },
        { description: "Ethics committee review requested", time: "1 week ago" }
      ]
    }
  ];

  // Sample people
  const samplePeople = [
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
      achievements: ["FDA Breakthrough Device Designation", "Medtronic Innovation Award 2023"]
    },
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
      name: "Dr. Michael Chen",
      title: "Principal Clinical Researcher",
      function: "Clinical",
      location: "Santa Rosa",
      email: "michael.chen@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Cardiac Devices", "Clinical Trials", "Electrophysiology", "FDA Compliance"],
      patents: 8,
      publications: 15,
      yearsExperience: 12,
      bio: "Renowned cardiologist and researcher specializing in transcatheter heart valve technologies.",
      education: ["MD - Harvard Medical School", "PhD Cardiovascular Medicine - Stanford"],
      achievements: ["American Heart Association Fellow", "Published 15 peer-reviewed papers"]
    },
    {
      name: "Dr. Robert Kim",
      title: "Senior Cardiac Specialist",
      function: "R&D",
      location: "Minneapolis",
      email: "robert.kim@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Cardiac Rhythms", "Defibrillator Technology", "Remote Monitoring", "Battery Optimization"],
      patents: 14,
      publications: 9,
      yearsExperience: 18,
      bio: "Expert in implantable cardiac devices with extensive experience in defibrillator technology.",
      education: ["MD Cardiology - Johns Hopkins", "MS Biomedical Engineering - Duke"],
      achievements: ["Heart Rhythm Society Fellow", "Medtronic Cardiac Innovation Award"]
    },
    {
      name: "Jennifer Liu",
      title: "Lead Product Manager",
      function: "R&D",
      location: "Minneapolis",
      email: "jennifer.liu@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Neurostimulation", "Product Management", "Clinical Trials", "Market Analysis"],
      patents: 5,
      publications: 3,
      yearsExperience: 8,
      bio: "Product management leader with deep expertise in neuromodulation technologies.",
      education: ["MBA - Wharton School", "MS Biomedical Engineering - Johns Hopkins"],
      achievements: ["Medtronic Rising Star Award", "Chronic Pain Innovation Patent"]
    },
    {
      name: "Dr. Amanda Rodriguez",
      title: "Principal Neurosurgeon",
      function: "Clinical",
      location: "Minneapolis",
      email: "amanda.rodriguez@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Deep Brain Stimulation", "Parkinson's Research", "Surgical Implants", "Neurosurgery"],
      patents: 11,
      publications: 22,
      yearsExperience: 16,
      bio: "Leading neurosurgeon specializing in deep brain stimulation and movement disorders.",
      education: ["MD Neurosurgery - Mayo Clinic", "PhD Neuroscience - Harvard"],
      achievements: ["International Neuromodulation Society Award", "Parkinson's Foundation Research Grant"]
    },
    {
      name: "Dr. Elena Vasquez",
      title: "Robotic Surgery Lead",
      function: "R&D",
      location: "Dublin",
      email: "elena.vasquez@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Robotic Surgery", "Spine Procedures", "Precision Engineering", "Surgical Navigation"],
      patents: 9,
      publications: 7,
      yearsExperience: 13,
      bio: "Robotic surgery expert with focus on minimally invasive spine procedures.",
      education: ["MD Orthopedic Surgery - University of Barcelona", "MS Robotics - MIT"],
      achievements: ["European Spine Society Innovation Award", "Robotic Surgery Pioneer Award"]
    },
    {
      name: "Quinn Johnson",
      title: "Senior Software Engineer",
      function: "R&D",
      location: "Dublin",
      email: "quinn.johnson@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Machine Learning", "Medical Imaging", "Software Architecture", "Real-time Systems"],
      patents: 3,
      publications: 4,
      yearsExperience: 7,
      bio: "Software engineering specialist in medical imaging and machine learning applications.",
      education: ["MS Computer Science - Trinity College Dublin", "BS Software Engineering - University College Dublin"],
      achievements: ["Medical AI Innovation Award", "Best Paper Award - Medical Imaging Conference"]
    },
    {
      name: "Taylor Brown",
      title: "Digital Health Director",
      function: "R&D",
      location: "Remote",
      email: "taylor.brown@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Digital Health", "Cloud Computing", "Data Security", "Healthcare Analytics"],
      patents: 2,
      publications: 5,
      yearsExperience: 9,
      bio: "Digital health innovation leader focused on remote patient monitoring and healthcare data platforms.",
      education: ["MBA Healthcare Management - Northwestern", "MS Health Informatics - UCSF"],
      achievements: ["Digital Health Innovation Award", "Healthcare IT Excellence Recognition"]
    },
    {
      name: "Dr. Wei Zhang",
      title: "AI Research Director",
      function: "R&D",
      location: "Shanghai",
      email: "wei.zhang@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Machine Learning", "Medical AI", "Diagnostic Imaging", "Deep Learning"],
      patents: 7,
      publications: 18,
      yearsExperience: 11,
      bio: "AI research leader specializing in medical diagnostic applications and machine learning.",
      education: ["PhD Computer Science - Tsinghua University", "MS Artificial Intelligence - Stanford"],
      achievements: ["AI in Healthcare Award", "Nature Medicine Publication", "Medical AI Patent Portfolio"]
    },
    {
      name: "Lisa Wang",
      title: "Regulatory Affairs Manager",
      function: "Regulatory",
      location: "Santa Rosa",
      email: "lisa.wang@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["FDA Compliance", "Regulatory Strategy", "Clinical Documentation", "Quality Assurance"],
      patents: 1,
      publications: 2,
      yearsExperience: 6,
      bio: "Regulatory affairs expert with focus on cardiac device approvals and FDA submissions.",
      education: ["MS Regulatory Science - USC", "BS Biomedical Engineering - UC San Diego"],
      achievements: ["FDA Breakthrough Device Designation", "Regulatory Excellence Award"]
    },
    {
      name: "Alex Park",
      title: "Senior Data Scientist",
      function: "R&D",
      location: "Remote",
      email: "alex.park@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Data Science", "Healthcare Analytics", "Machine Learning", "Statistical Analysis"],
      patents: 4,
      publications: 6,
      yearsExperience: 8,
      bio: "Data scientist specializing in healthcare analytics and predictive modeling for medical devices.",
      education: ["PhD Statistics - University of Washington", "MS Data Science - Carnegie Mellon"],
      achievements: ["Healthcare Data Science Award", "Predictive Analytics Innovation"]
    }
  ];

  // Create projects
  for (const project of sampleProjects) {
    await storage.createProject(project);
  }

  // Create people
  for (const person of samplePeople) {
    await storage.createPerson(person);
  }

  // Create sample activities
  const projects = await storage.getProjects();
  for (const project of projects) {
    await storage.createActivity({
      projectId: project.id,
      type: "document_upload",
      description: `Project ${project.name} validation document uploaded`,
      documentType: "Validation Plan",
      fileName: "validation_plan_v3.2.pdf",
      userId: project.projectLeader,
      metadata: { version: "3.2", size: "2.4MB" }
    });

    await storage.createActivity({
      projectId: project.id,
      type: "milestone_reached",
      description: `Project ${project.name} reached ${project.stage} stage`,
      userId: project.projectLeader,
      metadata: { stage: project.stage, progress: project.progress }
    });
  }

  console.log("Sample data loaded successfully");
}
