/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";

export default function DataTable({ columns, initialRows, toolbar }) {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",

        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
        "& .MuiDataGrid-columnHeaders": {
          // backgroundColor: "primary",
          // color: "black",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={[...columns]}
        editMode="row"
        className="rounded-xl"
        rowModesModel={rowModesModel}
        autoHeight
        // disableColumnSorting
        // loading
        rowHeight={60}
        columnHeaderHeight={60}
        onRowModesModelChange={handleRowModesModelChange}
        slots={{
          toolbar: toolbar,
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  );
}
