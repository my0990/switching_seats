import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1</p>
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
