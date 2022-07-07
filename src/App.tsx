import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Pagination from "./Components/Pagination";

function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <div className=' px-4'>
        <Pagination />
      </div>
    </>
  );
}

export default App;
