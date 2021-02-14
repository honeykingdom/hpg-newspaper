import styled from "styled-components";
import emotes from "./emotes.json";

const EmoteRoot = styled.img`
  margin: -2px 0;
  vertical-align: middle;
`;

const getSrcSet = (emoteImages: Record<string, string>) =>
  Object.entries(emoteImages)
    .map(([scale, url]) => `${url} ${scale}`)
    .join(", ");

const emoteSrcSets = Object.entries(emotes).reduce<Record<string, string>>(
  (acc, [emoteName, emoteImages]) => ({
    ...acc,
    [emoteName]: getSrcSet(emoteImages),
  }),
  {}
);

type EmoteType = keyof typeof emotes;

type Props = {
  emote: EmoteType;
};

const Emote = ({ emote }: Props) => (
  <EmoteRoot
    src={emotes[emote]["1x"]}
    srcSet={emoteSrcSets[emote]}
    alt={emote}
    title={emote}
  />
);

export default Emote;
