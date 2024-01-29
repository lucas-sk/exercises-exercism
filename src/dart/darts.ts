const listCircle = [
	{
		name: "inner circle",
		value: 10,
		valueRadius: 1,
	},

	{
		name: "middle circle",
		value: 5,
		valueRadius: 5,
	},
	{
		name: "outer circle",
		value: 1,
		valueRadius: 10,
	},
];

export function score(x: number, y: number): unknown {
	const valueOfXPow = x**2;
	const valueOfyYPow = y**2;
	const distanceInBetweenTwoPoints = Math.sqrt(valueOfXPow + valueOfyYPow);

	const isInsideCircleIndex = listCircle.findIndex(
		(item) => distanceInBetweenTwoPoints <= item.valueRadius,
	);

	if (isInsideCircleIndex < 0) {
		return 0;
	}

	return listCircle[isInsideCircleIndex].value;
}

//  describe('Darts', () => {// it('Missed target', () => {
console.log(score(-9, 9), "o valor deveria ser 0"); // 0)// })// it('On the outer circle', () => {
console.log(score(0, 10), "o valor deveria ser 1"); // 1)// })
// it('On the middle circle', () => {
console.log(score(-5, 0), "o valor deveria ser 5"); // 5)
// })
// it('On the inner circle', () => {
console.log(score(0, -1), "o valor deveria ser 10"); // 10)
// })
// it('Exactly on centre', () => {
console.log(score(0, 0), "o valor deveria ser 10"); // 10)
// })
// it('Near the centre', () => {
console.log(score(-0.1, -0.1), "o valor deveria ser 10"); // 10)
// })
// it('Just within the inner circle', () => {
console.log(score(0.7, 0.7), "o valor deveria ser 10"); // 10)
// })
// it('Just outside the inner circle', () => {
console.log(score(0.8, -0.8), "o valor deveria ser 5"); // 5)
// })
// it('Just within the middle circle', () => {
console.log(score(-3.5, 3.5), "o valor deveria ser 5"); // 5)
// })
// it('Just outside the middle circle', () => {
console.log(score(-3.6, -3.6), "o valor deveria ser 1"); // 1)
// })
// it('Just within the outer circle', () => {
console.log(score(-7.0, 7.0), "o valor deveria ser 1"); // 1)
// })
// it('Just outside the outer circle', () => {
console.log(score(7.1, -7.1), "o valor deveria ser 0"); // 0)
// })
// it('Asymmetric position between the inner and middle circles', () => {
console.log(score(0.5, -4), "o valor deveria ser 5"); // 5)
// })
// })
