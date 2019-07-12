function mash(){
    let mash = ("you will live in a "
      + getHome()+ 
      ", and you will have " 
      + getChildCount() 
      + " kids!"
      + " You will drive a " 
      + getCar()
      + ", and you will earn "
      + salary()
      + ", and you will die at the age of "
      + age()
      + ", and you will be a "
      + career()
      );
    console.log(mash);
}
mash();

function getHome(){
    const arr = ["Mansion", 
    "Apartment", 
    "Shack", 
    "House",
    "hospital",
    "Prison"
];
    let x = Math.random();
    let times = x * 4;
    let final = Math.floor(times);
    let index = arr[final];
    return(index);
}
// getHome();

function getChildCount(){
    let number = Math.random();
    let rand =  number * 100;
    let final = Math.floor(rand);
    return(final);
}
// getChildCount();

function getCar(){
    let car = ["Lexus", 
    "Rock", 
    "Clown Car", 
    "Monster Truck"];
    let number = Math.random();
    let rand = number * 4;
    let final = Math.floor(rand);
    let index = car[final];
    return(index);
}
//getCar();

function salary(){
    let salary = [
    "$0.12", 
    "$50,000", 
    "$38.15", 
    "100,000,000"];
    let number = Math.random();
    let rand = number * 4;
    let final = Math.floor(rand);
    let index = salary[final];
    return(index);
}

function age(){
    let age = [
    "22", 
    "3", 
    "80", 
    "1020"];
    let number = Math.random();
    let rand = number * 4
    let final = Math.floor(rand);
    let index = age[final];
    return(index);
}

function career(){
    let career = [
    "Hitman", 
    "Pipe Cleaner", 
    "unemployed",
    "waitor",
    "Evil Bussiness Man"];
    let number = Math.random();
    let rand = number * 5
    let final = Math.floor(rand);
    let index = career[final];
    return(index);
}