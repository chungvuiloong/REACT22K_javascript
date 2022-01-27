// let price = document.getElementById("price").value;
// let money = document.getElementById("money").value;

const calculate = () => {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.querySelector("#money").value);

  let amount = Math.floor(money / price);

  //   Text

  let text;

  amount >= 10
    ? (text = `You can buy ${amount} litres of gasoline. Good, popo can't catch you.`)
    : (text = `You can buy ${amount} litres of gasoline. Ops, popo just caught you.`);

  // id.textContent = text;
  answer.textContent = text;

  document.querySelector("#meter").value = `${amount}`;

  // document.getElementById("answer").innerHTML = answer;
};
