import { useState } from 'react';
import LeftLayout from '../Components/LeftLayout';
import { SingleGroupComponent, ExamplesComponent } from '../Components/LayoutComponents';
import { PropertyRadioComponents } from '../Components/Radio';
import RightLayout from '../Components/RightLayout';


export function MyComponent({ layoutClassName, className }) {
    let grids = [];
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(true)

    for (let i = 0; i < 12; i++) {
        let box = <div className='outline text-3xl w-96 h-96 mt-6' key={i}> {i} </div>
        grids.push(box);

    }

    return (<div className={layoutClassName}>

        <label className='text-xl'>
            <input type='checkbox' clas onClick={() => setShow1(!show1)}></input>
            Hide big picture</label>


        {show1 && <div className={'parallax ' + className} style={{ 'background-image': 'url(https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80)' }}>
        </div>}


        <label className='text-xl'>
            <input type='checkbox' clas onClick={() => setShow2(!show2)}></input>
            Hide small picture</label>


        {show2 && <div className={'parallax ' + className} style={{ 'background-image': 'url(https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80)' }}>
        </div>}



        {grids}

    </div>);
}

export default function BackgroundComponent({ active = true }) {
    const [layoutClassName, setlayoutClassName] = useState(['overflow-auto', 'outline', 'flex', 'h-screen', 'flex-wrap', 'gap-4', 'justify-center',])
    const [className, setClassName] = useState(['h-48', 'bg-red-200'])
    const [example, setExample] = useState([])

    const handleClassName = (newName) => {
        const exist = className.includes(newName)
        if (!exist) {
            setClassName(className => [...className, newName])
        } else {
            setClassName(className => className.filter((name) => name !== newName))
        }
    }

    const attachment = ['bg-fixed', 'bg-local', 'bg-scroll']
    const position = ['bg-center', 'bg-left-top', 'bg-right-bottom']
    const size = ['bg-auto', 'bg-cover', 'bg-contain']
    const repeat = ['bg-repeat', 'bg-no-repeat', 'bg-repeat-round', 'bg-repeat-space']
    const examples = []

    examples.push(['bg-no-repeat', 'bg-contain']) //Show full image
    examples.push(['bg-no-repeat', 'bg-cover']) //Zoom in
    examples.push(['bg-repeat-round']) //Stretch to fit
    examples.push(['bg-fixed', 'bg-right-bottom']) //Some parallax


    let CLASSNAME = ['flex',]
    if (!active) {
        CLASSNAME.push('hidden')
    }
    CLASSNAME = CLASSNAME.join(' ')

    return (
        <div className={CLASSNAME}>
            <LeftLayout>

                <SingleGroupComponent title='Attachment, Scroll down when uses fixed, (fixed doesnt work well with size, not sure what the other two properties do) '>
                    <PropertyRadioComponents properties={attachment} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>


                <SingleGroupComponent title='Position'>
                    <PropertyRadioComponents properties={position} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>


                <SingleGroupComponent title='Size'>
                    <PropertyRadioComponents properties={size} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>

                <SingleGroupComponent title='repeat'>
                    <PropertyRadioComponents properties={repeat} handleClassName={handleClassName} currentExample={example} />
                </SingleGroupComponent>

                <ExamplesComponent examples={examples} setExample={setExample} />
                {/* Have some space at the bottom to avoid being covered by the navigation bar  */}
                <div className='h-12'></div>
            </LeftLayout>


            <RightLayout>
                <MyComponent layoutClassName={layoutClassName.join(' ')} className={className.join(' ')} />

                <div className=''>
                    <p>{className.join(' ')}</p>
                </div>
                <div className='h-12'></div>

            </RightLayout>

        </div>
    )
}
