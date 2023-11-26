import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./areaChartBox.module.scss";

const data = [
  {
    name: "Jan",
    overhead: 8500,
    cost: 13200,
    revenue: 4600,
  },
  {
    name: "Feb",
    overhead: 9300,
    cost: 12500,
    revenue: 3100,
  },
  {
    name: "Mar",
    overhead: 7800,
    cost: 14700,
    revenue: 6000,
  },
  {
    name: "Apr",
    overhead: 7300,
    cost: 13800,
    revenue: 4800,
  },
  {
    name: "May",
    overhead: 8500,
    cost: 16000,
    revenue: 7400,
  },
  {
    name: "jun",
    overhead: 6900,
    cost: 14500,
    revenue: 5300,
  },
  {
    name: "Jul",
    overhead: 8500,
    cost: 13200,
    revenue: 4000,
  },
  {
    name: "Aug",
    overhead: 6700,
    cost: 12300,
    revenue: 3100,
  },
  {
    name: "Sep",
    overhead: 7500,
    cost: 14100,
    revenue: 5000,
  },
  {
    name: "Oct",
    overhead: 8900,
    cost: 13400,
    revenue: 4300,
  },
  {
    name: "Nov",
    overhead: 9400,
    cost: 15900,
    revenue: 7100,
  },
  {
    name: "Dec",
    overhead: 10200,
    cost: 14500,
    revenue: 5600,
  },
];

function AreaChartBox() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Revenue Analytics</h2>
      <div className={styles.chart}>
        <ResponsiveContainer width="99%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="overhead"
              stackId="1"
              stroke="#ffbb28"
              fill="#ffbb28"
            />
            <Area
              type="monotone"
              dataKey="cost"
              stackId="1"
              stroke="rgba(255, 99, 132, 0.85)"
              fill="rgba(255, 99, 132, 0.85)"
              opacity={0.6}
            />
            <Area
              strokeWidth={3}
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#00c49f"
              fill="#00c49f"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AreaChartBox;
