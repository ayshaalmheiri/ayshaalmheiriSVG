var fins1 = document.getElementsByClassName("cls-1");
var isPink= [0,0,0,0,0];

for (let i = 0; i < fins1.length; i++) {
    fins1[i].addEventListener('click', () => {
        if (isPink[4] == 0){
            fins1[i].style.fill = '#003b70';
            isPink[4] = 1;
        }
        else{
            fins1[i].style.fill = '#6585b9';
            isPink[4] = 0;
        }

    });
} 
