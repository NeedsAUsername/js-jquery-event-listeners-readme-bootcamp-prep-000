
<<<<<<< HEAD
=======
function getIt() {
  $('p').on('click', function(e){
    alert('Hey!')
  })
}

function frameIt() {
  $('img') 
}

$(document).ready(function(){
>>>>>>> 6861d93547dd1b3f88387b82a71a62f29235f436

function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which == 71) {
      alert('You have pressed the G key');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
