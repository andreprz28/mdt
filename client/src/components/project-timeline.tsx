import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, AlertCircle, Play } from "lucide-react";
import { format } from "date-fns";

interface TimelinePhase {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  status: "completed" | "in_progress" | "planned" | "delayed";
  milestones?: string[];
  deliverables?: string[];
}

interface ProjectTimelineProps {
  timeline: TimelinePhase[];
  projectName: string;
}

export function ProjectTimeline({ timeline, projectName }: ProjectTimelineProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "in_progress":
        return <Play className="w-4 h-4 text-blue-600" />;
      case "delayed":
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "in_progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "delayed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getPhaseProgress = (phase: TimelinePhase) => {
    if (phase.status === "completed") return 100;
    if (phase.status === "planned") return 0;
    
    if (phase.endDate) {
      const start = new Date(phase.startDate);
      const end = new Date(phase.endDate);
      const now = new Date();
      
      if (now > end) return 100;
      if (now < start) return 0;
      
      const total = end.getTime() - start.getTime();
      const elapsed = now.getTime() - start.getTime();
      return Math.max(0, Math.min(100, (elapsed / total) * 100));
    }
    
    return 50; // Default for in-progress without end date
  };

  // Default timeline if none provided
  const defaultTimeline: TimelinePhase[] = [
    {
      id: "concept",
      name: "Concept & Feasibility",
      description: "Initial concept development and feasibility studies",
      startDate: "2023-01-01",
      endDate: "2023-06-30",
      status: "completed",
      milestones: ["Concept approval", "Feasibility study complete"],
      deliverables: ["Concept document", "Feasibility report"]
    },
    {
      id: "rd",
      name: "R&D Development",
      description: "Research and development phase with prototyping",
      startDate: "2023-07-01",
      endDate: "2024-03-31",
      status: "in_progress",
      milestones: ["Prototype complete", "Design verification"],
      deliverables: ["Working prototype", "Design documents"]
    },
    {
      id: "clinical",
      name: "Clinical Trials",
      description: "Clinical validation and safety studies",
      startDate: "2024-04-01",
      endDate: "2024-10-31",
      status: "planned",
      milestones: ["First patient enrolled", "Primary endpoint met"],
      deliverables: ["Clinical study report", "Safety data"]
    },
    {
      id: "regulatory",
      name: "FDA Approval",
      description: "Regulatory submission and approval process",
      startDate: "2024-11-01",
      endDate: "2025-06-30",
      status: "planned",
      milestones: ["FDA submission", "510(k) clearance"],
      deliverables: ["FDA submission package", "Approval letter"]
    },
    {
      id: "manufacturing",
      name: "Manufacturing Scale-up",
      description: "Production preparation and scale-up",
      startDate: "2025-01-01",
      endDate: "2025-08-31",
      status: "planned",
      milestones: ["Production line ready", "Quality validation"],
      deliverables: ["Manufacturing plan", "Quality systems"]
    },
    {
      id: "launch",
      name: "Market Launch",
      description: "Commercial launch and market introduction",
      startDate: "2025-09-01",
      endDate: "2025-12-31",
      status: "planned",
      milestones: ["Commercial launch", "Market penetration targets"],
      deliverables: ["Launch plan", "Marketing materials"]
    }
  ];

  const timelineData = timeline && timeline.length > 0 ? timeline : defaultTimeline;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Project Timeline
        </CardTitle>
        <CardDescription>
          Development phases and milestones for {projectName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {timelineData.map((phase, index) => {
            const progress = getPhaseProgress(phase);
            
            return (
              <div key={phase.id} className="relative">
                {/* Connection line to next phase */}
                {index < timelineData.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200 dark:bg-gray-700" />
                )}
                
                <div className="flex gap-4">
                  {/* Phase indicator */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    {getStatusIcon(phase.status)}
                  </div>
                  
                  {/* Phase content */}
                  <div className="flex-1 min-w-0">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{phase.name}</CardTitle>
                            <CardDescription className="mt-1">
                              {phase.description}
                            </CardDescription>
                          </div>
                          <Badge className={getStatusColor(phase.status)}>
                            {phase.status.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                          <span>
                            {format(new Date(phase.startDate), "MMM yyyy")}
                            {phase.endDate && ` - ${format(new Date(phase.endDate), "MMM yyyy")}`}
                          </span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        {/* Progress bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{Math.round(progress)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                        
                        {/* Milestones */}
                        {phase.milestones && phase.milestones.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-medium mb-2">Key Milestones:</p>
                            <div className="flex flex-wrap gap-1">
                              {phase.milestones.map((milestone, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {milestone}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Deliverables */}
                        {phase.deliverables && phase.deliverables.length > 0 && (
                          <div>
                            <p className="text-sm font-medium mb-2">Deliverables:</p>
                            <div className="flex flex-wrap gap-1">
                              {phase.deliverables.map((deliverable, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {deliverable}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}