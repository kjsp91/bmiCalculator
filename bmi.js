cont = true
while(cont){
    weight = parseFloat(prompt("Enter Your weight in kg"))
    height = parseFloat(prompt("Enter Your height in cm"))
    bmi = weight/((height/100)**2)
    if(bmi<18.5){
        msg = "You are underweighted person"
    }
    else if(bmi<24.9){
        msg = "You are Healthy person"
    }
    else if(bmi<29.9){
        msg = "You are overweight person"
    }
    else{
        msg = "You are obese"
    } 
    alert(msg);
    ans = prompt("Do You Want To Continue ? yes or no")
    console.log(ans)
    if(ans=='yes'){
        cont = true
    }
    else{
       cont = false
    }
}