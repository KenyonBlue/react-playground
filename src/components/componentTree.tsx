import React from 'react'
import applyEntry from '../higherOrderComponents/applyEntry'

const ComponentTree = ({entry}: any) => {
    return (
        <div className='test'>
            {entry?.children?.map((entry: any, depth: any) => {
                return (
                    <div>
                        <div className=""> {entry.name} </div>
                        <ComponentTree entry={entry}/>
                    </div>

                )
            })}
        </div>
    )
}

export default applyEntry(ComponentTree)