import React from 'react';
// Styled components 💅 is library that allows you create components easily and
// style them, css-in-js style. It's totally optional, but I prefer to use it
// to build things quickly and have them look great every step of the way.
import styled from 'styled-components';

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
const HorizontalRuleStyle = styled.hr`
	 border-top: 1px solid #000;
`;


const HorizontalRule = ({ HorizontalRule }) => (
	<HorizontalRuleStyle>
	</HorizontalRuleStyle>
);

// This export will be picked up in ./index.js
export default HorizontalRule;
