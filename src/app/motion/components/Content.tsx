'use client';
import {
    Center, ContentHeight, ListThumbnail,
    ListWrapper,
    Overlay,
    Section,
    StickyContainer,
    StickySection, Thumbnail
} from "@/src/app/motion/components/sections.styled";
import {useRef} from "react";
import {useScroll, useTransform} from "framer-motion";

export const MotionContent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -1500]);

    return <>
        <Section />
        <StickySection ref={ref}>
            <Overlay>
                <StickyContainer>
                    <Center>
                        <ListWrapper>
                            <ListThumbnail style={{ translateY }}>
                                <Thumbnail style={{ background: 'crimson'}}/>
                                <Thumbnail style={{ background: 'red'}}/>
                                <Thumbnail style={{ background: 'blue'}}/>
                                <Thumbnail style={{ background: 'yellow'}}/>
                                <Thumbnail style={{ background: 'gray'}}/>
                            </ListThumbnail>
                        </ListWrapper>
                    </Center>
                </StickyContainer>
            </Overlay>
            <ContentHeight />
            <ContentHeight />
            <ContentHeight />
        </StickySection>
        <Section /><Section /></>
}