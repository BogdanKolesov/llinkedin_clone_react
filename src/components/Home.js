import React from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';
import RightSide from './RightSide';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const Home = (props) => {
    return (
        <Container>
            {!props.user && <Redirect to='/' />}
            <Content>
                <Section>
                    <h5>
                        <a> Hairing in a hurrt?</a>
                    </h5>
                    <p>Find talanted pros in record time Upwork and keep buisness moving.</p>
                </Section>
                <Layout>
                    <LeftSide />
                    <Main />
                    <RightSide />
                </Layout>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
    padding-bottom: 5%;
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
const Layout = styled.section`
    display: grid;
    grid-template-areas: 'leftside main rightside';
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;
    @media(max-width:768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`
const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}
export default connect(mapStateToProps)(Home);
