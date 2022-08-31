function tabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('selecttab')
    if (Number(num.value)<1 || num.value.length == 0){
        window.alert('Por favor digite um número inteiro positivo!')
    } else {                    
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c<=10){            
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}