/* eslint-disable react/prop-types */
import styles from "./single.module.scss";
import {
  Legend,
  Line,
  LineChart,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import noAvatar from "../../assets/noAvatar.jpg";

function Single({ item, chartData }) {
  return (
    <div className={styles.single}>
      <div className={styles.info}>
        <div className={styles.text}>
          <div className={styles.heading}>
            <img src={item.img || noAvatar} className={styles.img} />
          </div>
          <div className={styles.details}>
            <ul className={styles.list}>
              {Object.entries(item)
                .filter(
                  (entry) =>
                    entry[0] !== "img" &&
                    entry[0] !== "selectedFile" &&
                    entry[0] !== "id"
                )
                .map((entry) => (
                  <li key={entry[1]} className={styles.listItem}>
                    <span className={styles.itemTitle}>{entry[0]}</span>
                    <span className={styles.itemValue}>
                      {entry[1].toString()}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <hr className={styles.line}></hr>

        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {chartData.chart.dataKeys.map((dataKey) => (
                <Line
                  key={dataKey.name}
                  type="monotone"
                  dataKey={dataKey.name}
                  stroke={dataKey.color}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={styles.activities}>
        <h2>Latest Activities</h2>

        {chartData.activities.map((activity) => (
          <div key={activity.text} className={styles.activity}>
            <div className={styles.icon}>
              <div className={styles.line}></div>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.text}>{activity.text}</p>
              <p className={styles.time}>{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Single;
