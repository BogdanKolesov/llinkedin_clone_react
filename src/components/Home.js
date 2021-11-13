import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <Section>
                <h5>
                    <a> Hairing in a hurrt?</a>
                </h5>
                <p>Find talanted pros in record time Upwork and keep buisness moving.</p>
            </Section>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0; 
    box-sizing: border-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5{
        color: #0a66c2;
        font-size: 14px;
        a{
            font-weight: 700;
            margin-right: 5px;
        }
    }
    p{
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }

    @media (max-width: 768px){
        flex-direction: column;
        padding: 0 5px;
        margin-right: 0;
    }
`

export default Home;
