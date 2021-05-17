import Style from './Style.module.scss'

export type BTNSimpleProps = {
  buttonText: string;
  reverseColor?: boolean;
  small?: boolean;
};

const BTNSimple: React.FC<BTNSimpleProps> = ({
  buttonText,
  reverseColor,//todavia no agregado
  small,
}) => {
  return (
    <button className={`rounded-pill text-uppercase ${small===true ? "pt-2 pb-2 pr-4 pl-4" : "pt-3 pb-3 pr-5 pl-5"} ${!reverseColor?Style.btnColor : Style.reverseBtnColor}`}>
      {buttonText}
    </button>
  );
};

export default BTNSimple;
