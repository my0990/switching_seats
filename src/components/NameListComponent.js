import styled from 'styled-components';
import NameTag from './common/NameTag';
import { useEffect, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { getStudentsArr } from '../api/nameListapi';
import { addStudentName } from '../api/nameListapi';

const NameContainer = styled.div`
    .label {
        margin: 2rem;
        height: 5vh;
        text-align: center;
    }
    position: absolute;
    top: 0;
    width: 100%;
    .wrapper {
        width: 100%;
        height: 60vh;
        padding: 2rem;
        .content {
            display: flex;
            flex-wrap: wrap;
        }
        h3 {
            color:  gray;
            opacity: 50%;
        }
    }
`


const NameForm = styled.form`
    margin: auto;
    .inputWrapper{
        display: flex;
        justify-content: center;
        width: 20%;
        margin: auto;
    }
    .input {
        flex-grow: 1;
        font-size: 1.5rem;
        border: 1px solid black;
    }
    .button {
        flex-grow: 0;
        
    }
`

const NameListComponent = ({studentsArr, addStudentName}) => {
    const [id,setId] = useState(1);
    const [inputName,setInputName] = useState();
    // const [tempNameArr,setTempNameArr] = useState([]);
    const [isArrExist,setIsArrExist] = useState(true);
    // useEffect(()=>{
    //     let tempArr = JSON.parse(localStorage.getItem('studentsArr'));
    //     let lastId = JSON.parse(localStorage.getItem('id'));
    //     if(tempArr.length !== 0){
    //         setIsArrExist(true);
    //         setTempNameArr(tempArr);
    //         setId(lastId + 1);
    //     } else {
    //         localStorage.setItem('id', 1)
    //     }
    // },[])
    // useEffect(()=>{
    //     getStudentsArr({setStudentsArr: setTempNameArr});
    // },[])
    // useEffect(()=>{
    //     if(tempNameArr.length === 0){
    //         setIsArrExist(false);
    //     } else {
    //         setIsArrExist(true);
    //     }
    // },[tempNameArr])
    const onSubmited = (e) => {
        e.preventDefault();
        if(studentsArr.length < 40){
        addStudentName(inputName)
        // setTempNameArr([...tempNameArr,{name: inputName, id: id}]);
        // addStudentName({name: inputName, setStudentsArr: setTempNameArr, studentsArr: tempNameArr});
        inputRef.current.value = '';
        setInputName('')
        // localStorage.setItem("studentsArr",JSON.stringify([...tempNameArr,{name: inputName, id: id}]))
        localStorage.setItem("id",id);
        } else {
            alert('학생수는 최대 40명입니다^^;;');
            e.preventDefault();
        }
    }

    const onDelete = (i) => {
        // let temp = tempNameArr.filter(tempName => tempName.id !== i)
        // setTempNameArr([...temp])
        // localStorage.setItem("studentsArr", JSON.stringify(temp))
        console.log('rendered')
    }
    
    const onChange = (e) => {
        setInputName(e.target.value)
        console.log(inputName);
        // console.log(tempNameArr);
    }
    const inputRef = useRef();
    // console.log(studentsArr)

    return(
        <NameContainer>
            <div className='label'>
                    <h1>우리반 명단</h1>
            </div>
                <div className="wrapper">
                    {studentsArr.length === 0
                    ? <h3>학생 이름을 입력해주세요. 이름을 클릭하면 삭제할 수 있습니다.</h3>
                    : <TransitionGroup className='content'>
                        {studentsArr.map((a,i) => 
                            ( 
                                <CSSTransition 
                                    key={i} 
                                    timeout={500} 
                                    classNames="item"
                                >
                                    <NameTag onClick={() => onDelete(a.id)}>{a.name}</NameTag>
                                </CSSTransition> 

                                )
                        )}
                    </TransitionGroup>}
                </div>
            <NameForm onSubmit={onSubmited}>
                <div className='inputWrapper'>
                    <input className="input" type='text' placeholder='이름을 입력하세요' onChange={onChange} ref={inputRef}></input>
                    <button className='button' type='submit'>추가</button>
                </div>
            </NameForm>
        </NameContainer>

    )
}

export default NameListComponent;