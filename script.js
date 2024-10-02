//Make sure the elements are loaded
document.addEventListener('DOMContentLoaded',()=>{
    //Select elements
    const counterValue=document.getElementById("counter-value");
    const increaseBtn=document.getElementById("increase-btn");
    const decreaseBtn=document.getElementById('decrease-btn');
    const resetBtn=document.getElementById('reset-btn');

    //Global value
    let count=0;
    //add event to the buttons
    increaseBtn.addEventListener('click',()=>{
        count++;
        //update the counter value
        updateCounter();
    });
    decreaseBtn.addEventListener('click',()=>{
        count--;
        //update the counter value
        updateCounter();
    });
    resetBtn.addEventListener('click',()=>{
        count=0;
        //update the counter value
        updateCounter();
    });

    //update counter function
    function updateCounter(){
    counterValue.textContent=count;
}   
});

