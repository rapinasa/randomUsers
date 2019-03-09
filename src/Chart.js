import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2'

export default function PieChart(props) {

  const maleList =  props.users.filter((a)=>{return a.gender == 'male'});
  const femaleList =  props.users.filter((a)=>{return a.gender == 'female'});
  const male = maleList.length;
  const female = femaleList.length;
  const malePercent = ((male/(male+female))*100).toFixed(1);
  const femalePercent = ((female/(male+female))*100).toFixed(1);

  const data = {
        labels: ['male(%)', 'female(%)'],
        datasets:[{
          label:'Gender Percentage',
             backgroundColor: [
                'blue',
                'pink'],
          data:[malePercent, femalePercent],
        }]

      }

  if (!props.chart) {
    return null;
  }

  return (
    <div>
    <h1 style={{textAlign:"center"}}> Gender of users </h1>
    <Pie data={data}/>
    </div>
  );
}

