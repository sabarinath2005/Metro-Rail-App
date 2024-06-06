import React from 'react'
import Navbar from './Navbar'

const AboutPage = () => {
    return (
        <div>
            <Navbar /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1><center>About Us </center></h1> <br />


                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202309/kochi-metro-220147579-16x9.png?VersionId=AJzZ5F_hKS7TVKZgDY.PrE4uVIumN7kg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.adelaidemetro.com.au/__data/assets/image/0006/1339620/BuyGoApp-AMnews-720x480px.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://cdn.statically.io/img/ahmedabadmetro.app/wp-content/uploads/2022/10/metro_route_fare-1024x576.webp?quality=100&f=auto" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br />
                <div className="row g-3">

                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div class="row">
                            <div class="col-4">
                                <div id="simple-list-example" class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
                                    <a class="p-1 rounded" href="#simple-list-item-1">Introduction</a>
                                    <a class="p-1 rounded" href="#simple-list-item-2">Our Vision & Mission</a>
                                    <a class="p-1 rounded" href="#simple-list-item-3">Motivation </a>
                                    <a class="p-1 rounded" href="#simple-list-item-4">RTI</a>
                                    <a class="p-1 rounded" href="#simple-list-item-5">History</a>
                                </div>
                            </div>
                            <div class="col-8">
                                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                                    <h4 id="simple-list-item-1">Introduction</h4>
                                    <p>Metro Rail Corporation Limited(SMRC) is a company incorporated under the provisions of the Companies Act 2013, having its registered office at Block-III, 3rd Floor, Ganga Shopping Complex, Sector-29 Noida 201301.

                                        NMRC is a Joint Venture Company of Government of India (GoI) and Government of Uttar Pradesh (GoUP) established for the purpose of planning, building and establishing of Mass transit and other urban transport and people mover systems of all types and disciplines.

                                        The NMRC has opened its corridor covering the length of 29.707KM between Noida & Greater Noida and operational since 26th January, 2019. The stretch consisting of 21 stations out of which 15 are in Noida and 6 in Greater Noida). NMRC has received “IGBC PLATINUM” rating for all 21 elevated stations of NMRC from IGBC Green Rating System.</p>
                                    <h4 id="simple-list-item-2">Our Vision & Mission</h4>
                                    <p>
                                        Our Vision
                                        "A world class metro with sustainable development"

                                        .
                                        Our Mission
                                        "To provide safe, reliable & eco-friendly transportation services for people"</p>
                                    <h4 id="simple-list-item-3">Motivation</h4>
                                    <p>Core Values
                                        "Integrity, Commitment, Open Innovation & Team Effort."</p>
                                    <h4 id="simple-list-item-4">RTI</h4>
                                    <p>
                                        PIO	Description	Officer In-charge	Appellate Authority
                                        PIO-1	For Civil (New Lines)/ Construction work matters	Sh. Ujwal Kumar (DGM/Civil)	Sh. Pankaj Kumar (GM/Project, Finance & HR)
                                        PIO-2	For Finance matters	Sh. Rajan Prakash (DGM/Finance)
                                        PIO-3	For HR matters	Sh. Mahendra R. Swami (DGM/HR)
                                        PIO-4	For AFC-Tele and IT matters	Sh. Kanishka Singh (DGM/AFC-Tele)
                                        PIO-5
                                        For Civil/O&M matters	Sh. Ujwal Kumar (DGM/Civil)	Sh. Manoj Vajpayee (CGM/Tech.)
                                        PIO-6	For Property Development & Property Business matters	Sh. Tarun Kumar Meena (DGM/PD & PB)
                                        PIO-7	For RS/Electrical & Operations and Stores matters	Sh. Avinash Kumar (DGM/RS, Elect. & Ops.)
                                    </p>
                                    <h4 id="simple-list-item-5">History</h4>
                                    <p>Noida Metro Rail Corporation Limited(NMRC) is a company incorporated under the provisions of the Companies Act 2013, having its registered office at Block-III, 3rd Floor, Ganga Shopping Complex, Sector-29 Noida 201301.
                                        NMRC is a Joint Venture Company of Government of India (GoI) and Government of Uttar Pradesh (GoUP) established for the purpose of planning, building and establishing of Mass transit and other urban transport and people mover systems of all types and disciplines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://www.intelligenttransport.com/wp-content/uploads/Delhi-Metro-1.jpg" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Creators</h5>
                                        <p class="card-text">In colabration with delhi metro,the government of india,irtc....We created this digital platform.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>

        </div>
    )
}

export default AboutPage
