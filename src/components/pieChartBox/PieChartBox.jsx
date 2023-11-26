import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./pieChartBox.module.scss";

const data = [
  { name: "Direct", value: 225.89, color: "#0088FE" },
  { name: "Affilliate", value: 140.34, color: "#00C49F" },
  { name: "Sponsored", value: 212.87, color: "#FFBB28" },
  { name: "E-mail", value: 72.02, color: "#FF8042" },
];

function PieChartBox() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>TOTAL SALES</h2>
      <div className={styles.chart}>
        <ResponsiveContainer width={"80%"} height={"80%"} minHeight={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              cx={"50%"}
              cy={"50%"}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.legend}>
        {data.map((item) => (
          <div key={item.name} className={styles.item}>
            <div className={styles.title}>
              <div
                className={styles.icon}
                style={{ backgroundColor: `${item.color}` }}
              ></div>
              <p>{item.name}</p>
            </div>
            <div className={styles.amount}>${item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
