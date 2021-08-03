import React, { useState } from 'react';
import styles from './Feedback.module.scss';

import Controls from './Controls';
import Statistics from './Statistics';
import Notification from './Notification';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = feedback => () => {
    switch (feedback) {
      case 'good':
        setGood(prevFeedback => prevFeedback + 1);
        break;

      case 'neutral':
        setNeutral(prevFeedback => prevFeedback + 1);
        break;

      case 'bad':
        setBad(prevFeedback => prevFeedback + 1);
        break;

      default:
        console.warn(`Нет такого поля`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((good * 100) / totalFeedback) : 0;
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Please leave feedback</h1>
      <Controls
        options={['good', 'neutral', 'bad']}
        incrementFeedback={incrementFeedback}
      />
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </section>
  );
};
export default Feedback;
