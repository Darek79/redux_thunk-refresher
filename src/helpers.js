import moment from "moment";

//INPUT
const day = [
  "08:00 - 09:00",
  "08:30 - 10:30",
  "10:00 - 11:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "13:00 - 14:00",
  "13:00 - 14:00"
];

// FUNCTION PARSES THE ARRAY AND RETURNS THIS FORMAT:
// OUTPUT :
// [ { left: 0, width: 25, dateFrom: 800, dateTo: 900 }]
// left is default nr 0 for now
// width is calculated number, based on difference between end=>start, 25% from 100%
// dateFrom and dateTo are numbers, the output can be modified
// to anything you wish
const base_calc = (arr) => {
  return arr.map((el, i) => {
    const splitted = el.split("-");
    const start = splitted[0].split(":");
    const end = splitted[1].split(":");

    // console.log(start, end);
    const moment_start = moment({
      hour: start[0],
      minute: start[1]
    });
    // console.log(moment_start);
    const moment_end = moment({
      hour: end[0],
      minute: end[1]
    });

    const moment_diff = moment(moment_end).diff(moment(moment_start), "m");
    // console.log(moment_diff);
    const width = moment_diff / 60 / 4;
    // console.log(width);

    return {
      left: 0,
      width,
      dateFrom: moment_start.format("HHmm") * 1,
      dateTo: moment_end.format("HHmm") * 1
    };
  });
};

// const check_collisions = (arr, base_calc) => {
//   let i, j;
//   const base = base_calc(arr);
//   let same = base.length;
//   for (i = 0; i < base.length - 1; i++) {
//     const overlap =
//   }

//   return base;
// };
