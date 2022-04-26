import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  background: ${props => props.color};
  width: 100%;
  height: 100vh;
`
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        
        <ReactFullpage.Wrapper>
          
          <div className="section">
          <Container>
            <Wrapper color={'red'}>
              <h1>자리바꾸기</h1>
            </Wrapper>
            
            
          </Container>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
          <div className='section'>
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
        
      );
    }}
  />
);

function App() {
  return (
    <div className="App">
      <Fullpage />
    </div>
  );
}

export default App;
