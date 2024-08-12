//Generate Hex Value for color

const randomColor = function()
{
    const hex = '0123456789ABCDEF'
    let color = "#"
    for(let i = 0; i<6 ; i++)
    {
       color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop')
let intervalID

//To Change the body color
 const changingBgColor = function () {

          const BgColor = function () {
                    document.body.style.backgroundColor = randomColor();
          }
          intervalID = setInterval(BgColor, 1000);  //Initializing interval
          
};

const stopBgColor = function()
{
  clearInterval(intervalID)
}
startButton.addEventListener('click', function(){
          console.log(`color changing started`);
          changingBgColor();
});
stopButton.addEventListener('click' , stopBgColor);



