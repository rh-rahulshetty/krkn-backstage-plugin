import React from 'react';
import LogoURL from '../../assets/logo.svg';

const KrknLogoComponent = (props: {
    width: number,
    height: number
}) => {
    return <img src={LogoURL} height={props.height} width={props.width}></img>
};

export {KrknLogoComponent}
