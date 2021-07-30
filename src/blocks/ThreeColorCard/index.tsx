import React from "react";
import BTNSimple from "./../../components/BTNSimple"
import Separator from "./../../components/Separator";
import imageExample from "./../../assets/images/therapist-05.png";

export type ThreeColorCardProps = {
  data: Array<{
    img?: string;
    title?: string;
    text?: string;
    buttonText?: string;
  }>;
  hasRedounded?: boolean;
};

const ThreeColorCard: React.FC<ThreeColorCardProps> = ({
  data,
  hasRedounded,
}) => {
  return (
    <div className="tree-color-card">
      {hasRedounded && <Separator reverse={true} />}
      <div className="d-flex flex-wrap">
        {data.map((item, i) => {
          return (
            <div key={i} className={`col-xl text-center bg-color-${i + 1} ${i%2!==0 && "text-white"}`} style={{padding:"7% 4%"}}>
              <img src={imageExample} alt="img example" className="py-3 mt-1" />
              {item.title && (
                <h4>
                  <b>{item.title}</b>
                </h4>
              )}
              {item.text && <p>{item.text}</p>}
              {item.buttonText && <div className="mt-4"><BTNSimple small={true} buttonText={item.buttonText} /></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeColorCard;
