const AddCounter = (props) => {
  const handleClick = () => {
    const newTab = [...props.counters];

    newTab.push(0);

    props.setCounter(newTab);
  };

  return (
    <button
      className="reset-button addCounter"
      onClick={handleClick}
      style={{ visibility: props.counters.length === 3 ? "hidden" : "visible" }}
    >
      Add Counter
    </button>
  );
};

export default AddCounter;
