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
    // left: 0;
    // right: 0;
    // bottom: 0;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    .wrapper {
        // background: green;
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
    width: 20%;
    min-width: 250px;
    margin: auto;
    .inputWrapper{
        display: flex;
        // width: 20%;
        // margin: auto;
        flex-wrap: wrap;
    }

    .input {
        flex-grow: 1;
    }
    .button {
        flex-grow: 0;
        // width: 60px;
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
                    <button className='button' type='submit'>입력</button>
                </div>
            </NameForm>
        </NameContainer>

    )
}

export default NameComponent;