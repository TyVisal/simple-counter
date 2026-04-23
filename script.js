let Count = 0;

function storeCount() {
  document.getElementById("countNumber").innerHTML = Count;
}

function increaseCount() {
  Count++;
  storeCount();
}

function decreaseCount() {
  Count--;
  storeCount();
}

function resetCount() {
  Count = 0;
  storeCount();
}

function saveCount() {
  localStorage.setItem("Count", Count);
}

function loadCont() {
  let saved = localStorage.getItem("Count");
  if (saved !== null) {
    Count = Number(saved);
  }
  storeCount();
}
