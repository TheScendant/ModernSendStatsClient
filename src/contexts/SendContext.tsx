import React, { PropsWithChildren } from "react";
import boulders, { Boulder } from "../sendData/boulders";

type Context = {
  boulderData: any[];
};

const SendContext = React.createContext({} as Context);

const getAccumulatedBoulders = (boulders: Boulder[]) =>
  boulders.reduce((acc: any, curr: Boulder) => {
    const date = new Date(curr.date);
    const year = date.getFullYear().toString();

    // year not saved so create new year object
    if (!acc[year]) {
      return {
        ...acc,
        [year]: {
          year,
          [curr.grade]: 1,
        },
      };
    } else {
      const yearData = acc[year];

      // if we have this grade add 1, if not set as 1
      yearData[curr.grade] = yearData[curr.grade] ? yearData[curr.grade] + 1 : 1;

      return {
        ...acc,
        ...yearData,
      };
    }
  }, {});

export const SendContextProvider = ({ children }: PropsWithChildren) => {

  const pyramidData = getAccumulatedBoulders(boulders)
  const boulderData = Object.values(pyramidData)

  const value = { boulderData };
  return <SendContext.Provider value={value}>{children}</SendContext.Provider>;
};
export const useSendContext = () => React.useContext(SendContext);
