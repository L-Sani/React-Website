import React, { useState } from 'react';
import Video from '../../assets/videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroTitle, HeroText, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from "../ButtonElements";

const Hero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroTitle>Technology Made Easy</HeroTitle>
                <HeroText>
                    Sign up for a new account today and receive $250
                    in credit towards your next payment.
                </HeroText>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true' offset={-80}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>            
        </HeroContainer>
    )
}

export default Hero
