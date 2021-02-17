import styled from "styled-components";
import icons from "./icons.json";

const EmoteRoot = styled.img<{ $type: IconType }>`
  margin: ${(p) => (p.$type === "emote" ? "-2px 0" : "0 0 4px 0")};
  vertical-align: middle;
`;

const getSrcSet = (emoteImages: Record<string, string> = {}) =>
  Object.entries(emoteImages)
    .map(([scale, url]) => `${url} ${scale}`)
    .join(", ");

type IconType = "emote" | "badge";

type EmoteType = keyof typeof icons.emote;
type BadgeType = keyof typeof icons.badge;

type Props = {
  emote?: EmoteType;
  badge?: BadgeType;
};

const Emote = ({ emote, badge }: Props) => {
  const type = emote ? "emote" : "badge";
  const name = emote || badge || "";

  // @ts-expect-error
  if (!icons[type][name]) return null;

  // @ts-expect-error
  const src = icons[type][name]["1x"];
  // @ts-expect-error
  const srcSet = getSrcSet(icons[type][name]);

  return (
    <EmoteRoot src={src} srcSet={srcSet} alt={name} title={name} $type={type} />
  );
};

export default Emote;
