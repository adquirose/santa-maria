/* eslint-disable react/prop-types */

const Email = ({fill = 'currentColor', secondaryfill=fill, width='100%', height='100%', strokewidth="2"}) => {

	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
                <polyline fill="none" points="5 9 16 19 27 9"/>
                <rect height="24" width="30" fill="none" rx="3" ry="3" stroke={fill} x="1" y="4"/>
                <line fill="none" x1="5" x2="9" y1="23" y2="18"/>
                <line fill="none" x1="27" x2="23" y1="23" y2="18"/>
            </g>
        </svg>
	);
};

export default Email;