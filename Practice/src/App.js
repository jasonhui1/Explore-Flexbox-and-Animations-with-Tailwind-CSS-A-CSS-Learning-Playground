import { useEffect, useState } from 'react';
import './index.css';
import FlexComponent from './Components/FlexComponent';
import PositionComponent from './Components/PositionComponent';
import TransitionComponent from './Components/TransitionComponent';
import AnimationComponent from './Components/AnimationComponent';
import ClipAnimationComponent from './Components/ClipAnimationComponent';
import BackgroundComponent from './Components/BackgroundComponent';



export default function App() {
  const [current, setCurrent] = useState(4)

  const pages = ['Flex', 'Position', 'Transition', 'Animation', 'Clip animation', 'Background']

  return (

    <div className=''>
      <div className='flex fixed bottom-0 z-10 w-full'>
        {pages.map((name,i)=>{
          return <button className='flex-1 btn btn-info opacity-30 hover:opacity-100 text-xl capitalize' onClick={() => setCurrent(i)}>{name}</button>
        })}
      </div>
      <div className='relative space-x-0'>
        <FlexComponent active={current === 0} />
        <PositionComponent active={current === 1} />
        <TransitionComponent active={current === 2} />
        <AnimationComponent active={current === 3} />
        <ClipAnimationComponent active={current === 4} />
        <BackgroundComponent active={current===5}/>
      </div>
    </div>
  )
}
