function ajouterNom() {
    // I get the value of the input field with id="studentInput" and store it in a variable studentName
    const studentName = document.getElementById("studentInput").value;
    // I add the name to the list of students
    // variante 1
    const studentNameElement = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    ${studentName}
    </li>
    `;
    
    // variante 2
    // const studentNameElement2 = document.createElement("li");
    // studentNameElement2.className = "list-group-item d-flex justify-content-between align-items-center";
    // studentNameElement2.innerHTML = studentName;
    
    const studentList = document.getElementById("studentList");
    
    // studentList.innerHTML = studentList.innerHTML + studentNameElement;
    studentList.innerHTML += studentNameElement;

    // I clear the input field
    document.getElementById("studentInput").value = "";    
}

// when I click on the button with id="addStudent", I call the function ajouterNom
document.getElementById("addStudent").addEventListener("click", ajouterNom);


