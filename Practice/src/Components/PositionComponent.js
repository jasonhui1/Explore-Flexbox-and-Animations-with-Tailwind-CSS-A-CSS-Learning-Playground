import { useEffect, useState } from 'react';
import { overrideTailwindClasses } from 'tailwind-override'
import { PropertyRadioComponents } from './Radio';

export function MyComponent({ number, className, childrenClassName, childrenNthClassName, childrenNth }) {
  const elements = [];

  console.log('childrenNthClassName', childrenNthClassName)
  console.log('childrenClassName', childrenClassName)

  for (let i = 0; i < number; i++) {
    // const CN = childClassName + ( childrenClassName)
    // let box = <div className={overrideTailwindClasses(childrenClassName)} key={i}>{i}</div>
    let box = <div className={overrideTailwindClasses(childrenClassName)} key={i}> {i} </div>

    if (i === childrenNth) {

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


export default function PositionComponent() {
  const [number, setNumber] = useState(20)
  const [className, setClassName] = useState(['outline', 'flex-wrap', 'gap-24', 'justify-center', 'flex'])
  const [childrenClassName, setChildrenClassName] = useState(['outline', 'text-3xl', 'w-96', 'h-96', 'mt-6'])
  const [childrenNthClassName, setChildrenNthClassName] = useState(['bg-red-700', 'text-white', 'w-48', 'h-16',])
  const [childrenNth, setChildrenNth] = useState(0)

  const [example, setExample] = useState([])

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
  examples.push(['relative', 'left-16'])
  examples.push(['parent_relative', 'absolute', 'bottom-16', 'right-16'])
  examples.push(['fixed', 'bottom-16'])



  return (
    <div className='flex overflow-auto'>
      <div className=' flex-1 flex-shrink-0 overflow-auto top-rounded-3xl p-3 h- outline-1 bg-blue-100 h-screen sticky top-0  '>
        <div className='flex flex-col gap-8 mt-6'>


          <div>
            <h3 className='text-3xl font-bold text-gray-500'>Parent</h3>
            <PropertyRadioComponents properties={parentPositionProperty} handleClassName={handleChildrenClassName} currentExample={example} prepend='parent_'  />

          </div>

          <hr></hr>
          <div className='flex flex-col  gap-4'>
            <h3 className='text-3xl font-bold text-gray-500'>Nth Child: </h3> <input type={number} className='w-40' value={childrenNth} onChange={(e) => handleChildrenNth(e)} currentExample={example} />
            <PropertyRadioComponents properties={childPositionProperty} handleClassName={handleNthChildrenClassName} currentExample={example} />
            <PropertyRadioComponents properties={yProperty} handleClassName={handleNthChildrenClassName} currentExample={example} />
            <PropertyRadioComponents properties={xProperty} handleClassName={handleNthChildrenClassName} currentExample={example} />
          </div>

          <div className='flex flex-col gap-2'>
            {examples.map((example) => {

              return <button className='btn capitalize' onClick={() => setExample(example)}> Example: {example.join(' ,')} </button>
            })}
          </div>



        </div>
      </div>


      <div className='flex-1 rounded-3xl overflow-auto  p-3 outline-1 bg-yellow-100 h-screen'>
        <MyComponent number={number} className={className.join(' ')} childrenClassName={childrenClassName.join(' ')} childrenNthClassName={childrenNthClassName.join(' ')} childrenNth={parseInt(childrenNth)} />
      </div>

    </div>

  )
}
