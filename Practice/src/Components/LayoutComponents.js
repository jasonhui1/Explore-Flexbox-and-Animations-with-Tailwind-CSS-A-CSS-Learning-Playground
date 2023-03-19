
export function ExamplesComponent({ examples, setExample }) {
    return (
      <div className='flex flex-col gap-2'>
        {examples.map((example, i) => {
  
          return <button key={i} className='btn capitalize' onClick={() => setExample(example)}> Example: {example.join(' ,')} </button>
        })}
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