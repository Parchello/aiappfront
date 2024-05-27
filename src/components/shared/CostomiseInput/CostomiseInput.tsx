import { TextField } from "@mui/material";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CostomiseInput = (props: Props) => {
  return (
    <TextField
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      inputProps={{
        style: {
          width: "300px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
    />
  );
};

export default CostomiseInput;
