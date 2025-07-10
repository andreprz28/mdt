import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, MapPin, Calendar, Clock } from "lucide-react";
import { Project } from "@shared/schema";
import { Link } from "wouter";

interface ProjectCardProps {
  project: Project;
  searchQuery?: string;
}

export function ProjectCard({ project, searchQuery }: ProjectCardProps) {
  const highlightText = (text: string, query?: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="search-highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'status-active';
      case 'planning': return 'status-planning';
      case 'on hold': return 'status-on-hold';
      case 'completed': return 'status-completed';
      case 'delayed': return 'status-delayed';
      default: return 'status-active';
    }
  };

  const getStageClass = (stage: string) => {
    switch (stage.toLowerCase()) {
      case 'concept': return 'stage-concept';
      case 'design': return 'stage-design';
      case 'development': return 'stage-development';
      case 'testing': return 'stage-testing';
      case 'validation': return 'stage-validation';
      case 'launch': return 'stage-launch';
      default: return 'stage-concept';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const stages = ['Concept', 'Design', 'Development', 'Testing', 'Validation', 'Launch'];
  const currentStageIndex = stages.indexOf(project.stage);

  return (
    <Link href={`/projects/${project.id}`}>
      <div className="project-card card-hover bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {highlightText(project.name, searchQuery)}
            </h3>
            <Badge className={getStatusClass(project.status)}>
              {project.status}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {highlightText(project.description, searchQuery)}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {project.projectLeader}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.deadline}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getStageClass(project.stage)}>
            {project.stage}
          </Badge>
          <div className="text-right">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {project.progress}%
            </div>
            <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mt-1">
              <div 
                className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stage Progress */}
      <div className="flex items-center gap-2 mb-3">
        {stages.map((stage, index) => (
          <div key={stage} className="flex items-center">
            <Badge 
              variant={index <= currentStageIndex ? "default" : "secondary"}
              className={`text-xs px-2 py-1 ${index <= currentStageIndex ? 'bg-[hsl(207,90%,54%)] text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'}`}
            >
              {stage}
            </Badge>
            {index < stages.length - 1 && (
              <div className={`w-6 h-0.5 ${index < currentStageIndex ? 'bg-[hsl(207,90%,54%)]' : 'bg-gray-300 dark:bg-gray-600'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      {project.recentActivity && Array.isArray(project.recentActivity) && project.recentActivity.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Recent Activity</div>
          <div className="space-y-1">
            {project.recentActivity.slice(0, 2).map((activity: any, index: number) => (
              <div key={index} className="activity-item text-xs">
                <span className="text-gray-600 dark:text-gray-400">{activity.description}</span>
                <span className="text-gray-500 dark:text-gray-500 ml-2">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </Link>
  );
}
