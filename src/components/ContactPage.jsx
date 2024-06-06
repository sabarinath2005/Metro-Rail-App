import React from 'react'
import Navbar from './Navbar'

const ContactPage = () => {
  return (
    <div>
      
<Navbar/> <br />
      <div className="container">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-labe">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                   
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email id</label>
                        <input type="text" className="form-control" placeholder='Enter Email id' />
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Subject</label>
                    <textarea name="" id="" cols="5" rows="2" className="form-control" placeholder='Enter Subject'></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Message</label>
                    <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder='Enter Message'></textarea>
                     </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Phone no(optional)</label>
                        <input type="text" className="form-control" placeholder='Enter Phone no' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Physical Address(optional)</label>
                        <input type="text" className="form-control" placeholder='Enter Physical Address'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Send Details</button>
                    </div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default ContactPage
