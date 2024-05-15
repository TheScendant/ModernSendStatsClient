import styled from "styled-components";

const HDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

type Props = {
  payload?: any[];
}

export const CustomTooltip = ({ payload }: Props) => {
  if (!payload || payload.length === 0) {
    return null;
  }
  return (
    <div className="custom-tooltip">
      {payload?.map((item: any) => (
        <HDiv>
          <div>{item.name}:</div>
          <div>{item.value}</div>
        </HDiv>
      ))}
    </div>
  );
}