import React from 'react';
import './Booking.css'
import bgImage from "../../bgimage/background.png"
import { useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    border: "1px solid gray",
    margin:"5px",
    width: 138,
  },
}));

const Booking = () => {
    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

  console.log(watch("example"));

  const bookingStyle={
        backgroundImage:`url(${bgImage})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover",
        width:"100%",
        position:"fixed",
        height:'100%',
        display:'flex',
        
  }

    return (
        
       <div style={bookingStyle}>

          <div className="details-container">
            
          </div>
           <div className="booking-container" >
                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                    <input name="example" defaultValue="" ref={register} placeholder="Origin" />
                    <br/>
                    <input name="exampleRequired" ref={register({ required: true })} placeholder="Your Destination" />
                    <form className={classes.container} noValidate>
                    <TextField id="date"label="From"type="date"defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{shrink: true,}}/>
                    <TextField id="date"label="To"type="date"defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{shrink: true, }}/>
                    </form>
                    <input type="submit"/>
                    <br/>
                    {errors.exampleRequired && <span className="error" >This field is required</span>}
                </form>
                
                 <Link to="/room" ><button> Start Booking </button></Link>
            </div>
       </div>


    );
};

export default Booking;