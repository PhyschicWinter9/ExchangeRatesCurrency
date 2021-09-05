 // Set endpoint and your access key
 const access_key = '';
 //const base = '';
 //const symbols = 'THB';
 //const amount = ;
 //const url = `https://api.exchangeratesapi.io/v1/convert?access_key=${ access_key }&base=${ from }&=$symbols{ to }&amount=${ amount }`;



 const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${ access_key }`;
 


document.addEventListener('DOMContentLoaded',function(){
    fetch(url)
    .catch(function(err){
        console.log('error :'+err)
    })
    .then((repose) => repose.json ())
    .then((data)=>{
       // console.log(data);
        let rate = data.rates
        //let form = data.base
        let select = document.getElementById('drop')
        //let create = document.createElement('option')
        let rates = Object.entries(rate)
        
        //console.log(rates);
        
        
        
        for (var i = 0; i < rates.length; i++) {
            var at = rates[i], base = at[0], number= at[1];
            var option = document.createElement("option");
            option.textContent = base;
            option.value = number;
            select.appendChild(option);
            };

        //change onchange > on submit when use button submit
        
        document.querySelector('form').onchange = function(){   //default setting = onchange
            var select = document.getElementById('drop');
            var exchangeRate = select.value;
            var currency = select.options[select.selectedIndex].text;
           
            
            //console.log(exchangeRate)

            document.getElementById('output').innerHTML = "1 EUR = " + exchangeRate + " " + currency;

            return false;


           


        }
    });

});