import axios from 'axios'
import React, {useState} from 'react'



export const OrderUpdate = (props) => {


    const noSplittedId = props.id
    var splittedId = noSplittedId.split('/')
    splittedId.reverse()
    splittedId.forEach(e => console.log(e))
    console.log(splittedId[0])
    
    

    const idUrl = 'https://tagserver-beta.herokuapp.com/order/' + splittedId[0]
    console.log(idUrl)
    const [tag, setTag] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        console.log(tag)

        axios({
            method: 'POST',
            url: idUrl,
            data: {
                tag : tag
            }
        }).then(res => console.log(res))

    }


    return(
        <div>
            <h3>Select Tag to add</h3>
            <form onSubmit={handleSubmit}>
        
          <select value={tag} onChange={evt => setTag(evt.target.value)}>
            <option value="">Select Tag</option>
            <option value="Order Processed">Order Processed</option>
            <option value="3D printed/Sent for casting">3D printed/Sent for casting</option>
            <option value="Received Back From Casting">Received Back From Casting</option>
            <option value="Into Production Studio">Into Production Studio</option>
            <option value="Needs recast">Needs recast</option>
            <option value="Design issue">Design issue</option>
            <option value="Hold">Hold</option>
          </select>
        <button> Update Order </button>
        
      </form>

        </div>
    )
}



