class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  keliling() {
    return this.sisi * 4;
  }

  luas() {
    return this.sisi * this.sisi;
  }
}

const persegi = new Persegi(4);
console.log(persegi.keliling());
console.log(persegi.luas());
