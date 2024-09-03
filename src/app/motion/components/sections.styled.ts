'use client';

import styled from 'styled-components';
import {motion} from "framer-motion";


export const Section = styled.section`
    width: 100%;
    height: 100vh;
    background: crimson;
`


export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

export const ContentHeight = styled.div`
    height: calc(100* 1svh);
    width: 100%;
    z-index: 0;
    position: relative;
    background: blueviolet;
`

export const StickyContainer = styled.div`
    width: 100%;
    height: 50vh;
    position: sticky;
    top: 0;
    background: aquamarine;
    z-index: 2;
`

export const StickySection = styled.section`
    position: relative;
`

export const Center = styled.div`
    position: relative;
`

export const ListWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 200px;
    margin: 0 auto;
    border: 1px solid burlywood;
    `

export const ListThumbnail = styled(motion.div)`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Thumbnail = styled.div`
    width: 300px;
    height: 200px;
    position: relative;
`