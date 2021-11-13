import React from 'react';
import styled from 'styled-components';
import { navData } from './data/navData'


//
const Header = () => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/assets/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder='Search' />
                    </div>
                    <SearchIcon>
                        <img src="/assets/images/search-icon.svg" alt="search" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        {
                            navData.map((item, index) => (
                                <NavList key={index}>
                                    <a>
                                        <img src={item.source} alt={item.alt} />
                                        <span>{item.text}</span>
                                    </a>
                                </NavList>
                            ))
                        }
                        <User>
                            <a >
                                <img src="/assets/images/user.svg" alt="user" />
                                <span>Me</span>
                                <img src="/assets/images/down-icon.svg" alt="down" />
                            </a>
                            <SignOut>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>

                        <Work>
                            <a>
                                <img src="/assets/images/nav-work.svg" alt="Work" />
                                <span>
                                    Work
                                    <img src="/assets/images/down-icon.svg" alt="down" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container >
    );
}

const Container = styled.div`
    background-color: #ffffff;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    & > div{
        max-width: 280px;
        input{ 
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`
const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px){
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
`

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

`

const NavList = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span{
        color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    }
        @media(max-width:768px){
            min-width: 70px;
        }
    }
    }
    &:hover, 
    &:active{
        a{
            span{
                color: rgba(0,0,0,0.9);
            }
        }
    }
    .active{
        span:after{
            content: '';
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #ffffff);
            bottom: 0;
            left: 0;
            position: absolute;
            border-color: rgba(0,0,0,0.9);
        }    
    }
    @media(max-width: 768px){
        width: 20%;
    }
`

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    background: #ffffff;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
    cursor: pointer;
`

const User = styled(NavList)`
    a > svg{
        width: 24px;
        border-radius: 50%;
    }
    a > img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    span{
        display: flex;
        align-items: center;
    }

    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
    @media(max-width: 768px){
        display: none;
    }
`

const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);
`




export default Header;
