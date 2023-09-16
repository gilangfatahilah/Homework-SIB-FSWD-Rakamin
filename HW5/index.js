const form = document.forms["form"];
const table = document.getElementById("table-container");
const tableBody = document.querySelector("#table > tbody");
const resume = document.getElementById("resume");
const btnSubmit = document.getElementById("submit");
const btnRegister = document.getElementById("register");
const btnData = document.getElementById("data");
const alert = document.getElementById("alert");
const alertTable = document.getElementById("alert-table");
const ageArr = [];
const allowanceArr = [];
let totalAgeArr;
let totalAllowanceArr;
let ageAverage;
let allowanceAverage;
let no;

class Employee {
  constructor(name, age, allowance, no, ageAverage, allowanceAverage) {
    this.name = name;
    this.age = age;
    this.allowance = allowance;
    this.no = no;
    this.ageAverage = ageAverage;
    this.allowanceAverage = allowanceAverage;
  }

  showData() {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${this.no}</td>
      <td>${this.name}</td>
      <td>${this.age}</td>
      <td>${this.allowance}</td>  
    `;
    tableBody.appendChild(trElement);
  }

  showResume() {
    resume.innerHTML = `Resume : Rata rata pendaftar memiliki uang saku sebesar 
    "${this.allowanceAverage}"
    dengan rata rata umur berusia "${this.ageAverage}"`;
  }
}

// function Total
function getTotal(total, num) {
  return total + num;
}

// function Average
function getAverage(total, ...arr) {
  return total / arr.length;
}

// Button handlers
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = await document.getElementById("name").value;
  const age = parseInt(await document.getElementById("age").value);
  const allowance = parseInt(await document.getElementById("allowance").value);

  // Push Array
  ageArr.push(age);
  allowanceArr.push(allowance);
  // Get total array
  totalAgeArr = ageArr.reduce(getTotal);
  totalAllowanceArr = allowanceArr.reduce(getTotal);
  // Get Average Array
  ageAverage = getAverage(totalAgeArr, ...ageArr);
  allowanceAverage = getAverage(totalAllowanceArr, ...allowanceArr);
  // Push data to Class
  no = ageArr.length;
  const employee = new Employee(
    name,
    age,
    allowance,
    no,
    ageAverage,
    allowanceAverage
  );
  employee.showData();
  employee.showResume();

  //Show Alert
  alert.classList.remove("d-none");
  setTimeout(function () {
    alert.classList.add("d-none");
  }, 2000);

  setTimeout(function () {
    form.classList.add("d-none");
    table.classList.remove("d-none");
    alertTable.classList.add("d-none");
    document.getElementById("table").classList.remove("d-none");
  }, 2000);
});

btnRegister.addEventListener("click", () => {
  form.classList.remove("d-none");
  table.classList.add("d-none");
});

btnData.addEventListener("click", () => {
  if (ageArr.length == 0) {
    alertTable.classList.remove("d-none");
    document.getElementById("table").classList.add("d-none");
  }

  form.classList.add("d-none");
  table.classList.remove("d-none");
});
