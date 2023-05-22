
export function ExamplesComponent({ examples, setExample }) {
  return (
    <div className='flex flex-col gap-2'>
      <h3>Examples</h3>
      <div className="flex flex-col gap-4">
        {examples.map((example, i) => {

          if (example.properties) {

            return (
              <div className="flex gap-8 justify-between flex-col 2xl:flex-row">

                <span>{i + 1 + '. ' + example.description}</span>
                <button key={i} className='btn btn-block capitalize 2xl:max-w-[50%] leading-5' onClick={() => setExample(example.properties)}>  {example.properties.join(' ,')} </button>
              </div>
            )
          } else {
            return <button key={i} className='btn capitalize' onClick={() => setExample(example)}> Example: {example.join(' ,')} </button>
          }
        })}
      </div>
    </div>
  )
}


export function SingleGroupComponent({ title, children }) {

  return (
    <>
      <div className='flex flex-col '>
        <h3>{title}</h3>
        {children}
      </div>
      <hr></hr>
    </>)

}

export function MultipleGroupComponent({ title, children }) {

  return (
    <>
      <div className='flex flex-col gap-2 '>
        <h3>{title}</h3>
        {children}
      </div>
      <hr></hr>
    </>)

}