import styled from "styled-components";

const Container = styled.div`
    display: flex;
    // justify-content: center;
    // align-items: center;
    min-height: 100vh;
    flex-direction: column;
    
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 4rem;
        // text-align: center;
    }
    flex: 9;
`
const Footer = styled.div`
    margin-bottom: 6rem;
    display: flex;
    flex: 2;
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
       }
       
       .chevron {
         position: absolute;
         width: 3.5rem;
         height: 0.8rem;
         opacity: 0;
         transform: scale(0.3);
         animation: move-chevron 3s ease-out infinite;
       }
       
       .chevron:first-child {
         animation: move-chevron 3s ease-out 1s infinite;
       }
       
       .chevron:nth-child(2) {
         animation: move-chevron 3s ease-out 2s infinite;
       }
       
       .chevron:before{
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
       }
       
       .chevron:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
       }
       
       .chevron:before {
        left: 0;
        transform: skewY(30deg);
       }
       
       .chevron:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
       }
       
       @keyframes move-chevron {
        25% {
         opacity: 1;
           }
        33.3% {
         opacity: 1;
         transform: translateY(3.8rem);
        }
        66.6% {
         opacity: 1;
         transform: translateY(5.2rem);
        }
        100% {
         opacity: 0;
         transform: translateY(8rem) scale(0.5);
        }
       }

`



const MainComponent = () => {
    return(
        <Container>
            <Wrapper>
                <h1>
                    자리바꾸기
                </h1>
            </Wrapper>
            <Footer>
            <div className="container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
                <h3>스크롤을 내려주세요ㅎㅎ</h3>
            </div>
            </Footer>
        </Container>
    )
}

export default MainComponent;