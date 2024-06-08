import "./App.css";
import TableData from "./Conponents/TableData";
import Navbar from "./Conponents/Navbar";
import Heading from "./Conponents/Heading";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");
  function handleOnChange(e) {
    setSearchInput(e.target.value);
  }
  return (
    <div className="App">
      <Navbar handleOnChange={handleOnChange} />
      <Heading />
      <TableData searchInput={searchInput} />
    </div>
  );
}

export default App;
