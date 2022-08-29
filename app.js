// const mainHeader = document.querySelector('h1')
// mainHeader.addEventListener('mouseover', function(){
    //     mainHeader.textContent = "Build an AR App"
    // })
    // mainHeader.addEventListener('mouseout', function(){
        //     mainHeader.textContent = "Learn ARKit"
        // })
        
        
        // document.body.addEventListener('click', function () {
        //     console.log('The document body was clicked');
        // });
        
        // document.addEventListener('click', function () {
        //     console.log('The document was clicked');
        //  });

        const link = document.querySelector('#my-classroom');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Wow! We didn't navigate to a new page!");
});