import "./App.css";
import React, { useState, useEffect } from "react";
import PuiMultiLineGraphDisplayComponent from "./js/PuiMultiLineGraphDisplayComponent";
import WebSocketClient from "./js/ws/WebSocketClient";

function App() {
  const wsc = new WebSocketClient("ws://dev.perigee.kr", 8700, "/ws", 100);
  const [data, setData] = useState();

  useEffect(() => {
    wsc.openConn();
  }, []);

  let thisDate = new Date();
  let thisYear = thisDate.getFullYear();

  let yearTotal = thisYear;
  let yeararray = [];
  for (let a = 2000; a <= yearTotal; a++) {
    yeararray.push(a);
  }

  let monthTotal = 12;
  let montharray = [];
  for (let a = 1; a <= monthTotal; a++) {
    montharray.push(a);
  }

  let dayTotal = 31;
  let dayarray = [];
  for (let b = 1; b <= dayTotal; b++) {
    dayarray.push(b);
  }

  let hourTotal = 24;
  let hourarray = [];
  for (let c = 1; c <= hourTotal; c++) {
    hourarray.push(c);
  }

  //year
  const yearArray = [];
  const yearData = yeararray;
  for (let i = 0; i < yearData.length; i++) {
    yearArray.push(<option>{yearData[i]}</option>);
  }
  //month
  const monthArray = [];
  const monthData = montharray;
  for (let i = 0; i < monthData.length; i++) {
    monthArray.push(<option>{monthData[i]}</option>);
  }
  //day
  const dayArray = [];
  const dayData = dayarray;
  for (let i = 0; i < dayData.length; i++) {
    dayArray.push(<option>{dayData[i]}</option>);
  }
  //hour
  const hourArray = [];
  const hourData = hourarray;
  for (let i = 0; i < hourData.length; i++) {
    hourArray.push(<option>{hourData[i]}</option>);
  }

  //video
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="fix_wrapper">
          <div className="title_table">
            <div className="title">
              <h1>Data</h1>
            </div>
            <div className="table_wrpper">
              <table width="100%">
                <thead width="100%">
                  <tr width="100%">
                    <th width="50%">d1</th>
                    <th width="50%">d2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12.34</td>
                    <td>5.67</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="chart_wrap">
          <PuiMultiLineGraphDisplayComponent
            title=""
            subtitle="m/s"
            data={data}
            width={500}
            height={269}
            maxdatapoints={50}
            xformat=" >-.0f"
            yformat=">-.0f"
            graphs={{ velN: "#7bce23" }}
            useinternalcolors={null}
            usedataplaceholder={false}
            margin={{ top: 5, bottom: 20, left: 30 }}
          />
        </div>

        {show ? (
          <div className="video_wrapper">
            <iframe
              src="https://www.youtube.com/embed/lh4JdZTJe7k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ) : null}

        <div className="check_wrapper">
          <div>
            <label>
              <input type="checkbox" />
              센서A
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              센서A
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" onChange={() => setShow(!show)} />
              동영상
            </label>
          </div>
        </div>
        <div className="date_wrapper">
          <div>
            <span>
              <select defaultValue="that">{yearArray}</select>
              <span>년</span>
            </span>
            <span>
              <select defaultValue="that">{monthArray}</select>
              <span>월</span>
            </span>
            <span>
              <select defaultValue="that">{dayArray}</select>
              <span>일</span>
            </span>
            <span>
              <select defaultValue="that">{hourArray}</select>
              <span>시</span>
            </span>
          </div>
        </div>
        <div className="retrieve_wrapper">
          <button>조회</button>
        </div>
        <div className="result_wrap">
          <table>
            <tr>
              <td>날짜</td>
              <td>센서값</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
