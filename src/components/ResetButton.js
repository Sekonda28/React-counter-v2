const ResetButton = (props) => {
  const handleClick = () => {
    const newTab = [...props.counters];
    newTab[props.index] = props.resetValue;
    props.setCounter(newTab);
  };

  return (
    <button className="reset-button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetButton;
