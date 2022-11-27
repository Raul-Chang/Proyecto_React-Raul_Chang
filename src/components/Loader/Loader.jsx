import React from 'react'
import { DotSpinner } from '@uiball/loaders'
import Flexx from "../Flexx/Flexx"

function Loader(props) {
  return (
    <div className='margin'>
        <Flexx>
            <DotSpinner {...props} />
        </Flexx>
    </div>
    
  )
}

export default Loader