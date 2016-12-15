import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is your name',
					choices: [
						{
							id: 'a',
							text: 'Jesus'
						},
						{
							id: 'b',
							text: 'Kanye'
						},
						{
							id: 'c',
							text: 'Prince'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'What is your mothers name',
					choices: [
						{
							id: 'a',
							text: 'Sara'
						},
						{
							id: 'b',
							text: 'Sue'
						},
						{
							id: 'c',
							text: 'Donna'
						}
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'What is your fathers name',
					choices: [
						{
							id: 'a',
							text: 'Jimi'
						},
						{
							id: 'b',
							text: 'Steven'
						},
						{
							id: 'c',
							text: 'Malcolm'
						}
					],
					correct: 'a'
				},
				{
					id: 4,
					text: 'What is your friends name',
					choices: [
						{
							id: 'a',
							text: 'John'
						},
						{
							id: 'b',
							text: 'Paul'
						},
						{
							id: 'c',
							text: 'Jose'
						}
					],
					correct: 'c'
				},
			],
			score: 0,
			current: 1
		}
	}
	
	render(){
		return(
			<div>
				<QuestionList {...this.state} />
			</div>
			)
	}
}

export default App
