import React from 'react'
import Navbar from './Navbar'

const FAQPage = () => {
    return (
        <div>

            <Navbar /> <br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <h1><center>FREQUENTLY ASKED QUESTIONS(FAQ)</center></h1> <br />



                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <b> What is a QR Ticket?</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        A QR Ticket is a valid ticket used for single journey Return journey and Group travel.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <b>From where I can purchase QR Ticket for travelling in Metro Trains?</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        QR Tickets are available across all ticketing window at all NMRC Metro stations. QR tickets can also be booked through the NMRC mobile app (which is available on android & IOS platform) and Cashless Ticket Vending Machine (CTVM) presently available at Sector-51 and KP-II stations</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <b>What are the modes of payment accepted at NMRC Metro Stations for QR ticket purchase?</b>
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        While purchasing QR tickets, the passenger has the option of paying the amount of fare through cash or use digital payment options. The digital payment options include:-
                                        i) Using Debit/ Credit card.
                                        Ii) Using UPI.</div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <b>       Can I exit from the same station where I have entered? </b>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">

                                        Yes, any person can exit from the same station where he has entered, but the time limit to exit from same station is 30 minutes after a valid entry through AFC gates. After expiry of the time limit a penalty Rs 10/- per hour subject to maximum of Rs 50/- will be charged at the exit.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <b>   Can I extend my journey beyond the original destination?</b>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">

                                        No, QR Ticket holder can’t extend the journey after purchasing the QR Ticket. However, if any passenger extends it journey mistakenly, he has to pay additional amount at the time of exit from AFC gates.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <b> Is there any penalty in SMRC? </b>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">

                                        Yes, In NMRC network following penalties are applicable for offences under O&M Act,2002 and as per Business Rules.

                                        Penalties

                                        Section	Offences	Penalty
                                        59	Drunkenness or Nuisance or Spitting or Sitting on the floor of the train or Quarreling	Rs.200/-
                                        60	Taking offensive material	Rs.200/-
                                        61	Taking or causing to take dangerous material upon metro railways	Rs.5000/-
                                        62	* Demonstration of any kind upon Railway.
                                        * For Writing, pasting in compartment or carriage etc.
                                        * For refusal to be removed.	Rs.500/-
                                        63	Travelling on roof of the train	Rs.50/-
                                        64	Unlawful entry and walking on Metro Track	Rs.150/-
                                        67	Unlawful obstruction of train and train doors	Fine of Rs. 5000/-
                                        68	Obstructing officials on duty	Rs.500/-
                                        69	Travelling without ticket or pass	Rs.100/-
                                        70	Interfering with means of communication in train or misusing alarm	Rs.500/-
                                        71	Altering or defacing or counterfeiting pass or ticket	Imprisonment upto 6 months
                                        72	Defacing metro properties	Rs.200/-
                                        73	Unauthorized sale of articles on metro railway	Rs.400/-
                                        74	Maliciously wrecking a train or causing sabotage	Life Imprisonment or rigorous imprisonment up to 10 years or death sentence
                                        75	Unauthorized sale of ticket	Rs.200/-
                                        78	Damage to or destruction of certain metro railway properties	Imprisonment up to 10 years
                                        Para	Penalties imposed manually under Business Rule and others	Penalty
                                        1	Paid Exit	Rs.100/-
                                        2	Tailgating (without recorded proper entry or exit from Card or QR Ticket)	Rs.200/-
                                        3	Reverse direction journey	Rs.50/-
                                        4	Travelling beyond permissible time limit	Rs 10/Hour upto Rs 50/-
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>







        </div>
    )
}

export default FAQPage
