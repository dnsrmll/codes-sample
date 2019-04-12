
export function showFunction() {
    var named = document.getElementById('user_input').value;

      document.getElementById('display').innerHTML = named;
     
      var aged = document.getElementById('user_input2').value;

      document.getElementById('display1').innerHTML = aged;
      //display

   if (document.getElementById('Gender1').checked) {
       var Gender = document.getElementById('Gender1').value;
       }	else if (document.getElementById('Gender2').checked)   {  			
               var Gender = document.getElementById('Gender2').value;
       }
       document.getElementById('display4').innerHTML = 'Gender: ' + Gender;
     document.getElementById('display').innerHTML = 'Name: ' + named;
     document.getElementById('display1').innerHTML = 'Age: ' + aged;



}