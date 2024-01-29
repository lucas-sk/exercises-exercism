export class Matrix {
	_columns: Array<number[]>;
	_rows: Array<number[]>;
	constructor(elementsInString: string) {
		this._rows = this.setRows(elementsInString);
		this._columns = this.setColumns(elementsInString);
	}

	get rows(): Array<number[]> {
		return this._rows;
	}

	get columns(): Array<number[]> {
		return this._columns;
	}

	setColumns(elementsInString: string) {
		const regex = /\d+|\n/gi;
		const listElementsInString = elementsInString.match(regex);
		if (!listElementsInString) {
			return [];
		}
		const manyElementsUntilBreakLine = listElementsInString.indexOf("\n");
		const listNumbersInString = listElementsInString.filter(
			(item) => item !== "\n",
		);
		const listNumbers = listNumbersInString.map((item) => Number(item));
		if (manyElementsUntilBreakLine < 0) {
			return [[...listNumbers]];
		}
		let columns = manyElementsUntilBreakLine;
		let rows = listNumbers.length / manyElementsUntilBreakLine;
		let matrix: Array<number[]> = Array.from({
			length: rows,
		});

		for (let i = 0; i < rows; i++) {
			matrix[i] = listNumbers.slice(i * columns, i * columns + columns);
		}

		let arr: Array<number[]> = [];
		let rows1 = columns;
		let columns2 = rows;
		for (let i = 0; i < rows1; i++) {
			arr[i] = [];
			for (let j = 0; j < columns2; j++) {
				arr[i][j] = matrix[j][i];
			}
		}
		return arr;
	}

	setRows(elementsInString: string) {
		const regex = /\d+|\n/gi;
		const listElementsInString = elementsInString.match(regex);
		if (!listElementsInString) {
			return [];
		}
		const manyElementsUntilBreakLine = listElementsInString.indexOf("\n");
		const listNumbersInString = listElementsInString.filter(
			(item) => item !== "\n",
		);
		const listNumbers = listNumbersInString.map((item) => Number(item));
		if (manyElementsUntilBreakLine < 0) {
			return [[...listNumbers]];
		}
		let columns = manyElementsUntilBreakLine;
		let rows = listNumbers.length / manyElementsUntilBreakLine;
		let matrix: Array<number[]> = Array.from({
			length: rows,
		});

		for (let i = 0; i < rows; i++) {
			matrix[i] = listNumbers.slice(i * columns, i * columns + columns);
		}

		return matrix;
	}
}

// const expected1 = [1]
// console.log(new Matrix('1').rows[0], expected1)
// const expected2 = [3, 4]
// console.log(new Matrix('1 2\n3 4').rows[1], expected2)
// const expected3 = [10, 20]
// console.log(new Matrix('1 2\n10 20').rows[1], expected3)
// const expected4 = [7, 8, 9]
// console.table(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6'))
// console.log(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[2], expected4)
// const expected5 = [1]
// console.log(new Matrix('1').columns[0], expected5)
// const expected6 = [3, 6, 9]
// console.log(new Matrix('1 2 3\n4 5 6\n7 8 9').columns[2], expected6)
const expected7 = [3, 6, 9, 6];
console.log(new Matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6").columns[2], expected7);
// console.log(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6'), expected7)
// const expected8 = [1903, 3, 4]
// console.log(new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1], expected8)
