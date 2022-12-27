const dqs = (id) => document.querySelector(id);

const getValue = (id) => Math.round(dqs(id).value);

const calculateTotal = () => {
  const result = getValue("#subject-1") + getValue("#subject-2") + getValue("#subject-3") + getValue("#subject-4") + getValue("#subject-5") + getValue("#subject-6") + getValue("#subject-7") + getValue("#subject-8") + getValue("#subject-9");
  dqs("#totalNumber").value = result;
};

const nextFocus = (id, id2 = false) => {
  dqs(id).addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      clearAll();
      dqs("#subject-1").focus();
    }
    const value = getValue(id);
    id2 && ("" + value).length == 2 && dqs(id2).focus();
    if (id === "#subject-9") {
      calculateTotal();
    }
  });
};
nextFocus("#subject-1", "#subject-2");
nextFocus("#subject-2", "#subject-3");
nextFocus("#subject-3", "#subject-4");
nextFocus("#subject-4", "#subject-5");
nextFocus("#subject-5", "#subject-6");
nextFocus("#subject-6", "#subject-7");
nextFocus("#subject-7", "#subject-8");
nextFocus("#subject-8", "#subject-9");
nextFocus("#subject-9");

const clearAll = () => {
  dqs("#subject-1").value = "";
  dqs("#subject-2").value = "";
  dqs("#subject-3").value = "";
  dqs("#subject-4").value = "";
  dqs("#subject-5").value = "";
  dqs("#subject-6").value = "";
  dqs("#subject-7").value = "";
  dqs("#subject-8").value = "";
  dqs("#subject-9").value = "";
  dqs("#totalNumber").value = "";
};
dqs("#clear").addEventListener("click", () => {
  clearAll();
});
