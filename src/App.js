import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import MainComponent from './components/MainComponent';

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
          
            <MainComponent />
          
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
