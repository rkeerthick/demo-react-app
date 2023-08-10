/* eslint-disable no-unused-vars */
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {

  const [details, setDetails] = useState([]);

    function addTask(
        title,
        startDate,
        endDate,
        desc,
        asignment,
        level,
        stus,
        RCA
    ) {
        setDetails([
            ...details,
            {
                id: title,
                title: title,
                startDate: startDate,
                endDate: endDate,
                desc: desc,
                assignment: asignment,
                level: level,
                status: stus,
                rca: RCA,
            },
        ]);
    }




  const navigate = useNavigate();

  const assignment = ["Developer", "QA", "PM", "PO"];

  const level = ["Major", "Minor", "Cosmetic"];

  const status = ["Open", "Closed", "Fixed", "Reopen"];

  const [title, setTitle] = useState("");

  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();

  const [desc, setDesc] = useState("");

  const [asignment, setAsignment] = useState("");

  const [lvl, setLevel] = useState("");

  const [stus, setStatus] = useState("");

  const [RCA, setRCA] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // addTask(title, startDate, endDate, desc, asignment, lvl, stus, RCA);
    setDetails([
      ...details,
      {
          id: title,
          title: title,
          startDate: startDate,
          endDate: endDate,
          desc: desc,
          assignment: asignment,
          level: level,
          status: stus,
          rca: RCA,
      },
  ]);
  }

  console.log(details);

  return (
    <div className="container">
      {/* <Link to="/Home">Home</Link> */}
      <input
        type="button"
        value="Home"
        onClick={() => navigate("/Home", { from: "/Form" })}
      />
      <form action="" onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            maxLength={50}
            selected={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            // onChange={(event) =>
            // (event.target.value.length > 5) ? event.target.readOnly = true : event.target.readOnly=false}
            name="title"
            className="title"
            placeholder="title"
          />

          <DatePicker
            className="date-picker"
            selected={startDate}
            onChange={(newDate) => setStartDate(newDate)}
            label="Start Date"
          />
          <DatePicker
            className="date-picker"
            selected={endDate}
            onChange={(newDate) => setEndDate(newDate)}
            label="End Date"
          />
          <textarea
            maxLength={500}
            className="description"
            placeholder={desc}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          ></textarea>
          <div className="drop-down">
            <select
              className=""
              onChange={(event) => {
                setAsignment(event.target.value);
              }}
            >
              <option>Assignment</option>
              {assignment.map((assignment, index) => (
                <option key={index}>{assignment}</option>
              ))}
            </select>
            <select
              className=""
              onChange={(event) => {
                setLevel(event.target.value);
              }}
            >
              <option>Level</option>
              {level.map((level, index) => (
                <option key={index}>{level}</option>
              ))}
            </select>
            <select
              className=""
              onChange={(event) => {
                setStatus(event.target.value);
              }}
            >
              <option>Status</option>
              {status.map((status, index) => (
                <option key={index}>{status}</option>
              ))}
            </select>
          </div>
          <textarea
            maxLength={5000}
            placeholder={RCA}
            onClick={(event) => {
              stus === "Fixed"
                ? (event.target.readOnly = false)
                : (event.target.readOnly = true);
              setRCA(event.target.value);
            }}
            className=""
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
