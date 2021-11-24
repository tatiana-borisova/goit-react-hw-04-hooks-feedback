import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import ResetParameters from './components/ResetParameters';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedbackKey => {
    const feedbackActionsByKey = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };
    feedbackActionsByKey[feedbackKey](prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.floor((good / countTotalFeedback()) * 100)
      : 0;
  };

  const resetParameters = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div className="statistics">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="No feedback given" />
        ) : (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
            <ResetParameters reset={resetParameters} />
          </>
        )}
      </Section>
    </div>
  );
}
