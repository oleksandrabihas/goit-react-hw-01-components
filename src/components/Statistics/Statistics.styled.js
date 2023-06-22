import styled from "styled-components";

export const SectionStatistic = styled.section`
width: 400px;
text-align: center;
margin: 0 auto;
margin-top: 40px;
`

export const Title = styled.h2`
text-transform: uppercase;
font-weight: 600;
background-color: #fff;
padding-top: 20px;
padding-bottom: 20px;
margin: 0;
`

export const StatList = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;

`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${props => props.backgroundColor};
  width: ${props => 100 / props.itemCount}%;

`;

export const Label = styled.span`

`

export const Percentage = styled.span`
font-weight: 600;
font-size: 20px;
`
