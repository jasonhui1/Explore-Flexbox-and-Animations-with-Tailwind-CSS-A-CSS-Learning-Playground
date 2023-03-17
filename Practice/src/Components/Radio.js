import React, { useState, useEffect } from 'react'
import { overrideTailwindClasses } from 'tailwind-override'


export function Radio({ val, handleClick, active = false }) {
  const classN = 'btn capitalize ' + (active && 'btn-success')

  return (
    <>
      <input className="btn hidden capitalize " type="radio" id={val} value={val} name={val} onClick={handleClick} />
      <label className={classN} htmlFor={val}>{val}</label>
    </>
  )
}

//prepend to keep the same value different (for NthChild)
export function PropertyRadioComponents({ properties, handleClassName, prepend = '' }) {
  const elements = [];
  const [activeIndex, setActiveIndex] = useState(-1)


  useEffect(() => {
    handleClassName(properties[activeIndex])
  }, [activeIndex])


  const handleClick = (new_index) => {
    console.log('new_index', new_index)
    console.log('activeIndex', activeIndex)
    //Turn off
    if (new_index !== activeIndex) {
      handleClassName(properties[activeIndex])
      setActiveIndex(new_index)
    } else{
      reset()
    }
  }

  const reset = () => {
    handleClassName(properties[activeIndex])
    setActiveIndex(-1)
  }

  properties.forEach((property, i) => {
    elements.push(<Radio key={i} handleClick={() => handleClick(i)} val={prepend + property} active={i === activeIndex} />)
  })

  elements.push(<button className={overrideTailwindClasses('btn btn-warning ml-auto mr-6')} onClick={reset}>Reset</button>)


  return <div className='flex flex-wrap gap-4 justify-start'>{elements}</div>;
}

