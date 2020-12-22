import React, {Fragment} from 'react'

let Alert = () => {
    return (
        <Fragment>
         <div className="alert alert-danger alert-dismissible mt-2">
             <button className="close" data-dismiss="alert">
                 <i className="fa fa-times-circle" />
             </button>
             I am an Alert
         </div>
        </Fragment>
    );
};

export default Alert;
