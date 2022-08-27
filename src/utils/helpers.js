export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);

  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let uniqueValues = ["all", ...new Set(data.map((item) => item[type]))];
  if (type === "colors") {
    // Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
    uniqueValues = uniqueValues.flat();
  }
  return uniqueValues;
  // const filterItems = (type) => {
  //   if(type === "all")

  // }
};
