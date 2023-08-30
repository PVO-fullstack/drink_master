import React from 'react'

const CloseSVG = ({ className, fill }) => {
    return (
        <svg className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 32 32">
            <title>close</title>
            <path fill="none" stroke={fill} strokeWidth="2" strokeMiterlimit="4" strokeLinecap="round"
                strokeLinejoin="round" d="M24 8l-16 16"></path>
            <path fill="none" stroke={fill} strokeWidth="2" strokeMiterlimit="4" strokeLinecap="round"
                strokeLinejoin="round" d="M8 8l16 16"></path>
        </svg>
    )
}

export default CloseSVG