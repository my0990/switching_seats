
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
import KakaoLink from './components/KakaoLink';
import Me from './components/Me';

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


const Fullpage = ({studentsArr,setStudentsArr,desksArr,setDesksArr, isMeClicked,setIsMeClicked}) => (

  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      const preventScroll = (e) => {
        fullpageApi.setAllowScrolling(e);
        fullpageApi.setKeyboardScrolling(e);
      }
      const moveToDown = () => {
        fullpageApi.moveSectionDown();
      }
      

      
      
      return (

        <ReactFullpage.Wrapper>
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
            <Me 
              scroll={preventScroll}
              moveToDown={moveToDown}
              desksArr={desksArr}
              setDesksArr={setDesksArr}
              studentsArr={studentsArr}
              setStudentsArr={setStudentsArr}
              />
          </div>
          <div className='section'>
            <KakaoLink />
          </div>

          

        </ReactFullpage.Wrapper>
        

      );
    }}
  />
);

function App() {
  const [studentsArr,setStudentsArr] = useState([]);
  const [desksArr,setDesksArr] = useState([]);
  const [isMeClicked,setIsMeClicked] = useState(false);

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
    
    
},[])
  return (
    <div className="App">
      <Fullpage 
        studentsArr={studentsArr} 
        setStudentsArr={setStudentsArr}
        desksArr={desksArr}
        setDesksArr={setDesksArr}
        setIsMeClicked={setIsMeClicked}
        isMeClicked={isMeClicked}
        />
    </div>
  );
}

export default App;
