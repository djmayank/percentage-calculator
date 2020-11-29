document.querySelector('.result').addEventListener('click',function(){
    var sub1 = document.querySelector('#subject1').value;

    var sub2 = document.querySelector('#subject2').value;

    var sub3 = document.querySelector('#subject3').value;

    var sub4 = document.querySelector('#subject4').value;

    var sub5 = document.querySelector('#subject5').value;
    
    var total = sub1 - (- sub2) - (- sub3) - (- sub4) - (- sub5);
    
    var percent = (total/500)*100;
    
    document.getElementById('totalt').value= total;
    document.getElementById('percentage').value= percent;
    
    //console.log(total);
    
});