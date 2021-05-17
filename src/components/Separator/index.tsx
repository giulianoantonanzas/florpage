import Style from "./Style.module.scss";

export type SeparatorProps = {
  reverse?:boolean
};

const Separator:React.FC<SeparatorProps> = ({reverse}) => {
  return <div className={`${!reverse?Style.separador : Style.separadorTop}`}></div>;
};
export default Separator;
