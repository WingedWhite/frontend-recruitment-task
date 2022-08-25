var ClicksNumber = 0;
document.cookie = "clicks = 0;";



function show()
{
    Overlay.style.visibility = 'visible';
    Alert.style.visibility = 'visible';
    ClicksNumber++;
    CNumber.innerText[0] = ClicksNumber;
}

function hide()
{
    Overlay.style.visibility = 'hidden';
    Alert.style.visibility = 'hidden';
}