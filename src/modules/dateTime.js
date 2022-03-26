const getDate = (data) => {
  const today = new Date((data - 3600) * 1000);
  let year = new Intl.DateTimeFormat("en", { year: "numeric" })
    .format(today)
    .padStart(2, 0);
  let month = new Intl.DateTimeFormat("en", { month: "long" })
    .format(today)
    .padStart(2, 0);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(today);
  const date = `${year} ${month} ${day}`;
  return date;
};
const getTime = (date) => {
  const seconds = new Date((date - 3600) * 1000);
  const hour = "" + seconds.getHours();
  const min = "" + seconds.getMinutes();
  const sec = "" + seconds.getSeconds();
  return `${hour.padStart(2, 0)}:${min.padStart(2, 0)}:${sec.padStart(2, 0)}`;
};

export { getTime, getDate };
