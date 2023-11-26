import AreaChartBox from "../../components/areaChartBox/AreaChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import SimpleCard from "../../components/simpleCard/SimpleCard";
import TopDeals from "../../components/topDeals/TopDeals";
import {
  barChartMarketing,
  barChartProductivity,
  barChartSales,
  barChartSatisfaction,
} from "../../data";
import styles from "./crm.module.scss";

function CRM() {
  return (
    <div className={styles.crm}>
      <SimpleCard dataInput={barChartSales} />
      <SimpleCard dataInput={barChartMarketing} />
      <SimpleCard dataInput={barChartProductivity} />
      <SimpleCard dataInput={barChartSatisfaction} />
      <TopDeals />
      <PieChartBox />
      <div className={styles.areaChart}>
        <AreaChartBox />
      </div>
    </div>
  );
}

export default CRM;
