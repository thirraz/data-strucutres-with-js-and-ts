let items = {};
const obj = {
  name: "Thiago",
  lastName: "Souza",
};

const addObj = (el) => {
  let count = 0;
  if (!items[el]) {
    items[count] = el;
  }

  return;
};

addObj("thiago");
addObj(1);
addObj(11);
addObj(12);
addObj(122);

console.log(items);
