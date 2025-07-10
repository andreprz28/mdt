import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Users, ExternalLink, FileText, CheckCircle, Clock } from "lucide-react";
import { format } from "date-fns";

interface PatentData {
  title: string;
  patentNumber: string;
  filingDate: string;
  description: string;
  inventors: string[];
  status: "Granted" | "Pending" | "Published" | "Rejected";
}

interface InteractivePatentsProps {
  patents: PatentData[];
  searchQuery?: string;
}

export function InteractivePatents({ patents, searchQuery }: InteractivePatentsProps) {
  const [selectedPatent, setSelectedPatent] = useState<PatentData | null>(null);

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Granted":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "Published":
        return <FileText className="w-4 h-4 text-blue-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Granted":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Published":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  if (!patents || patents.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Patents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No patents available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Patents ({patents.length})
        </CardTitle>
        <CardDescription>
          Intellectual property and patent portfolio
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {patents.map((patent, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">
                      {highlightText(patent.title, searchQuery)}
                    </CardTitle>
                    <Badge className={getStatusColor(patent.status)}>
                      {getStatusIcon(patent.status)}
                      {patent.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Filed: {format(new Date(patent.filingDate), "MMM dd, yyyy")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {patent.inventors.length} inventors
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">
                      {patent.patentNumber}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {highlightText(patent.description, searchQuery)}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {patent.title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  Patent No. {patent.patentNumber}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Filing Date:</span>
                    {format(new Date(patent.filingDate), "MMMM dd, yyyy")}
                  </div>
                  <Badge className={getStatusColor(patent.status)}>
                    {getStatusIcon(patent.status)}
                    {patent.status}
                  </Badge>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="text-muted-foreground">{patent.description}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Inventors ({patent.inventors.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {patent.inventors.map((inventor, idx) => (
                      <Badge key={idx} variant="secondary">
                        {inventor}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View on USPTO
                  </Button>
                  <Button variant="outline" size="sm">
                    Download Patent
                  </Button>
                  <Button variant="outline" size="sm">
                    Citation Info
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