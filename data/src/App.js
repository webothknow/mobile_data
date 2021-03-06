import "./App.css";
import React, { useState, useEffect } from "react";
import PuiMultiLineGraphDisplayComponent from "./js/PuiMultiLineGraphDisplayComponent"; //gragh
import WebSocketClient from "./js/ws/WebSocketClient"; //wepsocket
import { observer } from "mobx-react";
import { toJS } from "mobx";

function App() {
  //wepsocket
  const wsc = new WebSocketClient("ws://dev.perigee.kr", 8700, "/ws", 100);
  const [data, setData] = useState(); //wepsocket
  useEffect(() => {
    wsc.openConn(); //wepsocket
  }, []);

  //get year form data()
  let thisDate = new Date();
  let thisYear = thisDate.getFullYear();

  //year loop
  let yearTotal = thisYear;
  let yeararray = [];
  for (let a = 2020; a <= yearTotal; a++) {
    yeararray.push(a);
  }

  //month loop
  let monthTotal = 12;
  let montharray = [];
  for (let a = 1; a <= monthTotal; a++) {
    montharray.push(a);
  }

  //day loop
  let dayTotal = 31;
  let dayarray = [];
  for (let b = 1; b <= dayTotal; b++) {
    dayarray.push(b);
  }

  //hour loop
  let hourTotal = 24;
  let hourarray = [];
  for (let c = 1; c <= hourTotal; c++) {
    hourarray.push(c);
  }

  //minute loop
  let minuteTotal = 55;
  let minutearray = [];
  for (let d = 1; d <= minuteTotal; d++) {
    if (d % 5 == 0) {
      minutearray.push(d);
    }
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

  //minute
  const minuteArray = [];
  const minuteData = minutearray;
  for (let i = 0; i < minuteData.length; i++) {
    minuteArray.push(<option>{minuteData[i]}</option>);
  }

  //video
  const [show, setShow] = useState(false);

  // top table
  const TopObserver = observer(({ store, group }) => {
    let MAX_LEN = 2;
    let msg = Array();
    let m = store.getAllMsg;
    let len = store.getBuffLen;

    for (let i = 0; i < MAX_LEN; i++) {
      let idx = len - 1 + i * -1;
      if (idx < 0) {
        msg.push(
          <tr>
            <td>{"N/A"}</td>
            <td>{"N/A"}</td>
          </tr>
        );
      } else {
        msg.push(
          <tr>
            <td>{m[idx][group][2]}</td>
            <td>{m[idx][group][2]}</td>
          </tr>
        );
      }
    }
    return (
      <table>
        <thead>
          <tr>
            <th className="title1">D1</th>
            <th className="title1">D2</th>
          </tr>
        </thead>
        <tbody>{msg}</tbody>
        <tfoot></tfoot>
      </table>
    );
  });

  //bottom table
  const BottomObserver = observer(({ store, group }) => {
    let MAX_LEN = 100;
    let msg = Array();
    let m = store.getAllMsg;
    let len = store.getBuffLen;

    for (let i = 0; i < MAX_LEN; i++) {
      let idx = len - 1 + i * -1;
      let ser = "";
      let res = "";
      if (idx < 0) {
        msg.push(
          <tr>
            <td>{"N/A"}</td>
            <td>{"N/A"}</td>
            <td>{"N/A"}</td>
            <td>{"N/A"}</td>
            <td>{"N/A"}</td>
            <td>{"N/A"}</td>
          </tr>
        );
      } else {
        try {
          let str = m[idx][group][0];
          res = str.substring(9);
          ser = str.substring(0, 8);
        } catch (e) {
          console.log("received msg error", m, e);
          continue;
        }
        msg.push(
          <tr>
            <td>{m[idx][group][1]}</td>
            <td>
              {ser}
              <small>{res}</small>
            </td>
            <td>{m[idx][group][2]}</td>
            <td>{m[idx][group][2]}</td>
            <td>{m[idx][group][2]}</td>
            <td>{m[idx][group][2]}</td>
          </tr>
        );
      }
    }
    return (
      <table>
        <thead>
          <tr>
            <th className="title1">날짜</th>
            <th className="title1">시간</th>
            <th className="title2">D1</th>
            <th className="title2">D2</th>
            <th className="title2">D3</th>
            <th className="title2">D4</th>
          </tr>
        </thead>
        <tbody>{msg}</tbody>
        <tfoot></tfoot>
      </table>
    );
  });

  return (
    <div className="App">
      <div className="wrapper">
        <div className="fix_wrapper">
          <div className="title_table">
            <div className="title">
              <h1>Data</h1>
            </div>
            <div className="table_wrpper">
              <TopObserver store={wsc.store} group="d_raw_msg" />
            </div>
          </div>
        </div>
        {/* chart gragh */}
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
        {/* video */}
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
        {/* checkbox */}
        <div className="check_wrapper">
          <div>
            <label>
              <input type="checkbox" />
              Data
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
            <span>
              <select defaultValue="that">{minuteArray}</select>
              <span>분</span>
            </span>
          </div>
        </div>
        <div className="retrieve_wrapper">
          <button>조회</button>
        </div>
        {/* sensor table */}
        <div className="result_wrap">
          <table>
            <tr>
              <BottomObserver store={wsc.store} group="d_raw_msg" />
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
