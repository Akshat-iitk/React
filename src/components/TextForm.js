import React from "react";
// anything you copy from other documentation yoou need to close the self closing HTMl tags because theey dont render in react
export default function TextForm(props) {
  return (
    <div>
      {/* <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div> */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">
         Comments
        </label> */}
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary">Covert to Uppercase</button>
    </div>
  );
}
