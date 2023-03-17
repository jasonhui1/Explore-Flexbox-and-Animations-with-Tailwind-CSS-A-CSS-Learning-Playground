import { useState, useEffect } from 'react';


export function CheckBox({ val, handleClick, checked = false }) {
  const classN = 'btn capitalize ' + (checked && 'btn-success')

  return (
    <>
      <label className={classN}>
        <input className="btn hidden capitalize " type="checkbox" id={val} value={val} name={val} onClick={handleClick} checked={checked} />

        {val}</label>
    </>
  )
}

export function PropertyCheckboxComponents({ properties, handleClassName, currentExample = [], prepend = '' }) {
  const elements = [];

  const [checkState, setcheckState] = useState(new Array(properties.length).fill(false))

  useEffect(() => {
    reset()
    
    const intersectProperty = properties.filter(value => currentExample.includes(prepend + value));
    intersectProperty.forEach((property) => {
      const index = properties.findIndex(name => name === property)
      handleClick(index)
    })

  }, [currentExample])

  const handleClick = (index) => {
    //Turn off
    handleClassName(properties[index])
    setcheckState(checkState => checkState.map((check, i) => (i === index) ? !check : check))
  }

  const reset = () => {
    checkState.forEach((check, i) => {
      if (check) {
        handleClassName(properties[i])
      }
    })
    setcheckState(checkState => checkState.map((_) => false))
  }


  properties.forEach((property, i) => {
    elements.push(<CheckBox key={i} handleClick={() => handleClick(i)} val={prepend + property} checked={checkState[i]} />)
  })

  elements.push(<button className={('btn btn-warning ml-auto mr-6')} onClick={reset}>Reset</button>)
  

  return <div className='flex flex-wrap gap-4'>{elements}</div>;
}

