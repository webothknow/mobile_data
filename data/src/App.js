import "./App.css";
import React, { useState } from "react";
import PuiMultiLineGraphDisplayComponent from "./js/PuiMultiLineGraphDisplayComponent";

function App() {
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
        <div className="date_wrapper">
          <div>
            <select id="select_year"></select>
            <span>년</span>
          </div>
          <div>
            <select id="select_year"></select>
            <span>월</span>
          </div>
          <div>
            <select id="select_day"></select>
            <span>일</span>
          </div>
          <div>
            <select id="select_day"></select>
            <span>시</span>
          </div>
        </div>
        <div className="retrieve_wrapper">
          <button>조회</button>
        </div>
        <div className="result_wrap">
          <table>
            <tr>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
