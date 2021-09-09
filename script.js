console.log('hello!');

let ages = [22, 11, 33, 55];
const Employees = new Map();
Employees.set('Albert', 45, 'Engineer');

for (let n = 0; n < ages.length; n++) {
  if (ages[n] > 20) {
    console.log(ages[n]);
  }
  //console.log(ages[n]);
}

console.log(Employees.get('Albert'));
