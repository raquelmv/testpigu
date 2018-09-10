import React, { Component } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
//import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

class DoughnutChart extends Component{
constructor(props){
	super(props);
	this.state = {
		chartData:{
			labels:['Fijos','Hormiga','treats','Social','Ahorro'],
			datasets:[
				{
					label:'Gastos',
					data:[
						40,
						19,
						11,
						22,
						18

					],
					backgroundColor:[
						'#E10024',
						'#EEA845',
						'#5CD9EA',
						'#F69BF1',
						'#6DF5BE',
					]
				}
			]
		}
	}
}

	render(){
		return (
			<div className= "chart">
                <Bar
					data={this.state.chartData}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div>
		)
	}
}

export default DoughnutChart;