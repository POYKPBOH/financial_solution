console.log("hello world");
const submit = document.querySelector("#submit");
const salary = document.querySelector("#salary");
const entertainment = document.querySelector("#entertainment");
const sharemarket = document.querySelector("#sharemarket");
const transport = document.querySelector("#transport");
const movie = document.querySelector("#movie");
const cloths = document.querySelector("#cloth");
const rent = document.querySelector("#rent");
// const data_container = document.querySelector("#data_container");
const scroll_down = document.querySelector(".scroll-down");
const foods = document.querySelector("#foods");
const  object = {
  entertainment_checkbox:[],
  food_checkbox:[]
}


function submit_button(){  
submit.addEventListener("click", (e) =>{
  e.preventDefault();
  object.salary = +salary.value;
  object.entertainment=+entertainment.value;
  object.sharemarket=+sharemarket.value;
  object.transport=+transport.value;
  object.foods= +foods.value;  
  object.movie=+movie.value;
  object.cloths=+cloths.value;
  object.rent=+rent.value;
 
  localStorage.setItem("object",JSON.stringify(object));
  // scroll_down.classList.remove("block")
})
};

async function datasubmitted(){
      const object = await submit_button();
      const objects =await JSON.parse(localStorage.getItem("object"));
      console.log(objects)
      return objects;
}


datasubmitted()

  function selectOnlyThis(id) {
    for (var i = 0;i < 2; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
  
    object.house = document.getElementById(`${+id}`).closest(".home").children[(+id)*2+1].innerHTML
    console.log(typeof(document.getElementById(`${+id}`).closest(".home").children[(+id)*2+1].innerHTML))
    console.log(object)
    


}

function selectOnlyThiss(id) {

  document.getElementById(id).checked = true;
 object.entertainment_checkbox.push(id)

}


function selectOnlyThisfood(id) {
  document.getElementById(id).checked = true;
 object.food_checkbox.push(id);
}


let ss = JSON.parse(localStorage.getItem('object'));
let sum = 0;
for(let i of Object.values(ss)){
  
  if(typeof(i) == "number"){
    if(ss.salary == i){
      
    }else{
      sum+=i;
    }
  
  }else{
    console.log("hello worldd")
  }
}

function overview(){
  if(ss.salary-sum>(ss.salary/100*10)){
    return "good"
  }else{
    return "you have to save the money"
  }
}
