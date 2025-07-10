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
