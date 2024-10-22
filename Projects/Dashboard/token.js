function getToken() {
  let clientId = "1t6ESpWYR7QJmnVl",
      clientSecret = "8PjcmWktjrIdUQ7TBwzKSDvGyTLlsWOR";
  try {
    // Get the value for the user property 'DISPLAY_UNITS'.
    const userProperties = PropertiesService.getScriptProperties();
    clientId = userProperties.getProperty("CLIENT_ID");
    clientSecret = userProperties.getProperty("CLIENT_SECRET");
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log("Failed with error %s", err.message);
    return null;
  }
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    payload: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      audience: "https://api.deliverect.com",
      grant_type: "token",
    }),
  };
  try {
    const tokenResponse = UrlFetchApp.fetch(
      "https://api.deliverect.com/oauth/token",
      options
    );
    if (tokenResponse.getResponseCode() !== 200) {
      Logger.log("Failed to get token");
      return null;
    }

    const token = JSON.parse(tokenResponse.getContentText()).access_token;
    return token;
    console.log(token)
  } catch (e) {
    // Handle exceptions, if any
    Logger.log("Exception:", e);
    return null;
  }
}
