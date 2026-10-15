import styled, { css } from "styled-components";
import { btnSecondaryMedium, btnPrimaryMedium } from "../../styles/variables";

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const SectionHeader = styled.div`
  margin-bottom: 24px;
  
  h2 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    line-height: 1.5;
    margin: 0;
  }
`;

export const ControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => (theme.bg3 || "#e5e5e5")};
`;

export const FilterTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FilterTab = styled.button`
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ isActive, theme }) => (isActive ? "#8ACF31" : theme.bg3 || "#d0d0d0")};
  background-color: ${({ isActive }) => (isActive ? "#8ACF31" : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? "#222222" : theme.text)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #8ACF31;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #8ACF31;
    outline-offset: 2px;
  }
`;

export const ToggleButton = styled.button`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid ${({ isActive, theme }) => (isActive ? "#8ACF31" : theme.bg3 || "#d0d0d0")};
  background: ${({ isActive }) => (isActive ? "rgba(138, 207, 49, 0.12)" : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? "#5a8c1a" : theme.text)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #8ACF31;
  }

  &:focus-visible {
    outline: 2px solid #8ACF31;
    outline-offset: 2px;
  }
`;

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const LogoCard = styled.article`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ isDark }) => (isDark ? "#575757" : "#FFFFFF")};
  border: 1px solid ${({ isDark }) => (isDark ? "rgba(255,255,255,0.12)" : "#E2E8F0")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }

  &:focus-within {
    outline: 2px solid #8ACF31;
  }
`;

export const LogoPreview = styled.div`
  padding: 40px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 145px;
  position: relative;
  transition: background 0.2s ease;

  ${({ isDark, showGrid }) =>
    showGrid
      ? isDark
        ? css`
            background-color: #505050;
            background-image: linear-gradient(45deg, #444 25%, transparent 25%),
              linear-gradient(-45deg, #444 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #444 75%),
              linear-gradient(-45deg, transparent 75%, #444 75%);
            background-size: 16px 16px;
            background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
          `
        : css`
            background-color: #FAFAFA;
            background-image: linear-gradient(45deg, #ECECEC 25%, transparent 25%),
              linear-gradient(-45deg, #ECECEC 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #ECECEC 75%),
              linear-gradient(-45deg, transparent 75%, #ECECEC 75%);
            background-size: 16px 16px;
            background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
          `
      : css`
          background-color: ${isDark ? "#575757" : "#FAFAFA"};
        `}

  img {
    max-width: 85%;
    max-height: 72px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.04));
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const LogoMeta = styled.div`
  padding: 16px 20px 20px;
  border-top: 1px solid ${({ isDark }) => (isDark ? "rgba(255,255,255,0.12)" : "#F1F5F9")};
  background-color: ${({ isDark }) => (isDark ? "#484848" : "#FFFFFF")};
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MetaTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;

  .title-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#1E293B")};
    margin: 0;
  }

  .subtitle {
    font-size: 12px;
    color: ${({ isDark }) => (isDark ? "rgba(255,255,255,0.7)" : "#64748B")};
    margin: 0;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export const ColorPill = styled.button`
  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.15s ease;

  background-color: ${({ isDark }) => (isDark ? "rgba(255,255,255,0.14)" : "rgba(138, 207, 49, 0.12)")};
  color: ${({ isDark }) => (isDark ? "#FFFFFF" : "#446914")};

  &:hover {
    border-color: #8ACF31;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #8ACF31;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ActionButton = styled.button`
  font-family: inherit;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.18s ease;

  ${({ variant, isDark }) =>
    variant === "primary"
      ? css`
          background-color: #8ACF31;
          color: #222222;
          border: 1px solid #8ACF31;

          &:hover {
            background-color: #7ab92a;
            border-color: #7ab92a;
          }
        `
      : css`
          background-color: ${isDark ? "rgba(255,255,255,0.12)" : "#F1F5F9"};
          color: ${isDark ? "#FFFFFF" : "#334155"};
          border: 1px solid ${isDark ? "rgba(255,255,255,0.15)" : "#E2E8F0"};

          &:hover {
            background-color: ${isDark ? "rgba(255,255,255,0.22)" : "#E2E8F0"};
          }
        `}

  &:focus-visible {
    outline: 2px solid #8ACF31;
    outline-offset: 1px;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ActionLink = styled.a`
  font-family: inherit;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.18s ease;

  ${({ variant, isDark }) =>
    variant === "primary"
      ? css`
          background-color: #8ACF31;
          color: #222222;
          border: 1px solid #8ACF31;

          &:hover {
            background-color: #7ab92a;
            border-color: #7ab92a;
          }
        `
      : css`
          background-color: ${isDark ? "rgba(255,255,255,0.12)" : "#F1F5F9"};
          color: ${isDark ? "#FFFFFF" : "#334155"};
          border: 1px solid ${isDark ? "rgba(255,255,255,0.15)" : "#E2E8F0"};

          &:hover {
            background-color: ${isDark ? "rgba(255,255,255,0.22)" : "#E2E8F0"};
          }
        `}

  &:focus-visible {
    outline: 2px solid #8ACF31;
    outline-offset: 1px;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ToastNotification = styled.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: #1E293B;
  color: #FFFFFF;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-left: 4px solid #8ACF31;
  animation: slideUp 0.25s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ConstructionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

export const ConstructionCard = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => (theme.bg3 || "#E2E8F0")};
  background: ${({ theme }) => theme.bg2 || "#FFFFFF"};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.text};
    opacity: 0.8;
    margin: 0;
    line-height: 1.5;
  }

  .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: ${({ theme }) => theme.bg || "#FAFAFA"};
    border-radius: 6px;
    min-height: 180px;

    img {
      max-width: 90%;
      max-height: 150px;
      object-fit: contain;
    }
  }
`;

export const GuidelinesInfoBox = styled.div`
  background: rgba(138, 207, 49, 0.08);
  border-left: 4px solid #8ACF31;
  padding: 18px 22px;
  border-radius: 6px;
  margin-bottom: 36px;

  h4 {
    margin: 0 0 8px 0;
    font-size: 15px;
    color: ${({ theme }) => theme.text};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  ul {
    margin: 0;
    padding-left: 20px;
    color: ${({ theme }) => theme.text};
    opacity: 0.9;
    font-size: 13.5px;
    line-height: 1.65;
  }
`;

export const UsageCodeBox = styled.div`
  background: #1E293B;
  color: #E2E8F0;
  border-radius: 8px;
  padding: 20px;
  margin-top: 36px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 12px;
    font-weight: 600;
    color: #94A3B8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  pre {
    margin: 0;
    font-size: 13px;
    line-height: 1.6;
    overflow-x: auto;
    color: #F8FAFC;

    code {
      font-family: inherit;
    }

    .keyword {
      color: #F472B6;
    }
    .string {
      color: #8ACF31;
    }
    .comment {
      color: #64748B;
    }
  }
`;

export const LogoRow = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const LogoColumnPositive = styled.div`
  flex: 1 22%;
  text-align: left;
  padding: 20px 0px;
`;

export const LogoColumnNegative = styled.div`
  flex: 1 22%;
  text-align: left;
  padding: 20px 0px;
  color: #ffffff;
`;

export const BackgroundDark = styled.div`
  background-color: #575757;
`;

export const BtnPrimaryMedium = styled.button`
  ${btnPrimaryMedium}
`;

export const BtnSecondaryMedium = styled.button`
  ${btnSecondaryMedium}
`;