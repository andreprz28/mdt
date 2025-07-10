import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LivesCounter } from "@/components/lives-counter";
import { SearchInterface } from "@/components/search-interface";
import { DashboardStats } from "@/components/dashboard-stats";
import { ProjectCard } from "@/components/project-card";
import { PeopleCard } from "@/components/people-card";
import { ActivityFeed } from "@/components/activity-feed";
import { AnalyticsChart } from "@/components/analytics-chart";
import { AIPanel } from "@/components/ai-panel";
import { UploadModal } from "@/components/upload-modal";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { useSearch } from "@/hooks/use-search";
import { Moon, Sun, Upload, Database, Grid3x3, List, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [aiQuery, setAIQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { filters, setFilters, searchQuery, setSearchQuery } = useSearch();

  const { data: searchResults, isLoading: searchLoading } = useQuery({
    queryKey: ['/api/search', { ...filters, query: searchQuery }],
    queryFn: async () => {
      const searchParams = new URLSearchParams();
      if (searchQuery) searchParams.append('query', searchQuery);
      Object.entries(filters).forEach(([key, value]) => {
        if (value) searchParams.append(key, value);
      });
      
      const response = await fetch(`/api/search?${searchParams.toString()}`);
      if (!response.ok) throw new Error('Search failed');
      return response.json();
    },
    enabled: Object.keys(filters).length > 0 || searchQuery.length > 0,
  });

  // Default queries for all projects and people when no search is active
  const { data: allProjects, isLoading: projectsLoading } = useQuery({
    queryKey: ['/api/projects'],
    enabled: Object.keys(filters).length === 0 && searchQuery.length === 0,
  });

  const { data: allPeople, isLoading: peopleLoading } = useQuery({
    queryKey: ['/api/people'],
    enabled: Object.keys(filters).length === 0 && searchQuery.length === 0,
  });

  const isLoading = searchLoading || projectsLoading || peopleLoading;

  const { data: dashboardStats } = useQuery({
    queryKey: ['/api/dashboard/stats'],
  });

  const { data: activities } = useQuery({
    queryKey: ['/api/activities'],
  });

  const handleLoadSampleData = async () => {
    try {
      const response = await fetch('/api/sample-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (!response.ok) {
        throw new Error('Failed to load sample data');
      }
      
      toast({
        title: "Success",
        description: "Sample Medtronic project data loaded successfully!",
      });
      
      // Refetch data
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load sample data",
        variant: "destructive",
      });
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Check if this is an AI query
    const aiIndicators = ['who', 'what', 'where', 'when', 'why', 'how', 'recommend', 'suggest', 'analyze', 'summarize', 'find people', 'show me', 'tell me'];
    if (aiIndicators.some(indicator => query.toLowerCase().includes(indicator))) {
      setAIQuery(query);
      setShowAIPanel(true);
    }
  };

  const projects = searchResults?.projects || allProjects || [];
  const people = searchResults?.people || allPeople || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img src="/attached_assets/2_1752184137395.png" alt="MedMilestones Logo" className="w-10 h-10 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">MedMilestones</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Medical Device Project Intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                onClick={() => setShowUploadModal(true)}
                className="bg-[hsl(207,90%,54%)] hover:bg-[hsl(207,90%,48%)] text-white"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Data
              </Button>
              <Button
                onClick={handleLoadSampleData}
                variant="secondary"
              >
                <Database className="w-4 h-4 mr-2" />
                Load Sample Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section with Lives Saved Counter */}
        <div className="mb-8">
          <LivesCounter />
        </div>

        {/* Search Interface */}
        <SearchInterface
          onSearch={handleSearch}
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* AI Panel */}
        {showAIPanel && (
          <AIPanel
            query={aiQuery}
            onClose={() => setShowAIPanel(false)}
            projects={projects}
            people={people}
          />
        )}

        {/* Dashboard Stats */}
        {dashboardStats && <DashboardStats stats={dashboardStats} />}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Results */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Projects</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {projects.length} project{projects.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-gray-100 dark:bg-gray-700" : ""}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-gray-100 dark:bg-gray-700" : ""}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[hsl(207,90%,54%)] mx-auto"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Loading projects...</p>
                </div>
              ) : projects.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                  {searchQuery ? 'No projects match your search criteria' : 'Enter a search term or load sample data to begin'}
                </div>
              ) : (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} searchQuery={searchQuery} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* People Results */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold">People</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {people.length} people found
                </p>
              </div>
              <div className="p-6 max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[hsl(207,90%,54%)] mx-auto"></div>
                  </div>
                ) : people.length === 0 ? (
                  <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                    {searchQuery ? 'No people match your search criteria' : 'Enter a search term or load sample data to begin'}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {people.map((person) => (
                      <PeopleCard key={person.id} person={person} searchQuery={searchQuery} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Analytics Chart */}
            {dashboardStats && (
              <AnalyticsChart data={dashboardStats.projectsByStatus} />
            )}

            {/* Activity Feed */}
            {activities && <ActivityFeed activities={activities} />}
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <UploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />
    </div>
  );
}
