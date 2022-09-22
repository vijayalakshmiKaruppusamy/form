import {  useState } from "react";
import "./App.css";

function App() {

  const initialValues = {
     username: "" ,
     address : "",
     zipcode : "",
     email : "",
     phone : "",
     password : "" ,
     verify : ""
};

 //use state
  const [formValues, setFormValues] = useState(initialValues); // To store form values 
  const [formErrors , setFormErrors] = useState({}); // To store form errors
  const[list,setList] = useState([]);
 
  
  // when type something inside the input Field ,  need to update the values. 
  //so we will use handleChange function 
   const handleChange = (e) => {
           const { name, value } = e.target;
           setFormValues({ ...formValues, [name] : value});

   
   // when we start to type the value, the error message should be disappear
    if(formValues.username)
        formErrors.username = "";
    
    if(formValues.address)
         formErrors.address = "";
      
     if(formValues.zipcode)
         formErrors.zipcode = "";
    
     if(formValues.email)
        formErrors.email="";
  
     if(formValues.phone)
        formErrors.phone="";
    
    if(formValues.password)
      formErrors.password="";
    
    if(formValues.verify)
       formErrors.verify="";

};

const handleSubmit = (e) => {
    e.preventDefault();   // to prevent the form gets submit
    setFormErrors(Validate(formValues));
     setList((list) => [...list,formValues])
}


//to clear the values and error message
const handleClick = () => {
  setFormValues({});
  setFormErrors({});
};

// input validation
const Validate =(values) => 
{
  const errors = {};
 
  if(!values.username)
       errors.username = "Please enter your name!";
  
  
  if(!values.address)
        errors.address = "Please enter your address!";
   else if(values.address.length>50)
       errors.address = "Incorrect";
  
  
  if(!values.zipcode)
        errors.zipcode= "Please enter Zip Code!";
  else if(/^[a-zA-Z]*$/.test(values.zipcode))
        errors.zipcode = "Please enter correct zipcode"
   else if(values.zipcode.length !== 6)
        errors.zipcode = "Zip Code must be 6 Characters";
  else
        errors.zipcode = "";
    
  
   if(!values.email)
       errors.email = "Please enter your email Address!"; 
   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
       errors.email = 'Invalid email address';

  
     if(!values.phone)
      errors.phone = "Please enter your Phone number!"; 
    else if(/^[a-zA-Z]*$/.test(values.phone))
        errors.phone = "Please enter Numbers only"
    else if(values.phone.length !== 10)
      errors.phone = "Phone number must be 10 characters";
    else
      errors.phone = "";
  
   
      if(!values.password)
       errors.password = "Please enter your password!"; 

  
       if(!values.verify)
        errors.verify = "Please enter this Verify password Field!"; 
      else if(values.password !== values.verify)
         errors.verify = "Does not match"; 
  
 return errors;
}

return (
  <div>
  <form onSubmit={handleSubmit} className="form">
        
         <h1>Form Validation</h1>
        
        <div className="inputfield">
         <label >Username<span>*</span></label>
        <input  
         type="text"  
         name="username" 
         value={formValues.username} 
         onChange={handleChange} />
        <p className="errormsg">{ formErrors.username }</p>
        </div>
        
        <div className="inputfield">
        <label>Address<span>*</span></label>
        <input   
        type="textarea" 
        name="address" 
        value={formValues.address} 
        onChange={handleChange}/>
        <p className="errormsg">{ formErrors.address }</p>
        </div>

        <div className="inputfield">
        <label>Zip Code<span>*</span></label>
        <input  
         type="text" 
         name="zipcode" 
         value={ formValues.zipcode }  
         onChange={handleChange} />
        <p className="errormsg">{ formErrors.zipcode }</p>
        </div>
         
        <div className="inputfield">
        <label>Email<span>*</span></label>
        <input  
         type="email"
         name="email" 
         value={ formValues.email }  
         onChange={handleChange} />
        <p className="errormsg">{ formErrors.email }</p>
        </div>

        <div className="inputfield">
        <label>Phone<span>*</span></label>
        <input  
         type="text" 
         name="phone" 
         value={formValues.phone} 
         onChange={handleChange} />
        <p className="errormsg">{ formErrors.phone }</p>
        </div>
          
        <div className="inputfield">
        <label>Password<span>*</span></label>
        <input  
           type="password"
           name="password" 
           value= { formValues.password} 
           onChange={handleChange} 
           maxLength={8} 
           minLength ={6} />
        <p className="errormsg">{ formErrors.password }</p>
        </div>
        
        <div className="inputfield">
        <label>Verify Password<span>*</span></label>
        <input 
           type="password" 
           name="verify" 
           value= { formValues.verify} 
           onChange={handleChange}
           maxLength={8} 
           minLength ={6} />
        <p className="errormsg">{ formErrors.verify }</p>
        </div>
      
      <div className="buttoncontent">
      <input 
        type="submit" 
        value="SUBMIT"  
        name="submit"  
        className="buttons"  />
      <input 
        type="reset" 
        value="CLEAR"  
        name="clear"  
        className="clearbutton" onClick={handleClick} />
      </div>
      
    </form>

    {
      list.map((a) =>
       <div>
        <li>{a.username}</li>
        <li>{a.address}</li>
        <li>{a.zipcode}</li>
        <li>{a.email}</li>
        <li>{a.phone}</li>
        <li>{a.password}</li>
        <li>{a.verify}</li>
       </div>
        )
    }
</div>
);

}

export default App;