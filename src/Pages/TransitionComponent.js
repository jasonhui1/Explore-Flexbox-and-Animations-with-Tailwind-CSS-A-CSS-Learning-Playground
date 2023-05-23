import { useState } from 'react';
import LeftLayout from '../Components/LeftLayout';
import { PropertyRadioComponents } from '../Components/Radio';
import { PropertyCheckboxComponents } from '../Components/Checkbox';
import RightLayout from '../Components/RightLayout';
import { ExamplesComponent, MultipleGroupComponent, SingleGroupComponent } from '../Components/LayoutComponents';
export function MyComponent({ className }) {
  return <div className={className}>Hover me</div>;
}

export default function TransitionComponent({ active = true }) {
  const [className, setClassName] = useState(['bg-blue-500', 'text-3xl', 'w-96', 'h-96', 'border-solid', 'border-8', 'border-black', 'flex', 'justify-center', 'items-center', 'text-white', 'shadow-lg', 'shadow-orange-300'])
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

  const examples = []

  examples.push({properties:['duration-1000', 'hover:scale-150'], description:'basic example 1 - transform'})
  examples.push({properties:['duration-1000', 'hover:text-opacity-50'], description:'basic example 2 - opacity'})
  examples.push({properties:['delay-100', 'duration-1000', 'hover:rotate-180'], description:'basic example 3 - with delay'})
  examples.push({properties:['duration-1000', 'hover:scale-150', 'hover:text-opacity-50', 'hover:border-opacity-20'], description:'combine multiple transitions'})


  let CLASSNAME = ['flex', 'overflow-auto']
  if (!active) {
    CLASSNAME.push('hidden')
  }
  CLASSNAME = CLASSNAME.join(' ')

  return (
    <div className={CLASSNAME}>
      <LeftLayout>

        <SingleGroupComponent title='Transition'>
          <PropertyRadioComponents properties={transitionProperty} handleClassName={handleClassName} currentExample={example} />
        </SingleGroupComponent>

        <MultipleGroupComponent title='Duration/ Delay'>
          <PropertyRadioComponents properties={durationProperty} handleClassName={handleClassName} currentExample={example} />
          <PropertyRadioComponents properties={delayProperty} handleClassName={handleClassName} currentExample={example} />
        </MultipleGroupComponent>


        <SingleGroupComponent title='Transition'>
          <PropertyCheckboxComponents properties={opacityProperty} handleClassName={handleClassName} currentExample={example} />
        </SingleGroupComponent>


        <MultipleGroupComponent title='Transform'>

          <PropertyRadioComponents properties={translateProperty} handleClassName={handleClassName} currentExample={example} />
          <PropertyRadioComponents properties={rotateProperty} handleClassName={handleClassName} currentExample={example} />
          <PropertyRadioComponents properties={scaleProperty} handleClassName={handleClassName} currentExample={example} />
        </MultipleGroupComponent>


        {/* <div className='flex flex-col gap-2'>
            <h3>Shadow</h3>

            <PropertyRadioComponents properties={shadowProperty} handleClassName={handleClassName} currentExample={example} />

          </div>
          <hr></hr> */}


        <ExamplesComponent examples={examples} setExample={setExample}/>

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
