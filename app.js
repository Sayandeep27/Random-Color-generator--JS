const getcolor=()=>{

  // creating my hexadecimal code
  const random_number=Math.floor(Math.random()* 16777215);

  const random_code='#'+ random_number.toString(16);

  document.body.style.backgroundColor=random_code;

  document.getElementById("color-code").innerText=random_code;


  navigator.clipboard.writeText(random_code);


}


document.getElementById("button").addEventListener(
    "click",
    getcolor
)

// init call
getcolor();