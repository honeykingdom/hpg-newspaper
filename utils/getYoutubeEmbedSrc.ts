// https://regexr.com/3dj5t
const youtubeVideoRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?(?:youtube\.com|youtu.be)(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;

const getYoutubeEmbedSrc = (url: string) => {
  const m = youtubeVideoRegex.exec(url);

  if (!m) return null;

  return `https://www.youtube.com/embed/${m[4]}`;
};

export default getYoutubeEmbedSrc;
