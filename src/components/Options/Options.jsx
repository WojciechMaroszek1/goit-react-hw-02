import PropTypes from 'prop-types';

import css from '../Options/Options.module.css';

const Options = ({ updateFeedback, resetRate }) => {
	return (
		<div className={css.buttons_box}>
			<button className={css.button} onClick={() => updateFeedback('good')}>
				Good
			</button>
			<button className={css.button} onClick={() => updateFeedback('neutral')}>
				Neutral
			</button>
			<button className={css.button} onClick={() => updateFeedback('bad')}>
				Bad
			</button>
			<button className={css.button} onClick={() => resetRate('reset')} style={{ backgroundColor: '#cdd6ff' }}>
				Reset
			</button>
		</div>
	);
};

export default Options;

Options.propTypes = {
	updateFeedback: PropTypes.func,
	resetRate: PropTypes.func,
};
