import { useEffect, useState } from "react";
import styled from "styled-components";
import MDX from "@mdx-js/runtime";
import parseNewspaperData from "../utils/parseNewspaperData";
import type { HpgLayoutProps } from "../types";
import { components } from "./[id]";

const UpdateButton = styled.button`
  position: fixed;
  top: 32px;
  left: 32px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 2px solid #fefefe;
  background-color: #ccc;
  border-radius: 4px;
  cursor: pointer;
`;
const Error = styled.pre`
  margin: 0 auto;
  padding: 32px 16px;
  width: 800px;
`;

const Editor = () => {
  const [mdDocument, setMdDocument] = useState("");
  const [data, setData] = useState<HpgLayoutProps | null>(null);
  const [error, setError] = useState("");
  const urlParams = new URLSearchParams(
    process.browser ? window.location.search : ""
  );
  const hackmdId = urlParams.get("hackmdId");

  const updateMdDocument = async () => {
    const response = await fetch(`https://hackmd.io/${hackmdId}/download`);
    const text = await response.text();

    setMdDocument(text);
  };

  const updateData = () => {
    try {
      const result = parseNewspaperData(mdDocument);

      setData({ ...result, newspaperNumbers: [] });
      setError("");
    } catch (e) {
      setError(e.stack || e.toString());
    }
  };

  useEffect(() => {
    updateMdDocument();
  }, []);

  useEffect(() => {
    updateData();
  }, [mdDocument]);

  if (!hackmdId) return null;

  const renderPage = () => {
    if (!data) return null;

    const { articles, layout, ...props } = data;

    return (
      <MDX components={components} scope={{ articles, props }}>
        {layout}
      </MDX>
    );
  };

  return (
    <>
      <UpdateButton
        onClick={updateMdDocument}
        title="Обновить (Ctrl+F5 если не работает)"
      >
        🔄
      </UpdateButton>
      {error ? <Error>{error}</Error> : renderPage()}
    </>
  );
};

export default Editor;
