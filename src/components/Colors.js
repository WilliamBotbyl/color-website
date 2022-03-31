import React, { useState } from "react";
import SingleColor from "./SingleColor";
import "./indexx.css";

import Values from "values.js";

function Colors() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Gnerator</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="#f15025"
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            className={`${error ? "error" : "input-success"}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default Colors;
