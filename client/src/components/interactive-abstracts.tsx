import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Users, ExternalLink, FileText } from "lucide-react";
import { format } from "date-fns";

interface AbstractData {
  title: string;
  conference: string;
  presentationDate: string;
  description: string;
  contributors: string[];
  link: string;
}

interface InteractiveAbstractsProps {
  abstracts: AbstractData[];
  searchQuery?: string;
}

export function InteractiveAbstracts({ abstracts, searchQuery }: InteractiveAbstractsProps) {
  const [selectedAbstract, setSelectedAbstract] = useState<AbstractData | null>(null);

  const highlightText = (text: string, query?: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? 
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">{part}</mark> : 
        part
    );
  };

  if (!abstracts || abstracts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Research Abstracts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No research abstracts available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Research Abstracts ({abstracts.length})
        </CardTitle>
        <CardDescription>
          Published research presentations and conference abstracts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {abstracts.map((abstract, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">
                    {highlightText(abstract.title, searchQuery)}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(abstract.presentationDate), "MMM dd, yyyy")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {abstract.contributors.length} contributors
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="outline" className="mb-2">
                    {abstract.conference}
                  </Badge>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {highlightText(abstract.description, searchQuery)}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {abstract.title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {abstract.conference}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Presentation Date:</span>
                    {format(new Date(abstract.presentationDate), "MMMM dd, yyyy")}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Abstract</h4>
                  <p className="text-muted-foreground">{abstract.description}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Key Contributors ({abstract.contributors.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {abstract.contributors.map((contributor, idx) => (
                      <Badge key={idx} variant="secondary">
                        {contributor}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Full Abstract
                  </Button>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </CardContent>
    </Card>
  );
}