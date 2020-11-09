import React from 'react';
import { NavLink } from 'react-router-dom';

const Hcard = (props) =>{
    return(
        <>     
        <div className="col-md-4 col-10 mx-auto">
            <div className="card home-card shadow p-3 rounded bg-white text-dark">
                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.desc}</p>
                    <p className="text-center"><NavLink to="#" className="btn btn-primary button-home-card">{props.button}</NavLink></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hcard;

{/* <div className="col-lg-1"></div>
<div className="col-lg-3 col-md-4 card-info shadow p-3 mb-5 rounded bg-white text-dark mt-3 mb-3 pt-3 pb-3 controls nounderline mx-auto">
<h4 className="text-center cardimage"></h4>
</div>
<div className="col-lg-3 col-md-4 card-info shadow p-3 mb-5 rounded bg-white text-dark mt-3 mb-3 pt-3 pb-3 controls mx-auto">
</div>
<div className="col-lg-3 col-md-4 card-info shadow p-3 mb-5 rounded bg-white text-dark mt-3 mb-3 pt-3 pb-3 controls mx-auto">
</div>
<div className="col-lg-1"></div> */}