import * as React from 'react'
import { otherActionButton } from "./ActionButton.css"

interface ButtonProps {
  children: string;
  onClick: Function;
}

export const OtherActionButton = (props: ButtonProps) => {
  const onClick = (_: any) => { 
    props.onClick(); 
  };
  return <button className={otherActionButton} onClick={ onClick }>{props.children}</button>;
};