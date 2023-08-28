import React from 'react'

const AlignJustify = ({ className, fill }) => {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.25 15.8333H4.75" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33.25 9.5H4.75" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33.25 22.1667H4.75" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33.25 28.5H4.75" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default AlignJustify
