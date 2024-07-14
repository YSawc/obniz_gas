export const post_line_notify = () => {
  const LINE_API_TOKEN = PropertiesService.getScriptProperties().getProperty(
    "LINE_API_TOKEN",
  );
  const message = "Hello world";
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: "post",
    headers: {
      Authorization: "Bearer " + LINE_API_TOKEN,
    },
    payload: {
      message: message,
    },
  };
  const response = UrlFetchApp.fetch(
    "https://notify-api.line.me/api/notify",
    options,
  );
  Logger.log(response);
};
