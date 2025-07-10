import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Bot } from "lucide-react";
import { Project, Person } from "@shared/schema";

interface AIPanelProps {
  query: string;
  onClose: () => void;
  projects: Project[];
  people: Person[];
}

export function AIPanel({ query, onClose, projects, people }: AIPanelProps) {
  const generateResponse = (query: string, projects: Project[], people: Person[]) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('diabetes')) {
      const diabetesProjects = projects.filter(p => p.category === 'Diabetes');
      const diabetesPeople = people.filter(p => p.function === 'R&D' && p.skills.some(s => s.toLowerCase().includes('diabetes')));
      
      return `
        <div class="prose prose-sm dark:prose-invert max-w-none">
          <p>Based on your query about diabetes projects, I found the following:</p>
          <ul>
            <li><strong>Active Diabetes Projects:</strong> ${diabetesProjects.length} projects currently in progress</li>
            <li><strong>Key Personnel:</strong> ${diabetesPeople.length} R&D engineers specializing in diabetes technology</li>
            <li><strong>Leading Projects:</strong> ${diabetesProjects.slice(0, 3).map(p => p.name).join(', ')}</li>
          </ul>
          <p>Would you like me to provide more specific details about any of these projects or team members?</p>
        </div>
      `;
    }
    
    if (lowerQuery.includes('cardiac')) {
      const cardiacProjects = projects.filter(p => p.category === 'Cardiac');
      const cardiacPeople = people.filter(p => p.skills.some(s => s.toLowerCase().includes('cardiac')));
      
      return `
        <div class="prose prose-sm dark:prose-invert max-w-none">
          <p>Here's what I found regarding cardiac projects:</p>
          <ul>
            <li><strong>Cardiac Projects:</strong> ${cardiacProjects.length} projects in various stages</li>
            <li><strong>Team Members:</strong> ${cardiacPeople.length} specialists working on cardiac devices</li>
            <li><strong>Progress:</strong> Average completion rate of ${Math.round(cardiacProjects.reduce((acc, p) => acc + p.progress, 0) / cardiacProjects.length)}%</li>
          </ul>
          <p>The cardiac team is making excellent progress on next-generation heart devices.</p>
        </div>
      `;
    }
    
    if (lowerQuery.includes('delayed')) {
      const delayedProjects = projects.filter(p => p.status === 'Delayed');
      
      return `
        <div class="prose prose-sm dark:prose-invert max-w-none">
          <p>I found ${delayedProjects.length} projects currently marked as delayed:</p>
          <ul>
            ${delayedProjects.map(p => `<li><strong>${p.name}</strong> - ${p.category} project in ${p.location}</li>`).join('')}
          </ul>
          <p>Common factors contributing to delays include regulatory approval processes and technical complexity. Would you like me to analyze the specific causes for any of these projects?</p>
        </div>
      `;
    }
    
    // Generic response
    return `
      <div class="prose prose-sm dark:prose-invert max-w-none">
        <p>I found ${projects.length} projects and ${people.length} team members matching your query.</p>
        <p>Here's a summary of what I can help you with:</p>
        <ul>
          <li>Project status and progress tracking</li>
          <li>Team member expertise and availability</li>
          <li>Resource allocation and planning</li>
          <li>Patent and publication insights</li>
        </ul>
        <p>Please let me know if you'd like more specific information about any particular aspect.</p>
      </div>
    `;
  };

  return (
    <Card className="border-gray-200 dark:border-gray-700 mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(213,100%,69%)] rounded-lg flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-lg font-semibold">AI Assistant Response</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(213,100%,69%)] rounded-lg flex items-center justify-center flex-shrink-0">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <div className="mb-3">
              <strong>Query:</strong> "{query}"
            </div>
            <div 
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: generateResponse(query, projects, people) 
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
