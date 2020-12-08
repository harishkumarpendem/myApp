import React, {Fragment} from 'react'

let Home = () => {
    return (
        <Fragment>
         <div className='full-screen-background'>
            <div className="wrapper">
                <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
                    <h1 className="display-3">Welcome to My Kart</h1>
                <p className="lead mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque a obcaecati laudantium tenetur velit provident soluta, distinctio consequatur labore commodi, nulla facere. Cupiditate sunt fugiat illum id minima similique.</p>
                <div>
                    <button className ="btn btn-light">Shop now</button>
                </div>
                </div>
            </div>
         </div>
        </Fragment>
    );
};

export default Home;