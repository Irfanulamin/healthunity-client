import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetSuppliesQuery } from "@/redux/feature/suppliesApi";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  amount: string;
  image: string;
  _id: string;
}

const COLORS = ["#1E1E2E", "#3A3D4E", "#FF8C42", "#FCAF58"];

interface ChartData {
  name: string;
  value: number;
}

function processData(data: Product[]): {
  pieChartData: ChartData[];
  barChartData: ChartData[];
} {
  const categoryTotals: { [key: string]: number } = {};
  const categoryCounts: { [key: string]: number } = {};

  data.forEach((item) => {
    const amount = parseFloat(item.amount.replace("$", ""));
    if (categoryTotals[item.category]) {
      categoryTotals[item.category] += amount;
      categoryCounts[item.category]++;
    } else {
      categoryTotals[item.category] = amount;
      categoryCounts[item.category] = 1;
    }
  });

  const pieChartData: ChartData[] = Object.entries(categoryTotals).map(
    ([name, value]) => ({ name, value })
  );
  const barChartData: ChartData[] = Object.entries(categoryCounts).map(
    ([name, value]) => ({ name, value })
  );

  return { pieChartData, barChartData };
}

export default function ProductDataDisplay() {
  const { data, error, isLoading } = useGetSuppliesQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data!</div>;
  if (!data) return null;

  const { pieChartData, barChartData } = processData(data);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-black">Category Item Counts</CardTitle>
          <CardDescription>Number of items in each category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] sm:h-[400px] md:h-[300px] ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="value" fill={COLORS[1]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-black">Category Totals</CardTitle>
          <CardDescription>Total monetary value per category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] sm:h-[400px] md:h-[300px] ">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius="80%"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    dataKey: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 text-black border border-gray-200 rounded shadow">
        <p className="font-bold text-black">{`${payload[0].name}`}</p>
        <p className="text-black">{`${payload[0].dataKey}: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
