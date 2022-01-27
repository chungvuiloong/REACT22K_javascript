// let price = document.getElementById("price").value;
// let money = document.getElementById("money").value;

const calculate = () => {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.querySelector("#money").value);

  let amount = Math.floor(money / price);

  //   Text

  let text;

  amount >= 10
    ? (text = `Your gasoline is ${}. Good, now you can escape`)
    : (text = `Ops, you need to stay`);

  answer.textContent = text;

  // document.getElementById("answer").innerHTML = answer;
};
