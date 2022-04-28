import styled from 'styled-components';
import NameTag from './NameTag';


const NameContainer = styled.div`
    // display: flex;
    // align-items: center;
    // flex-direction: column;
    // min-height: 90vh;
    // over-flow: screen;
    // text-align: center;
    .label {
        border-bottom: 1px solid black;
        margin-bottom: 2rem;
        font-size: 2rem;
        display: inline-block;
    }

    

`
const NameWrapper = styled.div`
    background: green;
    position: relative;
    width: 70%;
    height: 0;
    // overflow: hidden;
    padding-bottom: 30%;
    margin: 0 auto;
    .content {
        display: flex;
        flex-wrap: wrap;
        
    }

`




const NameComponent = () => {
    return(
        <NameContainer>
            <div className='label'>
                우리반 명단
            </div>
            <NameWrapper>
                <div className='content'>
                    <NameTag>강지현</NameTag>

                </div>
            </NameWrapper>
            <form onSubmit={()=>{console.log('test')}}>
                <input></input>
                <button>입력</button>
            </form>
        </NameContainer>

    )
}

export default NameComponent;