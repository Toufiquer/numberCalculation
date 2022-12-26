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
