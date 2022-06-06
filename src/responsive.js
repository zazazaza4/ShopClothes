import {css} from 'styled-components';

export const mobile = props => {
	return css`
		@media only screen and (max-width: 440px) {
			${props}
		}
	`
};
export const portraitTablets = props => {
	return css`
		@media only screen and (max-width: 600px) {
			${props}
		}
	`
};
export const landscapeTablets = props => {
	return css`
		@media only screen and (max-width: 768px) {
			${props}
		}
	`
};
export const laptops = props => {
	return css`
		@media only screen and (max-width: 992px) {
			${props}
		}
	`
};

