const formEl = document.querySelector(".form");
const transactionEl = document.querySelector(".transaction-items");
const totalIncomeEl = +document.getElementById("total-income").textContent;
const totalExpensesEl = +document.getElementById("total-expenses").textContent;
const balanceEl = document.getElementById("balance-element");

transactionEl.addEventListener("click", clickHandler);

formEl.addEventListener("submit", formHandler);

function clickHandler(event) {
  //remover clicked element
  const clickedEl = event.target.parentNode;
  clickedEl.remove();
  //update income or expenses
  const Ramount = +clickedEl.querySelector(".transaction-amount").innerText;

  if (Ramount < 0) {
    const updatedExpensesEl = totalExpensesEl - Ramount * -1;
    document.getElementById("total-expenses").innerText = updatedExpensesEl;
  } else {
    const updatedIncomeEl = totalIncomeEl - Ramount;
    document.getElementById("total-income").innerText = updatedIncomeEl;
  }
  //update balance
  const income = +document.getElementById("total-income").innerText;
  const expense = +document.getElementById("total-expenses").innerText;
  const resultEl = income - expense;
  document.getElementById("balance-element").textContent = resultEl;
  console.log(resultEl);
  //check for negative balance
  if (balanceEl.innerText < 0) {
    balanceEl.classList.add("red");
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
      <button  class="removetransaction__btn"><img src="/exit.svg" alt="" srcset=""></button>
      <p class="transaction-amount">${amountEl > 0 ? "+" : ""}${amountEl}</p>
      
    </div>
    </li>`;
  transactionEl.insertAdjacentHTML("beforeend", newhtml);
  // update income or expenses and balance

  const Ramount = amountEl;
  if (Ramount < 0) {
    const updatedExpensesEl = totalExpensesEl + Ramount * -1;
    document.getElementById("total-expenses").innerText = updatedExpensesEl;
  } else {
    const updatedIncomeEl = totalIncomeEl + Ramount;
    document.getElementById("total-income").innerText = updatedIncomeEl;
  }
  //update balance
  const income = +document.getElementById("total-income").innerText;
  const expense = +document.getElementById("total-expenses").innerText;
  const resultEl = income - expense;
  document.getElementById("balance-element").textContent = resultEl;
  // clear form inputs
  formEl.querySelectorAll(".input")[0].value = " ";
  formEl.querySelectorAll(".input")[1].value = " ";

  // unfocus (blur) form inputs
  descriptionEl.blur();
  amountEl.blur();
  //check for negative balance
  if (balanceEl.innerText < 0) {
    balanceEl.classList.add("red");
  }
}
