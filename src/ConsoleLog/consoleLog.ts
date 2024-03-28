"use strict";

export const consoleLogTest = (type: String, info: String | String[]) => {
  switch (type) {
    case "table":
      console.table(info);
      return;
    case "group":
      const label: String = "Adolescent Irradiated Espionage Tortoises";
      if (Array.isArray(info)) {
        console.group(label);
        info.map((el) => console.info(el));
        console.groupEnd();
        return;
      } else
        return console.log("invalid data provided for console.group() method");
    case "custom":
      console.log(
        `%c${info}`,
        `padding: 5px; background-color: darkblue; color: white; font-style: 
         italic; border: 5px solid crimson; font-size: 2em;`
      );
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
