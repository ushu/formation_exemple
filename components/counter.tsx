"use client";

import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(0);

  return (
    <form
      className="text-white"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label> Counter: {state} </label>
      <button
        className="ml-4 p-2 bg-gray-600 rounded-md"
        onClick={() => setState((state) => state + 1)}
      >
        Next
      </button>
    </form>
  );
}
