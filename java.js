const calTemp = () => {
    const inputtemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('tempdiff');
    const valuetemp = tempdiff.options[tempSelected.selectedIndex].value;

    const ctf = (cel) => {
        let fahrenheit = ((cel * 9/5) + 32).toFixed(1);
        return fahrenheit;
    }

    const ftc = (fah) => {
        let celsius = ((fah - 32) * 5/9).toFixed(1);
        return celsius;
    }
    if(valuetemp == 'cel')
    {
        document.getElementById("result").innerHTML = ctf(inputtemp) + "&#176; Fahrenheit";
    }
    else
    {
        document.getElementById("result").innerHTML = ftc(inputtemp) + "&#176; Celsius";
    }
}