
import React, {useState} from 'react'



export const useOrderUpdate = () => {
    
    const [tag, setTag] = useState('')


 


    return {
      tag,
      render:(
        <div>
            <h3>Select Tag to add</h3>
            <form >
        
          <select value={tag} onChange={evt => setTag(evt.target.value)}>
            <option value="">Select Tag</option>
            <option value="Order Processed">Order Processed</option>
            <option value="3D printed/Sent for casting">3D printed/Sent for casting</option>
            <option value="Received Back From Casting">Received Back From Casting</option>
            <option value="Into Production Studio">Into Production Studio</option>
            <option value="Needs recast">Needs recast</option>
            <option value="Design issue">Design issue</option>
            <option value="Hold">Hold</option>
            <option value="Scanner Test">Scanner Test</option>
          </select>
       {/*<button> Update Order </button>*/}
        
      </form>

        </div>
    )}
}



