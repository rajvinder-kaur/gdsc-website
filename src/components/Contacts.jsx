import React from 'react'
import Form from '../Subcomponents/Form'
import "../sassfiles/contact.sass"

function Contacts() {
    return (
        <div  className='contact'>
            <div className='pb-5 mt-0 body' >
                <div class="col-full">
                    <h3 class="subhead">CONTACT US </h3>
                    <h1 class="text">Reach out for a new project or just say hello</h1>
                </div>
            </div>
            <Form />
        </div>

    )
}

export default Contacts