import React from "react";
import BTNSimple from "../../components/BTNSimple";
import Separator from "../../components/Separator";
import Style from "./Style.module.scss";

export type MastheadProps = {
  title?: string;
  text?: string;
  buttonText?: string;
};

const Masthead: React.FC<MastheadProps> = ({ title, text, buttonText }) => {
  return (
    <>
      <div className={`hero ${Style.hero}`}>
        <div className=" text-center">
          {title && <h1>{title}</h1>}
          {text && (
            <p>
              {text}
            </p>
          )}
          {buttonText && (
           <BTNSimple small={false} buttonText={buttonText}/>
          )}
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Masthead;
