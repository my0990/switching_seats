import styled, {css} from 'styled-components';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {Button} from'react-bootstrap';
import { useEffect } from 'react';

const Container = styled.div`
    font-size: 16px;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // background-color: orange;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Modal {
        position: fixed;
        /* bottom: -150vh; */
        background-color: #fff;
        /* width: 100%; */
        height: 100vh;
        box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
        right: -150vw;
        padding: 0 12px 12px;
        transition: right 0.3s ease-out;
        z-index: 10;
        width: 300px;
        overflow: scroll;
        overflow-x:hidden
    }
    .Modal.Show {
        right: 0;
    }
    .Overlay {
        background-color: rgba(0, 0, 0, 0.55);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        display: none;
        z-index: 5;
    }
    .Overlay.Show {
        display: block;
    }
    ul {
        list-style: none;
        
        li {
            text-align: start;
            padding: 10px;
            cursor: pointer;
            &:hover{
                color: red;
            }
        }
    }
`

const Wrapper = styled.div`
    background-color: white;
    width: 80%;
    height: 80%;
    min-width: 1024px;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
    cursor: pointer;
    margin: 6px;
    /* @media screen and (min-width: 1024px){
        margin: 6px;
    }    
    @media screen and (min-width: 768px) and (max-width: 1023px){

        margin: 6px;
    }    
    @media screen and (max-width: 767px){

        margin: 3px;
    } */
    ${(props) =>
        props.closed && 
     css`
        font-size: 0;
        border: none;   
        background-color: white;
        cursor: default;
     `}
     ${(props) =>
        props.manyCols && 
     css`
        width: 60px;
        height: 35px;
        color: red;
     `}
`
// ????????? ?????? ??????
const StudentsNameList = styled.li`
    font-weight: bold;
    ${(props) =>
        props.fixed && 
    css`
        color: gray;  
        font-weight: normal;
        
    `}
`

const ResetBtn = styled.li`
    
    color: red;
    &:hover {
        font-weight: bold;    
    }
`

const ManipulateComponent = ({studentsArr, setStudentsArr, desksArr, setDesksArr, scroll, setIsClicked, isClicked}) => {
    //????????? ????????? (i,j)
    const [fixedDesk,setFixedDesk]= useState([]) 
    const [modalToggle,setModalToggle] = useState(false);

    //????????? ??????????????????, ?????? ?????? true, ????????? (i,j) ??????, ????????? false
    const onDeskClicked = (i,j) => {
        setModalToggle(!modalToggle)
        setFixedDesk([i,j])
        scroll(false)
    }

    //????????? ?????? ?????? ??????(i,j)??? fixedStudent ?????? ???????????? ??????//???????????? ????????? ??????????
    const fixStudent = (name) => {
        let tempArr = [...desksArr];
        let temp = studentsArr;

        //?????? ????????? ????????? ????????? ??????
        for(let i =0;i<desksArr.length;i++){
            let tempIndex = desksArr[i].findIndex(x=>x.fixedStudent === name)
            if(tempIndex !== -1){
                delete desksArr[i][tempIndex].fixedStudent;
                break;
            }
        }
        //?????? ????????? fixed true??? ?????? ?????? ????????? ????????? ????????? ???????????? fixed false??? ??????
        let tempIndex = studentsArr.findIndex(x => x.name === name);
        if(tempIndex !== -1){
            // let temp = [...studentsArr];
            let tempName = tempArr[fixedDesk[0]][fixedDesk[1]].fixedStudent;

            if(tempName !== undefined){
                let tempNameIndex = studentsArr.findIndex(x => x.name === tempName);
                temp[tempNameIndex] = {...temp[tempNameIndex], fixed: false};
            }


            

            temp[tempIndex]= {...temp[tempIndex], fixed: true};
            // setStudentsArr([...temp]);
            
            localStorage.setItem("studentsArr",JSON.stringify([...temp]));
        }
        //?????? ????????? ?????? ?????? ??????
        setStudentsArr((prev)=>
             [...temp]
        );
        tempArr[fixedDesk[0]][fixedDesk[1]] = {...tempArr[fixedDesk[0]][fixedDesk[1]], fixedStudent: name}
        setDesksArr([...tempArr])
        localStorage.setItem("desksArr",JSON.stringify(desksArr));
         


        //?????? ????????? ????????? ????????? ???????????? fixed false??? ??????
        // let tempName = tempArr[fixedDesk[0]][fixedDesk[1]].name;
        // let tempNameIndex = studentsArr.findIndex(x => x.name === tempName);
        // let temp = [...studentsArr];
        // temp[tempNameIndex] = {...temp[tempNameIndex], fixed: false};
        // setStudentsArr([...temp]);
        // localStorage.setItem("studentsArr",JSON.stringify([...temp]));

        // localStorage.setItem("studentsArr",JSON.stringify(studentsArr))
        setModalToggle(false);
        scroll(true)
    }
    //???????????? ??????????????? ????????? ?????? ????????? ??????
    const onLayoutclicked = () => {
        setModalToggle(false)
        scroll(true)
    }
    // ?????? ????????? ???????????? ???????????? ???????????????
    const onResetFixedStudents = () => {
        // ?????? ?????????
        let tempStudents = studentsArr;
        for(let i=0;i<tempStudents.length;i++){
            if(tempStudents[i].fixed === true){
                tempStudents[i].fixed = false;
            }
        }
        setStudentsArr([...tempStudents]);
        localStorage.setItem('studentsArr',JSON.stringify(tempStudents));
        
        // ?????? ?????????
        let tempDesksArr = [...desksArr];
        console.log(tempDesksArr)
        for(let i=0;i<tempDesksArr.length;i++){
            for(let j=0; j<tempDesksArr[0].length;j++){
                if(tempDesksArr[i][j].fixedStudent){
                    delete tempDesksArr[i][j].fixedStudent
                } 
            }
        }
        setDesksArr([...tempDesksArr]);
        localStorage.setItem('desksArr', JSON.stringify(tempDesksArr));
        setModalToggle(false);
        scroll(true);
    }
    useEffect(()=>{

    })
    return(
        <Container>
            <div className={`Modal ${modalToggle? 'Show' : ''}`}>
                <ul>
                    {studentsArr.map((a,i)=>{
                        return(
                        <StudentsNameList key={i} onClick={()=>{fixStudent(a.name)}} fixed={a.fixed}>{a.name}</StudentsNameList>
                        )
                    })}
                    <ResetBtn onClick={onResetFixedStudents}>?????????</ResetBtn>
                </ul>
            </div>
            <div 
                className={`Overlay ${modalToggle ? 'Show' : ''}`}
                onClick={onLayoutclicked}
            />
            <h1>?????? ??????</h1>
            <Wrapper>
                
                <table>
                    <tbody>
                    
                    {desksArr.map((a,i)=>(
                                    <tr>
                                        {desksArr[i].map((a,j)=>{
                                            const cols = parseInt(desksArr.length);
                                            const rows = parseInt(desksArr[0].length);
                                            let length = 0;
                                            if(cols>=rows){
                                                length = cols;
                                            } else {
                                                length = rows*0.7;
                                            }
                                            return(
                                                <td>
                                                    
                                                        <DeskUnitComponent closed={!a.toggle} length={length} large onClick={()=>{a.toggle && onDeskClicked(i,j)}}>
                                                            <CSSTransition
                                                            // appear
                                                            classNames="item"
                                                            // in={test}
                                                            timeout={500}
                                                            >
                                                            <div >
                                                                <span>{a.fixedStudent}</span>
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
            </Wrapper>
            <Button variant="primary" onClick={()=>{setIsClicked(false)}}>?????????</Button>
        </Container>
    )
}

export default ManipulateComponent;