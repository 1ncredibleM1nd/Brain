import DatePicker from "react-datepicker";

export const StyledPicker = () => {
  return <DatePicker onChange={(date, event) => console.log(date)} />;
};
