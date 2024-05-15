import {
  BarChart, Bar, XAxis, YAxis, Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useSendContext } from './contexts/SendContext';
import { CustomTooltip } from './CustomTooltip';

export const PyramidGraph = () => {
  const { pyramidData } = useSendContext();

  return (
    <>
      <h1>Grade Pyramid</h1>
      <ResponsiveContainer width="80%" height="80%">
        <BarChart data={pyramidData} >
          <XAxis dataKey="grade" />
          <YAxis />
          <Legend />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="2022" stackId="a" fill="rgb(189, 227, 160)" />
          <Bar dataKey="2023" stackId="a" fill="rgb(147, 233, 190)" />
          <Bar dataKey="2024" stackId="a" fill="rgb(109, 235, 227)" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}