import PropTypes from 'prop-types';

import css from '../Notifications/Notifications.module.css';

const Notification = ({ rate }) => {
	if (rate.good === 0 && rate.neutral === 0 && rate.bad === 0) {
		return <div className={css.text}>No feedback yet</div>;
	}
};
export default Notification;

Notification.propTypes = {
	rate: PropTypes.object,
};
