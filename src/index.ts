const fetchUserName = () => {
  const url = 'https://api.github.com/graphql';
  const token = '70d5f83566fe2a1c226e0ba096c2c8f8885407a6';

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

export function fetch(): void {
  Logger.log(fetchUserName());
}
