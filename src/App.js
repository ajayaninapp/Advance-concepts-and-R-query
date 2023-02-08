
import "./App.css";
//npx json-server --watch data/db.json --port 8000
import { HomeScreen } from "./views/HomeScreen";
import { QueryClientProvider,QueryClient } from "react-query";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import RouterContainer from "./Routes/RouterContainer";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from "./aws-exports";
import AuthDatahandler from "./views/AuthDataHandler/AuthDatahandler";
const queryclient=new QueryClient()
Amplify.configure(awsmobile)
function App() {
  return (
    <AuthDatahandler>
     <QueryClientProvider client={queryclient}>
     <RouterContainer/>
    </QueryClientProvider>
    </AuthDatahandler>
      
    
      
    
  );
}

export default App;
