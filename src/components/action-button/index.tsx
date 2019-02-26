import * as React from 'react'
// import '../../styles/index.css'
// import { actionButton }from "./ActionButton.css"

// console.log("ActionButton",  actionButton)
const actionButton = "bg-green"

interface ButtonProps {
  children: string;
  onClick: Function;
}

export const ActionButton = (props: ButtonProps) => {
  const onClick = (_: any) => { 
    props.onClick(); 
  };
  return <button className={ actionButton } onClick={ onClick }>{props.children}</button>;
};