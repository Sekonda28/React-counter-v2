const PlusButton = (props) => {
  const handleClick = () => {
    const newTab = [...props.counters]
    newTab[props.index] = newTab[props.index]+1
    props.setCounter(newTab);
  };

  return (
    <button
      className="plus-button"
      onClick={handleClick}
      style={{ visibility: props.counter > 9 ? "hidden" : "visible" }}
    >
      <i class="fas fa-plus fa-5x"></i>
    </button>
  );
};

export default PlusButton;
