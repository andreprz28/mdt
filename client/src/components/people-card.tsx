import { Badge } from "@/components/ui/badge";
import { Person } from "@shared/schema";
import { Link } from "wouter";
import { BeltFellowshipIndicators } from "@/components/belt-fellowship-indicators";

interface PeopleCardProps {
  person: Person;
  searchQuery?: string;
}

export function PeopleCard({ person, searchQuery }: PeopleCardProps) {
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

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'diabetes': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'cardiac': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      case 'surgical': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'neuromodulation': return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
      case 'digital health': return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200';
      default: return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
    }
  };

  // Get avatar placeholder
  const getAvatarPlaceholder = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Link href={`/people/${person.id}`}>
      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
      <div className="w-12 h-12 bg-[hsl(207,90%,54%)] rounded-full flex items-center justify-center text-white font-semibold">
        {person.avatar ? (
          <img 
            src={person.avatar} 
            alt={person.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <span>{getAvatarPlaceholder(person.name)}</span>
        )}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white">
          {highlightText(person.name, searchQuery)}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {highlightText(person.title, searchQuery)}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <Badge className={getCategoryColor(person.function)}>
            {person.function}
          </Badge>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {person.patents > 0 && `${person.patents} patents`}
            {person.patents > 0 && person.publications > 0 && ' • '}
            {person.publications > 0 && `${person.publications} publications`}
          </span>
        </div>
        <div className="mt-2">
          <BeltFellowshipIndicators 
            drmBelt={person.drmBelt} 
            fellowships={person.fellowships || []} 
          />
        </div>
      </div>
      </div>
    </Link>
  );
}
