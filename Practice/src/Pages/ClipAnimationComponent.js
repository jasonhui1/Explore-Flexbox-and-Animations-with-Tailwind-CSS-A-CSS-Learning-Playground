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

            <div className={className} style={{ 'backgroundImage': 'url(https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
            </div>
            {/* <img className={className} src='https://images.unsplash.com/photo-1678727467533-832025188145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img> */}
        </div>
    );
}

export default function ClipAnimationComponent({ active = true }) {
    // const [className, setClassName] = useState(['bg-white', 'w-96', 'h-96', 'border-solid', 'border-8', 'border-black', 'overflow-hidden'])
    const [layoutClassName, setLayoutClassName] = useState(['w-96', 'h-96',])
    const [className, setClassName] = useState(['h-full', 'w-full',  'bg-cover'])
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
    const animation = ['animate-wiggle', 'animate-clip']
    const animation_in = ['fade-in', 'spin-in-45', 'zoom-in-150', 'slide-in-from-bottom',]
    const animation_inout = ['animate-in']

    const durationProperty = ['duration-500', 'duration-1000',]
    const transform_origin = ['origin-bottom-left', 'origin-center', 'origin-top-right']


    const layoutOptions = ['rounded-full', 'w-full', 'h-full', 'overflow-hidden']
    const examples = []

    examples.push(['duration-1000', 'fade-in', 'zoom-in-150', 'animate-in', 'rounded-full', 'overflow-hidden' ]) //Fade zoom in
    examples.push(['animate-wiggle', 'rounded-full', 'overflow-hidden' ]) //Wiggle animation
    examples.push(['duration-1000', 'fade-in', 'slide-in-from-bottom', 'animate-in', 'rounded-full', 'overflow-hidden' ]) // Fill aniation
    examples.push(['duration-1000', 'fade-in', 'spin-in-45', 'origin-center', 'animate-in', 'w-full', 'overflow-hidden' ]) //Come from 2 direction
    examples.push(['duration-1000', 'fade-in', 'spin-in-45', 'origin-bottom-left', 'animate-in', 'w-full', 'overflow-hidden' ]) //swirl like

    let CLASSNAME = ['flex', 'overflow-auto']
    if (!active) {
        CLASSNAME.push('none')
    }
    CLASSNAME = CLASSNAME.join(' ')

    return (
        <div className={CLASSNAME}>
            <LeftLayout>

                <SingleGroupComponent title='Click the in/out below after chosen (need to reset everytime)'>
                    <PropertyCheckboxComponents properties={animation} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>

                <div>
                    <h1> Below options needs plugin tailwindcss-animate</h1>
                    <hr></hr>
                </div>

                <SingleGroupComponent title='Click the in/out below after chosen (need to reset everytime)'>
                    <PropertyCheckboxComponents properties={animation_in} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>

                <SingleGroupComponent title='animation_inout'>
                    <PropertyCheckboxComponents properties={animation_inout} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>

                <SingleGroupComponent title='Click the in/out below after chosen (need to reset everytime)'>
                    <PropertyRadioComponents properties={durationProperty} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>

                <SingleGroupComponent title='transform_origin'>
                    <PropertyRadioComponents properties={transform_origin} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>

                <ExamplesComponent examples={examples} setExample={setExample} />
                <div className='h-12'></div>


            </LeftLayout>

            <RightLayout>
                <SingleGroupComponent title='layoutOptions'>
                    <PropertyCheckboxComponents properties={layoutOptions} handleClassName={handleLayoutClassName} currentExample={example} />

                </SingleGroupComponent>


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
