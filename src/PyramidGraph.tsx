import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';
import { useSendContext } from './contexts/SendContext';

export const PyramidGraph = () => {
  const { boulderData } = useSendContext();

  return (
    <BarChart width={1000} height={500} data={boulderData} >
      <XAxis dataKey="year" />
      <YAxis />
      <Legend />
      <Bar dataKey="V6" stackId="a" fill="#7aa" />
      <Bar dataKey="V7" stackId="a" fill="#a7a" />
      <Bar dataKey="V8" stackId="a" fill="#7a7" />
    </BarChart>
  )
}