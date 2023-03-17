import { useEffect, useState } from 'react';
import './index.css';
import FlexComponent from './Components/FlexComponent';
import PositionComponent from './Components/PositionComponent';
import TransitionComponent from './Components/TransitionComponent';



function App() {
  const [current, setCurrent] = useState(0)

  return (
    <div>
      <FlexComponent active={true}/>
      <PositionComponent active={false}/>
      <TransitionComponent active={false}/> 
    </div>
  )
}

export default App;
