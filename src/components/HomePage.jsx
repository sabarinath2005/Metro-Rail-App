import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>
            <Navbar /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <h1><center>Welcome to  Metro Rail Corporation(SMRC) </center></h1> <br />

                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://img.lovepik.com/photo/48008/2616.jpg_wh860.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Welcome to  Metro Rail Corporation(SMRC) | Official Website</h5>
                                        <p>With a population of nearly 19 million people, New Delhi in India is one of the largest cities in the world - which means that getting around while you are there can be quite difficult.

                                            You can use a ride-sharing app like Uber, or take an auto rickshaw, yes, but because there's so much traffic, those rides can take forever, which is why taking the Delhi Metro may be your best bet. Bonus: Hopping on the metro is also a great way to get to know the city, and it'll save you money too.

                                            So here's everything you need to know about the Indian capital's public transit system:</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://etimg.etb2bimg.com/thumb/msid-94636625,imgsize-113534,width-1200,height=765,overlay-etgovernment/news/technology/hyderabad-metro-rail-launches-digital-ticket-booking-through-whatsapp.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Metro introduces QR code</h5>
                                        <p>Our Metro introduces QR code based tickets, here is how to use the new paper tickets
                                            DMRC has introduced QR code-based paper tickets for travel across all its lines. Metro passengers can now be able to use the QR Code based paper tickets apart from the tokens.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://watermark.lovepik.com/photo/20211129/large/lovepik-self-service-metro-ticket-vending-machine-picture_501183094.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Metro Network Map</h5>
                                        <p>You can check the routes without anyones help in stations.For that we introduces  a special metro route map shower.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
                <br />
                <div className="row g-3">

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <b> What's New NMRC</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">What's New
                                        NMRC IS PLANNING TO UPGRADE COMMUTER JOURNEY EXPERIENCE WITH AN APP
                                        NMRC CROSSED 50K LANDMARK OF RIDERSHIP
                                        Property Mela to spread awareness regarding business opportunities in NMRC is conducting at SEC 51 Metro Station from 22.12.21 to 24.12.21
                                        REVIEW of NON STOPPAGE STATIONS DURING PEAK HOURS BY FAST TRAINS</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <b>Train Timings</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Train Timings
                                        06:00 Hrs. (Depot Station and Sec-51 Station) Monday to Saturday. / 08:00 Hrs On Sunday</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <b>Latest Tenders</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Latest Tenders

                                        Tender No.: NMRC/E&M/289/cable laying/2023

                                        E tender No. NMRC/GA/Stationery/2023/286

                                        EoI No. /NMRC/IT/IT Services/2023/2577

                                        E-Tender No. NMRC/CANTEEN/264R/283/2023

                                        E - TENDER NO. NMRC/Bare PD Area/PCCK/281/2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h1><center>Our Features </center></h1> <br />


                        <div class="row">

                            <div class="col-8">
                                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                                    <h4 id="1">Yours Trusted Journey Planner</h4>
                                    <p>All over the india we are providing metro services with good and fare prices .You can check the pricing and timing of our rail here.</p>
                                    <h4 id="2">Affordable Fares</h4>
                                    <p>We are providing metro rail service in affordable rates.</p>
                                    <h4 id="3">Safer Journey</h4>
                                    <p>We ensure your safety,as our moto say "You First"</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card text-bg-dark">
                            <img src="https://www.nbmcw.com/images/57-Building-Construction/43406-Precast-1.webp" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Our Projects</h5>
                                <p class="card-text">29.707 km long and is called as Noida Greater Noida Metro Rail Corridor.Its gona be the largesr metro of India.</p>
                                <p class="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Journey Planner and Fares</h5>
                                <p class="card-text">All over the india we are providing metro services with good and fare prices .You can check the pricing and timing of our rail here.</p>
                                <a href="#" class="btn btn-primary">Show Route & Fares</a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://d3mbwbgtcl4x70.cloudfront.net/Mumbai_Metro_Line_2_A_and_7_75c0f28e7f.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text"><b>ROUTE MAP</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default HomePage


