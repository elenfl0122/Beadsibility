import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  `,
  Controls: styled.div`
    display: flex;
    margin-bottom: 20px;
    gap: 15px;

    & label > input {
      margin-left: 10px;
    }
  `,
  Grid: styled.div`
    display: flex;
    flex-direction: column;
    border: 0.5px solid #000;
  `,
  Row: styled.div`
    display: flex;
  `,
  Cell: styled.div`
    border: 0.5px solid #000;
    width: 20px;
    height: 20px;
  `
}

export default S;
