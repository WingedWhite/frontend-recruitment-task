var ClicksNumber;


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
  console.log(localStorage.getItem("numer"));
  
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