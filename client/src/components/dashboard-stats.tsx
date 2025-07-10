import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartGantt, Users, Lightbulb, CheckCircle, TrendingUp } from "lucide-react";

interface DashboardStatsProps {
  stats: {
    activeProjects: number;
    totalProjects: number;
    teamMembers: number;
    totalPatents: number;
    completionRate: number;
    projectsByStatus: Record<string, number>;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const statsData = [
    {
      title: "Active Projects",
      value: stats.activeProjects.toString(),
      icon: ChartGantt,
      change: "+12% from last month",
      changeType: "positive" as const,
    },
    {
      title: "Team Members",
      value: stats.teamMembers.toLocaleString(),
      icon: Users,
      change: "+5% from last month",
      changeType: "positive" as const,
    },
    {
      title: "Patents Filed",
      value: stats.totalPatents.toString(),
      icon: Lightbulb,
      change: "+8% from last month",
      changeType: "positive" as const,
    },
    {
      title: "Completion Rate",
      value: `${stats.completionRate}%`,
      icon: CheckCircle,
      change: "+3% from last month",
      changeType: "positive" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {statsData.map((stat, index) => (
        <Card key={index} className="border-gray-200 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-[hsl(207,90%,54%)]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              {stat.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
