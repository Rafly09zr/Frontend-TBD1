import React, { useState } from "react";

const SqlBuilder = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [outputResult, setOutputResult] = useState("");

  const handleInputChange = (e) => {
    setInputQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://backend-tbd-1.vercel.app/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: inputQuery })
      });
      const data = await response.json();
      setOutputResult(JSON.stringify(data));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleClear = () => {
    setOutputResult("");
  };

  return (
    <>
      <h2 className="text-center mt-5">Custom SQL Query</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="input">Input:</label>
              <textarea
                type="text"
                id="input"
                className="form-control"
                name="input"
                value={inputQuery}
                onChange={handleInputChange}
                style={{ height: 400 }}
              />
            </div >
            <div className="text-center">
            <button className="btn btn-success" style={{ width: "400px" }} type="submit">
              Submit
            </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="output">Output:</label>
            <textarea
              type="text"
              id="output"
              className="form-control"
              name="output"
              value={outputResult}
              style={{ height: 400 }}
              readOnly
            />
          </div>
          <div className="text-center">
            <button className="btn btn-danger" style={{ width: "400px" }} onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default SqlBuilder;
