import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

const PostModal = (props) => {
    return (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button>
                        <img src='/assets/images/close-icon.svg' alt='close' />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt='' /> : <img src="/assets/images/user.svg" alt="user" />}
                        <span>
                            {props.user ? props.user.displayName : ''}
                        </span>
                    </UserInfo>
                </SharedContent>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: #000000;
    background-color: rgba(0,0,0,0.6);
`

const Content = styled.div`
    width: 100%;
    max-width: 555px;
    background-color: #ffffff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);
        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: rgba(0,0,0,0.15);
        }
    }
`
const SharedContent = styled.div`

`

const UserInfo = styled.div`

`


const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}

export default connect(mapStateToProps)(PostModal);