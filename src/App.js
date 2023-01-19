
import "./App.css";
//npx json-server --watch data/db.json --port 8000
import { HomeScreen } from "./views/HomeScreen";
import { QueryClientProvider,QueryClient } from "react-query";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
const queryclient=new QueryClient()
function App() {
  return (
      <QueryClientProvider client={queryclient}>
       <AuthLayout/>
   
    </QueryClientProvider>
    
      
    
  );
}

export default App;
