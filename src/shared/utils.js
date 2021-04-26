export function formatDate(dateTime) {
  const date = new Date(+dateTime * 1000);
  const formatedDate = date
    .toLocaleString("en-ie", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replaceAll(" ", "-");
  return formatedDate;
}
