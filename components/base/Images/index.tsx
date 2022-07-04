import { styled } from '@mui/styles';
import React from 'react';

interface IImagesBox {
    children?: React.ReactNode;
}
// type IImageProps = {} & ImageProps;

const ImageBox = styled('div')(({ theme }) => ({
    position: 'relative',
}));

export const Images = ({ children }: IImagesBox) => {
    return <ImageBox>{children}</ImageBox>;
};
