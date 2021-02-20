import "./App.css";
import React, { useState } from "react";
import PuiMultiLineGraphDisplayComponent from "./js/PuiMultiLineGraphDisplayComponent";
import DropdownDate from "react-dropdown-date";

function App() {
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
              <select>
                <option value="" selected>
                  2020
                </option>
                <option value="">1900</option>
              </select>
              <span>년</span>
            </span>
            <span>
              <select>
                <option value="" selected>
                  1
                </option>
              </select>
              <span>월</span>
            </span>
            <span>
              <select>
                <option value="" selected>
                  1
                </option>
              </select>
              <span>일</span>
            </span>
            <span>
              <select>
                <option value="" selected>
                  1
                </option>
                <option value="">2</option>
              </select>
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
