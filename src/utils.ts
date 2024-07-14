export const createRow = (
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  parameter: any,
) => {
  const keys = sheet.getDataRange().getValues()[0];
  const row: any = [];
  keys.map(function (key) {
    var value = parameter[key];
    if (value) {
      row.push(value);
    } else {
      row.push(null);
    }
  });
  return row;
};

export const appendRow = (
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  parameter: any,
) => {
  parameter["uuid"] = Utilities.getUuid();
  parameter["date"] = new Date();
  const row = createRow(sheet, parameter);
  sheet.appendRow(row);
  return parameter;
};

export const obj2txtout = (obj: any) => {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(obj));
  return output;
};
