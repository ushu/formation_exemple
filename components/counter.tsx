"use client";

import { useState } from "react";
import getRandomValue from "./getRandomValue";

export default function Counter() {
  const [state, setState] = useState(0);

  async function onClick() {
    setState(await getRandomValue());
  }

  return (
    <form
      className="text-white"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label> Counter: {state} </label>
      <button className="ml-4 p-2 bg-gray-600 rounded-md" onClick={onClick}>
        Randomize
      </button>
    </form>
  );
}
