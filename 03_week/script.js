const grades = [10, 15, 20];

const sum = grades.reduce((total, current) => {
  return total + current;
}, 0);

console.log(sum);
