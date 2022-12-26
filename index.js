const dqs = (id) => document.querySelector(id);
const getTotal = () => {
  const numSubject1 = Math.round(dqs("#subject-1").value);
  const numSubject2 = Math.round(dqs("#subject-2").value);
  const numSubject3 = Math.round(dqs("#subject-3").value);
  const numSubject4 = Math.round(dqs("#subject-4").value);
  const numSubject5 = Math.round(dqs("#subject-5").value);
  const inTotal = numSubject1 + numSubject2 + numSubject3 + numSubject4 + numSubject5;
  return inTotal;
};
const calculateTotal = () => {
  const inTotal = getTotal();
  dqs("#totalNumber").value = inTotal;
  dqs("#number40").value = inTotal * 0.4;
};
dqs("#submit").addEventListener("click", () => {
  calculateTotal();
  const inTotal = getTotal();
  inTotal ? alert("Calculation completed") : alert("Input Valid Number");
});
dqs("#subject-5").addEventListener("keyup", () => {
  calculateTotal();
});

const calculateInTotal = () => {
  const number60 = Math.round(dqs("#number60").value);
  const inTotal = getTotal();
  dqs("#total").value = inTotal * 0.4 + number60;
};
dqs("#submitTotal").addEventListener("click", () => {
  calculateInTotal();
  const inTotal = getTotal();
  inTotal ? alert("Calculation completed") : alert("Input Valid Number");
});
dqs("#number60").addEventListener("keyup", () => {
  calculateInTotal();
});
const clearAll = () => {
  dqs("#subjectName").value = "";
  dqs("#subject-1").value = "";
  dqs("#subject-2").value = "";
  dqs("#subject-3").value = "";
  dqs("#subject-4").value = "";
  dqs("#subject-5").value = "";
  dqs("#totalNumber").value = "";
  dqs("#number40").value = "";
  dqs("#number60").value = "";
  dqs("#total").value = "";
  dqs("#subject-1").focus();
};
dqs("#clear").addEventListener("click", () => {
  clearAll();
});

dqs("#number60").addEventListener("keyup", (e) => {
  e.key == "Enter" && clearAll();
});

// Next focus
const nextFocus = (id, id2) => {
  dqs(id).addEventListener("keyup", (e) => {
    e.key == "Enter" && dqs(id2).focus();
    dqs(id).value.length == 2 && dqs(id2).focus();
  });
};
nextFocus("#subject-1", "#subject-2");
nextFocus("#subject-2", "#subject-3");
nextFocus("#subject-3", "#subject-4");
nextFocus("#subject-4", "#subject-5");
nextFocus("#subject-5", "#number60");
