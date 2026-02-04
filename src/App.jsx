import NavBar from "./Components/Layout/NavBar";
import Shoes from "./Components/Shoes/Shoes";

function App() {


  return (
    <>
     <NavBar />
     <main className="bg-gradient-to-br from-orange-900 via-purple-700 to-indigo-100">
        <Shoes />
     </main>
    </>
  )
}

export default App
