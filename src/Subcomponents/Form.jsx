import React from 'react'
import { TfiFacebook } from 'react-icons/tfi';
import { BsTwitter } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { RiBehanceFill } from 'react-icons/ri';
import { TbBallBasketball } from 'react-icons/tb';
import { Stack } from 'react-bootstrap';
import "../sassfiles/Form.sass"


function Form() {
    return (
       <div className="main">
         <div className="container-xl main_two">
            <div className="row col-lg box" id="row">
            <div className="container_form col-lg">
                <h6 className='mb-4 fw-bolder'>SEND US A MESSAGE</h6>
                <Stack gap={3} id="stack" >
                    <input type="text" name="" id="" placeholder='Your Name' />
                    <input type="text" name="" id="" placeholder='Your Email' />
                    <input type="text" name="" id="" placeholder='Subject' />
                    <textarea name="" id="" cols="50" rows="10" placeholder='Your Message'></textarea>
                    <button className='btn  rounded-0'>Submit</button>
                </Stack>
            </div>
            <div className="info container col-md">
                <h6 className='ms-4 ps-3'>CONTACT INFO</h6>
                <ol>
                    <li>
                        <h5>Where to Find Us</h5>
                        <p>
                            1600 Amphitheatre Parkway <br />
                            Mountain View, CA <br />
                            94043 US
                        </p>
                    </li>
                    <li>
                        <h5>Email Us At</h5>
                        <p>
                            contact@glintsite.com <br />
                            info@glintsite.com
                        </p>
                    </li>
                    <li>
                        <h5>Call Us At</h5>
                        <p>
                            Phone: (+63) 555 1212 <br />
                            Mobile: (+63) 555 0100 <br />
                            Fax: (+63) 555 0101
                        </p>
                    </li>
                    <li className='social' >
                        <ul >
                            <li>
                                <TfiFacebook/>
                            </li>
                            <li>
                                <BsTwitter/>
                            </li>
                            <li>
                            <GrInstagram/>
                            </li>
                            <li>
                                <RiBehanceFill/>
                            </li>
                            <li>
                                <TbBallBasketball/>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
            </div>
        </div>
       </div>
    )
}

export default Form