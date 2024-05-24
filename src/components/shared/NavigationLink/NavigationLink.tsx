import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onCklick?: () => Promise<void>;
};
const NaivgationLink = (props: Props) => {
  return (
    <Link
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {props.text}
    </Link>
  );
};

export default NaivgationLink;
