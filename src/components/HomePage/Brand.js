import React from "react";
import { penArt } from "../../assets";
import { Container } from "../Layout/styles";
import {
  ContentLayout,
  BubbleAnimation,
  Content,
  DownloadPdfButton,
} from "./styles";
import { AiOutlineFilePdf } from "react-icons/ai";

const Brand = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/docs/Forkpoint_Guidelines.pdf`;

  return (
    <Container>
      <ContentLayout>
        <BubbleAnimation />
        <Content>
          <h1>Brand Manual</h1>
          <p>
            It all starts here. Use this guide as a high-level overview
            of how the ForkPoint brand comes to life.
          </p>
          <img src={penArt} width="100%" alt="Forkpoint Brand Manual Illustration" />
          <DownloadPdfButton
            href={pdfUrl}
            download="Forkpoint_Guidelines.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Download Full Brand Manual PDF"
          >
            <AiOutlineFilePdf size={18} />
            Download Brand Manual (PDF)
          </DownloadPdfButton>
        </Content>
      </ContentLayout>
    </Container>
  );
};

export default Brand;
