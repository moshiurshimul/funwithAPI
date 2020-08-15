function doSomething() {
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    document.getElementById('activity').innerText = data.activity;
})
}
doSomething();

setInterval(() => {
    doSomething(); 
},10000);