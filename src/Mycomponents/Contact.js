import React from 'react'

export default function Contact() {
    return (
        <div id="contact" data-aos="fade-up">
            <div className="container">
            <h4 className="display-3 text-center mt-5 fw-normal">Contact Us</h4>
            <div className="underline mx-auto"></div>
                <div className="row p-5">          
                    <div className="col-md-6">
                        <h3 className="display-4">Welcome to forest that Attract Travellers</h3>
                        <p className="lead">
                        Forest is a system which is composed of plants, animals and microorganisms.
                        </p>
                        <p className="lead">
                        Have a Question? Give Us a Call <strong className="text-black">+34385482954</strong>
                        </p>
                    </div>

                    <div className="col-md-6">
                        <form action="">
                            <div className="mb-2">
                                <label htmlFor="" className="form-label">Enter your Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" className="form-label">Enter your Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                               <textarea name="" id="" rows="5" className="form-control"></textarea>
                            </div>
                            <button className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
