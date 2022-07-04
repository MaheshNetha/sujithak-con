import React, { useState, useRef } from "react";
import styled from 'styled-components';
import Input from '../Sample/Input'
import MainScreen from '../LandingPage/MainScreen'
import "../ToolsAndSupplies/tools.css";
import CardLayout from "./card";



const CompanyName = styled(Input)`
padding: 20px;
width: 335px;
height:50px;
`;
const RepairsAndSatisfaction = () => {

  const [items, setItems] = useState([
    { id: 1, value: "Repair", checked: false },
    { id: 2, value: "Satisfaction", checked: false },
    { id: 5, value: "Other", checked: false },
  ]);
  const se = useRef(0);
  const descriptionRef = useRef(1);
  const companyNameRef = useRef(3);
  const amountPaidRef = useRef(4);
  const commentRef = useRef(5);
  const beingRepairedRef = useRef(6)

  let expanded = false;

  const handleChange = (e) => {
    e.preventDefault()
    const { target:{value} } =e;

    if(+value === 5) {
        descriptionRef.current.classList.remove("description");
    }
    else {
        descriptionRef.current.classList.add("description");
    }
  };


  return (
    <MainScreen title='Repairs/Maintenance'>

    <div className="container-text">

        <CardLayout title="Search Invoice">
        <form> 
<div className="horizontal-field" > <CompanyName
        type="text"
        fieldName="invoiceNumber"
        refe={companyNameRef}
        label="Original Invoice Number"
        required={true}

    /></div> 
<div className="horizontal-field" > <CompanyName
        type="date"
        fieldName="invoiceDate"
        refe={companyNameRef}
        label="Original Invoice Date"
        required={true}

    /></div> 

<div className="horizontal-field" > <CompanyName
        type="text"
        fieldName="storeNumber"
        refe={companyNameRef}
        label="Original Store Number"
        required={true}

    /></div> 
    <div className="horizontal-field" > 
    <button className="search-btn">
    <i class="fa fa-search" aria-hidden="true"></i>

    </button>
    </div> 
</form>
               </CardLayout>
               
<CardLayout title="Customer Details">
<form>
<div className="horizontal-field" > 
         <CompanyName
        type="text"
        fieldName="firstName"
        refe={companyNameRef}
        label="First Name"
        required={true}

    /></div>
<div className="horizontal-field" > 
         <CompanyName
        type="text"
        fieldName="lastName"
        refe={companyNameRef}
        label="Last Name"
        required={true}

    /></div>
<div className="horizontal-field" >
    
<CompanyName
        type="text"
        fieldName="Company"
        refe={companyNameRef}
        label="Company Name"
        required={true}

    />
     </div>

     <div className="comments">
          
          <Input
               type="text"
               fieldName="address"
               label="Address"
               refe={commentRef}
               required={false}
               width='100%'
           />
</div>

<div className="horizontal-field" > 
         <CompanyName
        type="text"
        fieldName="city"
        refe={companyNameRef}
        label="City"
        required={true}

    /></div>
<div className="horizontal-field" > 
         <CompanyName
        type="text"
        fieldName="state"
        refe={companyNameRef}
        label="State"
        required={true}

    /></div>
<div className="horizontal-field" >
    
<CompanyName
        type="text"
        fieldName="Zip"
        refe={companyNameRef}
        label="Zip"
        required={true}

    />
     </div>
     <div className="horizontal-field" >
    
    <CompanyName
            type="tel"
            fieldName="phoneNumber"
            refe={companyNameRef}
            label="Phone Number"
            required={true}
    
        />
         </div>
<hr></hr>
         <CompanyName
        type="text"
        fieldName="Company"
        refe={companyNameRef}
        label="Company Name"
        required={true}

    />

   <div className="repair-select">
   <select ref={beingRepairedRef} onChange={handleChange} >
    <option>Select Purpose</option>
   {items.map(i=> (<option key={i.id} value={i.id}>{i.value}</option>))} 

   </select>
   </div>
   
        <Input
          fieldName="Amount Paid"
          refe={amountPaidRef}
          label="Amound Paid"
          required={true}
          type="number"
          placeholder="Amount Paid"
          name="amount"
                 />

        <div ref={descriptionRef} className="description">
         
          <Input
                        type="text"
                        fieldName="description"
                        label="Description"
                        refe={descriptionRef}
                        required={false}
                        width='100%'
                    />
        </div>
        <div className="comments">
          
                   <Input
                        type="text"
                        fieldName="Comments"
                        label="Comments"
                        refe={commentRef}
                        required={false}
                        width='100%'
                    />
        </div>

        <p>
          <div className="attach-report">
            <input
              type="checkbox"
              name="attact"
              className="form-control"
              placeholder=""
              value=""
            ></input>
            <label for="input-field">Attach Report</label>
          </div>
        </p>
      </form>

</CardLayout>
      
    </div>
    </MainScreen>
  );
};

export default RepairsAndSatisfaction;
