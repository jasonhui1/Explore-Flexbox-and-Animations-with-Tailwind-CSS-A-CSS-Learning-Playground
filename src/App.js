import { useEffect, useState } from 'react';
import './index.css';
import FlexComponent from './Pages/FlexComponent';
import PositionComponent from './Pages/PositionComponent';
import TransitionComponent from './Pages/TransitionComponent';
import AnimationComponent from './Pages/AnimationComponent';
import ClipAnimationComponent from './Pages/ClipAnimationComponent';
import BackgroundComponent from './Pages/BackgroundComponent';

import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [current, setCurrent] = useState(0)


  return (
    <>
      <Routes>

        <Route path='/' element={<div className=''>
          <SideBar setCurrent={setCurrent} />
          <div className='relative space-x-0'>
            <FlexComponent active={current === 0} />
            <PositionComponent active={current === 1} />
            <TransitionComponent active={current === 2} />
            <AnimationComponent active={current === 3} />
            <ClipAnimationComponent active={current === 4} />
            <BackgroundComponent active={current === 5} />
          </div>
        </div>} />
      </Routes>


    </>
  )
}


function SideBar({setCurrent}) {
  const pages = ['Flex', 'Position', 'Transition', 'Animation', 'Clip animation', 'Background']

  return (
    <div className='flex fixed bottom-0 z-10 w-full'>
      {pages.map((name, i) => {
        return <button className='flex-1 btn btn-info opacity-30 hover:opacity-100 text-xl capitalize' onClick={() => setCurrent(i)}>{name}</button>
      })}
    </div>)
}