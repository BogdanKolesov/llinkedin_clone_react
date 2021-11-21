import React from 'react';
import styled from 'styled-components';

const PostModal = () => {
    return (
        <Container>
            PostModal
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
    background-color: #000000;
`

export default PostModal;