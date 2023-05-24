import moment from "moment";

export const groupArrayByDates = (array: [], token: string) => {
  return array.reduce(function (val, obj) {
    let comp: any = moment(obj["timestamp"]).format(token);
    //@ts-ignore
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, []);
};
