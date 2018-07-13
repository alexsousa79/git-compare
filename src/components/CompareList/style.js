import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #339693;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      font-size: 14px;
      color: #fff;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #75d3d0;
        font-style: italic;
        margin: 0 5px;
      }
      &:nth-child(2n-1) {
        background: #318a8a;
      }
    }
  }
`;
