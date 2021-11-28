import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import firebase from 'firebase'
import { postArticleAPI } from '../redux/actions'

const PostModal = (props) => {
    const [editorText, setEditorText] = useState('')
    const [shareImage, setShareImage] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [assetArea, setAssetArea] = useState('')

    const handleChange = (e) => {
        const image = e.target.files[0]
        if (image === '' || image === undefined) {
            alert(`not an image, the image file is ${typeof image} `)
            return
        }
        setShareImage(image)
    }

    const switchAssetArea = (area) => {
        setShareImage('')
        setVideoLink('')
        setAssetArea(area)
    }

    const postArticle = (e) => {
        e.preventDefault()
        if (e.target !== e.currentTarget) {
            return
        }
        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now()
        }
        props.postArticle(payload)
        reset(e)
    }

    const reset = (e) => {
        setEditorText('')
        setShareImage('')
        setVideoLink('')
        setAssetArea('')
        props.handleClick(e)
    }

    const content = (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button onClick={(event) => reset(event)}>
                        <img src='/assets/images/close-icon.svg' alt='close' />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt='' /> : <img src="/assets/images/user.svg" alt="user" />}
                        <span>
                            {props.user ? props.user.displayName : 'User'}
                        </span>
                    </UserInfo>
                    <Editor>
                        <textarea
                            value={editorText}
                            onChange={(e) => setEditorText(e.target.value)}
                            placeholder='What do you want to talk about?'
                            autoFocus={true}
                        />
                        {assetArea === 'image' ?
                            (<UploadImage>
                                <input
                                    type='file'
                                    accept='image/gif, image/jpg, image/jpeg, image/png'
                                    name='image'
                                    id='file'
                                    style={{ display: 'none' }}
                                    onChange={handleChange}
                                />
                                <p><label
                                    htmlFor='file'>
                                    Select image to share
                                </label></p>
                                {shareImage && <img src={URL.createObjectURL(shareImage)} alt='shared_image' />}
                            </UploadImage>
                            )
                            :
                            assetArea === 'media' &&
                            (<>
                                <input
                                    type='text'
                                    placeholder='please input a video link'
                                    value={videoLink}
                                    onChange={(e) => setVideoLink(e.target.value)}
                                />
                                {videoLink && <ReactPlayer width={'100%'} url={videoLink} />}
                            </>)
                        }
                    </Editor>
                </SharedContent>
                <SharedCreation>
                    <AttachAssets>
                        <AssetButton onClick={() => switchAssetArea('image')}>
                            <img src='/assets/images/image-icon.svg' alt='' />
                        </AssetButton>
                        <AssetButton onClick={() => switchAssetArea('media')}>
                            <img src='/assets/images/video-icon.svg' alt='' />
                        </AssetButton>
                    </AttachAssets>
                    <ShareComment>
                        <AssetButton >
                            <img src='/assets/images/comments.svg' alt='' />
                            Anyone
                        </AssetButton>
                    </ShareComment>
                    <PostButton
                        disabled={!editorText ? true : false}
                        onClick={(e) => postArticle(e)}
                    >
                        Post
                    </PostButton>
                </SharedCreation>
            </Content>
        </Container>
    )
    return (
        <>
            {
                props.showModal === 'open' && content
            }
        </>

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
    animation: fadeIn 0.3s;
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
        img, svg{
            pointer-events: none;
        }
    }
`

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg, img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`

const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 30px;
    min-width: auto;
    color: rgba(0,0,0,0.5);
    background: transparent;
    border: none;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-right: 5px;
    &:hover{
        border-color: rgba(0,0,0,0.5)
    }
    img{
        width: 100%;
        max-width: 30px;
        margin-right: 5px; 
    }
`
const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    ${AssetButton}{
        width: 42px;
    }
`
const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
    ${AssetButton}{
        svg{
            margin-right: 5px;
        }
    }
`
const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: ${(props) => props.disabled ? 'rgba(0,0,0,0.8)' : '#0a66c2'};
    color: #ffffff;
    &:hover{
        cursor: pointer;
        background: ${(props) => props.disabled ? 'rgba(0,0,0,0.6)' : '#004182'};
    }
`
const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
        border: 1px solid rgba(0,0,0,0.15);
        outline: none;
        &:focus{
            border: 1px solid #0a66c2;
        }
    }
    input{
            width: 100%;
            height: 25px;
            font-size: 16px;
            margin-bottom: 20px;
        }
`
const UploadImage = styled.div`
    text-align: center;
    img{
        width: 100%;
    }
    p{
        label{
            cursor: pointer;
        }
    }
`

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);