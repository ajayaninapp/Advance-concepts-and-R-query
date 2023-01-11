import * as axios from "axios";
import { useQuery ,useMutation} from "react-query";
import { apiEndpoints } from "../../common";
import apiEndPoints from "../../common/apiEndPoints";


//Table Data Api call
export const get = () => {
  debugger;
  return axios.get(apiEndpoints.table);
};
//react query custom hook for data fetching
export const useUSerData=(onSuccess,onError)=>{  
 return useQuery('user-info',get,{
  onSuccess,
  onError
  })
}

export const useDeleteUSer=(id)=>{  
  return useMu(removeUser(id),{
   
   })
 }

export const post = (data) => {
  console.log(data);
  debugger;
  return axios.post(apiEndpoints.table, data).then((response) => {
    console.log(response.data);
  });
};
export const removeUser = (id) => {
  debugger;
  return axios
    .delete(`${apiEndPoints.table}/${id}`)
    
};
