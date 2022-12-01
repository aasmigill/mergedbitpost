import React, { useState } from "react";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../assets/home.css";
//import  // stles sheet daalni 

// delete ko tip karna 

function App() {
//   return (
//     <>
//       <Particle params={particlesConfig} className="App-particles__container" />
//       <div className="App">
//         <div className="App-text">
//           <h1 className="App-text__title">BitPost</h1>
//           <h2 className="App-text__body">
//             This is the screen reserved for sha4ring and engaging with other posts based on Crypto-Exchanges
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function tipNode(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
    <Particle params={particlesConfig} className="App-particles__container" />
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onTip={tipNode}
          />
        );
      })}
      <Footer />
    </div>
    </>
  );
}

export default App;
