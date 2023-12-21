let number = [1,2,3,4,5,6,7,8,9,10]

function afficher_multiplication(string){
    let multiplication = document.querySelector(".display-multiplication")
    multiplication.innerHTML = string
}

function create_multiplication(){
    const random_one = Math.floor(Math.random() * number.length);
    const random_two = Math.floor(Math.random() * number.length);

    let factor_one = number[random_one]
    let factor_two = number[random_two]

    return [factor_one, factor_two]
}

function check_multiplication(){
    if (factor_one * factor_two == parseInt(input_res.value)){
        input_res.value = ''
        factor_one = create_multiplication()[0]
        factor_two = create_multiplication()[1]
        string = factor_one.toString() + 'x' + factor_two.toString()
        afficher_multiplication(string)
    }else{
        console.log("Dommage")
    }
}

let input_res = document.getElementById("resultat")
let submit_btn = document.getElementById("submit");
let factor_one = create_multiplication()[0]
let factor_two = create_multiplication()[1]
let string = factor_one.toString() + ' x ' + factor_two.toString()
afficher_multiplication(string)

document.addEventListener('keypress', (e) => {
    if(e.key == "Enter") {
      // enter pressed now validate
      check_multiplication()
    }
  });