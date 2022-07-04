import React from "react";
import Mainlogo from "../../Images/Mainlogo.png";
import download from "../../Images/download.png";
import NavList from "./NavList";
import "./Header.css";
export default function Header(props) {
  const {title} = props;
  return (
    <div className="MainContent">
      <div className="HeadContent content1">
        <div style={{fontSize:"30px",marginBottom:"35px"}}>Vouchers
        <NavList ></NavList>
        </div>
        
        <div style={{fontSize:"30px"}}>Pay Out</div>
      </div>

      <div className="HeadContent content2">
        <div>
          <img src={Mainlogo} width="180px" height="54px"></img>
        </div>
        <div style={{fontSize:"30px"}}>{title}</div>
      </div>

      <div className="HeadContent content3">
      <div style={{fontSize:"20px",float:"right",marginBottom:"0px"}}><span style={{float:"left",fontSize:"18px"}}>Jane Cooper</span> <img src={download} width="60px" height="60px"></img>
        <span style={{float:"right",lineHeight:"5",fontSize:"18px"}}>Exit</span>
        </div>
                                                                                                                                                                        

        <div style={{color:"#0096FF",marginTop:"0px",fontSize:"30px"}}>Back To Main Screen</div>
      </div>
    </div>
   
  );
}
