import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import {StreamersList} from "./pages/StreamersList.jsx";
import StreamerDetails from "./pages/StreamerDetails.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";



function App() {

    const client = new QueryClient({ });


  return (
    <div className="container w-full h-screen  ">
        <QueryClientProvider client={client} >
                <Router>
                    <Routes>
                       <Route path="/" element={<StreamersList/>} />
                        <Route path="/:id" element={<StreamerDetails />}/>
                    </Routes>
                </Router>
        </QueryClientProvider>
    </div>
  )
}

export default App
