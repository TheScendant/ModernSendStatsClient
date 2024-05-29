import {
  BarChart, Bar, XAxis, YAxis, Legend,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { TimeSegment, useSendContext } from './contexts/SendContext';
import { CustomTooltip } from './CustomTooltip';
import { useState } from 'react';
import styled from 'styled-components';

const Slider = styled.div`
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`

export const TimelineGraph = () => {
  const { timelineData } = useSendContext();

  const [timeSegment, setTimeSegment] = useState<TimeSegment>('year')
  const data = timeSegment === 'year' ? timelineData.years : timelineData.months;

  return (
    <>
      <h1>Boulder Timeline</h1>
      <ResponsiveContainer width="80%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="timeKey" />
          <YAxis />
          <Legend />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar dataKey="V4" stackId="a" fill="rgb(255, 205, 149)" />
          <Bar dataKey="V5" stackId="a" fill="rgb(228, 217, 145)" />
          <Bar dataKey="V6" stackId="a" fill="rgb(189, 227, 160)" />
          <Bar dataKey="V7" stackId="a" fill="rgb(147, 233, 190)" />
          <Bar dataKey="V8" stackId="a" fill="rgb(109, 235, 227)" />
        </BarChart>
      </ResponsiveContainer>
      <Slider>
        <label className="switch">
          <input type="checkbox" onChange={(a) => setTimeSegment(a.target.checked ? 'month' : 'year')} />
          <span className="slider round"></span>
        </label>
      </Slider>
    </>
  )
}