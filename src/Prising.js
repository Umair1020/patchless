import React from 'react'
import Head from './components/Head'
import Footer from './components/Footer'
import "./prising.css"
const Prising = () => {
    return (
        <div>
            <Head />

            <link
                href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                rel="stylesheet"
                id="bootstrap-css"
            />
            {/*---- Include the above in your HEAD tag --------*/}
            <div className="container mb-5 mt-5">
                <div className="pricing card-deck flex-column flex-md-row mb-3">
                    <div className="card card-pricing text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-danger text-white shadow-sm">
                        Flat 1
                        </span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1
                                className="h1 font-weight-normal text-danger text-center mb-0"
                                data-pricing-value={15}
                            >
                                $<span className="price">10</span>
                               
                            </h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Any left chest and cap design

</li>
                                <li>Upto 5 inches</li>
                                <li>Unlimited stitches</li>
                                
                            </ul>
                           
                        </div>
                    </div>
                    <div className="card card-pricing popular shadow text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-danger text-white shadow-sm">
                        Flat 2
                        </span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1
                                className="h1 font-weight-normal text-danger text-center mb-0"
                                data-pricing-value={30}
                            >
                                $<span className="price">25
                                </span>
                              
                            </h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Any design

</li>
                                <li>5 to 8 inches</li>
                                <li>Unlimited stitches</li>
                            
                            </ul>
                          
                        </div>
                    </div>
                    <div className="card card-pricing text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-danger text-white shadow-sm">
                        Flat 3
                        </span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1
                                className="h1 font-weight-normal text-danger text-center mb-0"
                                data-pricing-value={45}
                            >
                                $<span className="price">50</span>
                              
                            </h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Any design

</li>
                                <li>Above 8 inches</li>
                                <li>Unlimited stitches</li>
                             
                            </ul>
                           
                        </div>
                    </div>
                    <div className="card card-pricing text-center px-3 mb-4">
                        <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-danger text-white shadow-sm">
                        Stitches
                        </span>
                        <div className="bg-transparent card-header pt-4 border-0">
                            <h1
                                className="h1 font-weight-normal text-danger text-center mb-0"
                                data-pricing-value={60}
                            >
                                $<span className="price">2 /1000 </span>
                                <span className="h6 text-muted ml-2">stiches</span>
                            </h1>
                        </div>
                        <div className="card-body pt-0">
                            <ul className="list-unstyled mb-4">
                                <li>Minimum charge $10
                               0</li>
                                <li> Maximum charge $10</li>
                               
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Prising