"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import JobListingsInterface from "../interfaces/JobListingsInterface";
import { useRouter } from "next/navigation";

// Column definitions
const columns: GridColDef[] = [
  { field: "job_title", headerName: "Job Title", width: 150 },
  { field: "company_name", headerName: "Company", width: 150 },
  {
    field: "tech_stack",
    headerName: "Tech Stack",
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      (params.row.tech_stack || []).join(", "),
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    valueGetter: (params: GridValueGetterParams) => params.row.location,
  },
  {
    field: "salary",
    headerName: "Salary",
    width: 130,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.salary || "Not Provided",
  },
];

interface JobTableProps {
  descriptions: Array<JobListingsInterface>;
}

/**
 *MUI Datagrid component used to render the jobs table
 */
export default function JobListingsDataGrid({ descriptions }: JobTableProps) {
  const router = useRouter();

  /**
   * build the rows for the data grid
   */
  const rows = descriptions.map((description) => ({
    id: description.id,
    job_title: description.job_title,
    tech_stack: description.json_response.tech_stack,
    location: description.json_response.location,
    company_name: description.company_name,
    salary: description.json_response.salary,
  }));

  /**
   * click handler to handle navigation to job details pages
   */
  const handleRowClick = (params: any) => {
    router.push(`/listings/${params.id}`);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[10, 25, 50]}
        //NOTE: leaving these incase we use selection in the future
        // checkboxSelection
        // disableSelectionOnClick
      />
    </Box>
  );
}
