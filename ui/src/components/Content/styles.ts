import styled from 'styled-components';

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1200px;

  margin: 20px auto;

  width: 100%;

  input {
    width: 400px;
    height: 30px;
    padding: 5px;

    margin-left: auto;

    border: 1px solid #ccc;
    border-radius: 5px;

    font-size: 16px;
  }
`

export const CardListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  margin: 20px auto;

  width: 100%;
  max-width: 1200px;
`
