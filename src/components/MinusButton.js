const MinusButton = (props) => {
  const handleClick = () => {
    const newTab = [...props.counters]
    newTab[props.index] = newTab[props.index]-1
    props.setCounter(newTab);
  };

  return (
    <button
      className={`minus-button`}
      onClick={handleClick}
      style={{ visibility: props.counter < 1 ? "hidden" : "visible" }}
    >
      <i class="fas fa-minus fa-5x"></i>
    </button>
  );
};

export default MinusButton;
