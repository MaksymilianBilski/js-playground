"use strict";
export const consoleLogTest = (type, info) => {
    switch (type) {
        case "table":
            console.table(info);
            return;
            // case "group":
            //   const label: String = "Adolescent Irradiated Espionage Tortoises";
            //   console.group(label);
            //   if (typeof info !== String) {
            //     info.map((el) => console.info(el));
            //   }
            //   console.groupEnd();
            return;
        case "custom":
            console.log(`%c${typeof info}`, `padding: 5px; background-color: darkblue; color: white; font-style: 
         italic; border: 5px solid crimson; font-size: 2em;`);
            return;
        case "trace":
            console.trace("trace test log");
            return;
        case "time":
            let i = 0;
            console.time("test console log time");
            while (i < 100000000) {
                i++;
            }
            console.timeEnd("test console log time");
            return;
        default:
            0;
    }
};
//# sourceMappingURL=consoleLog.js.map