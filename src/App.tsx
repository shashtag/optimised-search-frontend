import { useContext } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Pagination from "./Components/Page";
import { UIContext } from "./Context/UIContext";

function App() {
  const { state } = useContext(UIContext);
  return (
    <>
      <Navbar />
      <Cards />
      <div className=' px-4'>{state.data ? <Pagination /> : null}</div>
    </>
  );
}

export default App;
