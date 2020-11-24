import { useDispatch, useStore } from 'react-redux'
import Link from 'next/link'
import useInterval from '../lib/useInterval'
import Footer from '../components/Footer'
import {animated} from 'react-spring'
import {slideInLeft} from '../animations'
import { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import styled from 'styled-components'
import Head from '../components/MetaHeader'

export default function Index() {
    const dispatch = useDispatch()

    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)

    const anim1 = slideInLeft(toggle1)
    const anim2 = slideInLeft(toggle2)
    const anim3 = slideInLeft(toggle3)

    return (
        <>
            <Head
                title='「●●」を真似したページ | How to NEXT.JS'
                description=''
            />
            <Container>
                <Title>参考ページ</Title>
                <VisibilitySensor
                    partialVisibility={true}
                    onChange={(isVisible) =>{setToggle1(isVisible)}}
                >
                    <animated.div style={anim1}><ul><Link href="./morphological_analysis">形態素解析</Link></ul></animated.div>
                </VisibilitySensor>
                <VisibilitySensor
                    partialVisibility={true}
                    onChange={(isVisible) =>{setToggle2(isVisible)}}
                >
                    <animated.div style={anim2}><ul><Link href="./site_policy">サイトポリシー</Link></ul></animated.div>
                </VisibilitySensor>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.div`
    height: calc(100vh - 40px);
    width: 100vw;
`

const Title = styled.h1`
    color: #aaa;
`
