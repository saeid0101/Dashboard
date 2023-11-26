import styles from "./topDeals.module.scss";
import { recentDeals } from "../../data";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";

function TopDeals() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>RECENT DEALS</h2>
      {recentDeals.map((item, index) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.leftSection}>
            <img src={images[index + 1]} alt="" />
            <div className={styles.info}>
              <p className={styles.name}>{item.username}</p>
              <p className={styles.email}>{item.email}</p>
            </div>
          </div>
          <div className={styles.rightSection}>${item.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default TopDeals;
