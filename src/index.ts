let token: string;

const getToken = () => {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let master = ss.getSheetByName('Master');
  return master.getRange('A1');
};

const fetchUserName = () => {
  const url = 'https://api.github.com/graphql';

  const graphql = `query {
    viewer {
      login
    }
  }`;

  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + token,
    },
    payload: JSON.stringify({ query: graphql }),
  };
  const response = UrlFetchApp.fetch(url, options);
  const json = JSON.parse(response.getContentText());
  return json;
};

export function main(): void {
  Logger.log(getToken());
  // Logger.log(fetchUserName());
}
