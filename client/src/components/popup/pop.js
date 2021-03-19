import React from 'react'
import Popcomp from './popcomp'
import {useState} from 'react'


function Pop() {
    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className={Pop}>
            <main>
                <br/><br/>
                <button onClick={() => setButtonPopup(true)}>Open Popup</button>
            </main>
            <Popcomp trigger={buttonPopup} setTrigger={setButtonPopup}>

            </Popcomp>
        </div>
    )
}

export default Pop;