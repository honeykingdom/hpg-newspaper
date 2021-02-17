// https://regex101.com/r/jGbDV1/4
const twitchClipRegex = /^(?:https?:\/\/)?(?:clips\.twitch\.tv\/|(?:www\.|m\.)?twitch\.tv\/(?:[\d\w]+)\/clip\/)([\d\w]+)(?:\?.+)?$/;

const getTwitchClipEmbedSrc = (url: string) => {
  const m = twitchClipRegex.exec(url);

  if (!m) return null;

  return `https://clips.twitch.tv/embed?clip=${m[1]}&parent=${window.location.hostname}`;
};

export default getTwitchClipEmbedSrc;
