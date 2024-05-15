import styled from "styled-components";

const HDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Tooltip = styled.div`
  background: #ccc;
  border: 1px solid black;
  padding: 0 0.5rem 0.5rem;
`;

type Props = {
  payload?: any[];
  label?: string;
}

export const CustomTooltip = ({ label, payload }: Props) => {
  if (!payload || payload.length === 0) {
    return null;
  }
  return (
    <Tooltip>
      <h3>{label} Boulders sent</h3>
      {payload?.map((item: any) => (
        <HDiv>
          <div>{item.name}:</div>
          <div>{item.value}</div>
        </HDiv>
      ))}
    </Tooltip>
  );
}