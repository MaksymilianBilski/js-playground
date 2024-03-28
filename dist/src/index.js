import * as _ from "lodash";
import printMe from "./print.js";
import { consoleLogTest } from "./ConsoleLog/consoleLog.ts";
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
    const btn = document.createElement("button");
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;
    element.appendChild(btn);
    ///////////
    const btnLogTest = document.createElement("button");
    btnLogTest.innerHTML = "Click me, im btn log test!!";
    btnLogTest.onclick = () => consoleLogTest("custom", "time test");
    element.appendChild(btnLogTest);
    ///////////////
    return element;
}
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
if (module.hot) {
    module.hot.accept("./print.js", function () {
        console.log("Accepting the updated printMe module!");
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    });
}
//# sourceMappingURL=index.js.map