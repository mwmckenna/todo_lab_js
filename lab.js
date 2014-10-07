
//console.log("Javascript is running.");

var myList = document.getElementById("toDoItem");
var list = document.getElementById("actionList");

//var addButtons = function () {

var removeItem = function () { 
  var button = document.createElement('button');
    button.innerHTML = 'delete';
    button.onclick = function (){
        alert("remove"); return false;
        //document.body.removeChild(listItem);
      };
    document.body.appendChild(button);

  };


var addDone = function () { 
  var undoDone = document.createElement('button');
  undoDone.innerHTML = 'done';
  undoDone.onclick = function (){
      //listItem.style.text-decoration = "line-through";
      alert("done"); return false;
      };
    document.body.appendChild(undoDone);
    };
  //document.body.appendChild(addButtons);
//};

//var addItem = function () {
myList.addEventListener("submit", function (event) {

    // prevent the data from being sent to the server
    event.preventDefault();

    // add your code to deal with the user's data here.
    // if your form has an text field  with a `name` (not `id`) of
    // taco, then you can access what the user typed with:
    //
    //var userInput = this.Item.value;
    //console.log("Form was submitted", this.Item.value);

    var Item = this.Item.value;

    var listItem = document.createElement("li");
    var text = document.createTextNode(Item);

    //var removeButton = document.createElement(removeb);
    listItem.appendChild(text);
    list.appendChild(listItem);
    //list.appendChild(removeb);

    this.Item.value = "";

});
//};
