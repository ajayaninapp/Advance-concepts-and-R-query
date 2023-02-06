import * as React from "react";

import { InfoTable } from "./InfoTable";
import TableContextDataHandler from "./InfoTable/context/TableContext";




const HomePage = () => {
  return (
    <TableContextDataHandler>
    <InfoTable />
    </TableContextDataHandler>
  );
};
export default HomePage;
