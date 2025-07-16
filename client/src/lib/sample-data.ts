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
      ],
      manufacturingSites: [
        {
          id: "fridley_main",
          name: "Fridley Manufacturing Center",
          location: "Fridley, MN",
          role: "Primary Production",
          capacity: "500,000 units/year",
          certifications: ["ISO 13485", "FDA 21 CFR Part 820", "CE Mark"],
          capabilities: ["Sensor Assembly", "Electronics Integration", "Final Testing"]
        },
        {
          id: "dublin_assembly",
          name: "Dublin Assembly Facility",
          location: "Dublin, Ireland",
          role: "Secondary Assembly",
          capacity: "200,000 units/year",
          certifications: ["ISO 13485", "CE Mark", "Health Canada"],
          capabilities: ["Component Assembly", "Quality Testing", "Packaging"]
        }
      ],
      billOfMaterials: [
        {
          partNumber: "MDT-CGM-001",
          description: "Glucose Sensor Assembly",
          quantity: 1,
          unitCost: 85.50,
          supplier: "Medtronic Internal",
          leadTime: "2 weeks",
          criticality: "High"
        },
        {
          partNumber: "MDT-CGM-002",
          description: "Wireless Transmitter Module",
          quantity: 1,
          unitCost: 125.00,
          supplier: "TI Electronics",
          leadTime: "4 weeks",
          criticality: "High"
        },
        {
          partNumber: "MDT-CGM-003",
          description: "Biocompatible Adhesive Patch",
          quantity: 1,
          unitCost: 12.75,
          supplier: "3M Medical",
          leadTime: "1 week",
          criticality: "Medium"
        },
        {
          partNumber: "MDT-CGM-004",
          description: "Battery Pack (Li-ion)",
          quantity: 1,
          unitCost: 28.50,
          supplier: "Panasonic Medical",
          leadTime: "3 weeks",
          criticality: "High"
        }
      ],
      parts: [
        {
          partNumber: "MDT-CGM-001",
          name: "Glucose Sensor Assembly",
          category: "Sensor",
          material: "Biocompatible Polymer",
          dimensions: "5mm x 0.4mm x 12mm",
          weight: "0.8g",
          sterilization: "ETO",
          shelfLife: "24 months"
        },
        {
          partNumber: "MDT-CGM-002",
          name: "Wireless Transmitter Module",
          category: "Electronics",
          material: "Medical Grade Plastic",
          dimensions: "25mm x 15mm x 8mm",
          weight: "5.2g",
          sterilization: "Gamma",
          shelfLife: "36 months"
        }
      ],
      drawings: [
        {
          drawingNumber: "DWG-CGM-001-R3",
          title: "Sensor Assembly - Mechanical Layout",
          type: "Assembly Drawing",
          revision: "R3",
          date: "2024-03-15",
          engineer: "Sarah Johnson",
          format: "PDF",
          pages: 4
        },
        {
          drawingNumber: "DWG-CGM-002-R2",
          title: "Transmitter Electronics Schematic",
          type: "Electrical Schematic",
          revision: "R2",
          date: "2024-02-28",
          engineer: "Michael Rodriguez",
          format: "PDF",
          pages: 8
        },
        {
          drawingNumber: "DWG-CGM-003-R1",
          title: "System Block Diagram",
          type: "System Diagram",
          revision: "R1",
          date: "2024-01-20",
          engineer: "Dr. Emily Chen",
          format: "VSDX",
          pages: 2
        }
      ],
      mockDocuments: [
        {
          id: "DOC-001",
          name: "Design Control Plan v3.2",
          type: "Design Document",
          version: "3.2",
          size: "2.4 MB",
          uploadedBy: "Sarah Johnson",
          uploadedAt: "2024-07-08",
          status: "Current"
        },
        {
          id: "DOC-002",
          name: "Risk Management File",
          type: "Risk Assessment",
          version: "2.1",
          size: "5.8 MB",
          uploadedBy: "Dr. Emily Chen",
          uploadedAt: "2024-07-05",
          status: "Current"
        },
        {
          id: "DOC-003",
          name: "Clinical Evaluation Report",
          type: "Clinical Document",
          version: "1.5",
          size: "12.3 MB",
          uploadedBy: "Michael Rodriguez",
          uploadedAt: "2024-07-01",
          status: "Under Review"
        },
        {
          id: "DOC-004",
          name: "Software Requirements Specification",
          type: "Technical Specification",
          version: "4.0",
          size: "3.7 MB",
          uploadedBy: "Sarah Johnson",
          uploadedAt: "2024-06-28",
          status: "Current"
        }
      ],
      revisions: [
        {
          version: "3.2",
          date: "2024-07-08",
          author: "Sarah Johnson",
          changes: "Updated sensor calibration algorithms",
          reviewStatus: "Approved"
        },
        {
          version: "3.1",
          date: "2024-06-15",
          author: "Michael Rodriguez",
          changes: "Improved wireless transmission protocol",
          reviewStatus: "Approved"
        },
        {
          version: "3.0",
          date: "2024-05-20",
          author: "Dr. Emily Chen",
          changes: "Major update: Added predictive analytics",
          reviewStatus: "Approved"
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
      ],
      billOfMaterials: [
        {
          partNumber: "MDT-GRD-001",
          description: "Real-time CGM Sensor",
          quantity: 1,
          unitCost: 78.25,
          supplier: "Medtronic Internal",
          leadTime: "2 weeks",
          criticality: "High"
        },
        {
          partNumber: "MDT-GRD-002",
          description: "Bluetooth 5.0 Transmitter",
          quantity: 1,
          unitCost: 95.50,
          supplier: "Nordic Semiconductor",
          leadTime: "6 weeks",
          criticality: "High"
        },
        {
          partNumber: "MDT-GRD-003",
          description: "Mobile App License",
          quantity: 1,
          unitCost: 15.00,
          supplier: "Internal Software",
          leadTime: "1 week",
          criticality: "Medium"
        }
      ],
      parts: [
        {
          partNumber: "MDT-GRD-001",
          name: "Real-time CGM Sensor",
          category: "Sensor",
          material: "Biocompatible Polymer",
          dimensions: "6mm x 0.5mm x 14mm",
          weight: "1.2g",
          sterilization: "ETO",
          shelfLife: "18 months"
        },
        {
          partNumber: "MDT-GRD-002",
          name: "Bluetooth 5.0 Transmitter",
          category: "Electronics",
          material: "Medical Grade ABS",
          dimensions: "28mm x 18mm x 9mm",
          weight: "6.8g",
          sterilization: "Gamma",
          shelfLife: "60 months"
        }
      ],
      drawings: [
        {
          drawingNumber: "DWG-GRD-001-R2",
          title: "CGM Sensor Assembly",
          type: "Assembly Drawing",
          revision: "R2",
          date: "2024-06-20",
          engineer: "Dr. Emily Chen",
          format: "PDF",
          pages: 6
        },
        {
          drawingNumber: "DWG-GRD-002-R1",
          title: "Bluetooth Module Integration",
          type: "Electrical Schematic",
          revision: "R1",
          date: "2024-05-15",
          engineer: "James Wilson",
          format: "PDF",
          pages: 4
        }
      ],
      mockDocuments: [
        {
          id: "DOC-GRD-001",
          name: "System Requirements Document",
          type: "Technical Specification",
          version: "2.1",
          size: "3.2 MB",
          uploadedBy: "Dr. Emily Chen",
          uploadedAt: "2024-07-05",
          status: "Current"
        },
        {
          id: "DOC-GRD-002",
          name: "Mobile App Architecture",
          type: "Software Design",
          version: "1.8",
          size: "1.9 MB",
          uploadedBy: "James Wilson",
          uploadedAt: "2024-07-01",
          status: "Current"
        },
        {
          id: "DOC-GRD-003",
          name: "Clinical Validation Protocol",
          type: "Clinical Document",
          version: "1.0",
          size: "4.7 MB",
          uploadedBy: "Sarah Johnson",
          uploadedAt: "2024-06-28",
          status: "Under Review"
        }
      ],
      revisions: [
        {
          version: "2.1",
          date: "2024-07-05",
          author: "Dr. Emily Chen",
          changes: "Enhanced real-time alert algorithms",
          reviewStatus: "Approved"
        },
        {
          version: "2.0",
          date: "2024-06-10",
          author: "James Wilson",
          changes: "Bluetooth connectivity improvements",
          reviewStatus: "Approved"
        }
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
      ],
      billOfMaterials: [
        {
          partNumber: "MDT-INP-001",
          description: "Insulin Pen Body Assembly",
          quantity: 1,
          unitCost: 45.75,
          supplier: "Medtronic Manufacturing",
          leadTime: "4 weeks",
          criticality: "High"
        },
        {
          partNumber: "MDT-INP-002",
          description: "Bluetooth Module BLE 5.2",
          quantity: 1,
          unitCost: 25.50,
          supplier: "Espressif Systems",
          leadTime: "8 weeks",
          criticality: "Critical"
        },
        {
          partNumber: "MDT-INP-003",
          description: "Dose Counter Mechanism",
          quantity: 1,
          unitCost: 18.25,
          supplier: "Precision Components Ltd",
          leadTime: "3 weeks",
          criticality: "High"
        },
        {
          partNumber: "MDT-INP-004",
          description: "Rechargeable Battery Pack",
          quantity: 1,
          unitCost: 12.00,
          supplier: "Samsung SDI",
          leadTime: "6 weeks",
          criticality: "Medium"
        }
      ],
      parts: [
        {
          partNumber: "MDT-INP-001",
          name: "Insulin Pen Body Assembly",
          category: "Mechanical",
          material: "Medical Grade Aluminum",
          dimensions: "150mm x 15mm x 12mm",
          weight: "28g",
          sterilization: "Autoclave",
          shelfLife: "120 months"
        },
        {
          partNumber: "MDT-INP-002",
          name: "Bluetooth Module BLE 5.2",
          category: "Electronics",
          material: "FR4 PCB",
          dimensions: "12mm x 8mm x 2mm",
          weight: "1.5g",
          sterilization: "Not Required",
          shelfLife: "60 months"
        }
      ],
      drawings: [
        {
          drawingNumber: "DWG-INP-001-R3",
          title: "Pen Body Mechanical Assembly",
          type: "Assembly Drawing",
          revision: "R3",
          date: "2024-05-10",
          engineer: "Liu Wei",
          format: "PDF",
          pages: 8
        },
        {
          drawingNumber: "DWG-INP-002-R2",
          title: "Electronic Component Layout",
          type: "Electrical Schematic",
          revision: "R2",
          date: "2024-04-25",
          engineer: "Maria Santos",
          format: "PDF",
          pages: 5
        }
      ],
      mockDocuments: [
        {
          id: "DOC-INP-001",
          name: "Product Requirements Document",
          type: "Requirements Document",
          version: "1.5",
          size: "2.8 MB",
          uploadedBy: "Maria Santos",
          uploadedAt: "2024-06-15",
          status: "Current"
        },
        {
          id: "DOC-INP-002",
          name: "Manufacturing Process Plan",
          type: "Process Document",
          version: "2.0",
          size: "4.2 MB",
          uploadedBy: "Liu Wei",
          uploadedAt: "2024-06-10",
          status: "Current"
        },
        {
          id: "DOC-INP-003",
          name: "Bluetooth Protocol Specification",
          type: "Technical Specification",
          version: "1.2",
          size: "1.8 MB",
          uploadedBy: "Dr. James Peterson",
          uploadedAt: "2024-06-05",
          status: "Current"
        }
      ],
      revisions: [
        {
          version: "1.5",
          date: "2024-06-15",
          author: "Maria Santos",
          changes: "Updated manufacturing timeline due to component shortages",
          reviewStatus: "Approved"
        },
        {
          version: "1.4",
          date: "2024-05-20",
          author: "Liu Wei",
          changes: "Resolved Bluetooth connectivity issues",
          reviewStatus: "Approved"
        }
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
      ],
      billOfMaterials: [
        {
          partNumber: "MDT-TAV-001",
          description: "Transcatheter Valve Frame",
          quantity: 1,
          unitCost: 850.00,
          supplier: "Medtronic Cardiac",
          leadTime: "6 weeks",
          criticality: "Critical"
        },
        {
          partNumber: "MDT-TAV-002",
          description: "Pericardial Tissue Leaflets",
          quantity: 3,
          unitCost: 275.00,
          supplier: "Edwards Lifesciences",
          leadTime: "4 weeks",
          criticality: "Critical"
        },
        {
          partNumber: "MDT-TAV-003",
          description: "Delivery System Catheter",
          quantity: 1,
          unitCost: 450.00,
          supplier: "Medtronic Vascular",
          leadTime: "8 weeks",
          criticality: "High"
        }
      ],
      parts: [
        {
          partNumber: "MDT-TAV-001",
          name: "Transcatheter Valve Frame",
          category: "Implant",
          material: "Nitinol",
          dimensions: "26mm diameter x 15mm height",
          weight: "12g",
          sterilization: "ETO",
          shelfLife: "60 months"
        },
        {
          partNumber: "MDT-TAV-002",
          name: "Pericardial Tissue Leaflets",
          category: "Biological",
          material: "Bovine Pericardium",
          dimensions: "Custom shaped",
          weight: "2.5g",
          sterilization: "Glutaraldehyde",
          shelfLife: "60 months"
        }
      ],
      drawings: [
        {
          drawingNumber: "DWG-TAV-001-R4",
          title: "Valve Frame Design",
          type: "Assembly Drawing",
          revision: "R4",
          date: "2024-06-01",
          engineer: "Dr. Michael Chen",
          format: "PDF",
          pages: 12
        },
        {
          drawingNumber: "DWG-TAV-002-R3",
          title: "Delivery System Assembly",
          type: "Mechanical Drawing",
          revision: "R3",
          date: "2024-05-20",
          engineer: "Alex Thompson",
          format: "PDF",
          pages: 8
        }
      ],
      mockDocuments: [
        {
          id: "DOC-TAV-001",
          name: "Clinical Trial Protocol",
          type: "Clinical Document",
          version: "2.0",
          size: "8.5 MB",
          uploadedBy: "Dr. Michael Chen",
          uploadedAt: "2024-07-02",
          status: "Current"
        },
        {
          id: "DOC-TAV-002",
          name: "Biocompatibility Assessment",
          type: "Test Report",
          version: "1.3",
          size: "6.2 MB",
          uploadedBy: "Lisa Wang",
          uploadedAt: "2024-06-28",
          status: "Current"
        },
        {
          id: "DOC-TAV-003",
          name: "510(k) Submission Package",
          type: "Regulatory Document",
          version: "1.0",
          size: "15.8 MB",
          uploadedBy: "Alex Thompson",
          uploadedAt: "2024-06-25",
          status: "Under Review"
        }
      ],
      revisions: [
        {
          version: "2.0",
          date: "2024-07-02",
          author: "Dr. Michael Chen",
          changes: "Updated clinical trial endpoints",
          reviewStatus: "Approved"
        },
        {
          version: "1.9",
          date: "2024-06-10",
          author: "Lisa Wang",
          changes: "Enhanced biocompatibility testing protocols",
          reviewStatus: "Approved"
        }
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
      ],
      manufacturingSites: [
        {
          id: "boulder_robotics",
          name: "Boulder Robotics Center",
          location: "Boulder, CO",
          role: "Primary Manufacturing",
          capacity: "500 systems/year",
          certifications: ["ISO 13485", "FDA 510(k)", "CE Mark", "ISO 14971"],
          capabilities: ["Robotic Assembly", "Software Integration", "System Testing", "Training Facility"]
        },
        {
          id: "minneapolis_components",
          name: "Minneapolis Components Plant",
          location: "Minneapolis, MN",
          role: "Component Manufacturing",
          capacity: "10,000 components/month",
          certifications: ["ISO 13485", "AS9100", "ISO 9001"],
          capabilities: ["Precision Machining", "Electronics Assembly", "Quality Testing"]
        },
        {
          id: "cork_eu_hub",
          name: "Cork European Hub",
          location: "Cork, Ireland",
          role: "European Distribution",
          capacity: "200 systems/year",
          certifications: ["CE Mark", "ISO 13485", "MHRA"],
          capabilities: ["Final Assembly", "Testing", "Training", "Service Support"]
        }
      ],
      billOfMaterials: [
        {
          partNumber: "HUGO-ARM-001",
          description: "Robotic Arm Assembly - Main",
          quantity: 4,
          unitCost: 12500.00,
          supplier: "Medtronic Robotics",
          leadTime: "8 weeks",
          criticality: "Critical"
        },
        {
          partNumber: "HUGO-VIS-001",
          description: "4K Vision System with 3D Imaging",
          quantity: 1,
          unitCost: 8500.00,
          supplier: "Olympus Medical",
          leadTime: "6 weeks",
          criticality: "Critical"
        },
        {
          partNumber: "HUGO-CPU-001",
          description: "High-Performance Computing Unit",
          quantity: 1,
          unitCost: 4200.00,
          supplier: "Intel Medical",
          leadTime: "4 weeks",
          criticality: "High"
        },
        {
          partNumber: "HUGO-HAP-001",
          description: "Haptic Feedback Controller",
          quantity: 2,
          unitCost: 3200.00,
          supplier: "Force Dimension",
          leadTime: "5 weeks",
          criticality: "High"
        }
      ],
      parts: [
        {
          partNumber: "HUGO-ARM-001",
          name: "Robotic Arm Assembly",
          category: "Mechanical",
          material: "Medical Grade Titanium Alloy",
          dimensions: "800mm x 150mm x 120mm",
          weight: "8.5kg",
          sterilization: "Steam Autoclave",
          shelfLife: "10 years"
        },
        {
          partNumber: "HUGO-VIS-001",
          name: "4K Vision System",
          category: "Optical",
          material: "Medical Grade Aluminum",
          dimensions: "200mm x 150mm x 80mm",
          weight: "2.1kg",
          sterilization: "ETO",
          shelfLife: "5 years"
        }
      ],
      drawings: [
        {
          drawingNumber: "DWG-HUGO-001-R5",
          title: "System Architecture Overview",
          type: "System Drawing",
          revision: "R5",
          date: "2024-06-20",
          engineer: "Dr. Amanda Rodriguez",
          format: "PDF",
          pages: 12
        },
        {
          drawingNumber: "DWG-HUGO-002-R3",
          title: "Robotic Arm Mechanical Assembly",
          type: "Mechanical Drawing",
          revision: "R3",
          date: "2024-06-15",
          engineer: "Kevin Chang",
          format: "STEP",
          pages: 8
        },
        {
          drawingNumber: "DWG-HUGO-003-R2",
          title: "Software Architecture Diagram",
          type: "Software Design",
          revision: "R2",
          date: "2024-06-10",
          engineer: "Rachel Green",
          format: "VSDX",
          pages: 6
        }
      ],
      mockDocuments: [
        {
          id: "HUGO-DOC-001",
          name: "System Design Specification",
          type: "Design Document",
          version: "4.1",
          size: "15.2 MB",
          uploadedBy: "Dr. Amanda Rodriguez",
          uploadedAt: "2024-07-09",
          status: "Current"
        },
        {
          id: "HUGO-DOC-002",
          name: "Software Validation Protocol",
          type: "Validation Document",
          version: "2.3",
          size: "8.7 MB",
          uploadedBy: "Rachel Green",
          uploadedAt: "2024-07-08",
          status: "Current"
        },
        {
          id: "HUGO-DOC-003",
          name: "Surgeon Training Manual",
          type: "Training Document",
          version: "1.8",
          size: "22.1 MB",
          uploadedBy: "Kevin Chang",
          uploadedAt: "2024-07-05",
          status: "Under Review"
        },
        {
          id: "HUGO-DOC-004",
          name: "Safety Risk Assessment",
          type: "Safety Document",
          version: "3.0",
          size: "6.4 MB",
          uploadedBy: "Dr. Amanda Rodriguez",
          uploadedAt: "2024-07-02",
          status: "Current"
        }
      ],
      revisions: [
        {
          version: "4.1",
          date: "2024-07-09",
          author: "Dr. Amanda Rodriguez",
          changes: "Enhanced haptic feedback calibration procedures",
          reviewStatus: "Approved"
        },
        {
          version: "4.0",
          date: "2024-06-25",
          author: "Rachel Green",
          changes: "Major software update: AI-powered surgical guidance",
          reviewStatus: "Approved"
        },
        {
          version: "3.9",
          date: "2024-06-10",
          author: "Kevin Chang",
          changes: "Improved arm joint precision and safety mechanisms",
          reviewStatus: "Approved"
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
      ],
      billOfMaterials: [
        {
          partNumber: "MDT-AI-001",
          description: "AI Processing Server Hardware",
          quantity: 4,
          unitCost: 15000.00,
          supplier: "NVIDIA Corporation",
          leadTime: "12 weeks",
          criticality: "Critical"
        },
        {
          partNumber: "MDT-AI-002",
          description: "Medical Imaging Interface Module",
          quantity: 2,
          unitCost: 8500.00,
          supplier: "Philips Healthcare",
          leadTime: "8 weeks",
          criticality: "High"
        },
        {
          partNumber: "MDT-AI-003",
          description: "Software License (TensorFlow Enterprise)",
          quantity: 1,
          unitCost: 50000.00,
          supplier: "Google Cloud",
          leadTime: "1 week",
          criticality: "Medium"
        }
      ],
      parts: [
        {
          partNumber: "MDT-AI-001",
          name: "AI Processing Server Hardware",
          category: "Computing",
          material: "Server Grade Components",
          dimensions: "482mm x 800mm x 85mm",
          weight: "25kg",
          sterilization: "Not Required",
          shelfLife: "60 months"
        },
        {
          partNumber: "MDT-AI-002",
          name: "Medical Imaging Interface Module",
          category: "Interface",
          material: "Medical Grade Electronics",
          dimensions: "200mm x 150mm x 50mm",
          weight: "2.5kg",
          sterilization: "Not Required",
          shelfLife: "84 months"
        }
      ],
      drawings: [
        {
          drawingNumber: "DWG-AI-001-R2",
          title: "System Architecture Diagram",
          type: "System Diagram",
          revision: "R2",
          date: "2024-06-15",
          engineer: "Alex Park",
          format: "VSDX",
          pages: 6
        },
        {
          drawingNumber: "DWG-AI-002-R1",
          title: "Data Flow Architecture",
          type: "Software Architecture",
          revision: "R1",
          date: "2024-05-28",
          engineer: "Jordan Kim",
          format: "PDF",
          pages: 4
        }
      ],
      mockDocuments: [
        {
          id: "DOC-AI-001",
          name: "Machine Learning Model Specification",
          type: "Technical Specification",
          version: "3.1",
          size: "4.7 MB",
          uploadedBy: "Alex Park",
          uploadedAt: "2024-07-05",
          status: "Current"
        },
        {
          id: "DOC-AI-002",
          name: "Clinical Validation Protocol",
          type: "Clinical Document",
          version: "1.2",
          size: "7.3 MB",
          uploadedBy: "Jordan Kim",
          uploadedAt: "2024-07-01",
          status: "Current"
        },
        {
          id: "DOC-AI-003",
          name: "HIPAA Compliance Assessment",
          type: "Compliance Document",
          version: "1.0",
          size: "3.2 MB",
          uploadedBy: "Taylor Swift",
          uploadedAt: "2024-06-25",
          status: "Current"
        }
      ],
      revisions: [
        {
          version: "3.1",
          date: "2024-07-05",
          author: "Alex Park",
          changes: "Improved model accuracy to 94.2%",
          reviewStatus: "Approved"
        },
        {
          version: "3.0",
          date: "2024-06-20",
          author: "Jordan Kim",
          changes: "Added multi-modal imaging support",
          reviewStatus: "Approved"
        }
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
      skills: ["Machine Learning", "Computer Vision", "Healthcare AI", "Python", "Data Science", "Automation"],
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
      skills: ["Robotic Surgery", "AI/ML", "Surgical Procedures", "Systems Engineering", "Hardware", "Automation"],
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
    },
    {
      name: "Dr. Elena Petrov",
      title: "Battery Systems Lead",
      function: "R&D",
      location: "Minneapolis",
      email: "elena.petrov@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Battery Technology", "Energy Storage", "Power Management", "Lithium Systems", "Electrochemistry"],
      patents: 11,
      publications: 15,
      yearsExperience: 14,
      bio: "Battery technology expert specializing in long-term energy storage for implantable medical devices.",
      education: ["PhD Electrochemistry - MIT", "MS Materials Science - Stanford"],
      achievements: ["Battery Innovation Award", "Energy Storage Pioneer"],
      drmBelt: "green",
      fellowships: ["tech_fellow"],
      cornerstoneTrainings: ["Design Controls", "Risk Management", "Materials Testing", "Reliability Engineering"]
    },
    {
      name: "Carlos Mendoza",
      title: "Materials Engineering Director",
      function: "R&D",
      location: "Santa Rosa",
      email: "carlos.mendoza@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Biocompatible Materials", "Polymer Science", "Materials Testing", "Ceramic Engineering", "Metal Alloys"],
      patents: 18,
      publications: 32,
      yearsExperience: 20,
      bio: "Materials science expert developing next-generation biocompatible materials for medical implants.",
      education: ["PhD Materials Science - UC Berkeley", "MS Chemical Engineering - Caltech"],
      achievements: ["Materials Innovation Excellence", "Biocompatibility Research Award"],
      drmBelt: "black",
      fellowships: ["bakken_fellow"],
      cornerstoneTrainings: ["Design Controls", "Risk Management", "ISO 10993", "Materials Characterization"]
    },
    {
      name: "Priya Sharma",
      title: "Python Automation Lead",
      function: "Software Development",
      location: "Bangalore",
      email: "priya.sharma@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1594824388550-7ac8bc6d5696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Python", "Test Automation", "Data Analysis", "Process Automation", "DevOps", "CI/CD"],
      patents: 2,
      publications: 8,
      yearsExperience: 9,
      bio: "Python automation specialist developing tools for manufacturing and testing processes across medical device production.",
      education: ["MS Computer Science - IIT Bombay", "BS Electronics Engineering - BITS Pilani"],
      achievements: ["Automation Excellence Award", "Digital Transformation Champion"],
      drmBelt: "yellow",
      cornerstoneTrainings: ["Software Lifecycle", "Cybersecurity", "Design Controls", "Quality Systems"]
    },
    {
      name: "Dr. Hans Mueller",
      title: "Signal Processing Expert",
      function: "R&D",
      location: "Berlin",
      email: "hans.mueller@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Signal Processing", "DSP", "Algorithms", "Biomedical Signals", "Hardware", "Real-time Systems"],
      patents: 14,
      publications: 26,
      yearsExperience: 17,
      bio: "Signal processing engineer specializing in biomedical signal analysis and real-time algorithm development.",
      education: ["PhD Signal Processing - TU Munich", "MS Electrical Engineering - ETH Zurich"],
      achievements: ["Signal Processing Innovation Award", "IEEE Fellow"],
      drmBelt: "green",
      fellowships: ["tech_fellow"],
      cornerstoneTrainings: ["Design Controls", "Software Lifecycle", "Risk Management", "IEC 62304"]
    },
    {
      name: "Isabella Romano",
      title: "UX Research Director",
      function: "Design",
      location: "Milan",
      email: "isabella.romano@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["User Experience", "Human Factors", "Usability Testing", "Design Research", "Healthcare UX"],
      patents: 3,
      publications: 19,
      yearsExperience: 12,
      bio: "UX research leader focusing on human factors engineering for medical device interfaces and patient experiences.",
      education: ["PhD Human Factors - Delft University", "MS Industrial Design - Politecnico Milano"],
      achievements: ["Design Excellence Award", "Human Factors Innovation Leader"],
      drmBelt: "yellow",
      cornerstoneTrainings: ["Human Factors", "Design Controls", "Risk Management", "IEC 62366"]
    },
    {
      name: "Kevin Chang",
      title: "Manufacturing Systems Engineer",
      function: "Manufacturing",
      location: "Minneapolis",
      email: "kevin.chang@medtronic.com",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64",
      skills: ["Manufacturing", "Automation", "Robotics", "Process Engineering", "Quality Systems", "Lean Manufacturing"],
      patents: 7,
      publications: 12,
      yearsExperience: 15,
      bio: "Manufacturing engineer specializing in automated production systems and quality assurance for medical devices.",
      education: ["MS Manufacturing Engineering - Northwestern", "BS Mechanical Engineering - University of Illinois"],
      achievements: ["Manufacturing Excellence Award", "Automation Innovation Leader"],
      drmBelt: "green",
      cornerstoneTrainings: ["Design Controls", "Quality Systems", "Statistical Process Control", "Lean Six Sigma"]
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

  // Create comprehensive sample documents across all projects
  const sampleDocuments = [
    // MiniMed 780G Documents (Project 1)
    {
      projectId: "1",
      name: "Technical Specification v2.1",
      type: "Technical Specification",
      version: "2.1",
      uploadedBy: "sarah.johnson@medtronic.com",
      fileSize: 2450000,
      filePath: "/documents/tech_spec_minimed_780g_v2.1.pdf"
    },
    {
      projectId: "1",
      name: "Design History File",
      type: "Design Control",
      version: "1.0",
      uploadedBy: "sarah.johnson@medtronic.com",
      fileSize: 15600000,
      filePath: "/documents/dhf_minimed_780g_v1.0.pdf"
    },
    {
      projectId: "1",
      name: "Bill of Materials - Main Assembly",
      type: "Bill of Materials",
      version: "3.2",
      uploadedBy: "michael.rodriguez@medtronic.com",
      fileSize: 125000,
      filePath: "/documents/bom_minimed_780g_main_v3.2.xlsx"
    },
    {
      projectId: "1",
      name: "Sensor Assembly Drawing",
      type: "Engineering Drawing",
      version: "R4",
      uploadedBy: "sarah.johnson@medtronic.com",
      fileSize: 890000,
      filePath: "/documents/dwg_sensor_assembly_r4.dwg"
    },
    {
      projectId: "1",
      name: "Risk Management File",
      type: "Risk Analysis",
      version: "2.0",
      uploadedBy: "dr.emily.chen@medtronic.com",
      fileSize: 1800000,
      filePath: "/documents/risk_mgmt_minimed_780g_v2.0.pdf"
    },
    {
      projectId: "1",
      name: "Software Design Document",
      type: "Software Documentation",
      version: "1.5",
      uploadedBy: "rajesh.kumar@medtronic.com",
      fileSize: 3200000,
      filePath: "/documents/software_design_minimed_780g_v1.5.pdf"
    },
    {
      projectId: "1",
      name: "Clinical Evaluation Report",
      type: "Clinical Documentation",
      version: "1.0",
      uploadedBy: "dr.emily.chen@medtronic.com",
      fileSize: 4500000,
      filePath: "/documents/clinical_eval_minimed_780g_v1.0.pdf"
    },
    {
      projectId: "1",
      name: "Validation Plan",
      type: "Validation Document",
      version: "3.2",
      uploadedBy: "sarah.johnson@medtronic.com",
      fileSize: 2100000,
      filePath: "/documents/validation_plan_minimed_780g_v3.2.pdf"
    },

    // Guardian CGM Documents (Project 2)
    {
      projectId: "2",
      name: "Clinical Protocol v1.3",
      type: "Clinical Protocol",
      version: "1.3",
      uploadedBy: "dr.emily.chen@medtronic.com",
      fileSize: 890000,
      filePath: "/documents/guardian_cgm_clinical_protocol_v1.3.pdf"
    },
    {
      projectId: "2",
      name: "Device Master Record",
      type: "Design Control",
      version: "2.1",
      uploadedBy: "maria.santos@medtronic.com",
      fileSize: 12000000,
      filePath: "/documents/dmr_guardian_cgm_v2.1.pdf"
    },
    {
      projectId: "2",
      name: "Transmitter Circuit Design",
      type: "Engineering Drawing",
      version: "R3",
      uploadedBy: "kevin.chang@medtronic.com",
      fileSize: 1200000,
      filePath: "/documents/dwg_transmitter_circuit_r3.dwg"
    },
    {
      projectId: "2",
      name: "BOM - Sensor Components",
      type: "Bill of Materials",
      version: "2.8",
      uploadedBy: "maria.santos@medtronic.com",
      fileSize: 95000,
      filePath: "/documents/bom_guardian_sensor_v2.8.xlsx"
    },
    {
      projectId: "2",
      name: "Sterilization Validation Report",
      type: "Validation Document",
      version: "1.0",
      uploadedBy: "dr.sarah.williams@medtronic.com",
      fileSize: 1600000,
      filePath: "/documents/sterilization_validation_guardian_v1.0.pdf"
    },
    {
      projectId: "2",
      name: "Packaging Design Specifications",
      type: "Design Documentation",
      version: "2.2",
      uploadedBy: "jennifer.liu@medtronic.com",
      fileSize: 850000,
      filePath: "/documents/packaging_spec_guardian_v2.2.pdf"
    },

    // TAVR System Documents (Project 4)
    {
      projectId: "4",
      name: "Biocompatibility Test Report",
      type: "Test Report",
      version: "1.0",
      uploadedBy: "dr.michael.chen@medtronic.com",
      fileSize: 1200000,
      filePath: "/documents/tavr_biocompatibility_report_v1.0.pdf"
    },
    {
      projectId: "4",
      name: "Valve Assembly Drawing",
      type: "Engineering Drawing",
      version: "R5",
      uploadedBy: "dr.amanda.rodriguez@medtronic.com",
      fileSize: 2300000,
      filePath: "/documents/dwg_valve_assembly_r5.dwg"
    },
    {
      projectId: "4",
      name: "Delivery System BOM",
      type: "Bill of Materials",
      version: "4.1",
      uploadedBy: "dr.michael.chen@medtronic.com",
      fileSize: 180000,
      filePath: "/documents/bom_tavr_delivery_system_v4.1.xlsx"
    },
    {
      projectId: "4",
      name: "Mechanical Testing Protocol",
      type: "Test Protocol",
      version: "2.0",
      uploadedBy: "dr.amanda.rodriguez@medtronic.com",
      fileSize: 1100000,
      filePath: "/documents/mechanical_test_protocol_tavr_v2.0.pdf"
    },
    {
      projectId: "4",
      name: "Regulatory Submission Package",
      type: "Regulatory Document",
      version: "1.0",
      uploadedBy: "dr.klaus.weber@medtronic.com",
      fileSize: 25000000,
      filePath: "/documents/regulatory_submission_tavr_v1.0.pdf"
    },
    {
      projectId: "4",
      name: "Manufacturing Process Flow",
      type: "Process Documentation",
      version: "1.2",
      uploadedBy: "li.wei@medtronic.com",
      fileSize: 650000,
      filePath: "/documents/manufacturing_process_tavr_v1.2.pdf"
    },

    // Hugo Robotic System Documents (Project 5)
    {
      projectId: "5",
      name: "System Architecture Document",
      type: "Technical Specification",
      version: "2.0",
      uploadedBy: "kevin.chang@medtronic.com",
      fileSize: 4200000,
      filePath: "/documents/system_architecture_hugo_v2.0.pdf"
    },
    {
      projectId: "5",
      name: "Robotic Arm Assembly Drawing",
      type: "Engineering Drawing",
      version: "R6",
      uploadedBy: "dr.amanda.rodriguez@medtronic.com",
      fileSize: 3100000,
      filePath: "/documents/dwg_robotic_arm_assembly_r6.dwg"
    },
    {
      projectId: "5",
      name: "Software Requirements Specification",
      type: "Software Documentation",
      version: "3.1",
      uploadedBy: "rajesh.kumar@medtronic.com",
      fileSize: 2800000,
      filePath: "/documents/software_requirements_hugo_v3.1.pdf"
    },
    {
      projectId: "5",
      name: "BOM - Control System",
      type: "Bill of Materials",
      version: "5.0",
      uploadedBy: "kevin.chang@medtronic.com",
      fileSize: 220000,
      filePath: "/documents/bom_hugo_control_system_v5.0.xlsx"
    },
    {
      projectId: "5",
      name: "Usability Study Report",
      type: "Clinical Documentation",
      version: "1.0",
      uploadedBy: "dr.sarah.williams@medtronic.com",
      fileSize: 1900000,
      filePath: "/documents/usability_study_hugo_v1.0.pdf"
    },
    {
      projectId: "5",
      name: "Cybersecurity Assessment",
      type: "Security Documentation",
      version: "2.0",
      uploadedBy: "rajesh.kumar@medtronic.com",
      fileSize: 1400000,
      filePath: "/documents/cybersecurity_assessment_hugo_v2.0.pdf"
    },

    // Percept DBS Documents (Project 6)
    {
      projectId: "6",
      name: "Neurostimulator Design Record",
      type: "Design Control",
      version: "1.5",
      uploadedBy: "dr.sarah.williams@medtronic.com",
      fileSize: 8500000,
      filePath: "/documents/design_record_percept_dbs_v1.5.pdf"
    },
    {
      projectId: "6",
      name: "Lead Design Drawing",
      type: "Engineering Drawing",
      version: "R4",
      uploadedBy: "jennifer.liu@medtronic.com",
      fileSize: 1600000,
      filePath: "/documents/dwg_dbs_lead_design_r4.dwg"
    },
    {
      projectId: "6",
      name: "BOM - Neurostimulator Components",
      type: "Bill of Materials",
      version: "3.5",
      uploadedBy: "jennifer.liu@medtronic.com",
      fileSize: 145000,
      filePath: "/documents/bom_percept_neurostimulator_v3.5.xlsx"
    },
    {
      projectId: "6",
      name: "Clinical Trial Protocol",
      type: "Clinical Protocol",
      version: "2.0",
      uploadedBy: "dr.sarah.williams@medtronic.com",
      fileSize: 1300000,
      filePath: "/documents/clinical_trial_protocol_percept_v2.0.pdf"
    },
    {
      projectId: "6",
      name: "Battery Life Test Report",
      type: "Test Report",
      version: "1.0",
      uploadedBy: "jennifer.liu@medtronic.com",
      fileSize: 950000,
      filePath: "/documents/battery_life_test_percept_v1.0.pdf"
    },
    {
      projectId: "6",
      name: "Programmer Interface Design",
      type: "Software Documentation",
      version: "2.3",
      uploadedBy: "rajesh.kumar@medtronic.com",
      fileSize: 1700000,
      filePath: "/documents/programmer_interface_design_percept_v2.3.pdf"
    },

    // Additional documents for other projects
    {
      projectId: "7",
      name: "Pacing Lead Technical Specification",
      type: "Technical Specification",
      version: "1.8",
      uploadedBy: "dr.robert.kim@medtronic.com",
      fileSize: 1250000,
      filePath: "/documents/tech_spec_pacing_lead_v1.8.pdf"
    },
    {
      projectId: "7",
      name: "BOM - Pacing Lead Assembly",
      type: "Bill of Materials",
      version: "2.4",
      uploadedBy: "dr.robert.kim@medtronic.com",
      fileSize: 85000,
      filePath: "/documents/bom_pacing_lead_assembly_v2.4.xlsx"
    },
    {
      projectId: "8",
      name: "Insulin Pen Design Drawing",
      type: "Engineering Drawing",
      version: "R3",
      uploadedBy: "alex.park@medtronic.com",
      fileSize: 920000,
      filePath: "/documents/dwg_insulin_pen_design_r3.dwg"
    },
    {
      projectId: "8",
      name: "User Manual Draft",
      type: "Technical Documentation",
      version: "0.9",
      uploadedBy: "alex.park@medtronic.com",
      fileSize: 1800000,
      filePath: "/documents/user_manual_insulin_pen_v0.9.pdf"
    },
    {
      projectId: "9",
      name: "Imaging System Architecture",
      type: "Technical Specification",
      version: "3.0",
      uploadedBy: "rachel.green@medtronic.com",
      fileSize: 5200000,
      filePath: "/documents/imaging_system_architecture_v3.0.pdf"
    },
    {
      projectId: "9",
      name: "BOM - Imaging Components",
      type: "Bill of Materials",
      version: "1.7",
      uploadedBy: "rachel.green@medtronic.com",
      fileSize: 190000,
      filePath: "/documents/bom_imaging_components_v1.7.xlsx"
    },
    {
      projectId: "10",
      name: "Surgical Instrument Drawing Set",
      type: "Engineering Drawing",
      version: "R2",
      uploadedBy: "dr.michael.chen@medtronic.com",
      fileSize: 2800000,
      filePath: "/documents/dwg_surgical_instrument_set_r2.dwg"
    },
    {
      projectId: "10",
      name: "Manufacturing Quality Plan",
      type: "Process Documentation",
      version: "1.1",
      uploadedBy: "li.wei@medtronic.com",
      fileSize: 750000,
      filePath: "/documents/manufacturing_quality_plan_v1.1.pdf"
    }
  ];

  // Create documents
  for (const document of sampleDocuments) {
    await storage.createDocument(document);
  }

  console.log("Sample data loaded successfully");
}