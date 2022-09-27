import moment from "moment";

export type TDate = "today" | "yesterday" | "week" | "month" | "year";

export const getPrevDate = (date: TDate) => {
  const dates = {
    today: () => moment().subtract(0, "days").startOf("day").toDate(),
    yesterday: () => [
      moment().subtract(1, "days").startOf("day").toDate(),
      moment().subtract(1, "days").endOf("day").toDate(),
    ],
    week: () => moment().subtract(1, "week").toDate(),
    month: () => moment().subtract(1, "month").startOf("day").toDate(),
    year: () => moment().subtract(1, "year").toDate(),
  };

  return dates[date]?.();
};
