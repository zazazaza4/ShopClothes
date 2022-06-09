export const calcTotalCount = (items) => {
  return items.reduce((sum, obj) =>  obj.count + sum, 0);
};