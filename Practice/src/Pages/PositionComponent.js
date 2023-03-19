import { useEffect, useState } from 'react';
import { overrideTailwindClasses } from 'tailwind-override'
import { PropertyRadioComponents } from './Radio';
import LeftLayout from './LeftLayout';
import RightLayout from './RightLayout';
import {
  MultipleGroupComponent,
  SingleGroupComponent,
  ExamplesComponent
} from './LayoutComponents';

export function MyComponent({ number, className, childrenClassName, childrenNthClassName, childrenNth }) {
  const elements = [];

  for (let i = 0; i < number; i++) {
    let box = <div className={overrideTailwindClasses(childrenClassName)} key={i}> {i} </div>

    if (i === childrenNth) {

      box =
        <div className={overrideTailwindClasses(childrenClassName)} key={i}>
          <div className={overrideTailwindClasses(childrenNthClassName)}> ME
          </div>

          {i}</div>
    }

    elements.push(box);
  }

  return <div className={className}>{elements}</div>;
}


export default function PositionComponent({ active = true }) {
  const [number, setNumber] = useState(20)
  const [className, setClassName] = useState(['outline', 'flex-wrap', 'gap-24', 'justify-center', 'flex'])
  const [childrenClassName, setChildrenClassName] = useState(['outline', 'text-3xl', 'w-96', 'h-96', 'mt-6'])
  const [childrenNthClassName, setChildrenNthClassName] = useState(['bg-red-700', 'text-white', 'w-48', 'h-16',])
  const [childrenNth, setChildrenNth] = useState(0)

  const [example, setExample] = useState([])

  // const handleClassName = (newName) => {
  //   const exist = className.includes(newName)
  //   if (!exist) {
  //     setClassName([...className, newName])
  //   } else {
  //     setClassName(className.filter((name) => name !== newName))
  //   }
  // }

  const handleChildrenClassName = (newName) => {
    const exist = childrenClassName.includes(newName)
    if (!exist) {
      setChildrenClassName(childrenClassName => [...childrenClassName, newName])
    } else {
      setChildrenClassName(childrenClassName => childrenClassName.filter((name) => name !== newName))
    }
  }

  const handleNthChildrenClassName = (newName) => {
    const newNameImportant = newName
    const exist = childrenNthClassName.includes(newNameImportant)
    if (!exist) {
      setChildrenNthClassName(childrenNthClassName => [...childrenNthClassName, newNameImportant])
    } else {
      setChildrenNthClassName(childrenNthClassName => childrenNthClassName.filter((name) => name !== newNameImportant))
    }
  }

  const handleChildrenNth = (e) => {
    setChildrenNth(e.target.value)
  }


  const parentPositionProperty = ['static', 'relative']
  const childPositionProperty = ['static', 'relative', 'absolute', 'fixed', 'sticky']
  const yProperty = ['top-0', 'top-16', 'bottom-0', 'bottom-16']
  const xProperty = ['left-0', 'left-16', 'right-0', 'right-16']

  const examples = []
  examples.push(['sticky', 'top-0'])
  examples.push(['relative', 'left-16', 'top-16'])
  examples.push(['parent_relative', 'absolute', 'right-16', 'bottom-16'])
  examples.push(['fixed', 'bottom-16'])

  let CLASSNAME = ['flex']
  if (!active) {
    CLASSNAME.push('hidden')
  }
  CLASSNAME = CLASSNAME.join(' ')

  return (
    <div className={CLASSNAME}>
      <LeftLayout>

        <SingleGroupComponent title='Parent'>
          <PropertyRadioComponents properties={parentPositionProperty} handleClassName={handleChildrenClassName} currentExample={example} prepend='parent_' />

        </SingleGroupComponent>

        <MultipleGroupComponent title='Nth Child:'>
          <input type={number} className='w-40' value={childrenNth} onChange={(e) => handleChildrenNth(e)} />
          <PropertyRadioComponents properties={childPositionProperty} handleClassName={handleNthChildrenClassName} currentExample={example} />
          <PropertyRadioComponents properties={yProperty} handleClassName={handleNthChildrenClassName} currentExample={example} />
          <PropertyRadioComponents properties={xProperty} handleClassName={handleNthChildrenClassName} currentExample={example} />

        </MultipleGroupComponent>

        <ExamplesComponent examples={examples} setExample={setExample} />

        <div className='h-12'></div>
      </LeftLayout>

      <RightLayout>
        <MyComponent number={number} className={className.join(' ')} childrenClassName={childrenClassName.join(' ')} childrenNthClassName={childrenNthClassName.join(' ')} childrenNth={parseInt(childrenNth)} />
      </RightLayout>

    </div>

  )
}
