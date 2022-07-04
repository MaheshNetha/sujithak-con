import React from "react";
import styled from 'styled-components';

const CardWrap = styled.div`
  background: none;
  position: relative;
  outline: 0;
  padding-bottom:15px;
  height:auto;
  width:100%
`;

const Heading = styled.h4`
font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 150%;
letter-spacing: -0.15px;
color: #333333;
`;

const CardLayout = ({children,title,...props})=>{


    return (
        <>
        <CardWrap>
            <Heading>
            {title}
            <hr></hr>
            </Heading>
            {children}
        </CardWrap>
        
        </>
    )
}

export default CardLayout;