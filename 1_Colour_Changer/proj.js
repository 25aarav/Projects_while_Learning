const body = document.querySelector('body') ; // To select body
const buttons = document.querySelectorAll('.changer-button'); //To select button

buttons.forEach( (btn) => {
          btn.addEventListener('click', function (event) {
                    if (event.target.id === 'Grey') {
                              body.style.backgroundColor = event.target.id;
                    }
                    if (event.target.id === 'blue') {
                              body.style.backgroundColor = event.target.id;
                    }

                    if (event.target.id === 'Green') {
                              body.style.backgroundColor = event.target.id;
                    }

                    if (event.target.id === 'fuchsia'){
                              body.style.backgroundColor = event.target.id;
                    }
          });


});