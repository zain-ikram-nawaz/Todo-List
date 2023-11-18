import Button from "./components/button";
import List from "./components/list";
import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef();
  function Onhadler(e) {
    e.preventDefault();
  }
  const [arr, setArr] = useState([]);

  const AddItems = () => {
    setArr([...arr, inputRef.current.value]);
    inputRef.current.value = "";
    console.log(arr)
  };
  return (
    <div className="container">
    <>
      <h1>Todo List</h1>
      <form onSubmit={Onhadler}>
        <input className="int" type="text" ref={inputRef} />
      </form>
      <List arr={arr} />
      <Button click={AddItems}>Add Item</Button>
    </>
    </div>
  );
};