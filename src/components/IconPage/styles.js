import styled from "styled-components";

export const IconsGrid = styled.div`
    display: flex;
    background: linear-gradient(
    to right,
    #8acf31,
    #11a1e0,
    #ffffff
  );
    flex-wrap: wrap;
    background-size: 500% 100%;
    border-radius: 6px;
    animation: cobler 7s 0s linear infinite alternate;
`;

export const GridColumn = styled.div`
    margin: 20px;
    display: inline-block;
    text-align: center;
    width: 93%;
    flex: 1 12%;
`;

export const Icon = styled.div`
    font-size: 39px;
    color: #000000;
`;