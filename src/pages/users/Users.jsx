import { useState } from "react";
import noAvatar from "../../assets/noAvatar.jpg";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import useUserStore from "../../usersStore";
import styles from "./users.module.scss";

const columns = [
  { field: "id", headerName: "ID", minWidth: 90, flex: 0.5 },
  {
    field: "img",
    headerName: "Avatar",
    inputType: "image",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => {
      return <img className={styles.avatar} src={params.row.img || noAvatar} />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    inputType: "text",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    inputType: "text",
    flex: 1,
    minWidth: 130,
  },
  {
    field: "email",
    headerName: "Email",
    inputType: "email",
    flex: 2,
    minWidth: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    inputType: "tel",
    flex: 1,
    minWidth: 120,
  },
  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   inputType: "date",
  //   flex: 1,
  //   minWidth: 150,
  // },
  {
    field: "verified",
    headerName: "Verified",
    inputType: "checkbox",
    type: "boolean",
    flex: 1,
    minWidth: 120,
  },
];

function Users() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    id: null,
  });
  const { rows, setRows } = useUserStore();

  const handleDelete = (id) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
    setDeleteConfirmation({ isOpen: false, id: null });
  };

  const handleDeleteConfirmation = (id) => {
    setDeleteConfirmation({ isOpen: true, id });
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation({ isOpen: false, id: null });
  };

  const handleEdit = (item) => {
    setModalOpen(true);
    setSelectedItem(item);
  };

  const handleInputChange = (e) => {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setSelectedItem({
      ...selectedItem,
      selectedFile: file,
      img: URL.createObjectURL(file),
    });
  };

  const handleCheckBoxChange = (e) => {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.checked,
    });
  };

  const handleClose = () => {
    setSelectedItem({});
    setModalOpen(false);
  };

  const handleSave = (e) => {
    if (selectedItem.id) {
      const updatedRows = rows.map((row) => {
        return row.id === selectedItem.id ? selectedItem : row;
      });
      setRows(updatedRows);
      setModalOpen(false);
      setSelectedItem({});
      e.preventDefault();
      return;
    }
    setRows([
      {
        id: Math.floor(Math.random() * 10000),
        ...selectedItem,
      },
      ...rows,
    ]);
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div className={styles.users}>
        <div className={styles.info}>
          <h2 className={styles.title}>Users</h2>
          <button onClick={() => setModalOpen(true)} className={styles.btn}>
            Add new user
          </button>
        </div>

        <div className={styles.table}>
          <DataTable
            rows={rows}
            onDelete={handleDeleteConfirmation}
            onEdit={handleEdit}
            columns={columns}
            slug="users"
          />
        </div>
      </div>
      {modalOpen && (
        <Add
          selectedItem={selectedItem}
          slug="user"
          onClose={handleClose}
          columns={columns}
          onChange={handleInputChange}
          onFileChange={handleFileChange}
          onCheckboxChange={handleCheckBoxChange}
          onSave={handleSave}
        />
      )}
      {deleteConfirmation.isOpen && (
        <ConfirmDialog
          onConfirm={() => handleDelete(deleteConfirmation.id)}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
}

export default Users;
