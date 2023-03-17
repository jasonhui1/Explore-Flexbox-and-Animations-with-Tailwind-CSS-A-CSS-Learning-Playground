import {useState } from 'react';
import { PropertyCheckboxComponents } from './Checkbox';
import { PropertyRadioComponents } from './Radio';

export function MyComponent({ className }) {
  return <div className={className}>Button</div>;
}

export default function TransitionComponent() {
  const [className, setClassName] = useState(['bg-blue-500', 'text-3xl', 'w-96', 'h-96', 'hover:bg-red-500', 'border-solid', 'border-8', 'border-black', 'flex', 'justify-center', 'items-center', 'text-white', 'shadow-lg', 'shadow-orange-300'])
  const [example, setExample] = useState([])

  const handleClassName = (newName) => {
    const exist = className.includes(newName)
    if (!exist) {
      setClassName(className => [...className, newName])
    } else {
      setClassName(className => className.filter((name) => name !== newName))
    }
  }

  const transitionProperty = ['transition-all', 'transition', 'transition-colors', 'transition-opacity', 'transition-shadow', 'transition-transform']

  const durationProperty = ['duration-200', 'duration-1000']
  const delayProperty = ['delay-100', 'delay-500']

  const translateProperty = ['hover:translate-x-5', 'hover:translate-x-full', 'hover:translate-y-5', ' hover:translate-y-full']

  const rotateProperty = ['hover:rotate-180']
  const scaleProperty = ['hover:scale-150',]

  //Not working
  // const shadowProperty = ['hover:shadow-2xl',]

  const opacityProperty = ['hover:opacity-50', 'hover:bg-opacity-50', 'hover:text-opacity-50', 'hover:border-opacity-20']

  const boxProperty = ['hover:ml-24']

  const examples = []

  examples.push(['duration-1000', 'hover:scale-150'])
  examples.push(['delay-100', 'duration-1000', 'hover:ml-24'])
  examples.push(['duration-1000', 'hover:bg-opacity-50', 'hover:text-opacity-50', 'hover:border-opacity-20'])
  examples.push(['duration-1000', 'hover:translate-x-full'])



  return (
    <div className='flex overflow-auto'>
      <div className=' flex-1 flex-shrink-0 overflow-auto top-rounded-3xl p-3 outline-1 bg-blue-100 h-screen sticky top-0  '>
        <div className='flex  flex-col gap-6 mt-6 border'>

          <div className='flex flex-col gap-2'>
            <h3>Transition</h3>
            <PropertyRadioComponents properties={transitionProperty} handleClassName={handleClassName} currentExample={example} />
          </div>
          <hr></hr>

          <div className='flex flex-col gap-2'>
            <h3>Duration/ Delay</h3>

            <PropertyRadioComponents properties={durationProperty} handleClassName={handleClassName} currentExample={example} />
            <PropertyRadioComponents properties={delayProperty} handleClassName={handleClassName} currentExample={example} />

          </div>
          <hr></hr>

          <div className='flex flex-col gap-2'>
            <h3>opacityProperty</h3>

            <PropertyCheckboxComponents properties={opacityProperty} handleClassName={handleClassName} currentExample={example} />

          </div>
          <hr></hr>


          <div className='flex flex-col gap-2'>
            <h3>Transform</h3>

            <PropertyRadioComponents properties={translateProperty} handleClassName={handleClassName} currentExample={example} />
            <PropertyRadioComponents properties={rotateProperty} handleClassName={handleClassName} currentExample={example} />
            <PropertyRadioComponents properties={scaleProperty} handleClassName={handleClassName} currentExample={example} />
          </div>
          <hr></hr>

          {/* <div className='flex flex-col gap-2'>
            <h3>Shadow</h3>

            <PropertyRadioComponents properties={shadowProperty} handleClassName={handleClassName} currentExample={example} />

          </div>
          <hr></hr> */}

          <div className='flex flex-col gap-2'>
            <h3>Box model</h3>

            <PropertyRadioComponents properties={boxProperty} handleClassName={handleClassName} currentExample={example} />

          </div>
          <hr></hr>


          <div className='flex flex-col gap-2'>
            {examples.map((example) => {

              return <button className='btn capitalize' onClick={() => setExample(example)}> Example: {example.join(' ,')} </button>
            })}
          </div>


        </div>
      </div>


      <div className='flex-1 rounded-3xl overflow-auto  p-3 outline-1 bg-yellow-100 h-screen'>
          
        <div className='flex justify-center items-center h-screen '>
            
          <MyComponent className={className.join(' ')} />
        </div>

        <div className=''>
          <p>{className.join(' ')}</p>
        </div>


      </div>

    </div>
  )
}
