import { useEffect, useState } from 'react';
import { overrideTailwindClasses } from 'tailwind-override'
import './index.css';
import FlexComponent from './Components/FlexComponent';
import { PropertyCheckboxComponents } from './Components/Checkbox';
import { PropertyRadioComponents } from './Components/Radio';
import PositionComponent from './Components/PositionComponent';

export function MyComponent({ number, className, childrenClassName, childrenNthClassName, childrenNth }) {
  const elements = [];

  console.log('childrenNthClassName', childrenNthClassName)
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
    }

    elements.push(box);
  }

  return <div className={className}>{elements}</div>;
}


function App() {
  // const [number, setNumber] = useState(20)
  // const [className, setClassName] = useState(['outline', 'flex-wrap', 'gap-24', 'justify-center', 'flex'])
  // const [childrenClassName, setChildrenClassName] = useState(['outline', 'text-3xl', 'w-96', 'h-96', 'mt-6'])
  // const [childrenNthClassName, setChildrenNthClassName] = useState(['bg-red-700', 'text-white', 'w-48', 'h-16',])
  // const [childrenNth, setChildrenNth] = useState(0)

  // const [example, setExample] = useState([])

  // const handleClassName = (newName) => {
  //   const exist = className.includes(newName)
  //   if (!exist) {
  //     setClassName([...className, newName])
  //   } else {
  //     setClassName(className.filter((name) => name !== newName))
  //   }
  // }

  // const handleChildrenClassName = (newName) => {
  //   const exist = childrenClassName.includes(newName)
  //   if (!exist) {
  //     setChildrenClassName([...childrenClassName, newName])
  //   } else {
  //     setChildrenClassName(childrenClassName.filter((name) => name !== newName))
  //   }
  // }

  // const handleNthChildrenClassName = (newName) => {
  //   const newNameImportant = newName
  //   const exist = childrenNthClassName.includes(newNameImportant)
  //   if (!exist) {
  //     setChildrenNthClassName(childrenNthClassName => [...childrenNthClassName, newNameImportant])
  //   } else {
  //     setChildrenNthClassName(childrenNthClassName => childrenNthClassName.filter((name) => name !== newNameImportant))
  //   }
  // }

  // const handleChildrenNth = (e) => {
  //   setChildrenNth(e.target.value)
  // }


  // const parentPositionProperty = ['static', 'relative']
  // const childPositionProperty = ['static', 'relative', 'absolute', 'fixed', 'sticky']
  // const yProperty = ['top-0', 'top-16', 'bottom-0', 'bottom-16']
  // const xProperty = ['left-0', 'left-16', 'right-0', 'right-16']

  // const examples = []

  // examples.push(['fixed', 'bottom-16'])
  // examples.push(['sticky', 'top-0'])
  // examples.push(['relative', 'left-16'])
  // examples.push(['parent_relative', 'absolute', 'bottom-16', 'right-16'])



  return (
    <PositionComponent />

  )
}

export default App;
