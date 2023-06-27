import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import {StreamersList} from "./pages/StreamersList.jsx";
import {StreamerDetails} from "./pages/StreamerDetails.jsx";
import {createContext} from "react";

export const AppContext = createContext();


function App() {



  return (
    <div className="App">
        <AppContext.Provider value={{}}>
            <Router>
                <Routes>
                   <Route path="/" element={<StreamersList/>}/>
                    <Route path="/:id" element={<StreamerDetails />}/>
                </Routes>
            </Router>
        </AppContext.Provider>
    </div>
  )
}

export default App
