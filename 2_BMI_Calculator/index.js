const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
          const heightValue = document.querySelector('#height');
          const weightValue = document.querySelector('#weight'); //so that value propert can read since it cannot read null value

    const height= parseInt(heightValue.value);
    const weight = parseInt(weightValue.value);
    const result = document.querySelector('.Result');  //It is an element so no need parseInt 

    if(height=== ' ' || height< 0 || isNaN(height)){
          result.innerHTML = `Please give a valid height ${height}`;
    }

    else if(weight=== ' ' || weight < 0 || isNaN(weight)){
          result.innerHTML = `Please give a valid height ${weight}`;
    }

    else{
         const bmi = (weight/((height*height)/10000)).toFixed(2);

         result.innerHTML= `<span>${bmi}</span>`;
    }
})


