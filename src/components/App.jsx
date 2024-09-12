import { useState, useEffect } from 'react';
import './App.module.css';
import Description from './Description/Description.jsx';
import Feedback from './Feedback/Feedback.jsx';
import Options from './Options/Options.jsx';
import Notification from './Notifications/Notifications.jsx';

const baseValue = {
	good: 0,
	neutral: 0,
	bad: 0,
};

function App() {
	const [rate, setRate] = useState(() => {
		const savedRates = localStorage.getItem('Feedback rates');
		if (savedRates !== null) {
			return JSON.parse(savedRates);
		} else {
			return baseValue;
		}
	});

	const updateFeedback = e => {
		setRate({ ...rate, [e]: rate[e] + 1 });
	};

	const totalFeedback = rate.good + rate.neutral + rate.bad;
	const percentRate = Math.round(((rate.good + rate.neutral) / totalFeedback) * 100);

	const resetRate = () => {
		setRate(baseValue);
		localStorage.clear();
	};

	useEffect(() => {
		localStorage.setItem('Feedback rates', JSON.stringify(rate));
	}, [rate]);

	return (
		<>
			<Description />
			<Options updateFeedback={updateFeedback} resetRate={resetRate} />
			<Feedback rate={rate} totalFeedback={totalFeedback} percentRate={percentRate} />
			<Notification rate={rate} />
		</>
	);
}

export default App;
