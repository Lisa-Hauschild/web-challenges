console.clear();

const form = document.querySelector("[data-js=form]");


form.addEventListener("submit",function(event){
    event.preventDefault();

   
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  console.log(data.firstName);
    


});



form.addEventListener("submit",(event) => {


   
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

console.log(`"The age-badness-sum of" ${data.firstName}" is "${data.age + data.badness}`);

});
