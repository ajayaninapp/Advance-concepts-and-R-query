import React, { useMemo } from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { get } from "../../../../services/apiCalls";
import { post, removeUser } from "../../../../services/apiCalls/apiCalls";
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
 const[e,setE]=useState(false)
  const [rows, setrows] = useState([]);
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
    setrows(data.data);
  };
  const onError = (error) => {
    console.log(isError)
    console.log(error)
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
  };
  const handleDelete = (id) => {
    deleteUser(id);
    console.log(data.data);
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
    debugger;
    return currentTableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsPerPage, currentTableData]);

  const handleSearch = (e) => {
    setCurrentTableData(
      rows.filter((obj) =>
        Object.values(obj).some((val) =>
          String(val).toUpperCase().includes(e.target.value.toUpperCase())
        )
      )
    );
  };
  const handleFilter = (e) => {
    setCurrentTableData(
      rows.filter((row) => {
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
    console.log(open);
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
