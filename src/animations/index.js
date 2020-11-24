import {useSpring} from 'react-spring'

export const slideInLeft = (toggle) => {
    return useSpring({
        from :{
            transform: 'translateX(-100px)',
            opacity: 0
        },
        to: {
            transform: toggle ? 'translateX(0px)' : 'translateX(-100px)',
            opacity: toggle ? 1 : 0
        }
    })
}

export const slideInBottom = (toggle) => {
    return useSpring({
        from :{
            transform: 'translateY(20px)',
            opacity: 0
        },
        to: {
            transform: toggle ? 'translateY(0px)' : 'translateY(20px)',
            opacity: toggle ? 1 : 0
        }
    })
}


