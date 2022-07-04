import React from 'react'
import './layout.css'
import Header from '../\'Navigation/Header'
import Footer from '../\'Navigation/Footer'


export default function Layout(props) {
  const {children} = props;
  return (
    <div>
      <Header transaction_type="Pay In" issuetype="Courier" />
        <div style={{margin:"0px 120px 0px 120px",backgroundColor:'white',padding:"20px"}}>
    
       {children}
  </div>
       <Footer text="SUBMIT"/>
    </div>

  )
}
