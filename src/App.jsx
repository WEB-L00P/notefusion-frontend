import Navbar from "./components/Navbar";
import Note from "./components/Note";
import "./App.css";
function App() {
  return (
    <>
      <div className="px-4 bg-[#272829]">
        <Navbar />
        <hr />
        <div className="notes py-5 grid grid-cols-2 gap-3 row-auto">
          <Note
            title="Hello There"
            body="this is a dummy data where I am trying to add a random string"
          />
          <Note
            title="Hello There"
            body="this is a dummy data where I am trying to add a random string this is a dummy data where I am trying to add a random string this is a dummy data where I am trying to add a random string"
          />
          <Note
            title="Hello There"
            body="this is a dummy data where I am trying to add a random string this is a dummy data where I am trying to add a random string this is a dummy data where I am trying to add a random string hdh 
            d as
            d a
            sd
            a d
            asd
            
            "
          />
        </div>
      </div>
    </>
  );
}

export default App;
