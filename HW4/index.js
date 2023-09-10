// Array Pertama
const array = [
  21, 11, 32, 49, 43, 40, 26, 27, 27, 34, 25, 6, 38, 2, 33, 17, 21, 5, 47, 15,
  21, 17, 9, 49, 38, 3, 1, 26, 17, 5, 11, 40, 44, 4, 1, 5, 35, 20, 21, 23, 23,
  27, 7, 20, 10, 4, 36, 21, 16, 40, 27, 5, 47, 11, 15, 35, 49, 25, 34, 16, 19,
  43, 2, 25, 5, 25, 32, 13, 38, 30, 7, 36, 9, 30, 11, 22, 35, 42, 21, 2, 40, 20,
  15, 13, 21, 21, 36, 41, 11, 41, 44, 15, 11, 23, 15, 30, 2, 16, 20, 47,
];
// Array Pecahan
let oddArray = [];
let evenArray = [];

// Fungsi Membagi array berdasarkan indeks
const generateArray = (item, index) => {
  if (index % 2 === 0) {
    evenArray.push(item);
  } else {
    oddArray.push(item);
  }
};

// Fungsi Mencari nilai terkecil dan terbesar
const getMaxValue = (...items) => {
  let maxValue = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i] > maxValue) {
      maxValue = items[i];
    }
  }
  return maxValue;
};

const getMinValue = (...items) => {
  let minValue = 5;
  for (let i = 0; i < items.length; i++) {
    if (items[i] < minValue) {
      minValue = items[i];
    }
  }
  return minValue;
};

// Fungsi Mencari Nilai total dan rata rata
const getTotal = (total, num) => {
  return total + num;
};

const getAverage = (total, ...array) => {
  return total / array.length;
};

// Fungsi Perbandingan
const compare = (odd, even) => {
  if (odd === even) {
    return "NILAI ARRAY GANJIL 'SAMA DENGAN' NILAI ARRAY GENAP";
  } else if (odd < even) {
    return "NILAI ARRAY GENAP 'LEBIH BESAR' DARI NILAI ARRAY GANJIL";
  } else {
    return "NILAI ARRAY GANJIL 'LEBIH BESAR' DARI NILAI ARRAY GENAP";
  }
};

//Membagi array berdasarkan index ganjil dan genap
array.forEach(generateArray);
// Variabel untuk menyimpan nilai MAX dan MIN
const maxValueOddArray = getMaxValue(...oddArray);
const minValueOddArray = getMinValue(...oddArray);
const maxValueEvenArray = getMaxValue(...evenArray);
const minValueEvenArray = getMinValue(...evenArray);
// Variabel untuk menyimpan nilai total dan rata - rata
const totalOddArray = oddArray.reduce(getTotal);
const averageOddArray = getAverage(totalOddArray, ...oddArray);
const totalEvenArray = evenArray.reduce(getTotal);
const averageEvenArray = getAverage(totalEvenArray, ...evenArray);
// Variabel untuk menyimpan nilai perbandingan
const maxComparison = compare(maxValueOddArray, maxValueEvenArray);
const minComparison = compare(minValueOddArray, minValueEvenArray);
const totalComparison = compare(totalOddArray, totalEvenArray);
const averageComparison = compare(averageOddArray, averageEvenArray);

// Menampilkan Output
console.log(
  `FIRST ARRAY : ${array} \nFIRST ARRAY LENGTH : ${array.length}
  \nODD ARRAY VALUE : ${oddArray} \nODD ARRAY LENGTH : ${oddArray.length} \nEVEN ARRAY VALUE : ${evenArray} \nEVEN ARRAY LENGTH : ${evenArray.length}
  \nODD ARRAY MAX : ${maxValueOddArray} \nODD ARRAY MIN : ${minValueOddArray} \nEVEN ARRAY MAX : ${maxValueEvenArray} \nEVEN ARRAY MIN : ${minValueEvenArray}
  \nODD ARRAY TOTAL : ${totalOddArray} \nODD ARRAY AVERAGE : ${averageOddArray} \nEVEN ARRAY TOTAL : ${totalEvenArray} \nEVEN ARRAY AVERAGE : ${averageEvenArray}
  \nPERBANDINGAN NILAI MAX : ${maxComparison} \nPERBANDINGAN NILAI MIN : ${minComparison} \nPERBANDINGAN  NILAI TOTAL : ${totalComparison} \nPERBANDINGAN NILAI RATA RATA : ${averageComparison}`
);
