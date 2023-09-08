//creating variables
let todo=[]
let total=0
let completed=0
let left=0

//Add function defination and create ele
add=()=>
{
    let task=document.getElementById('textinput');
    let date=document.getElementById('dateinput');

    let tasks={
        taskname:task.value,
        duedate:date.value
    }
    todo.push(tasks)
    
    total++;
    document.getElementById('total').innerText=total

    document.getElementById('left').innerText=total


    const card = document.getElementById('card');
    const cards=document.createElement('div')
    cards.id='deletename';
    card.appendChild(cards)
  

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'myCheckbox';
    checkbox.onclick = comp;

    // Create the text
    const text = document.createElement('h1');
    text.className = 'text';
    text.innerHTML = task.value ;

    // Create the flex-card container
    const flexCard = document.createElement('div');
    flexCard.className = 'flex-card';
    flexCard.appendChild(checkbox);
    flexCard.appendChild(text);

    // Create the datetime
    const datetime = document.createElement('h3');
    datetime.className = 'datetime';
    datetime.innerHTML = date.value + '<div onclick="func()">🗑️</div>';

    // Append the flex-card and datetime to the cards container
    cards.appendChild(flexCard);
    cards.appendChild(datetime);
}

//Delete
function func(){

  const divToRemove = document.getElementById('deletename');

if (divToRemove) {
    divToRemove.remove(); // This removes the div from the DOM
}

// completed--;
left--;
total--;
document.getElementById('total').innerText=total
// document.getElementById('Completed').innerText=completed
document.getElementById('left').innerText=total
}



//To Calculate


function comp() {
    
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    
    completed = 0;
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        completed++;
      }
    });

    document.getElementById('Completed').innerText = completed;
    document.getElementById('left').innerText = total-completed;
  }

  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', comp);
  });

document.getElementById('total').innerText=total
document.getElementById('Completed').innerText=completed
document.getElementById('left').innerText=left