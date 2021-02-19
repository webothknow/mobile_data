import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="title">
          <h1>Title</h1>
        </div>
        <div className="input_wrap">
          <div className="input_text input_id">
            <input type="text" />
          </div>
          <div className="input_text input_pw">
            <input type="password" />
          </div>
        </div>
        <div className="btn_click">
          <button>Login</button>
        </div>
        <div className="checkwrap">
          <label>
            <input type="checkbox" />
            ID 저장
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
