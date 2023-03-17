import React, { useState, useEffect } from 'react'
import { PropertyCheckboxComponents } from './Checkbox';
import { overrideTailwindClasses } from 'tailwind-override'
import { PropertyRadioComponents } from './Radio';
import LeftLayout from './LeftLayout';
import RightLayout from './RightLayout';


export default function FlexComponent({ active = true }) {
    const [number, setNumber] = useState(10)
    const [className, setClassName] = useState(['outline'])
    const [childrenClassName, setChildrenClassName] = useState([])
    const [childrenNthClassName, setChildrenNthClassName] = useState([])
    const [childrenNth, setChildrenNth] = useState(2)
    const [example, setExample] = useState([])

    const handleAddClick = () => {
        setNumber(number => number + 1)
    }

    const handleRemoveClick = () => {
        setNumber(number => number - 1)
    }

    const handleClassName = (newName) => {
        if (newName !== undefined) {
            const exist = className.includes(newName)
            if (!exist) {
                setClassName(className => [...className, newName])
            } else {
                setClassName(className => className.filter((name) => name !== newName))
            }
        }
    }

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
        console.log(e.target.value)
        setChildrenNth(e.target.value)
    }

    const flexProperty = ['flex', 'flex-wrap']
    const flexDirection = ['flex-col', 'flex-row', 'flex-col-reverse', 'flex-row-reverse']
    const gapProperty = ['gap-4', 'gap-8']
    const alignProperty = ['justify-start', 'justify-end', 'justify-around', 'justify-evenly', 'justify-center', 'justify-between']
    const itemProperty = ['items-start', 'items-end', 'items-around', 'items-evenly', 'items-center', 'items-between']
    const otherProperty = ['h-screen']

    const flexChildrenProperty = ['flex-1', 'flex-grow', 'flex-shrink']
    const flexNthChildrenProperty = ['flex-1', 'flex-grow', 'flex-grow-0', 'flex-shrink', 'flex-shrink-0', 'flex-initial', 'self-center']

    const examples = []
    examples.push(['flex', 'flex-wrap', 'gap-8'])
    examples.push(['flex', 'flex-col', 'flex-wrap', 'gap-8', 'justify-center', 'h-screen', 'items-center'])
    examples.push(['flex', 'flex-shrink'])
    examples.push(['flex', 'flex-col', 'flex-grow', 'h-screen'])
    examples.push(['flex', 'flex-col', 'Nth_flex-grow', 'Nth_self-center', 'h-screen'])


    let CLASSNAME = ['flex']
    if (!active) {
        CLASSNAME.push('hidden')
    }
    CLASSNAME = CLASSNAME.join(' ')

    return (
        <div className={CLASSNAME}>
            <LeftLayout>

                <div className='flex flex-col gap-2'>
                    <div className='flex self-end gap-4 '>
                        <button className='btn btn-primary  ' onClick={handleAddClick}>Add more button</button>
                        <button className='btn btn-primary gap flex-' onClick={handleRemoveClick}>Remove a button</button>
                    </div>

                    <h3>Enable flex and Flex Direction</h3>
                    <PropertyCheckboxComponents properties={flexProperty} handleClassName={handleClassName} currentExample={example} />
                    <PropertyRadioComponents properties={flexDirection} handleClassName={handleClassName} currentExample={example} />
                </div>
                <hr></hr>

                <div>
                    <PropertyCheckboxComponents properties={flexChildrenProperty} handleClassName={handleChildrenClassName} currentExample={example} />
                </div>

                <div>
                    Nth: <input type={number} className='w-40' value={childrenNth} onChange={(e) => handleChildrenNth(e)} />
                    <PropertyCheckboxComponents properties={flexNthChildrenProperty} handleClassName={handleNthChildrenClassName} currentExample={example} prepend='Nth_' />
                </div>
                <hr></hr>

                <div className='flex flex-col gap-2'>
                    <h3>Alignment</h3>
                    <PropertyRadioComponents properties={alignProperty} handleClassName={handleClassName} currentExample={example} />
                    <PropertyRadioComponents properties={itemProperty} handleClassName={handleClassName} currentExample={example} />
                </div>
                <hr></hr>


                <div className='flex flex-col gap-2'>
                    <h3>Full Viewport Height/ Gap</h3>
                    <PropertyRadioComponents properties={otherProperty} handleClassName={handleClassName} currentExample={example} />
                    <PropertyRadioComponents properties={gapProperty} handleClassName={handleClassName} currentExample={example} />
                </div>

                <hr></hr>
                <div className='flex flex-col gap-2'>
                    {examples.map((example, i) => {
                        return <button key={i} className='btn capitalize' onClick={() => setExample(example)}> Example: {example.join(' ,')} </button>
                    })}
                </div>


            </LeftLayout>


            <RightLayout>
                <MyComponent number={number} className={className.join(' ')} childrenClassName={childrenClassName.join(' ')} childrenNthClassName={childrenNthClassName.join(' ')} childrenNth={childrenNth} />
            </RightLayout>

        </div>

    )

}


export function MyComponent({ number, className, childrenClassName, childrenNthClassName, childrenNth }) {
    const elements = [];

    const childClassName = 'btn w-40 ' + childrenClassName
    console.log('className', className)
    console.log('childrenClassName', childrenClassName)
    console.log('childrenNthClassName', childrenNthClassName)

    for (let i = 0; i < number; i++) {
        // const CN = childClassName + ( childrenClassName)
        let classNameNth = childClassName

        if (i == childrenNth) {
            classNameNth += ' bg-red-700  '
            classNameNth += childrenNthClassName
        }

        elements.push(<button className={overrideTailwindClasses(classNameNth)} key={i}>{i}</button>);
    }

    return <div className={className}>{elements}</div>;
    // return <div className\='grid grid-cols-4 gap-4'>{elements}</div>;
}
