import React from 'react';
import '../css/home.css';
import HCard from '../components/Hcard';
import Carddata from '../components/Carddata';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto banner-home">
            <div className="lg-form form-group search-container w-50">
                <h1 className="d-block text-center text-light pb-4">Your dream becomes true</h1>
                <h5 className="d-block text-center text-light pb-4">"Home is the nicest word there is"</h5>
              <input type="text" 
              className="form-control form-control-lg shadow-lg p-3 mt-1 bg-white rounded search" 
              placeholder="Enter an address, city or nighborhood"/>
            </div>
          </div>
          </div>  
        </div>

        <div className="py-5 bg-light">
            <h3 className="text-center font-weight-bold">We have the most listings and constant updates. 
            <pre>So you’ll never miss out.</pre></h3>
        </div>

        {/* displaying data in card using map method from arry of an object*/}

        <div className="container-fluid pb-5 bg-light">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                      {
                        Carddata.map((value, indno) => {
                          return <HCard key = {indno}
                            imgsrc = {value.imgsrc}
                            title = {value.title}
                            desc = {value.desc}
                            button = {value.button}
                          />
                        })
                      }
                    </div>
                </div>
            </div>
        </div>
                    
        <Footer />                

      </section>
    </>
  );
}

export default Home;
