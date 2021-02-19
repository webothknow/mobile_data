import "./App.css";
import PuiMultiLineGraphDisplayComponent from "./js/PuiMultiLineGraphDisplayComponent";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
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
        <div className="chart_wrap">
          <PuiMultiLineGraphDisplayComponent
            title="chart1"
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
      </div>
    </div>
  );
}

export default App;
