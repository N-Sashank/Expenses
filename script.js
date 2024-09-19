const formEl = document.querySelector(".form");
const transactionEl = document.querySelector(".transaction-items");
// const transactionlist=document.querySelector(".transaction-items");
// const addEl=document.querySelector(".add-button");
// addEl.addEventListener("onclick",formHandler);
// const totalIncomeEl = +document.getElementById("total-income").textContent;
// const totalExpensesEl = +document.getElementById("total-expenses").textContent;
// const balanceEl = document.getElementById("balance-element");

transactionEl.addEventListener("click", clickHandler);

formEl.addEventListener("submit", formHandler);

function clickHandler(event) {
  //remover clicked element
  const clickedEl = event.target.parentNode;
  console.log(clickedEl.parentNode);
  //update income or expenses
  const amountEl = clickedEl.querySelector(".transaction-amount");
  clickedEl.parentNode.remove();

  const Ramount = +amountEl.textContent;

  if (Ramount < 0) {
    const totalExpensesEl =
      +document.getElementById("total-expenses").textContent;

    const updatedExpensesEl = totalExpensesEl - Ramount * -1;
    document.getElementById("total-expenses").innerText = updatedExpensesEl;
  } else {
    const totalIncomeEl = +document.getElementById("total-income").textContent;

    const updatedIncomeEl = totalIncomeEl - Ramount;
    document.getElementById("total-income").innerText = updatedIncomeEl;
  }
  //update balance
  const balanceEl = document.getElementById("balance-element");
  const income = +document.getElementById("total-income").innerText;
  const expense = +document.getElementById("total-expenses").innerText;
  const resultEl = income - expense;
  document.getElementById("balance-element").textContent = resultEl;
  //check for negative balance

  if (balanceEl.innerText < 0) {
    balanceEl.classList.add("red");
  } else {
    balanceEl.classList.remove("red");
  }
}

function formHandler(e) {
  e.preventDefault();
  //get values
  const descriptionEl = e.target.getElementsByTagName("input")[0].value;
  const amountEl = +e.target.getElementsByTagName("input")[1].value;

  //add transaction
  const newhtml = ` <li>
    <div class="list-item ${amountEl > 0 ? "positive" : "negative"}">
      <h4>${descriptionEl}</h4>
      <button  class="removetransaction__btn"> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="white" fill="white">
          <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </button>
      <p class="transaction-amount">${amountEl > 0 ? "+" : ""}${amountEl}</p>
      
    </div>
    </li>`;
  transactionEl.insertAdjacentHTML("beforeend", newhtml);
  // update income or expenses and balance

  const Ramount = amountEl;
  if (Ramount < 0) {
    const totalExpensesEl =
      +document.getElementById("total-expenses").textContent;

    const updatedExpensesEl = totalExpensesEl + Ramount * -1;
    document.getElementById("total-expenses").innerText = updatedExpensesEl;
  } else {
    const totalIncomeEl = +document.getElementById("total-income").textContent;

    const updatedIncomeEl = totalIncomeEl + Ramount;
    document.getElementById("total-income").innerText = updatedIncomeEl;
  }
  //update balance
  const balanceEl = document.getElementById("balance-element");
  const income = +document.getElementById("total-income").innerText;
  const expense = +document.getElementById("total-expenses").innerText;
  const resultEl = income - expense;
  document.getElementById("balance-element").textContent = resultEl;
  // clear form inputs
  formEl.querySelectorAll(".input")[0].value = "";
  formEl.querySelectorAll(".input")[1].value = "";

  //check for negative balance
  if (balanceEl.innerText < 0) {
    balanceEl.classList.add("red");
  } else {
    balanceEl.classList.remove("red");
  }
}
