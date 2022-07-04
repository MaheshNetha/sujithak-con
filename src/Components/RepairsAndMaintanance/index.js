import React, { useState, useRef } from "react";
import styled from 'styled-components';
import Input from '../Sample/Input'
import MainScreen from '../LandingPage/MainScreen'
import "../ToolsAndSupplies/tools.css";



const CompanyName = styled(Input)`
padding: 20px;
width: 335px;
height:50px;
`;
const RepairsAndMaintenance = () => {

  const [items, setItems] = useState([
    { id: 1, value: "Janitorial/Linen", checked: false },
    { id: 2, value: "Landscaping", checked: false },
    { id: 3, value: "Lighting/Bulbs", checked: false },
    { id: 4, value: "Windows Washing", checked: false },
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
        beingRepairedRef.current.classList.add("description");
    }
    else {
        descriptionRef.current.classList.add("description");
        beingRepairedRef.current.classList.remove("description");
    }
  };


  return (
    <MainScreen title='Repairs/Maintenance'>

    <div className="container-text">
      <form>
         <CompanyName
        type="text"
        fieldName="Company"
        refe={companyNameRef}
        label="Company Name"
        required={true}

    />

   <div className="repair-select">
   <select ref={beingRepairedRef} onChange={handleChange} >
    <option>Sub Reason</option>
   {items.map(i=> (<option key={i.id} value={i.id}>{i.value}</option>))} 

   </select>
   </div>
   <div ref={beingRepairedRef} className="description">

        <Input
          fieldName="beingRepaired"
          refe={beingRepairedRef}
          label="What is being repaired"
          required={true}
          type="text"
          placeholder="What is being repaired"
          name="beingRepaired"
          className="description"
                 />
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
    </div>
    </MainScreen>
  );
};

export default RepairsAndMaintenance;
