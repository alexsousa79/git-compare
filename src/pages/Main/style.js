import Styled from 'styled-components';

export const Container = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 60px
`;

export const Form = Styled.form`
margin-top: 20px;
width: 100%;
max-width: 300px;
display:flex;


input{
  flex: 1;
  height: 55px;
  padding: 0 20px;
  background: #A6E2DF;
  color: #397F69;
  border-radius: 4px;
  font-size: 1.1em;
  border ${props => (props.withError ? '2px solid #f00' : 0)};
}

button {
  height: 55px;
  padding: 0 20px;
  margin-left: 10px;
  background: #A6E2DF;
  color: #397F69;
  border: 0;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 4px;
  &:hover{
    background: #52d8f0;
  }
}
`;
