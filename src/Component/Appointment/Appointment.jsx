import React, { useRef, useState } from 'react';

import Swal from 'sweetalert2';
function Appointment(props) {



let [categories,setCategories]=useState(["Nephrology","Obstetrics and Gynecology","Pediatrics","Orthopedics","Plastic surgery"
])

let [doctors,setDoctors]=useState([
])

let plaseholder=useRef(null)
let plaseholder_2=useRef(null)

let name=useRef(null)
let date=useRef(null)
let category=useRef(null)
let number=useRef(null)
let national_id=useRef(null)
let message=useRef(null)
let doc=useRef(null)
var datee = new Date();
var currentDate = datee.toISOString().slice(0,10);

let [error,setError]=useState(false)

function get_doctors_api({}){
     plaseholder.current.remove()
     plaseholder_2.current.remove()
     setDoctors(["Manal Adly","Reham Hasan","Maged Ashraf","Michel Edward","Sameh Badry"])
    }








function sendData(){
    setError(false)
    if(name.current.value!=""&&number.current.value!=""&&national_id.current.value!=""&&category.current.value!=""){
       
        Swal.fire({
            title: 'Great Choise',
            text:"You will be contacted by one of the staff.. to confirm the Appointment",
            confirmButtonText: 'Ok',
            icon:"success"
          }).then((result) => {

            if (result.isConfirmed) {
                window.location.reload()

            } 
            else{
                window.location.reload()

            }

          })
      
      
      
    }
    else{
        setError(true)
    }


}

let getAppoint=(e)=>{
    e.preventDefault();
    sendData()
}

    return (
        <div>
            <div className="page-section">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">Make an Appointment</h1>
                    <div className='row d-flex justify-content-center mt-3'>
                    {error?<p className='alert alert-danger col-11 col-md-7'>You Must Add a Complete and Right Data </p>:""}

                    </div>
                    <form className="main-form" onSubmit={getAppoint} id="myform">
                        <div className="row mt-3 ">
                            <div className="col-12 col-sm-12 py-2 wow fadeInLeft">
                                <input type="text" className="form-control" placeholder="Full name.." ref={name} />
                            </div>

                            <div className="col-12  py-2 wow fadeInLeft" data-wow-delay="300ms">
                                <label className='text-muted'>Appointment Time</label>
                                <input type="date" defaultValue={currentDate} className="form-control"  ref={date}/>
                            </div>
                  
                            <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                <input type="text" className="form-control" placeholder="Mobile Number.."  ref={number}/>
                            </div>

                            <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                <input type="text" className="form-control" placeholder="National Id.." ref={national_id} />
                            </div>

                        </div>


                        <div className="col-12  py-2 wow fadeInRight" data-wow-delay="300ms">
                                <label className='text-muted'>Categorey</label>

                                <select  ref={category} name="departement"  id="departement"  onChange={get_doctors_api} className="custom-select w-100" >
                                <option value="" ref={plaseholder_2}>Chosse Categorey</option>

                                    {categories.map((item)=> <option key={item} value={item}>{item}</option>)}
               
                                </select>
                                
                            </div>


                        <div className="col-12 py-2 wow fadeInRight" data-wow-delay="300ms">

                                <label className='text-muted'>doctor</label>

                                <select name="departement" id="departement" className="custom-select w-100" ref={doc}>
                                <option value="" className='text-muted' ref={plaseholder}>Chosse Categorey First</option>

                                {doctors.map((item)=><option value={item} key={item} className='text-muted'>{item}</option>)}


                                </select>
                            </div>

                            
                            <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                <textarea name="message" id="message" className="form-control" rows={6} placeholder="Enter message.." ref={message} defaultValue={""} />
                            </div>



                        <button type="submit" className="btn btn-primary mt-3 wow zoomIn">Submit Request</button>
                    </form>
                </div>
            </div> {/* .page-section */}
        </div>

    );
}

export default Appointment;