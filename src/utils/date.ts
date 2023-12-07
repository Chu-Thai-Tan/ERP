export const getTimeAmount = (
  initialDate: Date,
): { hour: string; minute: string; second: string } => {
  const currentDate = new Date();
  const amount = (currentDate.getTime() - initialDate.getTime()) / 1000;
  const hour = Math.floor(amount / 3600);
  const minute = Math.floor(
    amount / 60 < 60 ? amount / 60 : amount / 60 - hour * 60,
  );
  const amountObj = {
    hour: Math.floor(amount / 3600),
    minute: minute,
    second: Math.floor(
      amount < 60 ? amount : amount - minute * 60 - hour * 3600,
    ),
  };
  return {
    hour: formatTime(amountObj.hour),
    minute: formatTime(amountObj.minute),
    second: formatTime(amountObj.second),
  };
};

const formatTime = (time: number) => {
  return time > 9 ? `${time}` : `0${time}`;
};
