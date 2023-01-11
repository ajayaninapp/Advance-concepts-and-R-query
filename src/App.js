
import "./App.css";
//npx json-server --watch data/db.json --port 8000
import { HomeScreen } from "./views/HomeScreen";
import { QueryClientProvider,QueryClient } from "react-query";
const queryclient=new QueryClient()
function App() {
  return (
      <QueryClientProvider client={queryclient}>
       <HomeScreen />
   
    </QueryClientProvider>
    
      
    
  );
}

export default App;
