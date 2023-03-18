import { useState } from 'react';
import { PropertyCheckboxComponents } from './Checkbox';
import LeftLayout from './LeftLayout';
import { PropertyRadioComponents } from './Radio';
import RightLayout from './RightLayout';

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
  const animation_in = ['fade-in', 'spin-in-45', 'zoom-in-150', 'slide-in-to-top']
  const animation_out = ['fade-out', 'spin-out-45', 'zoom-out-150', 'slide-out-to-top']
  const animation_inout = ['animate-in', 'animate-out',]
  const fill_mode = ['fill-mode-none', 'fill-mode-forwards', 'fill-mode-backwards', 'fill-mode-both']
  const repeat = ['repeat-0', 'repeat-1', 'repeat-infinite']

  const durationProperty = ['duration-500', 'duration-1000', ]
  const examples = []

  examples.push(['duration-500', 'animate-pulse', ])
  examples.push(['duration-1000', 'fade-in', 'animate-in'])
  examples.push(['duration-1000', 'animate-ping', 'repeat-1', 'fill-mode-forwards'])
  examples.push(['duration-1000', 'fade-in', 'spin-in-45', 'animate-in',  'fill-mode-forwards'])
  examples.push(['duration-1000', 'spin-out-45', 'animate-out', 'fade-out', 'zoom-out-150', 'slide-out-to-top', 'fill-mode-forwards'])



  let CLASSNAME = ['flex', 'overflow-auto']
  if (!active) {
    CLASSNAME.push('hidden')
  }
  CLASSNAME = CLASSNAME.join(' ')

  return (
    <div className={CLASSNAME}>
      <LeftLayout>

        <div className='flex flex-col  zoom'>
          <h3>Animation</h3>
          <PropertyRadioComponents properties={animationProperty} handleClassName={handleClassName} currentExample={example} />
        </div>
        <hr></hr>

        <div>
          <h1> Below options needs plugin tailwindcss-animate</h1>
          <hr></hr>
        </div>


        <div className='flex flex-col  '>
          <h3>Animation</h3>
          <PropertyRadioComponents properties={repeat} handleClassName={handleClassName} currentExample={example} />
        </div>
        <hr></hr>

        <div className='flex flex-col gap-2  '>
          <h3>Animation in/out</h3>
          <PropertyCheckboxComponents properties={animation_in} handleClassName={handleClassName} currentExample={example} />
          <PropertyCheckboxComponents properties={animation_out} handleClassName={handleClassName} currentExample={example} />
        </div>

        <div>

          <h3>  (Click the in/out below after chosen (need to reset everytime)) </h3>
          <PropertyCheckboxComponents properties={animation_inout} handleClassName={handleClassName} currentExample={example} />
        </div>

        <hr></hr>


        <div className='flex flex-col animate '>
          <h3>Fill mode (mode at start and end frame)</h3>
          <PropertyRadioComponents properties={fill_mode} handleClassName={handleClassName} currentExample={example} />
        </div>
        <hr></hr>
        <div className='flex flex-col '>
          <h3>Duration</h3>
          <PropertyRadioComponents properties={durationProperty} handleClassName={handleClassName} currentExample={example} />
        </div>
        <hr></hr>


        <div className='flex flex-col gap-2'>
          {examples.map((example, i) => {

            return <button key={i} className='btn capitalize' onClick={() => setExample(example)}> Example: {example.join(' ,')} </button>
          })}
        </div>

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
