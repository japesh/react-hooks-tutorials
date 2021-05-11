import React, { useState, useCallback } from "react";

/**
 * 
 * Variables:
 * 1. let value assigned can be change
 * 2. const value can't be assigned can be change
 * depricated variable: var
 * let var;
 * type of variables
 * 1. string
 * 2. number
 * 3. float
 * 4. boolean
 * 5. Array
 * 6. Object
 * 7. Set
 * 8. Map
 * 
 * const x="dgfhjkl";
  const y = []
  const z=y
  y.push(12)
  x+="sdfghjkl"
  y.push(12);
  console.log(x, z)// x:dgfhjklsdfghjkl z:dgfhjkl

  regex


 */

// const regex=/\/d*/

//  function z(){
//    console.log("dfjhvdck")
//  };
//  function main(){
//   let x=123
//    console.log("x", x);

//    z()
//   setTimeout(() => {
//     console.log("dfghjkl")
//   }, 100);
//   setTimeout(function () {
//     console.log("dvnmfghjkl")
//   }, 100);
//   console.log("hello")
//   // api hit
//   // further implementation
//  }

// addEventLister("click", ()=>{}, true)
// for

async function x() {
  try {
    const response = await new Promise((resolve, reject) => {
      // api hit
      // resolve("response");
      // reject(new Error("custom message"));
    });
    console.log(response); // "response"
  } catch (error) {
  } finally {
  }

  // api hit
  // console.log("fghj");
}

function getX() {
  const z=123
  return function x(...rest) {
    
    console.log(z);
  };
}

x=getX();
// heavy calculation;
console.log(x) // function
console.log(x()) // 123 

export default function AddTodo({ onSubmit }) {
  const [value, setText] = useState("random");
  const _onChange = useCallback((e) => {
    // e.target.value
    setText(e.target.value);
    // onChange({ value: e.target.value });
  }, []);
  const _onSubmit = useCallback(
    (e) => {
      // e.target.value
      onSubmit({ value });
      setText("");
    },
    [value]
  );

  return (
    <>
      <input value={value} type="text" onChange={_onChange} />
      <input type="button" onClick={_onSubmit} value="submit" />
    </>
  );
}
