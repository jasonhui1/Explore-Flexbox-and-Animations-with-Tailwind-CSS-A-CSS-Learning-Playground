import { useState, useEffect } from 'react';


export function CheckBox({ val, handleClick, checked = false }) {
  const classN = 'btn capitalize ' + (checked && 'btn-success')

  return (
    <>
      <label className={classN}>
        <input className="btn hidden capitalize" type="checkbox" value={val} name={val} onClick={handleClick} />

        {val}</label>
    </>
  )
}

export function PropertyCheckboxComponents({ properties, handleClassName, currentExample = null, prepend = '' }) {
  const [checkState, setcheckState] = useState(new Array(properties.length).fill(false))

  // useEffect(() => {
  //   reset()
  //   const intersectProperty = properties.filter(value => currentExample.includes(prepend + value));
  //   intersectProperty.forEach(property => {
  //     const index = properties.findIndex(name => name === property)
  //     handleClick(index)
  //   })

  // }, [currentExample])

  //Pretty ugly, but the code above doesnt work, I dont get why, handleClassName is supposed to be called twice - reset(remove) + add (if selected), but it seems to only get called once
  useEffect(() => {
    //If checked and the example doesnt contain it, remove it
    //If uncheck and the example contains it, add it
    const updateCheckState = checkState.map((check, i) => {
      if (currentExample.includes(prepend + properties[i])) {
        if (!check) {
          handleClassName(properties[i])

        }
        return true
      } else {
        if (check) {
          handleClassName(properties[i])

        }
        return false
      }
    })
    setcheckState(updateCheckState)

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

  const elements = [];

  properties.forEach((property, i) => {
    elements.push(<CheckBox key={i} handleClick={() => handleClick(i)} val={property} checked={checkState[i]} />)
  })

  elements.push(<button key='reset-btn' className={('btn btn-warning ml-auto mr-6')} onClick={reset}>Reset</button>)


  return <div className='flex flex-wrap gap-4'>{elements}</div>;
}

