// add functionality click event
document.addEventListener('DOMContentLoaded', () => {
    let totalList = [];
    const addBtn = document.getElementById('add_btn');
    let listContainer = document.getElementById('list-container');
    addBtn.addEventListener('click', (event) => {
        let enteredText = document.getElementById('text-field').value;
        if (enteredText.trim() === '') return; 
        //totalList.push(enteredText);
        let listItem = document.createElement('div');
        listItem.setAttribute('class', 'list-item d-flex align-items-center');
        let newRow = document.createElement('span');
        newRow.setAttribute('class', 'list');
        newRow.textContent = enteredText;
        let editRow = document.createElement('i');
        editRow.setAttribute('class', 'edit fa fa-edit');
        let deleteRow = document.createElement('i');
        deleteRow.setAttribute('class', 'material-icons ml-auto');
        deleteRow.innerHTML = 'delete';
        listItem.appendChild(newRow);
        listItem.appendChild(editRow);
        listItem.appendChild(deleteRow);
        listContainer.appendChild(listItem);
        totalList.push(enteredText);
        document.getElementById('text-field').value = '';
        deleteRow.addEventListener('click', () => {
            listContainer.removeChild(listItem);
            // Remove item from totalList if necessary
            const index = totalList.indexOf(enteredText);
            if (index > -1) {
                totalList.splice(index, 1);
            }
        });
        editRow.addEventListener('click', () => {
            newRow.contentEditable = true;
            newRow.focus();
            newRow.style.border = '1px solid #ddd'; // Optional: Add a border to indicate edit mode
        });
        newRow.addEventListener('blur', () => {
            newRow.contentEditable = false;
            newRow.style.border = 'none'; // Remove border after editing
            const index = totalList.indexOf(enteredText);
            if (index > -1) {
                totalList[index] = newRow.textContent; // Update the list with the new text
            }
        });
        // totalList.forEach((item) => {
        //     let newRow = document.createElement('div');
        //     newRow.setAttribute('class', 'list');
        //     newRow.innerHTML = item;
        //     listContainer.appendChild(newRow);
        //     let deleteRow = document.createElement('i');
        //     deleteRow.setAttribute('class','material-icons');
        //     deleteRow.innerHTML = 'delete';
        //     listContainer.appendChild(deleteRow);
        // })
        // totalList.splice(0, totalList.length);
    })
})