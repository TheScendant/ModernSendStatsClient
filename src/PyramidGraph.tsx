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
      <Bar dataKey="2022" stackId="a" fill="#7aa" />
      <Bar dataKey="2023" stackId="a" fill="#a7a" />
      <Bar dataKey="2024" stackId="a" fill="#7a7" />
    </BarChart>
  )
}