import * as _ from "lodash";
import { consoleLogTest } from "./ConsoleLog/consoleLog.ts";
import { jsTypes } from "./jsTypes/jsTypes.js";
import css from "./style.css";

let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "development"], " ");
  element.classList.add("myOwn");

  /* different console log test  */
  const btnLogTest = document.createElement("button");
  btnLogTest.classList.add("btnLogs");
  btnLogTest.innerHTML = "Button log test";
  btnLogTest.onclick = () => consoleLogTest("group", "time test");
  element.appendChild(btnLogTest);

  /* different console log test  */
  const btnTypesTest = document.createElement("button");
  btnTypesTest.classList.add("btnTypes");
  btnTypesTest.innerHTML = "Button types test";
  btnTypesTest.onclick = () => jsTypes();
  element.appendChild(btnTypesTest);

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./ConsoleLog/consoleLog.ts", function () {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
