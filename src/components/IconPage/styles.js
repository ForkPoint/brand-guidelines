import styled from "styled-components";

export const IconsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-size: 500% 100%;
    border-radius: 6px;
`;

export const GridColumn = styled.div`
    margin: 10px;
    display: inline-block;
    text-align: center;
    width: 90%;
    flex: 1 12%;
`;

export const Icon = styled.button`
    font-size: 39px;
    color: #ffffff;
    width: 200px;
    min-height: 114px;
    background-color: #575757;
    border-radius: 1px;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    cursor: pointer;
    &:hover {
        background-color: #8acf31;
        transition: 0.5s;
        img {
            width: 20%;
            height: 20%;
        }
        
    }
`;