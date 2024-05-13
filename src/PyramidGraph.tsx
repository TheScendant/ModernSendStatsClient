import {
  BarChart, Bar, XAxis, YAxis, Legend
} from 'recharts';
import { useSendContext } from './contexts/SendContext';

export const PyramidGraph = () => {
  const { pyramidData } = useSendContext();

  return (
    <BarChart width={1000} height={500} data={pyramidData} >
      <XAxis dataKey="grade" />
      <YAxis />
      <Legend />
      <Bar dataKey="2022" stackId="a" fill="rgb(189, 227, 160)" />
      <Bar dataKey="2023" stackId="a" fill="rgb(147, 233, 190)" />
      <Bar dataKey="2024" stackId="a" fill="rgb(109, 235, 227)" />
    </BarChart>
  )
}