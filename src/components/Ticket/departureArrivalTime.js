/*
INPUT: date string, duration int
OUTPUT: "10:36 – 18:00"
*/

export const departureArrivalTime = (dateFromProps, durat) => {
  const date = new Date(dateFromProps);
  const datePlusDuration = date.getTime() + durat * 60000;

  let departureTimeHours =
    date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  let departureTimeMinutes =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  const departureTime = `${departureTimeHours}:${departureTimeMinutes}`;

  let ArrivalTimeHours =
    new Date(datePlusDuration).getHours() > 9
      ? new Date(datePlusDuration).getHours()
      : `0${new Date(datePlusDuration).getHours()}`;
  let ArrivalTimeMinutes =
    new Date(datePlusDuration).getMinutes() > 9
      ? new Date(datePlusDuration).getMinutes()
      : `0${new Date(datePlusDuration).getMinutes()}`;
  const ArrivalTime = `${ArrivalTimeHours}:${ArrivalTimeMinutes}`;

  const result = `${departureTime} – ${ArrivalTime}`;

  return result;
};
