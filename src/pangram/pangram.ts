export function isPangram(text: string) {
	if (text.length < 26) {
		return false;
	}
	const regex = /[A-Z]/gi;
	const found = text.match(regex);

	if (!found) {
		return false;
	}

	const letters: string[] = [];
	for (let i = 0; i < found.length; i++) {
		const isContainInArray = letters.some(
			(letter) => letter.toLocaleLowerCase() === found[i].toLocaleLowerCase(),
		);

		if (isContainInArray) {
			continue;
		}
		letters.push(found[i]);
	}

	return letters.length === 26;
}

console.log(isPangram("")); // false)
console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); // true)
console.log(isPangram("the quick brown fox jumps over the lazy dog")); // true)
console.log(
	isPangram("a quick movement of the enemy will jeopardize five gunboats"),
); // false)
console.log(isPangram("five boxing wizards jump quickly at it")); // false)
console.log(isPangram("the_quick_brown_fox_jumps_over_the_lazy_dog")); // true)
console.log(isPangram("the 1 quick brown fox jumps over the 2 lazy dogs")); // true
console.log(isPangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog")); // false)
console.log(isPangram('"Five quacking Zephyrs jolt my wax bed."')); // true)
console.log(isPangram("abcdefghijklm ABCDEFGHIJKLM")); // false)
