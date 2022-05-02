import styled from 'styled-components';
import NameTag from './NameTag';
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





const NameComponent = () => {
    const [id,setId] = useState(1);
    const [inputName,setInputName] = useState();
    const [tempNameArr,setTempNameArr] = useState([]);
    const [isArrExist,setIsArrExist] = useState(false);
    useEffect(()=>{
        let tempArr = JSON.parse(localStorage.getItem('studentsArr'));
        let lastId = JSON.parse(localStorage.getItem('id'));
        if(tempArr){
            setIsArrExist(true);
            setTempNameArr(tempArr);
            setId(lastId + 1);
        } else {
            localStorage.setItem('id', 1)
        }
    },[])
    const onSubmited = (e) => {
        e.preventDefault();
        setTempNameArr([...tempNameArr,{name: inputName, id: id}]);
        setId(id+1);
        inputRef.current.value = '';
        setInputName('')
        localStorage.setItem("studentsArr",JSON.stringify([...tempNameArr,{name: inputName, id: id}]))
        localStorage.setItem("id",id);
    }
    
    const onChange = (e) => {
        setInputName(e.target.value)
        console.log(inputName);
        console.log(tempNameArr);
    }
    const inputRef = useRef();


    return(
        <NameContainer>
            <div className='label'>
                    <h1>우리반 명단</h1>
            </div>
            <TransitionGroup>
                <div className="wrapper">
                    <div className='content'>
                        {tempNameArr.map((a,i) => 
                            ( 
                                <CSSTransition in={true} key={i} timeout={500} classNames="fade">
                                    <NameTag>{a.name}</NameTag>
                                </CSSTransition>

                                )
                        )}
                    </div>
                </div>
            </TransitionGroup>
            <NameForm onSubmit={onSubmited}>
                <div className='inputWrapper'>
                    <input className="input" type='text' placeholder='이름을 입력하세요' onChange={onChange} ref={inputRef}></input>
                    <button className='button' type='submit'>추가</button>
                </div>
            </NameForm>
        </NameContainer>

    )
}

export default NameComponent;