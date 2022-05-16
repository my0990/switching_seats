
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './components/MainComponent';
import NameComponent from './components/NameComponent';
import DeskComponent from './components/DeskComponent';
import DrawComponent from './components/draw/DrawComponent';
import ManipulateComponent from './components/secret/ManipulateComponent';
import './App.css';
import { useState, useEffect } from 'react';

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


const Fullpage = ({arr,setArr}) => (

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

        <ReactFullpage.Wrapper
          onLeave={
            (origin) => {
              console.log('origin.index');
            }
          }>
          <div className='section'>
            <ManipulateComponent arr={arr}/>
          </div>
          <div className="section">
            <MainComponent />
          </div>
          <div className="section">
            <NameComponent />
          </div>
          <div className='section' >
            <DeskComponent scroll={preventScroll} arr={arr} setArr={setArr}/>
          </div>  
          <div className='section'>
            <DrawComponent arr={arr} setArr={setArr}/>
          </div>

        </ReactFullpage.Wrapper>
        

      );
    }}
  />
);

function App() {
  const [arr,setArr] = useState([]);
  useEffect(()=>{
    const temp = JSON.parse(localStorage.getItem('setArr'))
    if(temp != null){
        setArr(temp)
    }
    // console.log(temp.length)
    
},[])
  return (
    <div className="App">
      <Fullpage arr={arr} setArr={setArr}/>
    </div>
  );
}

export default App;
