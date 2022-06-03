import { useEffect,useState } from 'react';
import styled, {css} from 'styled-components';
import { Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


const Container = styled.div`
    width: 100%;
    min-width: 1024px;
    height: auto;
`
const TitleWrapper = styled.div`
    height: 5vh;
`

const DeskWrapper = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    /* background: gray; */
    

`
const BtnWrapper = styled.div`
    height: 10vh;
    width: 100%;
    /* background: #ddd; */
    button {
        font-size: 2rem;
    }
`

const DeskUnitComponent = styled.div`
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: inline-block; */
    width: ${props => 45/props.length * 1.8}vh;
    height: ${props => 45/props.length}vh;
    // max-width: 15vh;
    // max-height: 7vh;
    
    /* background-color: red; */
    vertical-align: middle;
    span{
        display: inline-block;
        font-size: 1.4rem;
        font-weight: bold;
    }
    
    
    @media screen and (min-width: 1024px){
        margin: 6px;
    }    
    @media screen and (min-width: 768px) and (max-width: 1023px){

        margin: 6px;
    }    
    @media screen and (max-width: 767px){

        margin: 3px;
    }
    ${(props) =>
        props.closed && 
     css`
        font-size: 0;
        border: none;   
        background-color: white;
     `}
     ${(props) =>
        props.manyCols && 
     css`
        width: 60px;
        height: 35px;
        color: red;
     `}
`

const DrawComponent = ({studentsArr, desksArr}) => {
    // var _ = require('loadsh');
    const [tempDesksArr,setTempDesksArr] = useState([]); //임시 책상 배열
    const [tempStudentsArr, setTempStudentsArr] = useState([]); //임시 학생 배열
    const [isStarted,setIsStarted] = useState(false); //시작
    const [isCtrlClicked,setIsCtrlClicked] = useState(false);
    
    useEffect(()=>{
        setTempDesksArr([...desksArr]) //책상배열 임시책상배열로 복사  만약 깊은복사 안되면 lodash 이용할것
        setTempStudentsArr([...studentsArr]) //학생배열 임시학생배열로 복사
    },[studentsArr, desksArr])


    //뽑기 시작, 임시 학생 배열을 만들어서 랜덤으로 재배치
    const switchStart = (e) => {
    //컨트롤 눌렀을때
        console.log(tempDesksArr)
        if(e.ctrlKey){   
            let tempArr = studentsArr.filter((a)=> a.fixed === false);
            tempArr.sort(()=>Math.random()-0.5);
            console.log(tempArr)
            let count = 0;
            for(let i = 0;i<tempDesksArr.length;i++){
                for(let j=0;j<tempDesksArr[0].length;j++){
                    if(count < tempArr.length && tempDesksArr[i][j].toggle && !tempDesksArr[i][j].fixedStudent){
                        let temp = tempDesksArr;
                        temp[i][j]['name'] = tempArr[count++].name;
                        setTempDesksArr([...temp])
                        // tempDesksArr[i][j]['name'] = tempStudentsArr[count++].name
                }}
            }
            setIsCtrlClicked(true);
        } else {         
        if(tempStudentsArr.length > 0){
            let tempStudents = tempStudentsArr;
            setTempStudentsArr(tempStudents.sort(()=>Math.random()-0.5))
            let count = 0;
            
            for(let i = 0;i<tempDesksArr.length;i++){
                for(let j=0;j<tempDesksArr[0].length;j++){
                    if(count < tempStudentsArr.length && tempDesksArr[i][j].toggle){
                        let temp = tempDesksArr;
                        temp[i][j]['name'] = tempStudentsArr[count++].name;
                        setTempDesksArr([...temp])
                        // tempDesksArr[i][j]['name'] = tempStudentsArr[count++].name
                }}
            }
            
        } else {
            return null;
        }
        
        }
        setIsStarted(true);
        
    }

    const onReset = () => {
        
        let count = 0;
        for(let i = 0;i<tempDesksArr.length;i++){
            for(let j=0;j<tempDesksArr[0].length;j++){
                
                    let temp = tempDesksArr;
                    delete temp[i][j]['name']
                    setTempDesksArr([...temp])
                    // tempDesksArr[i][j]['name'] = tempStudentsArr[count++].name
            }
        }
        console.log(tempDesksArr);
        
        setIsStarted(false);
        setIsCtrlClicked(isCtrlClicked => false)
    }

    return(
        <Container>
            <TitleWrapper>
                <h1>자리 뽑기</h1>
            </TitleWrapper>
            <DeskWrapper>
            <table>
                    <tbody>
                    {tempDesksArr.map((a,i)=>(
                        <tr>
                            {tempDesksArr[i].map((a,j)=>{ 
                                const cols = parseInt(tempDesksArr.length);
                                const rows = parseInt(tempDesksArr[0].length);
                                let length = 0;
                                if(cols>=rows){
                                    length = cols;
                                } else {
                                    length = rows*0.7;
                                }

                                return(
                                    <td>

                                        <DeskUnitComponent closed={!a.toggle} length={length} large>
                                            <CSSTransition
                                            appear
                                            classNames="item"
                                            in={isStarted}
                                            timeout={500}
                                            >
                                            <div >
                                                <span>{isStarted? isCtrlClicked ?  a.fixedStudent || a.name : a.name : null}</span>
                                            </div>
                                            </CSSTransition>
                                        </DeskUnitComponent>
                                    </td>
                                )
                            })}
                        </tr>           
                        )
                    )}
                    </tbody>
                </table>
            </DeskWrapper>
            <BtnWrapper>
                {!isStarted ?<Button variant="danger" onClick={(e) => switchStart(e)}>시작</Button> :  <Button onClick={onReset}>다시뽑기</Button>}
                
                
            </BtnWrapper>
        </Container>
    )
}

export default DrawComponent;