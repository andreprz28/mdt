import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Award, BookOpen, GraduationCap } from "lucide-react";

interface BeltFellowshipIndicatorsProps {
  drmBelt?: string | null;
  fellowships?: string[];
}

export function BeltFellowshipIndicators({ drmBelt, fellowships = [] }: BeltFellowshipIndicatorsProps) {
  const getBeltColor = (belt: string) => {
    switch (belt) {
      case "black":
        return "bg-black text-white";
      case "green":
        return "bg-green-600 text-white";
      case "yellow":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-400 text-white";
    }
  };

  const getBeltIcon = (belt: string) => {
    return <Award className="w-3 h-3" />;
  };

  const getFellowshipIcon = (fellowship: string) => {
    switch (fellowship) {
      case "tech_fellow":
        return <BookOpen className="w-3 h-3" />;
      case "bakken_fellow":
        return <GraduationCap className="w-3 h-3" />;
      default:
        return <Award className="w-3 h-3" />;
    }
  };

  const getFellowshipLabel = (fellowship: string) => {
    switch (fellowship) {
      case "tech_fellow":
        return "Tech Fellow";
      case "bakken_fellow":
        return "Bakken Fellow";
      default:
        return fellowship.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase());
    }
  };

  return (
    <TooltipProvider>
      <div className="flex items-center gap-1 flex-wrap">
        {drmBelt && (
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant="secondary"
                className={`text-xs ${getBeltColor(drmBelt)} flex items-center gap-1`}
              >
                {getBeltIcon(drmBelt)}
                DRM {drmBelt.charAt(0).toUpperCase() + drmBelt.slice(1)}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Design for Reliability and Maintainability - {drmBelt.charAt(0).toUpperCase() + drmBelt.slice(1)} Belt</p>
            </TooltipContent>
          </Tooltip>
        )}
        
        {fellowships.map((fellowship) => (
          <Tooltip key={fellowship}>
            <TooltipTrigger>
              <Badge
                variant="outline"
                className="text-xs bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 flex items-center gap-1"
              >
                {getFellowshipIcon(fellowship)}
                {getFellowshipLabel(fellowship)}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {fellowship === "tech_fellow" 
                  ? "Medtronic Technical Fellowship - Recognized technical expert" 
                  : "Earl Bakken Fellowship - Innovation and entrepreneurship program"}
              </p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}