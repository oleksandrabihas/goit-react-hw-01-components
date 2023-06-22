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

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendListItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding-left: 10px;
`;

export const FriendAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const Name = styled.p`
font-size: 22px;
`
