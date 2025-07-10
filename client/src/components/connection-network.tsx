import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Network, Users, GitBranch, Link as LinkIcon } from "lucide-react";
import { Link } from "wouter";

interface Connection {
  projectId?: string;
  personId?: string;
  role?: string;
  relationship?: string;
  skillsShared?: string[];
  sharedProjects?: string[];
}

interface ConnectionNetworkProps {
  connections: Connection[];
  personName: string;
}

export function ConnectionNetwork({ connections, personName }: ConnectionNetworkProps) {
  const projectConnections = connections.filter(conn => conn.projectId);
  const peopleConnections = connections.filter(conn => conn.personId);

  if (!connections || connections.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5" />
            Connection Network
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No connections mapped yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Network className="w-5 h-5" />
          Connection Network
        </CardTitle>
        <CardDescription>
          Project associations and professional relationships for {personName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Project Connections */}
        {projectConnections.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Project Connections ({projectConnections.length})
            </h4>
            <div className="space-y-3">
              {projectConnections.map((connection, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Project Connection</p>
                        {connection.role && (
                          <Badge variant="outline" className="mt-1">
                            {connection.role}
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/projects/${connection.projectId}`}>
                          <LinkIcon className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    {connection.skillsShared && connection.skillsShared.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-1">Shared Skills:</p>
                        <div className="flex flex-wrap gap-1">
                          {connection.skillsShared.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* People Connections */}
        {peopleConnections.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Professional Network ({peopleConnections.length})
            </h4>
            <div className="space-y-3">
              {peopleConnections.map((connection, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium">Professional Contact</p>
                        {connection.relationship && (
                          <Badge variant="outline" className="mt-1">
                            {connection.relationship}
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/people/${connection.personId}`}>
                          <LinkIcon className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    {connection.sharedProjects && connection.sharedProjects.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-1">Shared Projects:</p>
                        <div className="flex flex-wrap gap-1">
                          {connection.sharedProjects.map((project, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Network Visualization Button */}
        <div className="pt-4 border-t">
          <Button variant="outline" className="w-full">
            <Network className="w-4 h-4 mr-2" />
            View Interactive Network Map
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}