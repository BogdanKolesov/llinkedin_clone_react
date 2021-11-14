import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <Container>
            <ShareBox>
                Share
                <div>
                    <img src='/assets/images/user.svg' alt='User' />
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <img src='/assets/images/image-icon.svg' alt='images' />
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src='/assets/images/video-icon.svg' alt='video' />
                        <span>Video</span>
                    </button>
                    <button>
                        <img src='/assets/images/event-icon.svg' alt='events' />
                        <span>Events</span>
                    </button>
                    <button>
                        <img src='/assets/images/article-icon.svg' alt='article' />
                        <span>Write</span>
                    </button>
                </div>
            </ShareBox>
        </Container>
    );
}

const Container = styled.div`
    grid-area: main;
`
const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #ffffff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background-color: #ffffff;
    div{
        button{
            outline: none;
            color: rgba(0,0,0,0.6);
            line-height: 1.5;
            font-size: 14px;
            min-height: 48px;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            cursor: pointer;
            font-weight: 600;
            }
        
        &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;
            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button{
                justify-content: flex-start;
                margin: 4px 0;
                padding-left: 16px;
                flex-grow: 1;
                border-radius: 35px;
                border: 1px solid rgba(0,0,0,0.15);
                background-color: #ffffff;
                text-align: left;
            }
        }
        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;
            button{
                border-bottom: 2px solid transparent;
                img{
                    margin: 0 4px 0 -2px;
                    max-width: 28px;
                }
                span{
                        color: #70b5f9;
                        font-size: 14px;
                    }
                &:hover{
                    border-color:rgba(0,0,0,0.15);
                }
            }
        }
    }
`

export default Main;
