import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { slideInBottom } from '../../animations'
import VisibilitySensor from 'react-visibility-sensor'
import TextField from '@material-ui/core/TextField'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import IconButton from '@material-ui/core/IconButton'
import { EXECUTE_MORPHOLOGICAL_ANALYSYS } from '../../actions/'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

const DataTable = () => {
    const dispatch = useDispatch()
    const tokenized = useSelector((state) => state.app.tokenized)

    const [toggle, setToggle] = useState(false)
    const [visible, setVisible] = useState(false)
    const anim = slideInBottom(toggle)

    if (!toggle && tokenized.length) {
        setVisible(true)
        setToggle(true)
    }

    const classes = useStyles();

    return (
        <Container visible={visible}>
            <animated.div style={anim}>
                <TableContainer component={Paper} style={{maxHeight: '500px', overflow: 'scroll'}}>
                    <Table aria-label="simple table" className={classes.table}>
                        <TableHead style={{backgroundColor: '#464646', color: '#fff'}}>
                            <TableRow>
                                <TableCell style={{color: '#fff'}} align="right">表層</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">活用形</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">活用の種類</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">品詞</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">品詞詳細１</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">品詞詳細２</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">品詞詳細３</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">基本形</TableCell>
                                <TableCell style={{color: '#fff'}} align="right">既知</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tokenized.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {row.surface_form}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.conjugated_form}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.conjugated_type}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.pos}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.pos_detail_1}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.pos_detail_2}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.pos_detail_3}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.basic_form}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.word_type === 'KNOWN' ? '●' : ''}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <IconButton
                    style={{position:'relative', right: 0}}
                    onClick={() => {dispatch({type: 'OUTPUT_CSV'})}}
                >
                    <Export><DoubleArrowIcon style={{color: '#aaa'}}/>CSV</Export>
                </IconButton>
            </animated.div>
        </Container>
    )
}

export default DataTable

/**
 * component
 */
const Container = styled.div`
    width: 90%;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    padding: 5px;
`

const Export = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`
