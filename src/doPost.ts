import { post_line_notify } from "./postLineNotify.ts";
import { appendRow, obj2txtout } from "./utils.ts";

export const doPost = (e: any) => {
  try {
    const ss = SpreadsheetApp;
    const sheet = ss.getActiveSpreadsheet().getSheetByName("temperature_log");
    if (sheet != null) {
      if (e.parameter.action) {
        const action = e.parameter.action.toLowerCase();
        if (action === "update") {
          // updateRow(sheet, e.parameter);
        } else if (action === "delete") {
          // deleteRow(sheet, e.parameter);
        } else if (action === "post_line_notify") {
          post_line_notify();
        }
      } else {
        const parsed_parameter = JSON.parse(e.postData.contents);
        const param = appendRow(sheet, parsed_parameter);
        return obj2txtout({ param: param });
      }
    } else {
      return obj2txtout({ message: "failure!", data: null });
    }
  } catch (e) {
    return obj2txtout({ message: e });
  }
};
