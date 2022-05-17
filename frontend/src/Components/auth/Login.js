import React from "react"
import styled from 'styled-components'

const Login =(props)=>{
    return(
        <Container>
            <Content>
                <CTL>
                    <Logn>
                        LOGIN
                    </Logn>
                </CTL>
            </Content>
        </Container>
    )
};

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
    height: 100%;
    flex-direction: column;
`;

const CTL = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: easy-out;
    transition: opacity 0.2s;
    width: 100%
`;

const Logn = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 1px;
    cursor: pointer;
`;

export default Login;