import React from 'react'

const applyEntry = (Component: any) => {
 function Entry() {
    const entry = {
        children: [
          {
            name: 'header',
            children: [
              {
                name: 'h1',
                children: [
                  {
                    name: 'a',
                    children: []
                  }
                ]
              }
            ]
          },
          { name: 'div' },
          {
            name: 'div',
            children: [
              {
                name: 'h2',
                children: []
              },
              {
                name: 'p',
                children: []
              }
            ]
          },
        ]
      }
    return <Component  entry={entry}/>
 }
 return Entry;
}

export default applyEntry