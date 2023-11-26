/* eslint-disable react/prop-types */
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import BarChartBox from "../barChartBox/BarChartBox";
import styles from "./simpleCard.module.scss";

export default function SimpleCard({ dataInput }) {
  return (
    <div className={styles.card}>
      <div className={styles.leftSection}>
        <h5 className={styles.title}>{dataInput.title}</h5>
        <h3 className={styles.value}>{dataInput.value}</h3>
        <div className={styles.change}>
          {dataInput.percent > 0 ? (
            <div className={styles.percentage} style={{ color: "#0acf97" }}>
              <span>{<ImArrowUp />}</span>
              <span>{dataInput.percent}%</span>
            </div>
          ) : (
            <div className={styles.percentage} style={{ color: "#fa5c7c" }}>
              <span>{<ImArrowDown />}</span>
              <span>{Math.abs(dataInput.percent)}%</span>
            </div>
          )}
          <p className={styles.time}>since last month</p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <BarChartBox dataInput={dataInput} />
      </div>
    </div>
  );
}
