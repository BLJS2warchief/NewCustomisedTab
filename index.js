window.onload = updateGreeting;
var clicked = "nbv";

window.addEventListener("load", function(){
    var UpdateName = document.getElementById("nameInput");
    UpdateName.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("updateBtn").click();
        }
    });
});

function datemessage(){
    var currentDate = new Date();
    day = currentDate.getDate();
    month = currentDate.getMonth() + 1;
    year = currentDate.getFullYear();
    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var greetingName = document.getElementById("greeting-name");
    if(hours >= 6 && hours < 9){
        greetingName.innerHTML = "Rise and shine";
    }
    if(hours >= 9 && hours < 12){
        greetingName.innerHTML = "A pleasant morning it is";
    }
    if(hours >= 12 && hours < 19){
        greetingName.innerHTML = "Zestful evening";
    }
    if(hours >= 19 && hours < 23){
        greetingName.innerHTML = "Good night";
    }
    if(hours >= 23 && hours < 24){
        greetingName.innerHTML = "Time to turn off the lights and go to sleep";
    }
    if(hours >= 0 && hours < 2){
        greetingName.innerHTML = "Time to turn off the lights and go to sleep";
    }
    if(hours >= 2 && hours < 6){
        greetingName.innerHTML = "You better go to bed, it's high time";
    }
    document.getElementById("timeDisp").innerHTML = "it's ";
    document.getElementById("timeDisp").innerHTML += hours + ":" + minutes;
    document.getElementById("timeDisp").innerHTML += '\n' + day + "/" + month + "/" + year;
    browser.storage.local.get("userName").then(gotUser, onError);
    document.getElementById("timeDisp").innerHTML = "It's " + hours + ":" + minutes;
    document.getElementById("timeDisp").innerHTML += '\n' + day + "/" + month + "/" + year;
}
  
function updateGreeting(){
    displayQuote();
    browser.storage.local.get("serviceStatus").then(gotService, onError);
    var todoActivate = document.getElementById("todoActivate");
    if(todoActivate.style.display != "block"){
        someY();
    }
    datemessage();
    setInterval(function(){
        datemessage();
        browser.storage.local.get("userName").then(gotUser, onError);
    }, 10000);
}
window.addEventListener("load", function(){
    document.getElementById("todoActivate").addEventListener("click", function(){
        serviceStatus = "activated";
        var todoEntries = {
            list : []
        }
        browser.storage.local.set({todoEntries}).then(setItem, onError);
        browser.storage.local.set({serviceStatus}).then(setItem, onError);
        browser.storage.local.get("serviceStatus").then(gotService, onError);
    })
});

function displayQuote(){
    var mydata = JSON.parse('[{"quote" : "If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.","author" : "--J.K. Rowling, Harry Potter and the Goblet of Fire "},{"quote" : "No one can make you feel inferior without your consent.","author" : "-- Eleanor Roosevelt, This is My Story "},{"quote" : "If you tell the truth, you don\'t have to remember anything.","author" : "-- Mark Twain "},{"quote" : "A friend is someone who knows all about you and still loves you.","author" : "-- Elbert Hubbard "},{"quote" : "I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","author" : "-- Maya Angelou"},{"quote" : "Always forgive your enemies; nothing annoys them so much.","author" : "-- Oscar Wilde "},{"quote" : "Live as if you were to die tomorrow. Learn as if you were to live forever.","author" : "-- Mahatma Gandhi"},{"quote" : "As he read, I fell in love the way you fall asleep: slowly, and then all at once.","author" : "-- John Green, The Fault In Our Stars"},{"quote" : "How wonderful it is that nobody need wait a single moment before starting to improve the world.","author" : "-- Anne Frank, The Diary of a Young Girl"},{"quote" : "It\’s the possibility of having a dream come true that makes life interesting.","author" : "-- Paulo Coelho, The Alchemist"},{"quote" : "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are.","author" : "-- J.K. Rowling, Harry Potter and the Order of the Phoenix"},{"quote" : "The pieces I am, she gather them and gave them back to me in all the right order.","author" : "-- Toni Morrison, Beloved"},{"quote" : "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","author" : "-- Ralph Waldo Emerson "},{"quote" : "There is no greater agony than bearing an untold story inside you.","author" : "-- Maya Angelou, I Know Why the Caged Bird Sings"},{"quote" : "We all make choices in life, but in the end our choices make us.","author" : "-- Andrew Ryan, Bioshock"},{"quote" : "What is better? To be born good or to overcome your evil nature through great effort?","author" : "-- Paarthurnax, Elder Scrolls V: Skyrim"},{"quote" : "Wanting something does not give you the right to have it.","author" : "-- Ezio Auditore, Assassin’s Creed 2"},{"quote" : "A hero need not speak. When he is gone, the world will speak for him.","author" : "-- Halo"},{"quote" : "It\'s easy to forget what a sin is in the middle of a battlefield.","author" : "-- Solid Snake, Metal Gear Solid"},{"quote" : "Trust me.","author" : "-- BT-7274, Titanfall 2"},{"quote" : "Nothing is more badass than treating a woman with respect!","author" : "-- Mr. Torgue, Borderlands 2"},{"quote" : "A man chooses; a slave obeys.","author" : "-- Andrew Ryan, BioShock"},{"quote" : "I\'ve struggled a long time with survivin\', but no matter what you have to find something to fight for.","author" : "-- Joel, The Last of Us"},{"quote" : "It\'s more important to master the cards you\'re holding than to complain about the ones your opponents were dealt.","author" : "-- Grimsley, Pokémon Black and White"},{"quote" : "No matter how dark the night, morning always comes, and our journey begins anew.","author" : "-- Lulu, Final Fantasy X"},{"quote" : "Hope is what makes us strong. It is why we are here. It is what we fight with when all else is lost.","author" : "-- Pandora, God of War 3"},{"quote" : "A sword wields no strength unless the hands that holds it has courage.","author" : "-- The Hero’s Shade, Legend of Zelda: Twilight Princess"},{"quote" : "Science isn\’t about why! It\’s about why not!","author" : "-- Cave Johnson, Portal 2"},{"quote" : "And so we beat on, boats against the current, borne back ceaselessly into the past.","author" : "-- F. Scott Fitzgerald, The Great Gatsby "},{"quote" : "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.","author" : "-- Sylvia Plath, The Bell Jar "},{"quote" : "Memories warm you up from the inside. But they also tear you apart.","author" : "-- Haruki Murakami, Kafka on the Shore"},{"quote" : "Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.","author" : "-- William Goldman, The Princess Bride "},{"quote" : "Love is the longing for the half of ourselves we have lost.","author" : "-- Milan Kundera, The Unbearable Lightness of Being"},{"quote" : "Get busy living or get busy dying.","author" : "-- Stephen King, The Shawshank Redemption "},{"quote" : "And now that you don\’t have to be perfect, you can be good.","author" : "-- John Steinbeck, East of Eden"}]');
    var x = Math.floor(Math.random() * (mydata.length));
    document.getElementById("greetQuote").innerHTML = mydata[x].quote;
	document.getElementById("greetQuote").innerHTML += "<br>" + mydata[x].author;
}

function gotService(items){
    if(items.serviceStatus == "activated"){
        document.getElementById("todoActivate").style.display = "none";
        document.getElementById("todo").style.display = "block";
    }
}
function setItem() {
    console.log("Entry set, maybe?!");
}
function onError(error) {
    console.log(error);
}
function gotUser(item) {
    console.log(item.userName);
    username = item.userName;
    if(username != undefined){
        datemessage()
        document.getElementById("greeting-name").innerHTML += ", " + username;
    }
}

window.addEventListener("load", function(){
    document.getElementById("updateBtn").addEventListener("click", function(){
        userName = document.getElementById("nameInput").value;
        //alert(userName);
        browser.storage.local.set({userName}).then(setItem, onError);
        browser.storage.local.get("userName").then(gotUser, onError);
    })
});

function gotTodo(items){
    console.log(items.todoEntries);
    for(i = 0; i < items.todoEntries.list.length; i++){
        todoEntryExt(items.todoEntries.list[i]);
    }
}

function initializeMid(items){
    initializeTodo(items.todoEntries);
}

function initializeTodo(todoEntries){
    todoBox = document.createElement("div");
    todoBox.setAttribute("class", "todoBox");
    todoBox.setAttribute("id", "todoBox");

    todoAdderTxt = document.createElement("input");
    todoAdderTxt.setAttribute("type", "text");
    todoAdderTxt.setAttribute("class", "todoAdderTxt");
    todoAdderTxt.setAttribute("id","todoAdderTxt");
    todoAdderTxt.setAttribute("value","");
    todoAdderTxt.setAttribute("placeholder","Add Todo item");
    todoAdderTxt.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("todoAdder").click();
        }
    });

    todoAdder = document.createElement("input");
    todoAdder.setAttribute("type", "button");
    todoAdder.setAttribute("class", "todoAdder");
    todoAdder.setAttribute("id","todoAdder");
    todoAdder.setAttribute("value","+");
    todoAdder.addEventListener("click", someX);

    todoList = document.createElement("div");
    todoList.setAttribute("class", "todoList");
    todoList.setAttribute("id", "todoList");
    
    todoBox.appendChild(todoAdderTxt);
    todoBox.appendChild(todoAdder);
    todoBox.appendChild(todoList);

    todo.insertAdjacentElement('afterbegin', todoBox);
    document.getElementById("todoList").innerHTML = "";
    browser.storage.local.set({todoEntries}).then(setItem, onError);
    browser.storage.local.get("todoEntries").then(gotTodo, onError);
}

function getTodoEntries(items){
    //alert(items.todoEntries.list);

    addTodoEntry(items.todoEntries);
}

function someX(){
    browser.storage.local.get("todoEntries").then(getTodoEntries, onError);
}
function someY(){
    browser.storage.local.get("todoEntries").then(initializeMid, onError);
}
function someZ(){
    browser.storage.local.get("todoEntries").then(removeMid, onError);
}

function addTodoEntry(todoEntries){
    toAdd = document.getElementById("todoAdderTxt").value;
    if(toAdd == ""){
        alert("Can't add empty entry");
    }
    else if(todoEntries.list.length == 5){
        alert("Maybe you should be doing the things you added first! *^_^*")
        return;
    }
    else{
        todoEntries.list.push(toAdd);
        todoEntryExt(toAdd, todoEntries);
        browser.storage.local.set({todoEntries}).then(setItem, onError);
    }
}

function todoEntryExt(toAdd, todoEntries){
    todoEntry = document.createElement("div");
    todoEntry.setAttribute("class", "todoEntry");
    todoEntry.setAttribute("id", "todoEntry" + toAdd);

    todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todoItem");
    todoItem.setAttribute("id", "todoItem");
    todoItem.innerHTML = toAdd;
    
    todoRemove = document.createElement("button");
    todoRemove.setAttribute("class", "todoRemove");
    todoRemove.setAttribute("id", "todoRemove" + toAdd);
    todoRemove.addEventListener("click", function(){
        clicked = toAdd;
        someZ();
    });
    todoRemove.innerHTML = "X";

    todoEntry.appendChild(todoItem);
    todoEntry.appendChild(todoRemove);
    document.getElementById("todoList").appendChild(todoEntry);
}

function removeMid(items){
    removeTodoEntry(items.todoEntries)
}

function removeTodoEntry(todoEntries){
    var index = todoEntries.list.indexOf(clicked);
    if (index > -1) {
        todoEntries.list.splice(index, 1);
    }
    document.getElementById("todo").innerHTML = "";
    browser.storage.local.set({todoEntries}).then(setItem, onError);
    someY();
}