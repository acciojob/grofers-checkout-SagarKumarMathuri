// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
//    const prices = document.querySelectorAll(".prices");
// let total = 0;
// 	 // Add all prices
//   prices.forEach((price) => {
//     total += Number(price.innerText);
//   });

//   // Create new table row
//   const tr = document.createElement("tr");

//   // Create new table cell
//   const td = document.createElement("td");

//   // Set colspan for single cell row
//   td.colSpan = 2;

//   // Add total price text
//   td.innerText = `Total Price: ${total}`;

//   // Append cell to row
//   tr.appendChild(td);

//   // Append row to table
//   document.querySelector("table").appendChild(tr);
// };

// getSumBtn.addEventListener("click", getSum);

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // Select all price elements
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  // Calculate total
  prices.forEach((price) => {
    total += Number(price.innerText);
  });

  // Remove old total row if it already exists
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) {
    oldTotal.remove();
  }

  // Create new row
  const tr = document.createElement("tr");
  tr.id = "total-row";

  // Create new cell
  const td = document.createElement("td");
  td.colSpan = 2;

  // Add total text
  td.innerText = `Total Price: ${total}`;

  // Append cell to row
  tr.appendChild(td);

  // Append row to table
  document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);