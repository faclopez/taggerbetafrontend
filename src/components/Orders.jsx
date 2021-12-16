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
            <option value="casting">Casting</option>
            <option value="emerying">Emerying</option>
            <option value="soldering">Soldering</option>
            <option value="polishing">Polishing</option>
          </select>
        <button> Update Order </button>
        
      </form>

        </div>
    )
}



