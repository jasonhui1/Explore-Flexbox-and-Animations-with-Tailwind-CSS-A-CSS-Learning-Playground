import { useEffect, useState } from 'react';
import './index.css';
import FlexComponent from './Components/FlexComponent';
import PositionComponent from './Components/PositionComponent';
import TransitionComponent from './Components/TransitionComponent';



export default function App() {
  const [current, setCurrent] = useState(0)

  const pages = ['Flex', 'Position', 'Transition']

  return (

    <div className=''>
      <div className='flex fixed bottom-0 z-10 w-full'>
        {pages.map((name,i)=>{
          return <button className='flex-1 btn btn-info opacity-30 hover:opacity-100 text-xl capitalize' onClick={() => setCurrent(i)}>{name}</button>
        })}
      </div>
      <div className='relative'>
        <FlexComponent active={current === 0} />
        <PositionComponent active={current === 1} />
        <TransitionComponent active={current === 2} />
      </div>
    </div>
  )
}
