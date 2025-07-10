import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, Users, Target, FileText, Award, Clock, AlertCircle, Package, Wrench, Image, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Project, Person, Document, Activity } from "@shared/schema";
import { ProjectTimeline } from "@/components/project-timeline";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  const { data: project } = useQuery({
    queryKey: ['/api/projects', id],
    enabled: !!id,
  });

  const { data: documents = [] } = useQuery<Document[]>({
    queryKey: ['/api/documents', id],
    enabled: !!id,
  });

  const { data: activities = [] } = useQuery<Activity[]>({
    queryKey: ['/api/activities', id],
    enabled: !!id,
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Project not found</h1>
            <Link href="/">
              <Button className="mt-4">Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Delayed": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "On Hold": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Completed": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return "Unknown size";
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 flex-wrap">
                <Badge className={`px-3 py-1 ${getStatusColor(project.status)}`}>
                  {project.status}
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  {project.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  Due: {project.deadline ? new Date(project.deadline).toLocaleDateString() : "No deadline"}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Progress</div>
              <div className="text-2xl font-bold">{project.progress}%</div>
              <Progress value={project.progress} className="w-24 mt-2" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Function</label>
                    <p className="mt-1">{project.function}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Stage</label>
                    <p className="mt-1">{project.stage}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Project Leader</label>
                    <p className="mt-1">{project.projectLeader}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Team Size</label>
                    <p className="mt-1">{project.teamMembers.length} members</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Key Skills</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Milestones</label>
                  <ul className="mt-2 space-y-1">
                    {project.milestones.map((milestone, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Clock className="h-3 w-3 text-gray-400" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Project Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Project Documents & Design Materials
                </CardTitle>
                <CardDescription>
                  Complete technical documentation, drawings, parts specifications, and bill of materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Mock Documents */}
                  {project.mockDocuments && project.mockDocuments.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Project Documents
                        <Badge variant="secondary">{project.mockDocuments.length}</Badge>
                      </h4>
                      <div className="grid gap-3">
                        {project.mockDocuments.map((doc: any) => (
                          <div key={doc.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <FileText className="h-4 w-4 text-gray-500" />
                                  <h5 className="font-medium">{doc.name}</h5>
                                  <Badge variant="outline" className="text-xs">v{doc.version}</Badge>
                                  <Badge 
                                    variant={doc.status === "Current" ? "default" : "secondary"}
                                    className="text-xs"
                                  >
                                    {doc.status}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                  <span>Type: {doc.type}</span>
                                  <span>Size: {doc.size}</span>
                                  <span>Updated: {doc.uploadedAt}</span>
                                  <span>By: {doc.uploadedBy}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bill of Materials */}
                  {project.billOfMaterials && project.billOfMaterials.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Package className="h-4 w-4" />
                        Bill of Materials
                        <Badge variant="secondary">{project.billOfMaterials.length} items</Badge>
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Part Number</th>
                              <th className="text-left py-2">Description</th>
                              <th className="text-center py-2">Qty</th>
                              <th className="text-right py-2">Unit Cost</th>
                              <th className="text-left py-2">Supplier</th>
                              <th className="text-center py-2">Lead Time</th>
                              <th className="text-center py-2">Criticality</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.billOfMaterials.map((item: any, index: number) => (
                              <tr key={index} className="border-b">
                                <td className="py-2 font-mono text-xs">{item.partNumber}</td>
                                <td className="py-2">{item.description}</td>
                                <td className="py-2 text-center">{item.quantity}</td>
                                <td className="py-2 text-right font-mono">${item.unitCost.toFixed(2)}</td>
                                <td className="py-2 text-xs">{item.supplier}</td>
                                <td className="py-2 text-center text-xs">{item.leadTime}</td>
                                <td className="py-2 text-center">
                                  <Badge 
                                    variant={item.criticality === "Critical" ? "destructive" : 
                                            item.criticality === "High" ? "default" : "secondary"}
                                    className="text-xs"
                                  >
                                    {item.criticality}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Parts Information */}
                  {project.parts && project.parts.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Wrench className="h-4 w-4" />
                        Part Specifications
                        <Badge variant="secondary">{project.parts.length} parts</Badge>
                      </h4>
                      <div className="grid gap-3">
                        {project.parts.map((part: any, index: number) => (
                          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Part Number</label>
                                <p className="text-sm font-mono">{part.partNumber}</p>
                              </div>
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Name</label>
                                <p className="text-sm">{part.name}</p>
                              </div>
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Material</label>
                                <p className="text-sm">{part.material}</p>
                              </div>
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Category</label>
                                <p className="text-sm">{part.category}</p>
                              </div>
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Dimensions</label>
                                <p className="text-sm font-mono">{part.dimensions}</p>
                              </div>
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Weight</label>
                                <p className="text-sm">{part.weight}</p>
                              </div>
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Sterilization</label>
                                <p className="text-sm">{part.sterilization}</p>
                              </div>
                              <div>
                                <label className="text-xs font-medium text-gray-600 dark:text-gray-400">Shelf Life</label>
                                <p className="text-sm">{part.shelfLife}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Drawings */}
                  {project.drawings && project.drawings.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        Technical Drawings
                        <Badge variant="secondary">{project.drawings.length} drawings</Badge>
                      </h4>
                      <div className="grid gap-3">
                        {project.drawings.map((drawing: any, index: number) => (
                          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Image className="h-4 w-4 text-gray-500" />
                                  <h5 className="font-medium">{drawing.title}</h5>
                                  <Badge variant="outline" className="text-xs">{drawing.revision}</Badge>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-500 dark:text-gray-400">
                                  <span>Drawing #: {drawing.drawingNumber}</span>
                                  <span>Type: {drawing.type}</span>
                                  <span>Format: {drawing.format}</span>
                                  <span>Pages: {drawing.pages}</span>
                                  <span>Date: {drawing.date}</span>
                                  <span>Engineer: {drawing.engineer}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                View Drawing
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Document Revisions */}
                  {project.revisions && project.revisions.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Document Revisions
                        <Badge variant="secondary">{project.revisions.length} revisions</Badge>
                      </h4>
                      <div className="space-y-2">
                        {project.revisions.map((revision: any, index: number) => (
                          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge variant="outline" className="text-xs">v{revision.version}</Badge>
                                  <span className="text-sm font-medium">{revision.changes}</span>
                                  <Badge 
                                    variant={revision.reviewStatus === "Approved" ? "default" : "secondary"}
                                    className="text-xs"
                                  >
                                    {revision.reviewStatus}
                                  </Badge>
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {revision.date} • {revision.author}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Uploaded Documents from Database */}
                  {documents && documents.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Uploaded Documents
                        <Badge variant="secondary">{documents.length}</Badge>
                      </h4>
                      <div className="grid gap-3">
                        {documents.map((doc) => (
                          <div key={doc.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <FileText className="h-4 w-4 text-gray-500" />
                                  <h5 className="font-medium">{doc.name}</h5>
                                  <Badge variant="outline" className="text-xs">v{doc.version}</Badge>
                                  <Badge 
                                    variant={doc.status === "active" ? "default" : "secondary"}
                                    className="text-xs"
                                  >
                                    {doc.status}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                  <span>Type: {doc.type}</span>
                                  <span>Size: {formatFileSize(doc.fileSize)}</span>
                                  <span>Updated: {doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString() : 'Unknown'}</span>
                                  <span>By: {doc.uploadedBy}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Upload Documents */}
                  {(!project.mockDocuments || project.mockDocuments.length === 0) && (!documents || documents.length === 0) && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                      <p>No documents uploaded yet</p>
                      <Button variant="outline" className="mt-3" size="sm">
                        Upload Document
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Timeline */}
            <ProjectTimeline 
              timeline={project.timeline || []} 
              projectName={project.name}
            />

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="max-h-60">
                  <div className="space-y-3">
                    {activities.length > 0 ? (
                      activities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-sm">{activity.description}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                              <span>{new Date(activity.timestamp!).toLocaleDateString()}</span>
                              {activity.type && <Badge variant="outline" className="text-xs">{activity.type}</Badge>}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                        No recent activity
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Members */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=32&h=32&fit=crop&crop=face`} />
                        <AvatarFallback>{member.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Link href={`/people/${member.toLowerCase().replace(/\s+/g, '-')}`}>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">{member}</p>
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {project.roles[index] || "Team Member"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Documents</span>
                  <span className="font-medium">{(project.mockDocuments?.length || 0) + documents.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Activities</span>
                  <span className="font-medium">{activities.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Team Size</span>
                  <span className="font-medium">{project.teamMembers.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Patents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Related Patents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Mock patent data for demonstration */}
                  {[
                    { id: "US11234567", title: "Advanced Glucose Monitoring System", year: "2023", inventor: "Sarah Johnson" },
                    { id: "US11234568", title: "Automated Insulin Delivery Algorithm", year: "2022", inventor: "Dr. Emily Chen" },
                    { id: "US11234569", title: "Continuous Glucose Sensor Design", year: "2023", inventor: "Sarah Johnson" }
                  ].map((patent) => (
                    <div key={patent.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{patent.title}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {patent.id} • {patent.year}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Inventor: {patent.inventor}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs h-7">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}