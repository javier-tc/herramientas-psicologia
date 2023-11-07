import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import testList from './testList.json';
import NavigationBar from './NavBar';
import '../css/TestForm.css';

function TestForm() {
	//obtiene el tipo de respuesta y las preguntas con sus alternativas
	const { testName } = useParams();
	function getTest(testName) {
		const test = testList.test.find((test) => test.name === testName);
		if (test) {
			//console.log(test.typeAnswer, test.questions);
			return [test.typeAnswer, test.questions];
		} else {
			// Manejar el caso en el que no se encuentra el test
			return [null, []];
		}
	};

	const [typeAnswer, questions] = getTest(testName);
	const [answers, setAnswers] = useState({});

	const handleAnswerChange = (questionIndex, answer) => {
		setAnswers({
			...answers,
			[questionIndex]: answer,
		});
	};

	const handleSubmit = () => {
		console.log('Respuestas:', answers);
	};

	useEffect(()=>{
		window.scrollTo(0, 0);
	});

	return (
		<div className="page-container">
			<NavigationBar />
			<h1 className="testform-title">{testName}</h1>
			<div className='testform-container'>
				{questions.map((question, questionIndex) => (
					<div key={questionIndex} className="question-container">
						<h2 className="question-title">{questionIndex + 1}. {question.questionTitle}</h2>
						<div>
							{question.answers.map((answer, answerIndex) => (
								<div key={answerIndex} className="answer-container">
									<input
										type={typeAnswer === 'Alternativas' ? 'radio' : 'text'}
										id={`q${questionIndex}-a${answerIndex}`}
										name={`question-${questionIndex}`}
										value={answer}
										checked={answers[questionIndex] === answer}
										onChange={() => handleAnswerChange(questionIndex, answer)}
									/>
									<label htmlFor={`q${questionIndex}-a${answerIndex}`}>{answer}</label>
								</div>
							))}
						</div>
					</div>
				))}
				<button onClick={handleSubmit} className="submit-button">
					Guardar Respuestas
				</button>
			</div>
		</div>
	)
};

export default TestForm;