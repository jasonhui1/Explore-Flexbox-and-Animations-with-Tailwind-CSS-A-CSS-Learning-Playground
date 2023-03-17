import React, {useState, useEffect} from 'react'
import { PropertyCheckboxComponents } from './Checkbox';
import { overrideTailwindClasses } from 'tailwind-override'
import { PropertyRadioComponents } from './Radio';


export default function FlexComponent() {

    const [number, setNumber] = useState(3)
    const [className, setClassName] = useState(['outline'])
    const [childrenClassName, setChildrenClassName] = useState([])
    const [childrenNthClassName, setChildrenNthClassName] = useState([])
    const [childrenNth, setChildrenNth] = useState(-1)

    const handleAddClick = () => {
        setNumber(number => number + 1)
    }

    const handleRemoveClick = () => {
        setNumber(number => number - 1)
    }

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
        console.log(e.target.value)
        setChildrenNth(e.target.value)
    }

    const flexProperty = ['flex', 'flex-col', 'flex-row', 'flex-col-reverse', 'flex-row-reverse', 'flex-wrap']
    const gapProperty = ['gap-4', 'gap-8']
    const alignProperty = ['justify-start', 'justify-end', 'justify-around', 'justify-evenly', 'justify-center', 'justify-between']
    const itemProperty = ['items-start', 'items-end', 'items-around', 'items-evenly', 'items-center', 'items-between']
    const otherProperty = ['h-screen']

    const flexChildrenProperty = ['flex-1', 'flex-grow', 'flex-shrink']
    const flexNthChildrenProperty = ['flex-1', 'flex-grow', 'flex-grow-0', 'flex-shrink', 'flex-shrink-0', 'flex-initial', 'self-center']


    return (
        <div className='flex'>
            <div className=' flex-1 flex-shrink-0 rounded-3xl p-3  outline-1 bg-blue-100 h-screen'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam est odio perspiciatis, laboriosam eos hic vel rerum accusamus, accusantium et blanditiis culpa! Beatae enim voluptatibus doloremque, labore assumenda ab at.
                <div className='flex flex-col gap-8 '>

                    <div className='flex '>
                        <button className='btn btn-primary  ' onClick={handleAddClick}>Add more button</button>
                        <button className='btn btn-primary gap flex-' onClick={handleRemoveClick}>Remove a button</button>
                    </div>


                    <PropertyCheckboxComponents properties={flexProperty} handleClassName={handleClassName} />
                    <hr></hr>
                    <PropertyCheckboxComponents properties={flexChildrenProperty} handleClassName={handleChildrenClassName} />

                    <div>

                        Nth: <input type={number} className='w-40' value={childrenNth} onChange={(e) => handleChildrenNth(e)} />
                        <PropertyCheckboxComponents properties={flexNthChildrenProperty} handleClassName={handleNthChildrenClassName} prepend=' ' />
                    </div>
                    <hr></hr>

                    <PropertyRadioComponents properties={alignProperty} handleClassName={handleClassName} />
                    <PropertyRadioComponents properties={itemProperty} handleClassName={handleClassName} />
                    <hr></hr>

                    <PropertyCheckboxComponents properties={otherProperty} handleClassName={handleClassName} />
                    <hr></hr>

                    
                    <PropertyRadioComponents properties={gapProperty} handleClassName={handleClassName} />
                    <hr></hr>



                </div>
            </div>


            <div className='flex-1 rounded-3xl p-3 overflow-auto outline-1 bg-yellow-100 h-screen'>
                <MyComponent number={number} className={className.join(' ')} childrenClassName={childrenClassName.join(' ')} childrenNthClassName={childrenNthClassName.join(' ')} childrenNth={childrenNth} />
                <button className='' />
            </div>

        </div>

    )

}


export function MyComponent({ number, className, childrenClassName, childrenNthClassName, childrenNth }) {
    const elements = [];
  
    const childClassName = 'btn w-40 ' + childrenClassName
    console.log('className', className)
    console.log('childrenClassName', childrenClassName)
  
    for (let i = 0; i < number; i++) {
      // const CN = childClassName + ( childrenClassName)
      let classNameNth = childClassName
  
      if (i == childrenNth) {
        classNameNth += ' bg-red-700  '
        classNameNth += childrenNthClassName
        console.log('CN', classNameNth)
      }
  
      elements.push(<button className={overrideTailwindClasses(classNameNth)} key={i}>{i}</button>);
    }
  
    return <div className={className}>{elements}</div>;
    // return <div className\='grid grid-cols-4 gap-4'>{elements}</div>;
  }
  