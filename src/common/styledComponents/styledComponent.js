import { styled } from '@mui/system';
import { TableCell } from '@mui/material';
import { Typography } from '@mui/material';

export const CustomTableCell = styled(TableCell)({
    
    padding:'14px',
    fontSize:"12px"
  });
  export const CustomTableHeadCell = styled(TableCell)({
    
    padding:'12px',
    fontWeight:"bold"
  });

  export const CustomListItemTypography =styled(Typography)({
    fontSize:"12px",fontWeight:"600",color:"#1c1a1a",margin:"0 5px 0 5px"
  })