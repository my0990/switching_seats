
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './components/MainComponent';
import NameListComponent from './components/NameListComponent';
import DeskComponent from './components/DeskComponent';
import DrawComponent from './components/draw/DrawComponent';
import ManipulateComponent from './components/secret/ManipulateComponent';
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { studentsArr,desksArr } from './modules/arr';

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


const Fullpage = ({studentsArr,setStudentsArr,desksArr,setDesksArr}) => (

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

          <div className="section">
            <MainComponent />
          </div>
          <div className="section">
            <NameListComponent 
              studentsArr={studentsArr} 
              setStudentsArr={setStudentsArr}
              desksArr={desksArr}
              setDesksArr={setDesksArr}
            />
          </div>
          <div className='section' >
            <DeskComponent 
              scroll={preventScroll} 
              desksArr={desksArr} 
              setDesksArr={setDesksArr}
              studentsArr={studentsArr}
              setStudentsArr={setStudentsArr}
            />
          </div>  
          <div className='section'>
            <DrawComponent 
              studentsArr={studentsArr} 
              desksArr={desksArr}/>
          </div>
          <div className='section'>
            <ManipulateComponent 
              desksArr={desksArr}
              setDesksArr={setDesksArr}
              scroll={preventScroll}
              studentsArr={studentsArr}
              setStudentsArr={setStudentsArr}
            />
          </div>

        </ReactFullpage.Wrapper>
        

      );
    }}
  />
);

function App() {
  const [studentsArr,setStudentsArr] = useState([]);
  const [desksArr,setDesksArr] = useState([]);

  // 최초 학생 및 책상 배열 가져오고 리덕스에 저장
  useEffect(()=>{
    const tempStudentsArr = JSON.parse(localStorage.getItem("studentsArr"));
    const tempDesksArr = JSON.parse(localStorage.getItem('desksArr'));



    if(tempStudentsArr != null){
        setStudentsArr([...tempStudentsArr])
    } else {
        setStudentsArr([])
    }
      if(tempDesksArr != null){
        setDesksArr(tempDesksArr)
    } else {
        setDesksArr([])
    }
    console.log("studentsArr: ",tempStudentsArr)
    
},[])
  return (
    <div className="App">
      <Fullpage 
        studentsArr={studentsArr} 
        setStudentsArr={setStudentsArr}
        desksArr={desksArr}
        setDesksArr={setDesksArr}/>
    </div>
  );
}

export default App;
