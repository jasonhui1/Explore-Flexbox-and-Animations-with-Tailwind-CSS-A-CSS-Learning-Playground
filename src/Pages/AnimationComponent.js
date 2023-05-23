import { useState } from 'react';
import { PropertyCheckboxComponents } from '../Components/Checkbox';
import LeftLayout from '../Components/LeftLayout';
import { PropertyRadioComponents } from '../Components/Radio';
import RightLayout from '../Components/RightLayout';
import {
    ExamplesComponent,
    SingleGroupComponent,
    MultipleGroupComponent
} from '../Components/LayoutComponents';

export function MyComponent({ className }) {
  console.log('className', className)
  return <div className={className}>Button</div>;
}

export default function AnimationComponent({ active = true }) {
  const [className, setClassName] = useState(['bg-blue-500', 'text-3xl', 'w-96', 'h-96', 'hover:bg-blue-400', 'border-solid', 'border-8', 'border-black', 'flex', 'justify-center', 'items-center', 'text-white'])
  const [example, setExample] = useState([])

  const handleClassName = (newName) => {
    const exist = className.includes(newName)
    if (!exist) {
      setClassName(className => [...className, newName])
    } else {
      setClassName(className => className.filter((name) => name !== newName))
    }
  }

  const animationProperty = ['animate-pulse', 'animate-spin', 'animate-ping', 'animate-bounce',]
  const animation_in = ['fade-in', 'spin-in-45', 'zoom-in-150', 'slide-in-from-top']
  const animation_out = ['fade-out', 'spin-out-45', 'zoom-out-150', 'slide-out-to-top']
  const animation_inout = ['animate-in', 'animate-out',]
  const fill_mode = ['fill-mode-none', 'fill-mode-forwards', 'fill-mode-backwards', 'fill-mode-both']
  const repeat = ['repeat-0', 'repeat-1', 'repeat-infinite']

  const durationProperty = ['duration-500', 'duration-1000',]
  const examples = []
  examples.push()

  examples.push({properties:['duration-1000', 'animate-pulse',], description:'basic example 1 (pulse)'})
  examples.push({properties:['duration-1000', 'fade-in', 'animate-in'], description:'basic example 2 (fades in), uses plugin'})
  
  examples.push({properties:['duration-1000', 'animate-ping', 'repeat-1', 'fill-mode-forwards'], description:'basic example 3 - repeat once and hold its style at the last keyframe'})
  examples.push({properties:['duration-1000', 'fade-in', 'spin-in-45', 'animate-in', 'fill-mode-forwards'], description:'combine animations'})
  examples.push({properties:['duration-1000', 'spin-out-45', 'animate-out', 'fade-out', 'zoom-out-150', 'slide-out-to-top', 'fill-mode-forwards'], description:'combine animations - animate out'})
  

  let CLASSNAME = ['flex', 'overflow-auto']
  if (!active) {
    CLASSNAME.push('hidden')
  }
  CLASSNAME = CLASSNAME.join(' ')

  return (
    <div className={CLASSNAME}>
      <LeftLayout>

        <SingleGroupComponent title='Animation'>
          <PropertyRadioComponents properties={animationProperty} handleClassName={handleClassName} currentExample={example} />
        </SingleGroupComponent>

        <div>
          <h1> Below options needs plugin tailwindcss-animate</h1>
          <hr></hr>
        </div>

        <SingleGroupComponent title='Repeat'>
          <PropertyRadioComponents properties={repeat} handleClassName={handleClassName} currentExample={example} />
        </SingleGroupComponent>

        <MultipleGroupComponent title='Animation in/out'>

          <PropertyCheckboxComponents properties={animation_in} handleClassName={handleClassName} currentExample={example} />
          <PropertyCheckboxComponents properties={animation_out} handleClassName={handleClassName} currentExample={example} />
        </MultipleGroupComponent>


        <SingleGroupComponent title='(Click the in/out below after chosen (need to reset everytime))'>
          <PropertyCheckboxComponents properties={animation_inout} handleClassName={handleClassName} currentExample={example} />
        </SingleGroupComponent>


        <SingleGroupComponent title='Fill mode (mode at start and end frame)'>
          <PropertyRadioComponents properties={fill_mode} handleClassName={handleClassName} currentExample={example} />
        </SingleGroupComponent>

        <SingleGroupComponent title='Duration'>
          <PropertyRadioComponents properties={durationProperty} handleClassName={handleClassName} currentExample={example} />
        </SingleGroupComponent>


        <ExamplesComponent examples={examples} setExample={setExample} />

        {/* Have some space at the bottom to avoid being covered by the navigation bar  */}
        <div className='h-12'></div>
      </LeftLayout>


      <RightLayout>
        <div className='flex justify-center items-center h-screen '>
          <MyComponent className={className.join(' ')} />
        </div>

        <div className=''>
          <p>{className.join(' ')}</p>
        </div>
        <div className='h-12'></div>

      </RightLayout>

    </div>
  )
}
