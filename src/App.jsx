import { BrowserRouter as Router } from "react-router-dom" ;
import Routes from "./components/Routes" ;
import { QueryClientProvider, QueryClient } from "react-query" ;
import Header from "./components/header" ;
import "./App.css" ;

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <Header/>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Router>
  )
}

export default App ;
