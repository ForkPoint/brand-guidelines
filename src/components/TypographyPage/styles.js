import styled from "styled-components";

export const TypeScaleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin: 20px 0;
  text-align: center;
`;

export const TypeScaleCard = styled.div`
  background: ${({ theme }) => theme.bgAlpha || "#f5f6f8"};
  border: 1px solid ${({ theme }) => theme.bg3 || "#e1e4e8"};
  border-radius: 6px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .level {
    font-weight: 700;
    color: #8acf31;
    font-size: 16px;
  }
  .size {
    font-size: 13px;
    opacity: 0.75;
  }
`;

export const SpacingBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  padding: 16px;
  margin: 20px 0;
  background: ${({ theme }) => theme.bgAlpha || "#f5f6f8"};
  border-radius: 8px;
  border-left: 4px solid #8acf31;

  .spec-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;

    svg {
      font-size: 20px;
      color: #8acf31;
    }
    strong {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const TextInputWrapper = styled.div`
  margin: 24px 0;
  text-align: left;

  h4 {
    margin-bottom: 8px;
    font-size: 18px;
  }

  textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    min-height: 80px;
    background: ${({ theme }) => theme.bgAlpha || "#ffffff"};
    color: ${({ theme }) => theme.text};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.bg3 || "#d0d7de"};
    outline: none;
    resize: vertical;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #8acf31;
      box-shadow: 0 0 0 2px rgba(138, 207, 49, 0.2);
    }
  }
`;

export const SpecimenCard = styled.div`
  background: ${({ theme }) => theme.bgAlpha || "#ffffff"};
  border: 1px solid ${({ theme }) => theme.bg3 || "#e1e4e8"};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const SpecimenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.bg3 || "#eaecef"};
  margin-bottom: 16px;

  .title-group {
    display: flex;
    align-items: baseline;
    gap: 12px;

    h3 {
      margin: 0;
      font-size: 24px;
    }
    .weight-tag {
      font-size: 13px;
      padding: 3px 8px;
      background: #8acf31;
      color: #ffffff;
      border-radius: 4px;
      font-weight: 600;
    }
  }

  .usage-note {
    font-size: 14px;
    opacity: 0.75;
  }
`;

export const SpecimenSample = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: ${({ weight }) => weight || 400};
  font-size: ${({ size }) => size || "18px"};
  line-height: 1.4;
  margin: 14px 0;
  word-break: break-word;
`;

export const SpecimenGlyphs = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: ${({ weight }) => weight || 400};
  font-size: 15px;
  opacity: 0.7;
  letter-spacing: 2px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed ${({ theme }) => theme.bg3 || "#e1e4e8"};
`;

export const FontActionBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;
