import React, { SVGProps } from 'react';

export const GGMenuRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995z" />
            <path d="M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995z" />
            <path d="M21.005 6.99a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99h12.01z" />
        </svg>
    );
};

// <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"></svg>
export default GGMenuRightIcon;
