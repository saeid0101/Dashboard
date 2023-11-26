/* eslint-disable react/prop-types */
import styles from "./add.module.scss";
import { FaUpload } from "react-icons/fa";

function Add({
  slug,
  columns,
  selectedItem,
  onClose,
  onChange,
  onFileChange,
  onCheckboxChange,
  onSave,
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{`Add new ${slug}`} </h2>
          <button className={styles.close} onClick={onClose}>
            x
          </button>
        </div>
        <form onSubmit={onSave} className={styles.form}>
          <div className={styles.body}>
            {columns
              .filter((col) => col.field !== "id")
              .map((item) => (
                <div className={styles.item} key={item.field}>
                  {item.field === "verified" ? (
                    <>
                      <div className={styles.checkbox}>
                        <h2 className={styles.checkboxTitle}>Status</h2>
                        <div className={styles.checkboxGroup}>
                          <label className={styles.checkBoxLabel}>
                            {item.headerName}:
                          </label>
                          <input
                            type="checkbox"
                            name={item.field}
                            checked={selectedItem[item.field] || ""}
                            onChange={(e) => onCheckboxChange(e)}
                          ></input>
                        </div>
                      </div>
                    </>
                  ) : item.field === "img" ? (
                    <>
                      <div className={styles.file}>
                        <h2 className={styles.fileTitle}>Image</h2>
                        <div className={styles.fileGroup}>
                          {console.log(selectedItem)}
                          {selectedItem.img && (
                            <img
                              className={styles.imageFile}
                              src={selectedItem.img || ""}
                            />
                          )}
                          <label
                            htmlFor="fileUpload"
                            className={styles.uploadBtn}
                          >
                            Upload image <FaUpload />
                          </label>
                          <input
                            onChange={(e) => onFileChange(e)}
                            id="fileUpload"
                            className={styles.fileInput}
                            type="file"
                            name={item.field}
                          ></input>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <label className={styles.label}>{item.headerName}</label>
                      <input
                        className={styles.input}
                        type={item.inputType}
                        name={item.field}
                        value={selectedItem[item.field] || ""}
                        placeholder={item.field}
                        onChange={(e) => onChange(e)}
                      ></input>
                    </>
                  )}
                </div>
              ))}
          </div>

          <button type="submit" className={styles.btn}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
