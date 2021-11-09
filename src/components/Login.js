import styled from 'styled-components';
import React from 'react';

const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/assets/images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn href="">Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional comunity</h1>
                    <img src="/assets/images/login-hero.svg" alt="Welcome!" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/assets/images/google.svg" alt="Google" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    padding: 0px;
`

const Nav = styled.nav`
    max-width: 1180px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 135px;
        height: 34px;

        @media (max-width: 768px){
            padding:  0, 5px;
        }
    }
`

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    border-radius: 5px;

    &:hover{
        background-color: rgba(0,0,0, 0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`
const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    text-decoration: none;
    &:hover{
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
    }
`
const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px){
        margin: auto;
        min-height: 0;
    }
`
const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c2;
        font-weight: 200;
        line-height: 70px;
        @media(max-width:768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img{
        z-index: -1;
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`

const Form = styled.div`

`

const Google = styled.button`

`

export default Login