import { useRef} from "react";
import useViewComponent from "../../hooks/useViewComponent";
import BTNSimple from "./../../components/BTNSimple";
import Style from "./Style.module.scss";

export type MyStoryProps = {
  image?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  buttonText?: string;
  reverse?: boolean;
};

const MyStory: React.FC<MyStoryProps> = ({
  image,
  title,
  subTitle,
  text,
  buttonText,
  reverse,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const activateAnimation = useViewComponent(imageRef)

  return (
    <div className={`${Style.myStory} mt-5`}>
      <div ref={imageRef} className={`${Style.imageStory}`}>
        {image && (
          <img
            className={`${activateAnimation ? Style.displayAnimationImage : ""}`}
            src={image}
            alt="mi historia"
          />
        )}
      </div>
      <div className={`${Style.blockText} p-5`}>
        {title && <h2>{title}</h2>}
        {subTitle && <p>{subTitle}</p>}
        {text && <p>{text}</p>}
        {buttonText && <BTNSimple small={false} buttonText={buttonText} />}
      </div>
    </div>
  );
};
export default MyStory;
