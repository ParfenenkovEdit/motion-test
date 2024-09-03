'use client';
import {
    RelativeContentContainer, MockHeightBlock, AbsoluteList,
    OverflowHiddenListWrapper,
    AbsoluteOverlay,
    OtherSections,
    StickyContainer,
    RelativeContainerInSection, RelativeListItem
} from "@/src/app/motion/components/sections.styled";
import {useRef} from "react";
import {useScroll, useTransform} from "framer-motion";

export const MotionContent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -1500]);

    return <>
        <OtherSections />
        <RelativeContainerInSection ref={ref}>
            <AbsoluteOverlay>
                <StickyContainer>
                    <RelativeContentContainer>
                        <OverflowHiddenListWrapper>
                            <AbsoluteList style={{ translateY }}>
                                <RelativeListItem style={{ background: 'crimson'}}/>
                                <RelativeListItem style={{ background: 'red'}}/>
                                <RelativeListItem style={{ background: 'blue'}}/>
                                <RelativeListItem style={{ background: 'yellow'}}/>
                                <RelativeListItem style={{ background: 'gray'}}/>
                            </AbsoluteList>
                        </OverflowHiddenListWrapper>
                    </RelativeContentContainer>
                </StickyContainer>
            </AbsoluteOverlay>
            <MockHeightBlock />
            <MockHeightBlock />
            <MockHeightBlock />
        </RelativeContainerInSection>
        <OtherSections />
    </>
}