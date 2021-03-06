import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
function Section(props) {

    const fadeIn = useSpring({ to: { opacity: 1, transform: 'translateY(0px)' }, from: { opacity: 0, transform: 'translateY(50px)' },delay: 500 })
    return (
        <Wrap bgImage={props.backgroundImg}>
            <ItemText>
                <animated.div style={fadeIn}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </animated.div>
            </ItemText>
            <Button>
                <ButtonGroup>
                    <LeftButton>{props.leftBtnText}</LeftButton>
                    {props.rightBtnText && 
                        <RightButton>{props.rightBtnText}</RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Button>
        </Wrap>

    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   //上下對齊
    align-items: center;                //左右對齊
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: #3A3D42;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    animation-name: leftBtnFadeIn;
    animation-duration:1s;
`

//繼承leftbutton
const RightButton = styled(LeftButton)`
    color: #000;
    opacity: 0.75;
    background-color: white;
    animation-name: rightBtnFadeIn;
` 

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animationDown infinite 1.5s;
    overflow-x: hidden;
`

const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default Section