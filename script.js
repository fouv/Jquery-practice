/* -------- CODING PART 3 --------------------------------------------------------------------*/

// Number of messages 
var messagesCount = document.getElementsByTagName('p').length

// updating counter
document.getElementById('count').textContent = messagesCount

// Listening to the click of the trash
for(var i=0; i<document.getElementsByTagName('p').length; i++) {

      document.getElementsByClassName('trash')[i].addEventListener("click", 
       function(){ 

        // deleting the parent of the trash --> the entire Row 
       this.parentNode.remove();

        // acquisition of messages numbers again
        messagesCount = document.getElementsByTagName('p').length

        // updating counter
        document.getElementById('count').textContent = messagesCount
       }
      );
    };   




    
// Click on Add button    
document.getElementById('btn-add').addEventListener("click",function(){

    // Creating the main division
    var mainDiv  = document.createElement("div");
    mainDiv.className ="row-added";
    document.body.appendChild(mainDiv);

    //creating the img
    var image = document.createElement("img")
    image.className = "avatar";
    image.src = "avatar-1.jpg";
    mainDiv.appendChild(image);

    // Creating the second division containing the name and the message
    var nameMessageDiv  = document.createElement("div");
    mainDiv.appendChild(nameMessageDiv);
    nameMessageDiv.className = "content"

    // Name part
    var h6 = document.createElement('h6');
    h6.textContent = "Batman et Robin";
    nameMessageDiv.appendChild(h6);

    // Content part 

        // 1)- extracting the message value
        var newText = document.getElementById('add-message').value
        console.log(newText)
        
        // 2)- giving the message value to the new content text
        var content = document.createElement('p');
        content.textContent = newText   
        
        // 3)- going inside the nameMessageDiv
        nameMessageDiv.appendChild(content)

    // creating the trash icon
    var trash = document.createElement('img') 
    trash.src = "trash.png";
    trash.className = "trash"   
    mainDiv.appendChild(trash)

    // We need to add this click action to be able to delete the message 
    trash.addEventListener("click", 
       function(){ 

        // deleting the parent of the trash --> the entire Row 
        this.parentNode.remove();

        // Number of messages 
        var messagesCount = document.getElementsByTagName('p').length

        // updating counter
        document.getElementById('count').textContent = messagesCount

        // cleaning the input after message posted
        document.getElementById('add-message').value = ""
        
      });

    // cleaning after message posted
    document.getElementById('add-message').value = ""

    // Number of messages 
    var messagesCount = document.getElementsByTagName('p').length

    // updating counter
    document.getElementById('count').textContent = messagesCount
})

/* -------------------------------------------------------------------------------------------------------*/
