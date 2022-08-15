// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "c5dd7f87440e47b49d6cccf1fe3accc1";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "ugc-image-upload",
  "user-modify-playback-state",
  "user-follow-modify",
  "user-read-playback-position",
  "playlist-read-collaborative",
  "app-remote-control",
  "user-read-email",
  "playlist-modify-public",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-library-modify"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialogue=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
