import React, {useState} from 'react'
import {TextareaAutosize} from '@material-ui/core'
import axios from 'axios'

import QrScan from 'react-qr-reader'

export const ScannerView = (props) => {

    const [qrscan, setQrscan] = useState('No result');
    const [tagStatus, setTagStatus] = useState('Ready to Scan');
    const tag = props.tag
    //when scans call handleScan
    const handleScan = (data) => {
        if (data) {
            setQrscan(data)
            
            const noSplittedId = data
            var splittedId = noSplittedId.split('/')
            splittedId.reverse()
            splittedId.forEach(e => console.log(e))
            console.log(splittedId[0])
            const idUrl = 'https://tagserver-beta.herokuapp.com/order/' + splittedId[0]
            console.log('from scanner', idUrl)
            console.log('from scanner', tag)
            setTagStatus('Tagging')

            axios({
                method: 'POST',
                url: idUrl,
                data: {
                    tag : tag
                }
              }).then(res =>
                 {console.log(res)
                  console.log('finish')
                  setTagStatus('Tagged')
                  setTimeout(()=> {
                      setTagStatus('Ready to Scan')
                      setQrscan('')
                }, 1500)
                })

            

        }
    }
    const handleError = err => {
    console.error(err)
    }

    //from order

//

    return (
      <div>
          
          
            <span></span>
            {tagStatus === 'Ready to Scan'&& <h2 style={{color: "gray"}}>Ready to Scan</h2>}
            {tagStatus === 'Tagged'&& <h2 style={{color: "green"}}>Tagged</h2>}
            {tagStatus === 'Tagging'&& <h2 style={{color: "yellow"}}>Tagging</h2>}
            <center>
            <div style={{marginTop:30}}>
                <QrScan
                    delay={2200}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>

            <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                maxRows={4}
                defaultValue={qrscan}
                value={qrscan}
            />

      </div>
    );
}