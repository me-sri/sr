import React from "react";
import men from "../Images/user-svgrepo-com(1).png"
import one from "../Images/Quality.png"
import two from "../Images/Customize 1.png"
import three  from "../Images/Support 1.png"



const Clients = () => {
  return (
  <>
  
<div className="container mt-5">
    <div className="our-core">
        
    <h2 className="core-title">Our Core Values</h2>
    <span className="pt-2 core-text
    ">We provide customized, unique and effective IT services as per clients <br></br>
     requirements & constraints </span>
    </div>

   <div className="core-top">
   <div className="row">
        <div className="col-lg-4">
            <div>
                <img src={one} alt="img"/>
                <h5 className="mt-3">Quality</h5>
                <p className="core-phara">There is no compromise in the <br/>quality of service we provide at Key<br/> Software, Inc.</p>

            </div>

        </div>
        <div className="col-lg-4">
        <div>
                <img src={two} alt="img"/>
                <h5 className="mt-3">Customization</h5>
                <p className="core-phara">Our solutions are highly varied and <br></br>customized for each client & their <br></br> needs</p>

            </div>
            
            </div>
            <div className="col-lg-4">
            <div>
                <img src={three} alt="img"/>
                <h5 className="mt-3">Support</h5>
                <p className="core-phara">We take full responsibility, provide <br/> full support and ensure that any<br/> issues are resolved</p>

            </div>
            
            </div>
    </div>
   </div>
</div>


  <div className="  client mt-5">
      <div className="container">
      <div>
        <div className="row">
          <div className="col-lg-4">
            <h2 className="what-say">What our clients say about us?</h2>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-text">
                "I have been frequently working with the Key Software, Inc.
                since 2018. I greatly appreciate their thorough understanding of
                our business needs which makes working with them seem effortless
                and a pleasure. They have always provided excellent support and
                are responsive to our requests, delivering eloquent results in a
                timely manner"
              </div>
              <span>⭐⭐⭐⭐⭐</span>
              <div className="men">
              <div>
               <img src={men} alt="men"/>
                </div>
                <div >
              <span className="busines">Business System Analyst,Change </span>
              <br/><span className="busines">Healthcare</span><br/>
              <span className="busines-head">Amparo Briceño</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-text">
                "Key Software,Inc. have been helping our organization utilize
                our claims and utilization platform more effectively and
                efficiently. They took the time to clearly understand our
                business needs and understand the workflows. They engaged with
                our technical team and the business process owners to ensure
                they understood the issues well. Karthik is very solution
                oriented and innovative in finding solutions."
              </div>
              <span>⭐⭐⭐⭐⭐</span>
              <div className="men">
              <div>
               <img src={men} alt="men"/>
                </div>
                <div >
              <span className="busines">CEO & Founder, Imperial Health Plan  </span>
              <br/><span className="busines"> of  California, Inc.</span><br/>
              <span className="busines-head">Dr. Paveljit Bindra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  </>
  );
};

export default Clients;
