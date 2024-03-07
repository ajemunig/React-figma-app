import React from "react"
import Stores from "./components/Stores"
import Home from "./components/Home"
import ItemLists from "./components/ItemLists"
import DealsSummary from "./components/DealsSummary"
import NavBar from './Navbar'
import Header from "./Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    
    <Router> 
      <Header/>
       <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/items" element={<ItemLists />} />
          <Route path="/deals" element={<DealsSummary />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;