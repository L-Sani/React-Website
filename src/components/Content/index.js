import React from 'react'
import { Button } from 'react-scroll';
import {
    ContentContainer, 
    ContentWrapper, 
    ContentRow, 
	Column1, 
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap, 
	Img, 
	ImgWrap
} from './ContentElements';

const Content = () => {
    return (
        <div>
            <ContentContainer>
                <ContentWrapper>
                   <ContentRow>
						<Column1>
							<TextWrapper>
								<TopLine>TopLine</TopLine>
								<Heading>Heading</Heading>
								<Subtitle>Subtitle</Subtitle>
								<BtnWrap>
									<Button to='home' />
								</BtnWrap>
							</TextWrapper>
						</Column1>
                       <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                       </Column2>
                   </ContentRow>
                </ContentWrapper>
            </ContentContainer>
        </div>
    )
}

export default Content
