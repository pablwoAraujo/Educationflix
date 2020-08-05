import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButtonLink = styled(Link)`
    color: var(--white);
    border: 1px solid var(--primary);
    background: var(--black);
    margin: 20px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export const StyledLi = styled.ul`
    font-size: 26px;
    margin: 0;
    span {
        font-size: 22px;
        font-weight: 600;
    }
    @media (max-width: 800px) {
        margin-left: 0;
    }
`;

export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 1fr;
    gap: 50px;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const StyledLiItem = styled.li`
    display: flex;
    flex-direction: row;
    min-height: 35px;
    align-items: center;
    margin-bottom: 5px;
`;

export const Dot = styled.div`
    display: table;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: white;
    margin: auto 10px auto 0;
`;
