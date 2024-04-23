document.getElementById('container').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    let Rollno = document.getElementById('rollno').value
    let name = document.getElementById('studentName').value;
    let Section = document.getElementById('section').value;
    let Batch = document.getElementById('batch').value;

    // Store data in session storage
    sessionStorage.setItem('studentName', name);
    sessionStorage.setItem('stud', age);
    sessionStorage.setItem('studentCourse', course);

    // Optional: Confirm data has been saved
    alert('Student details saved in session storage!');
});

