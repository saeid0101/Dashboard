/* eslint-disable react/prop-types */
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./barChartBox.module.scss";

function BarChartBox({ dataInput }) {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="90%" height={60}>
        <BarChart data={dataInput.chartData} maxBarSize={14}>
          <Bar
            dataKey={dataInput.dataKey}
            fill={dataInput.color}
            activeBar={false}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: `{dataInput[color]}`,
              borderRadius: "5px",
              padding: "2px",
              fontSize: "12px",
              border: "none",
              color: "rgb(0,255,255)",
            }}
            labelStyle={{ display: "none" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartBox;
