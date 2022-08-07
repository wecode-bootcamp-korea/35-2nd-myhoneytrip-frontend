import styled from 'styled-components';

const S = {};
S.RightTime = styled.span`
  font-size: 16px;
  margin-bottom: 12px;
  color: #343a40;
`;

S.RightLine = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;

  &::before {
    content: '';
    background: #adb5bd;
    border: 1px solid transparent;
    border-radius: 100%;
    display: block;
    height: 8px;
    position: absolute;
    top: px;
    left: 0px;
    width: 8px;
    transition: background 0.3s ease-in-out 0s, border 0.3s ease-in-out 0s;
    z-index: 1;
  }

  &::after {
    content: '';
    width: 1px;
    background: #adb5bd;
    display: block;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 4px;
  }
`;

S.RightMainTicket = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #e9ecef;
  border-radius: 8px;
  width: 90%;
  height: 250px;
  padding: 24px;
  margin-top: 20px;
  box-shadow: rgb(33 37 41 / 10%) 0px 4px 8px 0px;
`;

S.TicketLeft = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

S.LeftTicketTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-left: 10px;

  p {
    padding: 0px 6px;
    display: inline-block;
    border-radius: 4px;
    font-weight: 700;
    font-size: 13px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.4px;
    border: solid 1px #ffd74e;
    background-color: #fff8e1;
    color: #f78000;
  }

  span {
    display: flex;
    align-items: center;
    color: #e57fca;
    outline: none;
    font-weight: bold;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    height: 28px;
    font-size: 14px;
    padding: 0px 6px;

    &:hover {
      background-color: #f7edf6;
    }
  }
`;

S.LeftTicketName = styled.div`
  display: flex;
  align-items: center;
`;

S.LeftTicketImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  box-shadow: rgb(33 37 41 / 15%) 0px 0px 0px 1px inset;
  margin-right: 12px;
  background-repeat: no-repeat;
  background-size: 28px;
  margin-left: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

S.LeftTicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-right: auto;
    color: #343a40;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.16px;
    border-bottom: 1px solid #fff;
  }
  span {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-right: auto;
    margin-top: 3px;
    color: #848c94;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.14px;
  }

  &:hover p,
  &:hover span {
    border-bottom: 1px solid #cdd0d4;
  }
`;

S.LeftTicketStatus = styled.div`
  display: flex;
  padding: 24px 16px;
  border-radius: 4px;
  background-color: #f5f6f7;
  margin-top: 10px;
  margin-left: 10px;

  p {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
    color: #495056;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
`;
S.TicketRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #e9ecef;
  width: 25%;
  height: 85%;
  flex-direction: column;

  button {
    border: 0px;
    border-radius: 4px;
    font-weight: bold;
    letter-spacing: -0.2px;
    transition: all 0.3s ease 0s;
    user-select: none;
    outline-style: none;
    cursor: pointer;
    height: 40px;
    width: 80%;
    padding: 0px 8px;
    transition: all 0.3s ease 0s;
    font-size: 14px;
    color: #495056;
    background-color: #e9ecef;
    margin: 10px 0;

    &:hover {
      background-color: #c3c7c9;
    }
  }
`;

export default S;
