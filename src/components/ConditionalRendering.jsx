function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  );
}

function Item({ isPacked, name }) {
  //   if (isPacked) {
  //     return <li className="item">{name} ✓</li>;
  //   }

  //   return <li className="item">{name} </li>;

  // Otra manera
  //   return (
  //     <li className="item">
  //       {name} {isPacked && <CheckIcon />}
  //     </li>
  //   );

  // Con mas opciones
  return (
    <li className="item">
      {name} {isPacked ? <CheckIcon /> : <XIcon />}
      <p style={!isPacked ? { color: "red" } : { color: "green" }}>
        Prueba de estilo
      </p>
    </li>
  );
}

// https://beta.reactjs.org/learn/conditional-rendering
function ConditionalRendering() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul type="circle">
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
        <Item name="Sandals" />
      </ul>
    </section>
  );
}

export default ConditionalRendering;
