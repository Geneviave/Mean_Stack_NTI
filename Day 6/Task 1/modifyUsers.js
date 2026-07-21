(function() {
    "use strict";
    const tableBody = document.getElementById('tableBody');
    const storageKey = 'userManagerData';
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
    function showUsers() {
        const users = getUserFromStorage()
        if (!users || users.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5">No users yet</td></tr>`
            return
        }
        let html = ''
        users.forEach((user, index) => {
            const graduated = user.isGraduated === 'Yes' || user.isGraduated === true
            const status = graduated ? 'Yes' : 'No'
            html += `
                <tr>
                    <td>${user.firstName || ''}</td>
                    <td>${user.lastName || ''}</td>
                    <td>${user.ageNum || '—'}</td>
                    <td>${status}</td>
                    <td>
                        <button class="btn-edit" data-index="${index}">Edit</button>
                        <button class="btn-delete" data-index="${index}">Delete</button>
                    </td>
                </tr>
            `
        })
        tableBody.innerHTML = html
    }
    function deleteUser(index) {
        const users = getUserFromStorage()
        const user = users[index]
        if (!user) return
        if (!window.confirm(`Delete "${user.firstName} ${user.lastName}"?`)) return
        users.splice(index, 1)
        saveUserToStorage(users)
        showUsers()
        window.alert('User deleted successfully')
    }
    function editUser(index) {
        const users = getUserFromStorage()
        const user = users[index]
        if (!user) {
            window.alert('User not found')
            return
        }
        const firstName = window.prompt('First name:', user.firstName)
        if (firstName === null || !firstName.trim()) return
        const lastName = window.prompt('Last name:', user.lastName)
        if (lastName === null || !lastName.trim()) return
        const age = window.prompt('Age:', user.ageNum)
        if (age === null) return
        if (isNaN(age) || age < 1 || age > 120) {
            window.alert('Age must be 1-120')
            return
        }
        const graduated = window.confirm('Graduated? OK = Yes, Cancel = No')
        const isGraduated = graduated ? 'Yes' : 'No'
        const duplicate = users.some((u, i) => 
            i !== index &&
            u.firstName.toLowerCase() === firstName.trim().toLowerCase() &&
            u.lastName.toLowerCase() === lastName.trim().toLowerCase()
        )
        if (duplicate) {
            window.alert('User with this name already exists')
            return
        }

        users[index] = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            ageNum: Number(age),
            isGraduated: isGraduated
        }
        saveUserToStorage(users)
        showUsers()
        window.alert('User updated successfully')
    }
    tableBody.addEventListener('click', function(e) {
        const button = e.target.closest('button')
        if (!button) return
        const index = button.getAttribute('data-index')
        if (index === null) return
        if (button.classList.contains('btn-edit')) {
            editUser(Number(index))
        } else if (button.classList.contains('btn-delete')) {
            deleteUser(Number(index))
        }
    })
    showUsers()
})()