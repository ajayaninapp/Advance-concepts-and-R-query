import * as axios from "axios";
import { useQuery ,useMutation,useQueryClient} from "react-query";
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
//react query custom hook for data deletion
export const useDeleteUSer=()=>{  
  const queryclient= useQueryClient()
  return useMutation(removeUser,{
    onSuccess:()=>{
      queryclient.invalidateQueries('user-info')
      
    }
  })
 }
 export const useAddUser=()=>{
  const queryclient= useQueryClient()
  return useMutation(post,{
    onSuccess:()=>{
      queryclient.invalidateQueries('user-info')
      
    }
  })
 }

export const post = (data) => {
  console.log(data)
  return axios.post(apiEndpoints.table, data)
};
export const removeUser = (id) => {
  console.log("deleting")
  debugger;

  return axios
    .delete(`${apiEndPoints.table}/${id}`)
    
};
