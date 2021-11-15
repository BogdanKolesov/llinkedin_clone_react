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
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src='/assets/images/user.svg' alt='user' />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src='/assets/images/ellipsis.svg' alt='ellipsis' />
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImg>
                        <a>
                            <img src='/assets/images/shared-image.png' alt='shared' />
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src='/assets/images/like.svg' alt='like' />
                                <img src='/assets/images/hands.svg' alt='clap' />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>
                                2 comments
                            </a>
                        </li>
                    </SocialCounts>
                </Article>
            </div>
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

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`

const SharedActor = styled.div`
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            width: 48px;
            height: 48px;
        }
        & >div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span{
                text-align: left;
                &:first-child{
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(0,0,0,1)
                }
                &:nth-child(n + 1){
                    font-size: 12px;
                    color: rgba(0,0,0,0.6)
                }
            }
        }
    }
    button{
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        img{
            width: 35px;
        }
    }
`
const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,0.9);
    font-size: 14px;
    text-align: left;
`
const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`
const SocialCounts = styled.div`

`
export default Main;
