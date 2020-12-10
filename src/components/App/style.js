import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 1346px;
  margin: 0 auto;
  margin-top: 5%;
  padding-left: 30px;
  padding-right: 30px;
`

const AppContent = styled.div`
  display: flex;
  align-items: flex-start;
`

export { AppContainer, AppContent }
