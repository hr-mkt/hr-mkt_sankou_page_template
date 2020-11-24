import Link from 'next/link'
import styled from 'styled-components'
import {animated} from 'react-spring'
import {slideInBottom} from '../animations'
import { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const Footer = () => {
    const [toggle, setToggle] = useState(false)
    const anim = slideInBottom(toggle)

    return (
        <Container>
            <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) => {
                    setToggle(isVisible)
                    console.log(isVisible)
                }}
            >
                <animated.div style={anim}>
                    <StyledLink><Link href='/'>tool.hr-mkt.com</Link> all right reserved.</StyledLink>
                </animated.div>
            </VisibilitySensor>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: #464646;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`

const StyledLink = styled.div`
    a {
        text-decoration: none;
        color: #fff;
    }
`
