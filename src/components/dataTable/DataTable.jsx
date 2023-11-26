/* eslint-disable react/prop-types */
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styles from "./DataTable.module.scss";
import { Link } from "react-router-dom";
import { SiCodereview } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function DataTable({ rows, onDelete, onEdit, columns, slug }) {
  const actionColumns = {
    field: "action",
    headerName: "Actions",
    description: "You can view, edit or delete the row",
    sortable: false,
    minWidth: 120,

    flex: 1,
    renderCell: (params) => {
      return (
        <div className={styles.action}>
          <div className={styles.viewIcon}>
            <Link to={`/${slug}/${params.row.id}`}>
              <SiCodereview />
            </Link>
          </div>
          <div className={styles.editIcon}>
            <FaEdit onClick={() => onEdit(params.row)} />
          </div>
          <div className={styles.deleteIcon}>
            <RiDeleteBin6Line onClick={() => onDelete(params.row.id)} />
          </div>
        </div>
      );
    },
  };

  return (
    <div className={styles.container}>
      <DataGrid
        className={styles.dataGrid}
        rows={rows}
        columns={[...columns, actionColumns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        disableColumnMenu
      />
    </div>
  );
}

export default DataTable;
