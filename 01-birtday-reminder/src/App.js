import { data } from "./helper/data";
import List from "./Components/List/List";
import { useState } from "react";
import './App.css'

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section>
        
          <h3>{people.length} birtdays tpday</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        
      </section>
    </main>
  );
}

export default App;
