import React from "react";
import { useEffect } from "react";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Box,
  TextField,
  TableContainer,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useTableContext } from "./context";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import {
  CustomTableCell,
  CustomTableHeadCell,
} from "../../../common/styledComponents/styledComponent";
import { AddModal } from "../../../Components";
import { LoaderComponent } from "../../../Components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}

const InfoTable = () => {
  const {
    currentPage,
    rows,
    rowsPerPage,
    currentTableData,
    currentTables,
    handleChangePage,
    handleChangeRow,
    handleSearch,
    open,
    setOpen,
    modalOpen,
    setNewTableData,
    newTableData,
    postTableData,
    handleDelete,
    isLoading,
    isError,
    error
  } = useTableContext();
 
if(isError){
  return(
    <>
    <h1>{error.message} </h1>
    </>
  
  )
}
 
  return (
    <>
      {!isLoading ? (
        <>
          <Box
            sx={{ paddingX: "20px", paddingY: "5px", background: "#f0eeeb" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: "10px",
                paddingY: "10px",
              }}
            >
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                <PeopleIcon />
                <Typography sx={{ fontSize: "15px", marginLeft: "3px" }}>
                  User
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  height: "35px",
                  color: "white",
                  backgroundColor: "#f75f07",
                  fontSize: "13px",
                }}
                onClick={modalOpen}
              >
                Add New
              </Button>
              <AddModal
                open={open}
                setOpen={setOpen}
                setNewTableData={setNewTableData}
                newTableData={newTableData}
                postTableData={postTableData}
              />
            </Box>
            <Card
              sx={{ maxHeight: "80vh", overflowY: "scroll", overflowX: "auto" }}
            >
              <Box
                sx={{
                  paddingY: "15px",
                  paddingX: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextField
                  onChange={handleSearch}
                  size="small"
                  sx={{ width: "25%" }}
                ></TextField>
              </Box>
              <TableContainer>
                <Table sx={{ background: "white" }}>
                  <TableHead sx={{ background: "#f0eeeb" }}>
                    <TableRow>
                      <CustomTableHeadCell sx={{ width: 200 }}>
                        Name
                      </CustomTableHeadCell>
                      <CustomTableHeadCell>Username</CustomTableHeadCell>
                      <CustomTableHeadCell>Email</CustomTableHeadCell>
                      <CustomTableHeadCell>Comapany</CustomTableHeadCell>
                      <CustomTableHeadCell></CustomTableHeadCell>
                      <CustomTableHeadCell></CustomTableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentTables?.map((row) => (
                      <TableRow>
                        <CustomTableCell sx={{ display: "flex" }}>
                          <Avatar
                            variant="small"
                            sx={{
                              marginX: "16px",
                              fontSize: "14px",
                              width: 34,
                              height: 38,
                            }}
                          >
                            {row.name[0]}
                          </Avatar>
                          <Typography
                            sx={{ marginTop: "10px", fontSize: "12px" }}
                          >
                            {`${row.name} `}
                          </Typography>
                        </CustomTableCell>

                        <CustomTableCell>{row.username}</CustomTableCell>
                        <CustomTableCell>{row.email}</CustomTableCell>
                        <CustomTableCell>{(isObject(row.company))?row.company.name:row.company}</CustomTableCell>

                        <CustomTableCell>
                          <Button sx={{ color: "black" }}>
                            <EditIcon />
                          </Button>
                         
                        </CustomTableCell>
                        <CustomTableCell>
                        <Button
                            sx={{ color: "black" }}
                            onClick={(e) => handleDelete(row.id)}
                          >
                            <DeleteIcon />
                          </Button>
                        </CustomTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 20]}
                    component="div"
                    count={currentTableData.length}
                    page={currentPage}
                    onPageChange={handleChangePage}
                    showFirstButton
                    showLastButton
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRow}
                    sx={{ width: "250%" }}
                  />
                </Table>
              </TableContainer>
            </Card>
          </Box>
        </>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
};

export default InfoTable;
