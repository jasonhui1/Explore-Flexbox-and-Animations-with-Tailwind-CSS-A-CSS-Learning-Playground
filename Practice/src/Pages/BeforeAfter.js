import React from 'react'
import { useState } from 'react';
import LeftLayout from '../Components/LeftLayout';
import { SingleGroupComponent, ExamplesComponent } from '../Components/LayoutComponents';
import { PropertyCheckboxComponents } from '../Components/Checkbox';
import { PropertyRadioComponents } from '../Components/Radio';
import RightLayout from '../Components/RightLayout';

export function MyComponent({ layoutClassName, className }) {
    console.log('className', className)
    return (
        <div className={layoutClassName}>
            <div className={className} >
                <img className={'w-full'} src='https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
            </div>
            {/* <h1 className={className} >TITLE</h1> */}

            {/* <div className={className} style={{ 'background-image': 'url(https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
            </div> */}
        </div>
    );
}



export default function BeforeAfter({ active = true }) {
    // const [className, setClassName] = useState(['bg-white', 'w-96', 'h-96', 'border-solid', 'border-8', 'border-black', 'overflow-hidden'])
    const [layoutClassName, setLayoutClassName] = useState([])
    const [className, setClassName] = useState(['inline-block', 'relative', `before:content-[' ']`, 'before:bg-red-200', 'before:absolute', 'before:inset-4', 'flex', ])
    // const [className, setClassName] = useState(['h-full', 'w-full',  'bg-cover'])
    const [example, setExample] = useState([])

    const handleLayoutClassName = (newName) => {
        const exist = layoutClassName.includes(newName)
        if (!exist) {
            setLayoutClassName(layoutClassName => [...layoutClassName, newName])
        } else {
            setLayoutClassName(layoutClassName => layoutClassName.filter((name) => name !== newName))
        }
    }

    const handleClassName = (newName) => {
        const exist = className.includes(newName)
        if (!exist) {
            setClassName(className => [...className, newName])
        } else {
            setClassName(className => className.filter((name) => name !== newName))
        }
    }
    // const animation = ['animate-wiggle', `before:content-['Hello_World']` , `after:content-['VHello_World']`]

    const before = ['before:block', ,]
    // const before = [`before:content-[' ']`, 'before:bg-red-200', 'before:block', ,]
    const before_wh = ['before:h-full', 'before:w-full']
    // const before_wh = ['before:h-48', 'before:w-48']
    const before_position = ['before:inset-4']
    // const before_position = ['before:absolute', 'before:inset-4']

    const examples = []

    examples.push(['duration-1000', 'fade-in', 'zoom-in-150', 'animate-in', 'rounded-full', 'overflow-hidden']) //Fade zoom in

    let CLASSNAME = ['flex', 'overflow-auto']
    if (!active) {
        CLASSNAME.push('hidden')
    }
    CLASSNAME = CLASSNAME.join(' ')

    return (
        <div className={CLASSNAME}>
            <LeftLayout>

                <SingleGroupComponent title='Before'>
                    <PropertyCheckboxComponents properties={before} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>
                <SingleGroupComponent title='before_wh'>
                    <PropertyCheckboxComponents properties={before_wh} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>
                <SingleGroupComponent title='before_position'>
                    <PropertyCheckboxComponents properties={before_position} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>



                <ExamplesComponent examples={examples} setExample={setExample} />
                <div className='h-12'></div>


            </LeftLayout>

            <RightLayout>
                {/* <SingleGroupComponent title='layoutOptions'>
                    <PropertyCheckboxComponents properties={layoutOptions} handleClassName={handleLayoutClassName} currentExample={example} />

                </SingleGroupComponent> */}


                <div className='flex justify-center items-center h-screen'>
                    <MyComponent layoutClassName={layoutClassName.join(' ')} className={className.join(' ')} />
                </div>

                <div className=''>
                    <p>{className.join(' ')}</p>
                </div>
                <div className='h-12'></div>


            </RightLayout>

        </div>
    )
}
