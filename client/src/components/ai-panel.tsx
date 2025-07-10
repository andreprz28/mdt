import { useState, useEffect } from "react";
import { X, Bot, Send, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Project, Person } from "@shared/schema";
import { AIQueryProcessor, AIQueryResponse } from "@/lib/ai-query-processor";
import { ProjectCard } from "@/components/project-card";
import { PeopleCard } from "@/components/people-card";

interface AIPanelProps {
  query: string;
  onClose: () => void;
  projects: Project[];
  people: Person[];
}

export function AIPanel({ query, onClose, projects, people }: AIPanelProps) {
  const [currentQuery, setCurrentQuery] = useState(query);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AIQueryResponse | null>(null);
  const [processor] = useState(() => new AIQueryProcessor(projects, people));

  // Process initial query when panel opens
  useEffect(() => {
    if (query.trim()) {
      handleQuery(query);
    }
  }, [query]);

  const handleQuery = async (queryText: string) => {
    if (!queryText.trim()) return;
    
    setIsLoading(true);
    try {
      // Simulate slight delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const result = processor.processQuery(queryText);
      setResponse(result);
    } catch (error) {
      setResponse({
        answer: "I'm having trouble processing your request. Please try again or refine your question.",
        suggestions: ["Try a more specific question", "Check your spelling", "Ask about projects, people, or deadlines"]
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleQuery(currentQuery);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentQuery(suggestion);
    handleQuery(suggestion);
  };

  return (
    <Card className="border-gray-200 dark:border-gray-700 mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(213,100%,69%)] rounded-lg flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-lg font-semibold">AI Assistant</CardTitle>
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
        <CardDescription>
          Ask questions about projects, team members, deadlines, and operational insights
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Query Input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={currentQuery}
            onChange={(e) => setCurrentQuery(e.target.value)}
            placeholder="Ask about projects, team members, deadlines..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !currentQuery.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center gap-2 py-4">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Processing your query...
            </span>
          </div>
        )}

        {/* Response */}
        {response && !isLoading && (
          <div className="space-y-4">
            {/* AI Response */}
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-[hsl(207,90%,54%)] to-[hsl(213,100%,69%)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="h-3 w-3 text-white" />
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                    {response.answer}
                  </p>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            {response.suggestions && response.suggestions.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Suggestions:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {response.suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs h-7"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Relevant Projects */}
            {response.relevantProjects && response.relevantProjects.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Relevant Projects
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {response.relevantProjects.length}
                  </Badge>
                </div>
                <ScrollArea className="max-h-60">
                  <div className="space-y-2 pr-4">
                    {response.relevantProjects.slice(0, 5).map((project) => (
                      <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <h5 className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate">
                              {project.name}
                            </h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                              {project.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {project.category}
                              </Badge>
                              <Badge 
                                variant={project.status === "Active" ? "default" : 
                                        project.status === "Delayed" ? "destructive" : "secondary"} 
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {project.progress}% complete
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {response.relevantProjects.length > 5 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                        Showing 5 of {response.relevantProjects.length} relevant projects
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </div>
            )}

            {/* Relevant People */}
            {response.relevantPeople && response.relevantPeople.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Relevant Team Members
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {response.relevantPeople.length}
                  </Badge>
                </div>
                <ScrollArea className="max-h-60">
                  <div className="space-y-2 pr-4">
                    {response.relevantPeople.slice(0, 5).map((person) => (
                      <div key={person.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                        <div className="flex items-start gap-3">
                          <img
                            src={person.avatar}
                            alt={person.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <h5 className="font-medium text-sm text-gray-900 dark:text-gray-100">
                              {person.name}
                            </h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {person.title} • {person.location}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {person.patents} patents • {person.publications} publications
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {person.skills.slice(0, 3).map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {person.skills.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{person.skills.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {response.relevantPeople.length > 5 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center py-2">
                        Showing 5 of {response.relevantPeople.length} relevant team members
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>
        )}

        {/* Example Queries */}
        {!response && !isLoading && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Try asking:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Projects delayed this quarter",
                "Who's working on diabetes devices?",
                "How do I reach out to team members?",
                "What's the status of cardiac projects?",
                "Upcoming project deadlines",
                "Team expertise in AI and machine learning"
              ].map((example, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSuggestionClick(example)}
                  className="justify-start text-xs h-8 px-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}