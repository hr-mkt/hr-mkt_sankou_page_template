import { useDispatch, useStore } from 'react-redux'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {animated} from 'react-spring'
import {slideInBottom} from '../../animations'
import VisibilitySensor from 'react-visibility-sensor'
import TextField from '@material-ui/core/TextField'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import IconButton from '@material-ui/core/IconButton'
import {EXECUTE_MORPHOLOGICAL_ANALYSYS} from '../../actions/'

const Panel = () => {
    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(false)
    const anim = slideInBottom(toggle)

    const [text, setText] = useState('')

    return (
        <Container>
            <VisibilitySensor
                partialVisibility={true}
                onChange={(isVisible) => {
                    setToggle(isVisible)
                }}
            >
                <animated.div style={anim}>
                    <InputContainer>
                        <StyledTextField
                            label="文章を入力してください"
                            variant="outlined"
                            onChange={(e) => {setText(e.target.value)}}
                            value={text}
                        />
                        <IconButton
                            onClick={() => {
                                dispatch({
                                    type: EXECUTE_MORPHOLOGICAL_ANALYSYS,
                                    value: text
                                })
                            }}
                        >
                            <PlayCircleOutlineIcon
                                style={{fontSize: '40px', color: 'rgba(0, 0, 0, 0.53)'}}
                            />
                        </IconButton>
                    </InputContainer>
                </animated.div>
            </VisibilitySensor>
        </Container>
    )
}

export default Panel

/**
 * component
 */
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledTextField = styled(TextField)`
    width: 400px;

    @media screen and (min-width: 300px){
        width: 300px;
    }
`
