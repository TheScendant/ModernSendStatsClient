import React, { PropsWithChildren } from "react";
import boulders, { Boulder } from "../sendData/boulders";

// TODO fix types
type Context = {
  timelineData: any[];
  pyramidData: any[];
  boulders: Boulder[];
};

const SendContext = React.createContext({} as Context);

const getTimelineData = (boulders: Boulder[]) =>
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
        [year]: yearData
      };
    }
  }, {});


const getPyramidData = (boulders: Boulder[]) =>
  boulders.reduce((acc: any, curr: Boulder) => {
    const { grade } = curr;
    const date = new Date(curr.date);
    const year = date.getFullYear().toString();

    // grade not saved so create new grade object
    if (!acc[grade]) {
      return {
        ...acc,
        [grade]: {
          grade,
          [year]: 1,
        },
      };
    } else {
      const gradeData = acc[grade];
      // if we have this year add 1, if not set as 1
      gradeData[year] = gradeData[year] ? gradeData[year] + 1 : 1;

      return {
        ...acc,
        [grade]: gradeData
      };
    }
  }, {});

export const SendContextProvider = ({ children }: PropsWithChildren) => {
  const timeline = getTimelineData(boulders)
  const pyramid = getPyramidData(boulders)

  // TODO fix sort
  const timelineData = Object.values(timeline).sort();
  const pyramidData = Object.values(pyramid).sort();

  const value = { boulders, pyramidData, timelineData };
  return <SendContext.Provider value={value}>{children}</SendContext.Provider>;
};
export const useSendContext = () => React.useContext(SendContext);
