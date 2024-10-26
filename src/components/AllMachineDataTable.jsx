import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  // { field: "id", headerName: "ID", width: 80 },
  {
    field: "machineID",
    headerName: "machineID",
    type: "number",
    width: 100,
    editable: false,
  },
  {
    field: "datetime",
    headerName: "datetime",
    type: "string",
    width: 300,
    editable: false,
  },
  {
    field: "volt",
    headerName: "Volt",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "rotation",
    headerName: "rotate",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "pressure",
    headerName: "pressure",
    type: "number",
    width: 130,
    editable: false,
  },
  {
    field: "temperature",
    headerName: "temperature",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "failure",
    headerName: "failure",
    type: "number",
    width: 100,
    editable: false,
  },
];

const AllMachineDataTable = ({ data, isLoading }) => {
  return (
    <div className="w-full">
      {data?.length === 0 && !isLoading ? (
        <h3 className="text-xl text-error font-bold italic text-center">
          No Data Available
        </h3>
      ) : isLoading ? (
        <div className="w-full flex flex-col items-center justify-center">
          {/* <BiLoaderCircle className="animate-spin" color="#05AC26" size={25} /> */}
          <p className="text-base text-live font-semibold animate-pulse">
            Fetching data...
          </p>
        </div>
      ) : (
        <div>
          <Box sx={{ height: "100%", width: "100%" }}>
            <DataGrid
              // {...data}

              disableRowSelectionOnClick
              // pageSizeOptions={[5]}

              columns={columns}
              rows={data}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default AllMachineDataTable;
