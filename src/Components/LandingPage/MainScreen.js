import React, { Children } from 'react'
import LandingPageHeader from './LandingPageHeader'
import './MainScreen.css'
import Header from '../\'Navigation/Header'
import Footer from '../\'Navigation/Footer'


export default function MainScreen(props) {
  const {children} = props;
  return (
    <div>
      <Header transaction_type="Pay In" issuetype="Courier" title={props.title} />
        <div style={{margin:"0px 120px 0px 120px",backgroundColor:'white',padding:"20px"}}>
    
       {children}
  </div>
       <Footer text="SUBMIT"/>
    </div>

  )
}
