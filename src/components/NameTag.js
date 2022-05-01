import styled from "styled-components";

const Wrapper = styled.div`
    // flex: 1;
    // // height: 4rem;
    // background: #eee;
    // margin: 1rem;
    // border-radius: 5px;
    // font-size: 1rem;
    text-align: center;
    line-height: 2.4vw;
    // vertical-align: middle;
    width: 8vw;
    background: white;
    margin: 1vw;
    height: 0;
    padding-bottom: 30%;
    border: 1px solid black;
    .item-enter {
        opacity: 0;
    }
    .item-enter-active {
        opacity: 1;
        transition: all 500ms;
    }
`

const NameTag = ({children}) => {
    return(
        <div>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    )
}

export default NameTag;
