/* eslint-disable react/prop-types */
import styles from "./confirmDialog.module.scss";

function ConfirmDialog({ onCancel, onConfirm }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <p className={styles.text}>
            Are you sure you want to delete this item?
          </p>
          <div className={styles.btn}>
            <button className={styles.confirm} onClick={onConfirm}>
              Yes
            </button>
            <button className={styles.cancel} onClick={onCancel}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
