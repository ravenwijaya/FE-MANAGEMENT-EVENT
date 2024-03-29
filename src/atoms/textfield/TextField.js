import TxtField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  codingcamp: {
    width: "350px",
    marginBottom: "10px",
  },
  root: {
    width: "250px",
    marginRight: "10px",
  },
  questionfeedback: {
    width: "400px",
    marginRight: "10px",
  },
});
const TextField = ({
  type,
  variant,
  label,
  name,
  className,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <TxtField
      // data-testid={datatest}
      // error={error === ""}
      // helperText={error === "" ? "Empty field!" : " "}
      type={type}
      variant={variant}
      label={label}
      name={name}
      className={classes[className]}
      {...rest}
    />
  );
};
TextField.propTypes = {
  // error: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
  variant: "outlined",
  label: "",
  name: "",
  className: "",
};
export default TextField;
