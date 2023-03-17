import {useState } from 'react';


export function CheckBox({ val, handleClick }) {
    const [active, setActive] = useState(false)
    const classN = 'btn capitalize ' + (active && 'btn-success')
  
    const onCheck = (handleClick) => {
      handleClick()
      setActive(!active)
    }
  
    return (
      <>
        <input className="btn hidden capitalize " type="checkbox" id={val} value={val} name={val} onClick={() => onCheck(handleClick)} />
        <label className={classN} htmlFor={val}>{val}</label>
      </>
    )
  }
  
  export function PropertyCheckboxComponents({ properties, handleClassName, prepend = '' }) {
    const elements = [];
  
  
    properties.forEach((property, i) => {
      elements.push(<CheckBox key={i} handleClick={() => handleClassName(property)} val={prepend + property} />)
    })
  
    return <div className='flex flex-wrap gap-4'>{elements}</div>;
  }
  
  