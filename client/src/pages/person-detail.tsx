import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, Mail, MapPin, Award, BookOpen, Calendar, Building, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Person, Project } from "@shared/schema";
import { BeltFellowshipIndicators } from "@/components/belt-fellowship-indicators";
import { InteractiveAbstracts } from "@/components/interactive-abstracts";
import { InteractivePatents } from "@/components/interactive-patents";
import { ConnectionNetwork } from "@/components/connection-network";

export default function PersonDetail() {
  const { id } = useParams<{ id: string }>();
  
  const { data: person } = useQuery({
    queryKey: ['/api/people', id],
    enabled: !!id,
  });

  const { data: allProjects = [] } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  if (!person) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Person not found</h1>
            <Link href="/">
              <Button className="mt-4">Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Find projects where this person is involved
  const involvedProjects = allProjects.filter(project => 
    project.teamMembers.some(member => member.toLowerCase() === person.name.toLowerCase()) ||
    project.projectLeader.toLowerCase() === person.name.toLowerCase()
  );

  // Mock patents data based on person's expertise
  const mockPatents = [
    {
      id: "US11234567",
      title: `Advanced ${person.skills[0]} System`,
      year: "2023",
      status: "Granted",
      description: `Innovative approach to ${person.skills[0].toLowerCase()} with improved efficiency and patient outcomes.`,
      coInventors: ["John Smith", "Jane Doe"],
      category: person.skills[0]
    },
    {
      id: "US11234568", 
      title: `${person.skills[1] || 'Medical Device'} Innovation`,
      year: "2022",
      status: "Granted",
      description: `Novel implementation of ${(person.skills[1] || 'medical device').toLowerCase()} technology for enhanced performance.`,
      coInventors: ["Alice Johnson"],
      category: person.skills[1] || 'Medical Device'
    },
    {
      id: "US11234569",
      title: `Next-Generation ${person.skills[2] || 'Healthcare'} Platform`,
      year: "2024",
      status: "Pending",
      description: `Revolutionary approach to ${(person.skills[2] || 'healthcare').toLowerCase()} delivery and monitoring.`,
      coInventors: ["Bob Wilson", "Carol Brown"],
      category: person.skills[2] || 'Healthcare'
    }
  ].slice(0, person.patents || 3);

  // Mock publications data
  const mockPublications = [
    {
      title: `Advances in ${person.skills[0]} for Medical Applications`,
      journal: "Journal of Medical Engineering",
      year: "2023",
      citations: 45,
      authors: [person.name, "Co-Author 1", "Co-Author 2"]
    },
    {
      title: `Clinical Outcomes in ${person.skills[1] || 'Medical Device'} Studies`,
      journal: "Clinical Research Quarterly",
      year: "2022", 
      citations: 67,
      authors: [person.name, "Research Team"]
    },
    {
      title: `Future Directions in ${person.skills[2] || 'Healthcare'} Technology`,
      journal: "IEEE Transactions on Biomedical Engineering",
      year: "2023",
      citations: 32,
      authors: [person.name, "International Consortium"]
    }
  ].slice(0, Math.min(person.publications || 3, 5));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to People
            </Button>
          </Link>
          
          <div className="flex items-start gap-6 mb-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback className="text-2xl">
                {person.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-3">{person.title}</p>
              
              <div className="flex items-center gap-4 flex-wrap mb-4">
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Building className="h-4 w-4" />
                  {person.function}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  {person.location}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4" />
                  {person.email}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  {person.yearsExperience} years experience
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="font-medium">{person.patents}</span>
                  <span className="text-gray-600 dark:text-gray-400">patents</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">{person.publications}</span>
                  <span className="text-gray-600 dark:text-gray-400">publications</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4 text-green-500" />
                  <span className="font-medium">{involvedProjects.length}</span>
                  <span className="text-gray-600 dark:text-gray-400">active projects</span>
                </div>
              </div>
              
              <div className="mt-4">
                <BeltFellowshipIndicators 
                  drmBelt={person.drmBelt} 
                  fellowships={person.fellowships || []} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {person.bio}
                </p>
              </CardContent>
            </Card>

            {/* Skills & Expertise */}
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {person.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interactive Abstracts */}
            <InteractiveAbstracts 
              abstracts={person.abstractsData || []} 
            />

            {/* Interactive Patents */}
            <InteractivePatents 
              patents={person.patentsData || []} 
            />

            {/* Connection Network */}
            <ConnectionNetwork 
              connections={person.connections || []} 
              personName={person.name}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education & Training */}
            <Card>
              <CardHeader>
                <CardTitle>Education & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Formal Education</h4>
                    <div className="space-y-2">
                      {person.education?.map((edu, index) => (
                        <div key={index} className="text-sm">
                          <p className="font-medium">{edu}</p>
                        </div>
                      )) || (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Education information not available
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {person.cornerstoneTrainings && person.cornerstoneTrainings.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Cornerstone Trainings</h4>
                      <div className="flex flex-wrap gap-2">
                        {person.cornerstoneTrainings.map((training, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {training}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements & Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {person.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-amber-500 mt-0.5" />
                      <p className="text-sm">{achievement}</p>
                    </div>
                  )) || (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      No achievements listed
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Current Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Current Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {involvedProjects.length > 0 ? (
                    involvedProjects.map((project) => (
                      <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{project.name}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {project.category} • {project.progress}% complete
                            </p>
                            <div className="flex items-center gap-1 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {project.status}
                              </Badge>
                              {project.projectLeader.toLowerCase() === person.name.toLowerCase() && (
                                <Badge variant="secondary" className="text-xs">
                                  Lead
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Link href={`/projects/${project.id}`}>
                            <Button variant="outline" size="sm" className="text-xs h-7">
                              View
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Not currently assigned to any projects
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <a href={`mailto:${person.email}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    {person.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{person.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{person.function}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}