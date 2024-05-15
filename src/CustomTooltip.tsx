import styled from "styled-components";

const HDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

{/* @ts-ignore */ }
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.warn(active, payload, label)
    return (
      <div className="custom-tooltip">
        {payload.map((item: any) => (
          <HDiv>
            <div>{item.name}:</div>
            <div>{item.value}</div>
          </HDiv>
        ))}

      </div>
    );
  }
}