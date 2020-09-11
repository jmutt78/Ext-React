const Ext = window['Ext'];

export default function () {
  let token = window.location.hash.substr(1);
  if (token) {
    const o = Object.fromEntries(new URLSearchParams(token));
    Ext.Ajax.on('beforerequest', (connection, options) =>
      Object.assign(options, {
        headers: { Authorization: `Bearer ${o.access_token}` },
        useDefaultXhrHeader: false,
      }),
    );
    Ext.Ajax.on('requestexception', (connection, options) =>
      redirectToSpotifyAuthentication(),
    );
    return o.access_token;
  } else {
    // If there is no token, redirect to Spotify authorization
    redirectToSpotifyAuthentication();
  }
}

function redirectToSpotifyAuthentication() {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const clientId = 'bfa0629a96aa462baa804be1923ff9ad';
  const redirectUri = `${window.location.protocol}//${window.location.host}/`;
  let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  window.location = `${authEndpoint}?${query}`;
}
