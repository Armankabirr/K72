import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = () => {

    const stairParentRef = useRef(null)
    const currentPath = useLocation().pathname

    useGSAP(function () {

        const tl = gsap.timeline();

        tl.to(stairParentRef.current, {
            display: 'Block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25,
            }
        });
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25,
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none',
        })
        tl.to(stairParentRef.current, {
            y: '0',
        })
    },[currentPath])
    return (
        <div ref={stairParentRef} className='h-screen fixed z-20 top-0 w-full'>
            <div className='h-screen flex fixed w-full'>
                <div className='stair h-full w-1/5 bg-black '></div>
                <div className='stair h-full w-1/5 bg-black '></div>
                <div className='stair h-full w-1/5 bg-black '></div>
                <div className='stair h-full w-1/5 bg-black '></div>
                <div className='stair h-full w-1/5 bg-black '></div>
            </div>
        </div>
    )
}

export default Stairs
