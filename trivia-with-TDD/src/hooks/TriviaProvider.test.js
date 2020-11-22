import { reducer } from './TriviaProvider';

describe('Trivia Provider reducer', () => {
  it('handles the SET_QUESTIONS action', () => {
    const state = {
      questions: []
    };

    const action = {
      type: 'SET_QUESTIONS',
      payload: [
        {
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'easy',
          question: 'Who was the only god from Greece who did not get a name change in Rome?',
          correct_answer: 'Apollo',
          incorrect_answers: [
            'Demeter',
            'Zeus',
            'Athena'
          ]
        },
        {
          category: 'History',
          type: 'multiple',
          difficulty: 'hard',
          question: 'With which Greek philosopher would you associate the phrase, &quot;I know that I know nothing&quot;?',
          correct_answer: 'Socrates',
          incorrect_answers: [
            'Aristotle',
            'Plato',
            'Pythagoras'
          ]
        }
      ]
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      questions: [
        {
          category: 'Mythology',
          type: 'multiple',
          difficulty: 'easy',
          question: 'Who was the only god from Greece who did not get a name change in Rome?',
          correct_answer: 'Apollo',
          incorrect_answers: [
            'Demeter',
            'Zeus',
            'Athena'
          ]
        },
        {
          category: 'History',
          type: 'multiple',
          difficulty: 'hard',
          question: 'With which Greek philosopher would you associate the phrase, &quot;I know that I know nothing&quot;?',
          correct_answer: 'Socrates',
          incorrect_answers: [
            'Aristotle',
            'Plato',
            'Pythagoras'
          ]
        }
      ]
    });
  });

  it('handles the ADD_ANSWER action', () => {
    const state = {
      questions: [
        { correct_answer: 'batman' },
        { correct_answer: 'spot' }
      ],
      answers: ['batman'],
      score: 10
    };

    const action = {
      type: 'ADD_ANSWER',
      payload: 'spot'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      questions: [
        { correct_answer: 'batman' },
        { correct_answer: 'spot' }
      ],
      answers: ['batman', 'spot'],
      score: 20
    });
  });
});
