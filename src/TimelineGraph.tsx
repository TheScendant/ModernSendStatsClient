import {
  BarChart, Bar, XAxis, YAxis, Legend,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { useSendContext } from './contexts/SendContext';
import { CustomTooltip } from './CustomTooltip';


export const TimelineGraph = () => {
  const { timelineData } = useSendContext();

  return (
    <>
      <h1>Boulder Timeline</h1>
      <ResponsiveContainer width="80%" height="80%">
        <BarChart data={timelineData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Legend />
          {/* @ts-ignore */}
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="V4" stackId="a" fill="rgb(255, 205, 149)" />
          <Bar dataKey="V5" stackId="a" fill="rgb(228, 217, 145)" />
          <Bar dataKey="V6" stackId="a" fill="rgb(189, 227, 160)" />
          <Bar dataKey="V7" stackId="a" fill="rgb(147, 233, 190)" />
          <Bar dataKey="V8" stackId="a" fill="rgb(109, 235, 227)" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}