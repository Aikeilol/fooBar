function fooBar(number, ...numbers) {
  numbers.unshift(number);
  if (numbers.every(number => typeof number === 'number') === true) {
    for (let key in numbers) {
      if (numbers[key] % 3 === 0 && numbers[key] % 5 === 0) {
        console.log('fooBar');
      } else if (numbers[key] % 3 === 0) {
        console.log('foo');
      } else if (numbers[key] % 5 === 0) {
        console.log('bar');
      }
    }
  } else {
    console.log('Вы ввели не число');
  }
}

fooBar(3, 5, 15);