
import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Svg, {Path} from 'react-native-svg';

export const userIcon = "M20.8,31.2c0,0-3.1-1-3.1-6.2c-1.7,0-1.7-4.2,0-4.2c0-0.7-3.1-8.3,2.1-7.3c1-4.2,12.5-4.2,13.5,0 c0.7,2.9-1,6.8-1,7.3c1.7,0,1.7,4.2,0,4.2c0,5.2-3.1,6.2-3.1,6.2v5.2c5.2,1.9,10.3,3.5,12.9,5.4C46.3,37.5,49,31.6,49,25 C49,11.8,38.2,1,25,1S1,11.8,1,25C1,31.6,3.7,37.5,8,41.8c2.8-1.9,8.2-3.6,12.9-5.4V31.2L20.8,31.2z M8,41.8 c4.3,4.4,10.4,7.1,17,7.1c6.7,0,12.7-2.7,17.1-7.1";
export const passIcon = "M19.8,31.2c0,0.6-0.5,1-1,1s-1-0.5-1-1c0-0.6,0.5-1,1-1S19.8,30.7,19.8,31.2L19.8,31.2z M18.8,32.3 v6.2 M36.5,19.8H1V49h35.4V19.8z M7.3,12.5C7.3,6.2,12.4,1,18.8,1s11.5,5.1,11.5,11.5v7.3H7.3V12.5L7.3,12.5z";
export default SvgIcon = (props) => {
	return <Svg height={props.height ? props.height : 30} width={props.width ? props.width : 30}>
		<Path
			d={props.path}
			scale={props.scale ? props.scale : 30 / 50}
			x={props.x ? props.x : 0}
			y={props.y ? props.y : 0}
			fill={props.fill ? props.fill : "rgba(0,0,0,0)"}
			fillOpacity={props.fillOpacity ? props.fillOpacity : 1}
			strokeOpacity={props.strokeOpacity ? props.strokeOpacity : 1}
			stroke={props.stroke ? props.stroke : "#BCBCBC"}
			strokeWidth={props.strokeWidth ? props.strokeWidth : 1}
		/>
	</Svg>
}

SvgIcon.PropTypes = {
	path: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number,
	x: PropTypes.number,
	y: PropTypes.number,
	fill: PropTypes.string,
	fillOpacity:PropTypes.number,
	strokeOpacity:PropTypes.number,
	stroke:PropTypes.string,
	strokeWidth:PropTypes.number,
}