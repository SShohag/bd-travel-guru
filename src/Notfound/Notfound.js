import React from 'react';

const Notfound = () => {
    const notFoundStyle={
        textAlign: 'center',
        marginTop:"200px",
    }
    return (
        <div style={notFoundStyle} >
            <h4> Sorry page is not available </h4>
            <p style={{color:'red'}} > Error 404! </p>
        </div>
    );
};

export default Notfound;