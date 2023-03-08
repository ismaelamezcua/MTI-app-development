function Button({ handleClick, children }) {
  return (
    <a
      href="#"
      style={{
        borderRadius: "8px",
        padding: "4px",
        backgroundColor: "gray",
        color: "white",
        textDecoration: "none",
      }}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
function RespondingEvents() {
  function handleClick() {
    alert("You clicked the button!");
  }

  return (
    <>
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert("You clicked the other button!")}>
        Another button
      </button> */}
      {/* <Button handleClick={() => alert("First button")} />
      <Button handleClick={() => alert("Second button")} /> */}
      <Button handleClick={handleClick}>First button</Button>
      <Button handleClick={handleClick}>Second button</Button>
    </>
  );
}

export default RespondingEvents;
