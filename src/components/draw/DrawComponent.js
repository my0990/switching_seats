import { useEffect,useState } from 'react';
import styled, {css} from 'styled-components';
import { Button } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AnimatedText from 'react-animated-text-content';

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
    display: inline-block;
    width: ${props => 45/props.length * 1.8}vh;
    height: ${props => 45/props.length}vh;
    // max-width: 15vh;
    // max-height: 7vh;
    
    
    
    @media screen and (min-width: 1024px){
        margin: 6px;
    }    
    @media screen and (min-width: 768px) and (max-width: 1023px){
        background: blue;
        margin: 6px;
    }    
    @media screen and (max-width: 767px){
        background: greenyellow;
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

const DrawComponent = ({arr, setArr}) => {
    const[test,setTest] = useState(false);
    
    const [randomArr,setRandomArr] = useState([]);
    
    let order = 0;
    
    // useEffect(()=>{
        
    //     let temp = JSON.parse(localStorage.getItem('setArr'))
    //     if(temp != null){
    //         // setArr(temp)
    //         console.log(temp.length)
    //     }
        
    // },[localStorage.getItem])
    let studentsArr = [];
    const switchStart = () => {
        studentsArr = JSON.parse(localStorage.getItem("studentsArr"))
        let tempArr = [...arr];
        if(studentsArr){
            setRandomArr(studentsArr.sort(()=>Math.random()-0.5)); 
            
            let count = 0;
            for(let i = 0;i<tempArr.length;i++){
                for(let j=0;j<tempArr[0].length;j++){
                    if(count < studentsArr.length && tempArr[i][j].toggle){
                tempArr[i][j]['name'] = studentsArr[count++].name
                }}
            }
            console.log('tempArr: ', tempArr)
        } else {
            return null;
        }
        setArr(tempArr)
        setTest(!test);
    }
    return(
        <Container>
            <TitleWrapper>
                <h1>자리 뽑기</h1>
            </TitleWrapper>
            <DeskWrapper>
            <table>
                    <tbody>
                    
                    {arr.map((a,i)=>(
                                    
                                        <tr>
                                            {arr[i].map((a,j)=>{
                                                const cols = parseInt(arr.length);
                                                const rows = parseInt(arr[0].length);
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
                                                                in={test}
                                                                timeout={500}>
                                                                <div>
                                                                    {a.name}
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
                <Button variant="danger" onClick={switchStart}>시작</Button>
            </BtnWrapper>
        </Container>
    )
}

export default DrawComponent;