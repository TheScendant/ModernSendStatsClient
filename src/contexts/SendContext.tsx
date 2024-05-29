import { PropsWithChildren, createContext, useContext } from "react";
import boulders, { Boulder } from "../sendData/boulders";
import { GradeSortable, dateSorter, gradeSorter } from "../utils";

// TODO fix types
type Context = {
  timelineData: { months: any[], years: any[] };
  pyramidData: any[];
  boulders: Boulder[];
};

export type TimeSegment = 'month' | 'year';

const SendContext = createContext({} as Context);

const getTimelineData = (boulders: Boulder[], dataType: TimeSegment) =>
  boulders.reduce((acc: any, curr: Boulder) => {
    const date = new Date(curr.date);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();

    const timeKey = dataType === 'month' ? `${year}-${month}` : year;

    // year not saved so create new year object
    if (!acc[timeKey]) {
      return {
        ...acc,
        [timeKey]: {
          timeKey,
          [curr.grade]: 1,
        },
      };
    } else {
      const keyData = acc[timeKey];

      // if we have this grade add 1, if not set as 1
      keyData[curr.grade] = keyData[curr.grade] ? keyData[curr.grade] + 1 : 1;

      return {
        ...acc,
        [timeKey]: keyData
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
  const timelineMonths = getTimelineData(boulders, 'month')
  const timelineYears = getTimelineData(boulders, 'year')
  const pyramid = getPyramidData(boulders)

  const timelineMonthsData = Object.values(timelineMonths).sort(dateSorter);
  const timelineYearsData = Object.values(timelineYears).sort(dateSorter);
  const pyramidData: GradeSortable[] = Object.values(pyramid);
  pyramidData.sort(gradeSorter)

  const timelineData = {
    months: timelineMonthsData,
    years: timelineYearsData
  }

  const value = { boulders, pyramidData, timelineData };
  return <SendContext.Provider value={value}>{children}</SendContext.Provider>;
};
export const useSendContext = () => useContext(SendContext);
