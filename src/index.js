import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";
import "./styles/line.css";
import Bingo from "./components/Bingo";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Bingo />, document.getElementById("root"));
registerServiceWorker();
