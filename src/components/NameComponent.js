import styled from 'styled-components';
import NameTag from './NameTag';


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
    return(
        <NameContainer>
            <div className='label'>
                    <h1>우리반 명단</h1>
            </div>
            <div className="wrapper">
                <div className='content'>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                    <NameTag>강지현</NameTag>
                </div>
            </div>
            <NameForm onSubmit={()=>{console.log('test')}}>
                <div className='inputWrapper'>
                    <input className="input" type='text' placeholder='이름을 입력하세요'></input>
                    <button className='button' type='submit'>추가</button>
                </div>
            </NameForm>
        </NameContainer>

    )
}

export default NameComponent;