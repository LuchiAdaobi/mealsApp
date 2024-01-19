// import { useContext } from "react";
import { useGlobalContext } from "../context";

export default function Meals() {
  //   const context = useContext(AppContext);
  const context = useGlobalContext();
  console.log(context);

  return <h1>Meals</h1>;
}
