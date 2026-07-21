(function(){
    "use strict"
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const ageInput = document.getElementById('age');
    const graduatedSelect = document.getElementById('isGraduated');
    const form = document.getElementById('userForm');
    const storageKey = "userManagerData"
    function getUserFromStorage(){
        try{
            const user = localStorage.getItem(storageKey)
            return user ? JSON.parse(user) : []
        }catch(error){
            console.warn("Failed to parse local storage" , error)
            return []
        }
    }
    function saveUserToStorage(users){
        localStorage.setItem(storageKey, JSON.stringify(users))
    }
    function addUserFromForm(){
        const firstName = fnameInput.value.trim()
        const lastName = lnameInput.value.trim()
        const ageRaw = ageInput.value.trim()
        const isGraduated = graduatedSelect.value
        if (!firstName || !lastName) {
            window.alert('First name and last name are required.');
            return false;
        }
       if (ageRaw === '') {
            window.alert('Please enter an age.');
            return false;
        }
       const ageNum = Number(ageRaw)        
        if (!Number.isInteger(ageNum) || ageNum < 1 || ageNum > 120) {
            alert('Age must be a number between 1 and 120.');
            return false;
        }
        const users = getUserFromStorage();        
        const duplicate = users.some(u => 
            u.firstName.toLowerCase() === firstName.toLowerCase() && 
            u.lastName.toLowerCase() === lastName.toLowerCase()
        )
        if (duplicate) {
            window.alert('User already exists!');
            return false;
        }
        const newUser = {firstName, lastName, ageNum, isGraduated }
        users.push(newUser)
        saveUserToStorage(users)
        form.reset();
        fnameInput.focus();
        const addBtn = document.getElementById('addUser-btn');
        const originalText = addBtn.innerHTML;
        addBtn.innerHTML = '<i class="fas fa-check-circle"></i> ADDED!';
        setTimeout(() => {
            addBtn.innerHTML = originalText;
        }, 1500);
        return true;
    }
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        const isValid = addUserFromForm();
        if (!isValid) {
            return false;
        }
        return false;
    })
    console.log("User added successfully.")
})()