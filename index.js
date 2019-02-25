

var counter = 0;
function takeANumber(line) {
 
  line.push(counter);
  return `Welcome, you are number ${counter}.`;
  counter++;
}

function nowServing(line) {
 
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let firstPerson = line.shift();
    return `Currently serving ${firstPerson}.`;
  }
  
}

function currentLine(line) {
  let str = "The line is currently";
  
  if (line.length === 0) {
    return str + " empty.";
  } else {
    str += ": ";
    for (let i = 0; i < line.length; i++) {
      str += `${i+1}. ${line[i]}`;
      if (i !== line.length - 1) {
        str += ", ";
      }
    }
    return str;
  }
  
}