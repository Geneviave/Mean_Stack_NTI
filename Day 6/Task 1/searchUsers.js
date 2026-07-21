(function() {
    "use strict";
    const searchNameInput = document.getElementById('searchName');
    const searchGraduatedSelect = document.getElementById('searchGraduated');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
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
    function showUsers(users) {
        if (!users || users.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="4">No users found</td></tr>`
            return;
        }
        let html = ''
        users.forEach(user => {
            const graduated = user.isGraduated === 'Yes' || user.isGraduated === true
            const status = graduated ? 'Yes' : 'No'
            html += `
                <tr>
                    <td>${user.firstName || ''}</td>
                    <td>${user.lastName || ''}</td>
                    <td>${user.ageNum || '—'}</td>
                    <td>${status}</td>
                </tr>
            `
        })
        tableBody.innerHTML = html;
    }
    function search() {
        const users = getUserFromStorage()
        const name = searchNameInput.value.trim().toLowerCase()
        const graduated = searchGraduatedSelect.value
        let result = users;
        if (name) {
            result = result.filter(user => 
                user.firstName.toLowerCase().includes(name) ||
                user.lastName.toLowerCase().includes(name)
            )
        }
        if (graduated !== 'all') {
            result = result.filter(user => user.isGraduated === graduated)
        }
        showUsers(result)
    }
    function clearFilter() {
        searchNameInput.value = ''
        searchGraduatedSelect.value = 'all'
        showUsers(getUserFromStorage())
    }
    searchBtn.addEventListener('click', search)
    clearBtn.addEventListener('click', clearFilter)
    showUsers(getUserFromStorage())
})()