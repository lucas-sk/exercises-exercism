export function find(haystack: number[], needle: number): number | never {
    let less = 0
    let greater = haystack.length - 1

    while (less <= greater) {
      const middle = Math.floor((greater + less)/2)
      const shot = haystack[middle]

      if(shot === needle) {
        return middle
      }
      if(shot > needle)
          greater = middle - 1
      else
          less = middle + 1
    }
    throw new Error('Value not in array')
  }

  const array = [1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
  console.log(array.length);
	console.log(find(array, 13), 4);

