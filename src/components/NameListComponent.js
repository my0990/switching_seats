import styled from 'styled-components';
import NameTag from './common/NameTag';
import { useEffect, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
            position: absolute;
            top: 150px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
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

const NameListComponent = ({studentsArr, setStudentsArr}) => {
    const [id,setId] = useState(1);
    const [inputName,setInputName] = useState();
    const inputRef = useRef();

//만약 처음이라면 아이디 1부터 시작하고 로컬스토리지에 저장, 기존 자료있으면 마지막 아이디 가져오기
    useEffect(()=>{
        let lastId = JSON.parse(localStorage.getItem('id'));
        console.log("lastId: ", lastId)
        if(lastId !== null){
            setId(lastId + 1);
        } else {
            localStorage.setItem('id', 1)
            console.log("test: ", studentsArr)
        }
    },[])


//학생 이름 추가
    const onSubmited = (e) => {
        e.preventDefault();
        if(studentsArr.length < 40){
            setStudentsArr([...studentsArr,{name: inputName, id: id}]);
            inputRef.current.value = '';
            setInputName('')
            localStorage.setItem("studentsArr",JSON.stringify([...studentsArr,{name: inputName, id: id}]))
            localStorage.setItem("id",id);
            setId(id => id + 1)
        } else {
            alert('학생수는 최대 40명입니다^^;;');
        }
    }
// 학생 이름 제거
    const onDelete = (i) => {
        let temp = studentsArr.filter(tempName => tempName.id !== i)
        setStudentsArr([...temp])
        localStorage.setItem("studentsArr", JSON.stringify(temp))
        console.log('rendered')
    }
    
// 입력창 value
    const onChange = (e) => {
        setInputName(e.target.value)
    }



    return(
        <NameContainer>
            <div className='label'>
                    <h1>우리반 명단</h1>
            </div>
                <div className="wrapper">
                    <TransitionGroup className='content'>
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
                    </TransitionGroup>
                    {studentsArr.length === 0
                    ? <h3>학생 이름을 입력해주세요. 이름을 클릭하면 삭제할 수 있습니다.</h3>
                    : null}
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