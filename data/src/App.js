import "./App.css";
import React, { useState } from "react";
import PuiMultiLineGraphDisplayComponent from "./js/PuiMultiLineGraphDisplayComponent";
import DropdownDate from "react-dropdown-date";

function App() {
  const formatDate = (date) => {
    // formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const [state, setState] = useState({
    date: null,
    selectedDate: "2012-11-15",
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
              <table>
                <thead>
                  <tr>
                    <th>d1</th>
                    <th>d2</th>
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
            //data={data}
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
        <div className="video_wrapper">
          <iframe
            src="https://www.youtube.com/embed/lh4JdZTJe7k"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
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
              <input type="checkbox" />
              동영상
            </label>
          </div>
        </div>
        <div className="date_wrapper"></div>
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
