import React from "react";
import Input from "../../Components/Sample/Input";
import './form.css';
import MainScreen from "../../Components/LandingPage/MainScreen";
 const ToolsAndSuppliesForm = ()=> {

    return (
        <>
        <MainScreen title='Tools/Supplies'>
        <Input
        type="text"
        fieldName="Company"
        inputValue={[]}
        label="Company Name"
        required={true}

    />

    <Input
        type="text"
        fieldName="Items Purchased"
        label="Items Purchased"
        required={true}
    />

    <Input
        type="text"
        fieldName="Purpose"
        label="Purpose"
        required={true}
    />

    <Input
        type="text"
        fieldName="Others"
        label="Others"
        required={false}
    />

    <Input
        type="text"
        fieldName="Amount Paid"

        label="Amount Paid"
        required={true}
        disabled
    />

    <Input
        type="textarea"
        fieldName="Comments"
        label="Comments"
        height="50px"
        required={false}
        width='100%'
    />

    <input type="checkbox"></input>
    <span>
        <label> Attach receipt</label>
    </span>


        </MainScreen>
         
        </>
          )

}


export default ToolsAndSuppliesForm;