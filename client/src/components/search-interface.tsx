import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Mic, X, Heart, MapPin, AlertTriangle, TrendingUp } from "lucide-react";
import { SearchFilters } from "@shared/schema";

interface SearchInterfaceProps {
  onSearch: (query: string) => void;
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export function SearchInterface({ onSearch, filters, onFiltersChange }: SearchInterfaceProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    // Convert "all-*" values to undefined for proper filtering
    const filterValue = value.startsWith('all-') ? undefined : value;
    const newFilters = { ...filters, [key]: filterValue };
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    setSearchQuery("");
    onSearch("");
    onFiltersChange({});
  };

  const searchSuggestions = [
    {
      icon: Heart,
      text: "Who's working on diabetes pump projects?",
      className: "text-red-500"
    },
    {
      icon: MapPin,
      text: "Show all cardiac projects in Minneapolis",
      className: "text-blue-500"
    },
    {
      icon: AlertTriangle,
      text: "Projects delayed this quarter",
      className: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      text: "Top performers by patent count",
      className: "text-green-500"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-12 py-4 text-lg rounded-xl border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[hsl(207,90%,54%)] focus:border-transparent"
              placeholder="Search projects, people, or ask AI questions..."
            />
            <Mic className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 hover:text-[hsl(207,90%,54%)] cursor-pointer transition-colors" />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {searchSuggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-[hsl(207,90%,95%)] hover:text-[hsl(207,90%,54%)] dark:hover:bg-gray-600"
                onClick={() => handleSearchChange(suggestion.text)}
              >
                <suggestion.icon className={`w-3 h-3 mr-1 ${suggestion.className}`} />
                {suggestion.text}
              </Button>
            ))}
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="lg:w-80 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Select 
              value={filters.function || ""} 
              onValueChange={(value) => handleFilterChange('function', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Functions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-functions">All Functions</SelectItem>
                <SelectItem value="R&D">R&D</SelectItem>
                <SelectItem value="Clinical">Clinical</SelectItem>
                <SelectItem value="Regulatory">Regulatory</SelectItem>
                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                <SelectItem value="Quality">Quality</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>

            <Select 
              value={filters.location || ""} 
              onValueChange={(value) => handleFilterChange('location', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-locations">All Locations</SelectItem>
                <SelectItem value="Minneapolis">Minneapolis</SelectItem>
                <SelectItem value="Fridley">Fridley</SelectItem>
                <SelectItem value="Santa Rosa">Santa Rosa</SelectItem>
                <SelectItem value="Dublin">Dublin</SelectItem>
                <SelectItem value="Shanghai">Shanghai</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select 
              value={filters.status || ""} 
              onValueChange={(value) => handleFilterChange('status', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Planning">Planning</SelectItem>
                <SelectItem value="On Hold">On Hold</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>

            <Select 
              value={filters.category || ""} 
              onValueChange={(value) => handleFilterChange('category', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                <SelectItem value="Diabetes">Diabetes</SelectItem>
                <SelectItem value="Cardiac">Cardiac</SelectItem>
                <SelectItem value="Surgical">Surgical</SelectItem>
                <SelectItem value="Neuromodulation">Neuromodulation</SelectItem>
                <SelectItem value="Digital Health">Digital Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select 
              value={filters.stage || ""} 
              onValueChange={(value) => handleFilterChange('stage', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Stages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-stages">All Stages</SelectItem>
                <SelectItem value="Concept">Concept</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Testing">Testing</SelectItem>
                <SelectItem value="Validation">Validation</SelectItem>
                <SelectItem value="Launch">Launch</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="w-full"
            >
              <X className="w-4 h-4 mr-1" />
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
