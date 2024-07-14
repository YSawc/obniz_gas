import { obj2txtout } from "./utils.ts";

export const doGet = () => {
  const ss = SpreadsheetApp;
  const sheet = ss.getActiveSpreadsheet().getSheetByName("configure");
  if (sheet != null) {
    const keys = sheet.getDataRange().getValues()[0];
    const is_al = keys[0] === "al_on";
    return obj2txtout({ message: "success!", data: is_al });
  } else return obj2txtout({ message: "failure! sheet == null", data: null });
};
