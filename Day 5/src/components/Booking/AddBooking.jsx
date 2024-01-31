import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Nabar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faSink, faVectorSquare, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import './Property.css';

const Property = () => {
    return(
        <>

        <div>
            <Navbar/>
        </div>
        <br></br>
        <br></br>
        <div className="P-h1"><h1>“BOOK YOUR EVENTS”
</h1></div>
<br></br>
        <br></br>
       
        <div className="containe">
     <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
            <img src="https://www.huone.events/app/uploads/2019/12/business-meeting-and-event-trends-2020.jpg" alt="Boat" style={{width: '100%', height: '100%'}} />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption></figcaption>
          </figure>
          <div>
           <h1 style={{marginLeft:'100px'}}> Buisness Events</h1>
          </div>
              
              
              

            </section>
           
           
          


      </div>


      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://static.toiimg.com/photo/73045588.cms" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption></figcaption>
          </figure>
          
             <div>
             <h1 style={{marginLeft:'100px'}}> Parties</h1></div> 
              
              

            </section>
           
           
          


      </div>




      
  
  


    

   
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://heritagecenter.mn/wp-content/uploads/2022/03/2018_0826_Earle_Brown_Center_DAYTA_YuppyPhoto-2.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption></figcaption>
          </figure>
          <div>
             <h1 style={{marginLeft:'100px'}}>  Seminar Hall</h1></div> 
              
              
              
              

            </section>
           
           
          


      </div>
    
      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/CT/SG/RD/12461086/birthday-party-decorators.jpg" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption></figcaption>
          </figure>
          
              
          <div>
             <h1 style={{marginLeft:'100px'}}> Birthday</h1></div> 
              
              

            </section>
           
           
          


      </div>



      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption></figcaption>
          </figure>
          
              
          <div>
             <h1 style={{marginLeft:'100px'}}>Wedding </h1></div> 
              
              

            </section>
           
           
          


      </div>

      <div className="cards">
        <section className="card">
          <figure>
            <div className="img-overlay hot-home">
              <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D" alt="Trulli" />
              <div className="overlay"><a href="#">view property</a></div>
              <div className="cont">
                <div className="icons-img">
                  <button><FontAwesomeIcon icon={faHeart} /></button>
                  <button><FontAwesomeIcon icon={faShare} /></button>
                </div>
              </div>
            </div>
            <figcaption></figcaption>
          </figure>
          
              
          <div>
             <h1 style={{marginLeft:'100px'}}>Workshop</h1></div> 
              
              

            </section>
           
           
          


      


      </div>


      

   


  </div>
        </>
    )
}
export default Property