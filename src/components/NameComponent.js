import styled from 'styled-components';
import NameTag from './NameTag';
import { useState } from 'react';
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
    }
    .button {
        flex-grow: 0;
    }
`





const NameComponent = () => {
    const [id,setId] = useState(4);
    const [inputName,setInputName] = useState();
    const [tempNameArr,setTempNameArr] = useState([
        {name: '강지현', id: 1},
        {name: '이명권', id: 2},
        {name: '이재철', id: 3}
    ]);
    const onSubmited = (e) => {
        e.preventDefault();
        setTempNameArr([...tempNameArr,{name: inputName, id: id}])
        setId(id+1)
    }
    
    const onChange = (e) => {
        setInputName(e.target.value)
        console.log(inputName);
        console.log(tempNameArr);
    }
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
                    <input className="input" type='text' placeholder='이름을 입력하세요' onChange={onChange}></input>
                    <button className='button' type='submit'>추가</button>
                </div>
            </NameForm>
        </NameContainer>

    )
}

export default NameComponent;