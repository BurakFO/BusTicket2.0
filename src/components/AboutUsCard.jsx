import React from "react";
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FlipCard = styled(Box)({
    perspective: '1000px',
});

const FlipCardInner = styled(Box)({
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    width: '100%',
    height: '100%',
});

const FlipCardFront = styled(Card)({
    backfaceVisibility: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20%',
    overflow: 'hidden',
});

const FlipCardBack = styled(Card)({
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20%',
});

const AboutUsCard = ({ year, story, image }) => {
    return (
        <FlipCard className="flip-card w-full h-96">
            <FlipCardInner className="flip-card-inner w-full h-full">
                <FlipCardFront className="flip-card-front bg-white flex items-center justify-center p-4 shadow-lg">
                    <img src={image} alt={`Story of ${year}`} className="w-full h-full object-cover" />
                </FlipCardFront>
                <FlipCardBack className="flip-card-back bg-gray-200 flex items-center justify-center p-4 shadow-lg">
                    <CardContent className="text-center">
                        <Typography variant="h5" component="div" className="mb-4">
                            {year}
                        </Typography>
                        <Typography variant="body1">
                            {story}
                        </Typography>
                    </CardContent>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCard>
    );
};

export default AboutUsCard;
