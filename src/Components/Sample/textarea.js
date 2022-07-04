import React,{useRef ,useState } from "react";
import styled from 'styled-components';

const AnimatedLabel = styled.label`
  white-space: nowrap;
  padding: 1px 2px;
  background-color: #fff;
  position: absolute;
  font-size: 11px;
  pointer-events: none;
  transition: 0.2s ease all;
  color: #999999;
  color: 1px solid black;
  opacity: 1;
  text-align:center;
  left: 8px;
  top: 6px;

  
`;

const InputWrap = styled.div`
  background: none;
  position: relative;
  z-index: 1;
  outline: 0;
  padding-bottom:15px;
`;

const InputField = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 2px solid #daddec;
border-radius: 2px;
left: 20px;
top: 12px;
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
letter-spacing: -0.15px;
color: #333333;
  height: 34px;
  width: ${(props) => (props.width || '295px')};
  text-align:left;
  &:focus ~ label {
    left: 10px;
    top: -9px;
    font-size: 13px;
  }
  &:focus-visible {
    outline: none;
    border: 1px solid ;
  }
 
`;

export const RequiredSpan = styled.span`
  ${({ required, theme }) => (required === true
        ? `
        color: red;
        font-size: 14px;
        padding-right: 5px;
        `
        : `display: none
    `)}
`;


const TextArea = props => {
    const {
        type,
        label,
        fieldName,
        required,
        width,
        refe,
        
    } = props;

   
   

    return (
        <InputWrap>
            <label htmlFor={label}>
               
                <textarea
            name={fieldName}
            required={required}
            ref={refe}
            width = {width}
            rows="3"
            cols="50"
          ></textarea>
                <AnimatedLabel>
                    {required && <RequiredSpan required>*</RequiredSpan>}
                    {label}
                </AnimatedLabel>
            </label>


        </InputWrap>

    );
};

export default TextArea;