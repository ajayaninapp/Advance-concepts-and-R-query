import "./App.css";
//npx json-server --watch data/db.json --port 8000
import { QueryClientProvider, QueryClient } from "react-query";
import RouterContainer from "./Routes/RouterContainer";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import AuthDatahandler from "./views/AuthDataHandler/AuthDatahandler";
import LoadingHandler from "./Components/Loaders/LoadingHandler";
const queryclient = new QueryClient();
Amplify.configure(awsmobile);
function App() {
  return (
    <LoadingHandler>
      <AuthDatahandler>
        <QueryClientProvider client={queryclient}>
          <RouterContainer />
        </QueryClientProvider>
      </AuthDatahandler>
    </LoadingHandler>
  );
}

export default App;
