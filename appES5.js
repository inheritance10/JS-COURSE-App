document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;


    console.log(title);
    console.log(image);
    console.log(instructor);


       
    e.preventDefault();
});