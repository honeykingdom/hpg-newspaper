import styled from "styled-components";
import Image from "next/image";

const ArticleImageRoot = styled.section`
  margin-bottom: 32px;
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);
`;

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

const ArticleImage = ({ src, alt = "", width, height }: Props) => (
  <ArticleImageRoot>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      unoptimized
    />
  </ArticleImageRoot>
);

export default ArticleImage;
