import { useRef } from "react";
import BTNSimple from "../../components/BTNSimple";
import useViewComponent from "../../hooks/useViewComponent";
import Style from "./Style.module.scss";

export type MyExpertiseyProps = {
  image?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  buttonText?: string;
  reverse?: boolean;
};

const MyExpertise: React.FC<MyExpertiseyProps> = ({
  image,
  title,
  subTitle,
  text,
  buttonText,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const activateAnimation = useViewComponent(imageRef)


  return (
    <div className={`${Style.MyExpertise}`}>
      {title && <h2 className="text-center my-5">{title}</h2>}
      <div className="d-flex flex-wrap align-items-center container">
        <div ref={imageRef} className={`col-xl ${Style.imageExpertise} ${activateAnimation ? Style.displayAnimationImage : "" }`}>
          {image && <img className="m-auto" src={image} alt="my expertise" />}
        </div>
        <div className="col-xl">
          {subTitle && (
            <p>
              <b>{subTitle}</b>
            </p>
          )}
          {text && <p>{text}</p>}
          {buttonText && (
            <div className="my-4"><BTNSimple buttonText={buttonText} reverseColor={true} /></div>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default MyExpertise;
