"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import JobPostingsInterface from "../interfaces/JobPostingsInterface";

interface jobTableColumn {
  id: "job_title" | "company_name" | "tech_stack" | "location" | "salary";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface JobTableProps {
  descriptions: Array<JobPostingsInterface>;
}

interface jobRowData {
  job_title: string;
  company_name: string;
  tech_stack: string;
  salary: string;
  location: string;
}

const columns: readonly jobTableColumn[] = [
  { id: "company_name", label: "Company Name", minWidth: 100 },
  { id: "job_title", label: "Job Title", minWidth: 100 },
  { id: "salary", label: "Salary", minWidth: 100 },
  { id: "tech_stack", label: "Tech Stack", minWidth: 170 },
  { id: "location", label: "Location", minWidth: 170 },
];

/**
 * `StickyHeadTable` React Component
 *
 * Props:
 *   descriptions (JobTableProps): Array of job posting objects based on `JobPostingsInterface`.
 *
 * State:
 *   - page (number): Current page in table pagination.
 *   - rowsPerPage (number): Rows displayed per page in the table.
 *
 * Functions:
 *   - createRow(description): Converts a job description object to table row format.
 *   - handleChangePage(event, newPage): Updates the page number for pagination.
 *   - handleChangeRowsPerPage(event): Adjusts the number of rows per page.
 *
 * Renders:
 *   - A paginated table with sticky headers, displaying job postings.
 *   - Pagination controls for navigating pages.
 *
 * Usage:
 *   <StickyHeadTable descriptions={arrayOfJobDescriptions} />
 */
export default function StickyHeadTable({ descriptions }: JobTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function createRow(description: JobPostingsInterface): jobRowData {
    const { job_title, company_name, json_response } = description;

    const tech_stack = json_response?.tech_stack
      ? json_response.tech_stack.join(", ")
      : "";
    const salary = JSON.stringify(json_response?.salary) || "";
    const location = json_response?.location || "";

    return {
      job_title: job_title || "",
      company_name,
      tech_stack,
      salary,
      location,
    };
  }

  /**
   * helper function to handle changing the page
   */
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  /**
   * helper function to adjust the number of rows per page
   */
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {descriptions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((d) => {
                let rowData = createRow(d);

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={d.id}>
                    {columns.map((column) => {
                      const value = rowData[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={descriptions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
