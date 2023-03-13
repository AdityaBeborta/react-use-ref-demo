import React, { useRef } from "react";

const MyForm = () => {
  //useRef is same as useState which can store values but useRef won't refresh the component
  const email = useRef(null);
  const formHandler = (e) => {
    e.preventDefauLt();
    console.log("triggered");
    console.log(email);
  };
  return (
    /**
     * In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself. To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
     */
    <div>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="enter name" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default MyForm;
