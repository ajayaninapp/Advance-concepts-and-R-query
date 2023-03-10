import React, { useMemo } from "react";
import { createContext, useContext, useState } from "react";
import {
  useUSerData,
  useDeleteUSer,
  useAddUser,
} from "../../../../services/apiCalls/apiCalls";

export const TableContext = createContext({
  currentPage: 0,
  rowsPerPage: 10,
  currentTableData: {},
  open: false,
  setOpen: () => {},
  fetchTableData: () => {},
  handleChangePage: () => {},
  handleSearch: () => {},
  setCurrentPage: () => {},
  setRowsPerPage: () => {},
});
export const useTableContext = () => useContext(TableContext);

const TableContextDataHandler = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [newTableData, setNewTableData] = useState({
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    group: " ",
    status: "",
  });
  //fetch user data with usequery
  const onSuccess = (data) => {
    setCurrentTableData(data.data);
  };
  const onError = (error) => {
  };

  const { isLoading, data, isError, error, refetch } = useUSerData(
    onSuccess,
     onError
  );
  //
  const { mutate: deleteUser } = useDeleteUSer();
  const { mutate: addUser } = useAddUser();

  const postTableData = (newTableData) => {
    addUser(newTableData);
    setOpen(false);
  };
  const handleDelete = (id) => {
    deleteUser(id);
  };
  const [currentTableData, setCurrentTableData] = useState([]);
  const handleChangePage = (e, newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRow = (e) => {
    setRowsPerPage(e.target.value);
    setCurrentPage(0);
  };
  const currentTables = useMemo(() => {
    const firstPageIndex = currentPage * rowsPerPage;
    const lastPageIndex = firstPageIndex + rowsPerPage;
    return currentTableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsPerPage, currentTableData]);

  const handleSearch = (e) => {
    setCurrentTableData(
      data.data.filter((obj) =>
        Object.values(obj).some((val) =>
          String(val).toUpperCase().includes(e.target.value.toUpperCase())
        )
      )
    );
  };
  const handleFilter = (e) => {
    setCurrentTableData(
      data.data.filter((row) => {
        if (e.target.value == "All") {
          return row;
        } else {
          return row.group == e.target.value;
        }
      })
    );
  };
  const modalOpen = () => {
    setOpen(true);
  };

  const contextPayload = useMemo(
    () => ({
      currentPage,
      rowsPerPage,
      currentTableData,
      currentTables,
     
      open,
      newTableData,
      handleDelete,
      postTableData,
      setNewTableData,
      modalOpen,
      setOpen,
      isLoading,
      isError,
      Error,
      handleChangePage,
      handleChangeRow,
      handleSearch,
      setCurrentPage,
      setRowsPerPage,
      handleFilter,
      error
      
    }),
    [
      currentPage,
      rowsPerPage,
      currentTableData,
      currentTables,
      open,
      newTableData,
      isLoading,
      isError,
    ]
  );
  return <TableContext.Provider value={contextPayload} {...props} />;
};

export default TableContextDataHandler;
