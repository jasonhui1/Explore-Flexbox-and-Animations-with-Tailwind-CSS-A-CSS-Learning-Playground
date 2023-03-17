import { useEffect, useState } from 'react';
import { overrideTailwindClasses } from 'tailwind-override'
import './index.css';
import FlexComponent from './Components/FlexComponent';
import { PropertyCheckboxComponents } from './Components/Checkbox';
import { PropertyRadioComponents } from './Components/Radio';

export function MyComponent({ number, className, childrenClassName, childrenNthClassName, childrenNth }) {
  const elements = [];

  console.log('className', className)
  console.log('childrenClassName', childrenClassName)

  for (let i = 0; i < number; i++) {
    // const CN = childClassName + ( childrenClassName)
    // let box = <div className={overrideTailwindClasses(childrenClassName)} key={i}>{i}</div>
    let box = <div className={overrideTailwindClasses(childrenClassName)} key={i}> {i} </div>

    if (i == childrenNth) {

      box =
        <div className={overrideTailwindClasses(childrenClassName)} key={i}>{i}
          <div className={overrideTailwindClasses(childrenNthClassName)}> ME
          </div>

        </div>

      console.log(childrenNthClassName)
    }

    elements.push(box);
  }

  return <div className={className}>{elements}</div>;
}


function App() {
  const [number, setNumber] = useState(20)
  const [className, setClassName] = useState(['outline', 'flex-wrap', 'gap-24', 'justify-center', 'flex'])
  const [childrenClassName, setChildrenClassName] = useState(['outline', 'text-3xl', 'w-96', 'h-96', 'mt-6'])
  const [childrenNthClassName, setChildrenNthClassName] = useState(['bg-red-700', 'text-white', 'w-48', 'h-16',])
  const [childrenNth, setChildrenNth] = useState(0)

  const handleClassName = (newName) => {
    const exist = className.includes(newName)
    if (!exist) {
      setClassName([...className, newName])
    } else {
      setClassName(className.filter((name) => name !== newName))
    }
  }

  const handleChildrenClassName = (newName) => {
    const exist = childrenClassName.includes(newName)
    if (!exist) {
      setChildrenClassName([...childrenClassName, newName])
    } else {
      setChildrenClassName(childrenClassName.filter((name) => name !== newName))
    }
  }

  const handleNthChildrenClassName = (newName) => {
    const newNameImportant = newName
    const exist = childrenNthClassName.includes(newNameImportant)
    if (!exist) {
      setChildrenNthClassName([...childrenNthClassName, newNameImportant])
    } else {
      setChildrenNthClassName(childrenNthClassName.filter((name) => name !== newNameImportant))
    }
  }

  const handleChildrenNth = (e) => {
    setChildrenNth(e.target.value)
  }


  const parentPositionProperty = ['static', 'relative']
  const childPositionProperty = ['static', 'relative', 'absolute', 'fixed', 'sticky']
  const topProperty = ['top-0', 'top-16']
  const bottomProperty = ['bottom-0', 'bottom-16']
  const leftProperty = ['left-0', 'left-16']
  const rightProperty = ['right-0', 'right-16']

  return (
    <div className='flex overflow-auto'>
      <div className=' flex-1 h-flex-shrink-0 overflow-auto top-rounded-3xl p-3 h- outline-1 bg-blue-100 h-screen sticky top-0  '>
        <div className='flex flex-col gap-8 mt-6'>


          <div>
            <h3 className='text-3xl font-bold text-gray-500'>Parent</h3>
            <PropertyRadioComponents properties={parentPositionProperty} handleClassName={handleNthChildrenClassName} />

          </div>

          <hr></hr>
          <div className='flex flex-col  gap-4'>
            <h3 className='text-3xl font-bold text-gray-500'>Nth Child: </h3> <input type={number} className='w-40' value={childrenNth} onChange={(e) => handleChildrenNth(e)} />
            <PropertyRadioComponents properties={childPositionProperty} handleClassName={handleNthChildrenClassName} prepend=' ' />
            <PropertyRadioComponents properties={topProperty} handleClassName={handleNthChildrenClassName} />
            <PropertyRadioComponents properties={leftProperty} handleClassName={handleNthChildrenClassName} />
            <PropertyRadioComponents properties={bottomProperty} handleClassName={handleNthChildrenClassName} />
            <PropertyRadioComponents properties={rightProperty} handleClassName={handleNthChildrenClassName} />
          </div>



        </div>
      </div>


      <div className='flex-1 rounded-3xl overflow-auto  p-3 outline-1 bg-yellow-100 h-screen'>
        <MyComponent number={number} className={className.join(' ')} childrenClassName={childrenClassName.join(' ')} childrenNthClassName={childrenNthClassName.join(' ')} childrenNth={childrenNth} />
      </div>

    </div>

  )
}

export default App;
