var ClicksNumber;

if(localStorage.getItem("numer") !== undefined)
{
  ClicksNumber = localStorage.getItem("numer");
  localStorage.removeItem("numer");
  
}
else
{
  ClicksNumber = 0;
}

function show()
{
  Overlay.style.visibility = 'visible';
  Alert.style.visibility = 'visible';
  ClicksNumber++;
  CNumber.innerText = ClicksNumber + " Clicks";
  if(ClicksNumber>=5)
  {
    Reset.style.visibility = 'visible';
  }
  localStorage.setItem("numer",ClicksNumber);
}

function hide()
{
  Overlay.style.visibility = 'hidden';
  Alert.style.visibility = 'hidden';
  Reset.style.visibility = 'hidden';
}

function reset()
{
  ClicksNumber = 0;
  CNumber.innerText = ClicksNumber + " Clicks";
  Reset.style.visibility = 'hidden';
}

document.onclose = function()
{
  localStorage.setItem("numer",ClicksNumber);
}

location.reload = document.onclose;