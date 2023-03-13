import { useRef, useState } from "react";
const MyNewForm = () => {
  //useRef is same as useState which can store values but useRef won't refresh the component
  const name = useRef(null);
  const [show, setShow] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(name.current.value);
    setShow(true)
  };

  return (
    /**
     * In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
     */
    <div>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="enter name" ref={name} />
        <button>click</button>
      </form>
      {show ? `your name is ${name.current.value}`:''}
    </div>
  );
};
export default MyNewForm;
