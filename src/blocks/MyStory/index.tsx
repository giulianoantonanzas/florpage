import BTNSimple from "./../../components/BTNSimple"
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
  return (
    <div className={`${Style.myStory} my-5`}>
      <div className={`${Style.imageStory}`}>{image && <img src={image} alt="mi historia" />}</div>
      <div className={`${Style.blockText} p-5`}>
      {title && <h3>{title}</h3>}
      {subTitle && <p>{subTitle}</p>}
      {text && <p>{text}</p>}
      {buttonText && <BTNSimple small={false} buttonText={buttonText} />}
      </div>


    </div>
  );
};
export default MyStory;
