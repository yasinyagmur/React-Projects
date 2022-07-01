import {data} from './helper/data'
import List from "./Components/List/List";
import { useState } from 'react';

function App() {
  const[people,setPeople]=useState(data)
  return <main>
    <section>
      <div className='sectionDiv'>
      <h3>{people.length} birtdays tpday</h3>
      <List people={people}/>
      <button onClick={()=> setPeople([]) }>Clear All</button>
      </div>
    </section>
  </main>;
}

export default App;