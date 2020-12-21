const divInfo = document.getElementById("info-div");
function createInformation(information) {
    const divNew = document.createElement("div");
    divNew.innerHTML = information;
    divNew.classList.add("mb-4");
    divInfo.appendChild(divNew);
//    return option;
}


function generateInfo() {
const numberInfo = document.getElementById("facts_number").value;
const animalType = document.getElementById("animal").value;
    axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${numberInfo}`).then(response => {
//         usówanie starych elementów przed generacja nowego
           while (divInfo.firstChild) {
                divInfo.firstChild.remove();
           };

          if (numberInfo == '' || numberInfo < 1 || numberInfo > 10){
            alert('wpisz wartość w polu ilość ciekawostek z przedziału 1 do 10');
//            break;
          }else if (numberInfo == 1){
            createInformation(response.data.text);
          } else{
            response.data.map(function(c){
            createInformation(c.text);
            });
          };
    });
};

