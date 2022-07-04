import React, { useState, useRef } from "react";
import Pill from "./pill";
import styled from 'styled-components';
import Input from '../Sample/Input'
import MainScreen from '../LandingPage/MainScreen'
import "./tools.css";
import Select from "../Sample/select";



const CompanyName = styled(Input)`
padding: 20px;
width: 335px;
height:50px;
`;
const ToolsAndSupplies = () => {

  const [items, setItems] = useState([
    { id: 1, value: "Store tools/supplies", checked: false },
    { id: 2, value: "Brooms", checked: false },
    { id: 3, value: "Other", checked: false },
  ]);
  const se = useRef(0);
  const descriptionRef = useRef(1);
  const companyNameRef = useRef(3);
  const amountPaidRef = useRef(4);
  const commentRef = useRef(5);

  let expanded = false;

  const handleCheck = (e) => {
    setItems((prevState) => {
      const newState = prevState.map((obj) => {
        if (e.target.checked && obj.value === e.target.name) {
          if (e.target.name === "Other") {
            descriptionRef.current.classList.remove("description");
          }

          return { ...obj, checked: true };
        } else if (!e.target.checked && obj.value == e.target.name) {
          if (e.target.name === "Other") {
            descriptionRef.current.classList.add("description");
          }
          return { ...obj, checked: false };
        }
        return obj;
      });

      return newState;
    });
  };

  const handleRemoveItem = (val) => {
    const newState = items.map((obj) => {
      if (obj.value === val) {
        return { ...obj, checked: false };
      }
      return obj;
    });

    setItems(newState);
  };
  const showCheckboxes = () => {
    if (!expanded) {
      se.current.style.display = "block";
      expanded = true;
    } else {
      se.current.style.display = "none";
      expanded = false;
    }
  };

  const clearAll = () => {
    const newState = items.map((obj) => {
      return { ...obj, checked: false };
    });
    descriptionRef.current.classList.add("description");

    setItems(newState);
  };

  const ite = ()=>{
    const isExits = items.some(it=> it.checked);
 
   return <>
   
   {isExits && <div className="selectedITems"   >
   <p className="text-b">Selected Items:</p>

   <div className="pill-container">
     {items.map(
       (i) =>
         i.checked && (
           <Pill
             title={i.value}
             handleRemove={() => handleRemoveItem(i.value)}
           />
         )
     )}
   </div>
   <p className="text-b clear-btn" onClick={() => clearAll()}>
     Clear All
   </p>
</div> }
   </> 
  }
  return (
    <MainScreen title='Tools/Supplies'>

    <div className="container-text">
      <form>
         <CompanyName
        type="text"
        fieldName="Company"
        refe={companyNameRef}
        label="Company Name"
        required={true}

    />

   <Select
     type="text"
     fieldName="Items Selected"
     label="Items Selected"
     required={true}
     list={items}
     handleCheck={handleCheck}
   
   />


    {ite()}
       
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

export default ToolsAndSupplies;
