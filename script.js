const localStorageKey = "to-do-list-gn";

function newTask() {
  let input = document.querySelector("#input-task");

  if (!input.value) {
    alert("digite algo para inserir em sua Lista !");
  } else {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: input.value,
    });

    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
  }
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.querySelector("#to-do-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button id ='btn-ok' onclick = 'removeItem("${values[i]["name"]}")'>ok</button></li>`;
  }
}

function removeItem(data) {
  console.log(data);
}
showValues();
