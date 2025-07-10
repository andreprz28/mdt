import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface AnalyticsChartProps {
  data: Record<string, number>;
}

export function AnalyticsChart({ data }: AnalyticsChartProps) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value: value,
  }));

  const COLORS = {
    'Active': '#10B981',
    'Planning': '#3B82F6',
    'Testing': '#F59E0B',
    'Validation': '#8B5CF6',
    'Delayed': '#EF4444',
    'On Hold': '#F59E0B',
    'Completed': '#6B7280',
  };

  const getColor = (name: string) => {
    return COLORS[name as keyof typeof COLORS] || '#6B7280';
  };

  return (
    <Card className="border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Project Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
