import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';

// Import our component from this folder
import BrakeRule from './BrakeRule';

// Here we describe the stories we want to see of the BrakeRule. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('BrakeRule')
	.add('Default', () => (
		<BrakeRule></BrakeRule>
	))
