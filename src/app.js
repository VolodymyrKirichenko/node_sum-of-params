'use strict';

const operation = process.argv[2];
const args = process.argv.slice(3).filter(el => Number(el));

function calculation(action, array) {
  if (!array.length) {
    return `The is nothing to ${action}`;
  }

  switch (action) {
    case 'add':
      return array.reduce((acc, el) => Number(acc) + Number(el), 0);

    case 'multiply':
      return array.reduce((acc, el) => Number(acc) * Number(el), 1);

    default:
      return 'Operation is not supported';
  }
}

calculation(operation, args);
console.log(calculation(operation, args));
