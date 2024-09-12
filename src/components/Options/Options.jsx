import { useState } from 'react';
import PropTypes from 'prop-types';

import css from '../Options/Options.module.css';

const Options = ({ updateFeedback, resetRate }) => {
	const [show, toggleShow] = useState(false);

	const handleButtonClick = () => {
		toggleShow(true);
	};

	const handleContainerClick = () => {
		toggleShow(false);
	};

	return (
		<div className={css.buttons_box}>
			<button className={css.button} onClick={() => handleButtonClick(updateFeedback('good'))}>
				Good
			</button>
			<button className={css.button} onClick={() => handleButtonClick(updateFeedback('neutral'))}>
				Neutral
			</button>
			<button className={css.button} onClick={() => handleButtonClick(updateFeedback('bad'))}>
				Bad
			</button>
			{show && (
				<button className={css.button} onClick={() => handleContainerClick(resetRate('reset'))}>
					Reset
				</button>
			)}
		</div>
	);
};

export default Options;

Options.propTypes = {
	updateFeedback: PropTypes.func,
	resetRate: PropTypes.func,
};
