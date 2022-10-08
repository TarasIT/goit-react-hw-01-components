import styled from 'styled-components';

export const UserProfile = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  padding: 50px;
  border: 1px solid black;
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: #74ff74;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-size: 30px;
`;

export const Tag = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Location = styled.p`
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span``;

export const Quantity = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
