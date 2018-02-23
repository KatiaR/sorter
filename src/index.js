class Sorter {
  constructor() {
    this.arr = [];
    this.comaparator = (a,b) => a > b;
  }

  add(element) {
    this.arr.push(element)
  }

  at(index) {
      return this.arr[index]
  }

  get length() {
      return this.arr.length
  }

  toArray() {
      return this.arr
  }

  setComparator(func) {
      this.comaparator = func;
  }

  sort(indices) {
      let ind = [...indices].sort();
      let transitArr = ind.map(index => this.arr[index]);
      transitArr.sort(this.comaparator);
      ind.forEach((index, i) => {
        this.arr[index] = transitArr[i]
      })
  }
}

module.exports = Sorter;