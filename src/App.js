
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './components/MainComponent';
import NameComponent from './components/NameComponent';
import DeskComponent from './components/DeskComponent';
import DrawComponent from './components/draw/DrawComponent';
import './App.css';

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
      const preventScroll = (e) => {
        fullpageApi.setAllowScrolling(e);
        fullpageApi.setKeyboardScrolling(e);
      }
      return (

        <ReactFullpage.Wrapper>
          
          <div className="section">
            <MainComponent />
          </div>
          <div className="section">
            <NameComponent />
          </div>
          <div className='section' >
            <DeskComponent scroll={preventScroll}/>
          </div>  
          <div className='section'>
            <DrawComponent/>
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
