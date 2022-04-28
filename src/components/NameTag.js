import styled from "styled-components";

const Wrapper = styled.div`
    // flex: 1;
    // // height: 4rem;
    // background: #eee;
    // margin: 1rem;
    // border-radius: 5px;
    // font-size: 1rem;
    // text-align: center;
    // line-height: 4rem;
    // vertical-align: middle;
    width: 100%;
    background: white;
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
