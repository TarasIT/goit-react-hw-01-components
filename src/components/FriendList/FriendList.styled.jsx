import styled from 'styled-components';

export const Friends = styled.ul`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;

  li {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  min-width: 200px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${p => {
    return p.status ? p.theme.onlineColor : p.theme.offlineColor;
  }};
`;

export const UserAvatar = styled.img`
  margin-right: 20px;
`;

export const UserName = styled.p`
  font-size: 24px;
`;
