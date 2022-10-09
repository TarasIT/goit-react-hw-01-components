import styled from 'styled-components';

export const DataSection = styled.section`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 600;
`;

export const DataList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DataItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
`;

export const DataFormat = styled.span``;

export const Data = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
