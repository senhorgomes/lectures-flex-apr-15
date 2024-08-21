import './App.css';
import ClassBasedComponent from './components/ClassBasedComponent';
import ClassCounter from './components/ClassCounter';
import ClassFetch from './components/ClassFetch';
import Counter from './components/Counter';
import Fetch from './components/Fetch';
import Title from './components/Title';
import { useState } from 'react';
function App() {
  const [renderComponent, setRenderComponent] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        {/* <Fetch/> */}
        {/* <ClassBasedComponent/> */}
        {/* <Title title={"Hello World"} /> */}
        {/* <Title title={"I'm learning class based components"} /> */}
        {renderComponent && <ClassCounter />}
        <button onClick={()=> setRenderComponent(false)}>Delete component</button>
        <ClassFetch/>
      </header>
    </div>
  );
}

export default App;
