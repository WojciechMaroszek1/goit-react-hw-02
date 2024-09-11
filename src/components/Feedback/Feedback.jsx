import PropTypes from 'prop-types';

import css from '../Feedback/Feedback.module.css';

const Feedback = ({ rate, totalFeedback, percentRate }) => {
	if (rate.good !== 0 || rate.neutral !== 0 || rate.bad !== 0)
		return (
			<div className={css.text}>
				<p>Good: {rate.good}</p>
				<p>Neutral: {rate.neutral}</p>
				<p>Bad: {rate.bad}</p>
				<p>Total: {totalFeedback}</p>
				<p>Positive: {percentRate}% </p>
			</div>
		);
};

Feedback.propTypes = {
	rate: PropTypes.object,
	totalFeedback: PropTypes.number,
	percentRate: PropTypes.number,
};
export default Feedback;
