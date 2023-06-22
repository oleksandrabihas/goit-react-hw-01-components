import styled from 'styled-components';

export const FriendsList = styled.ul`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 400px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
