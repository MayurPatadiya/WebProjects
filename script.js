const input = document.getElementById("items");
const listbox = document.getElementById("listBox");

input.addEventListener("keyup", (event) => {
    if (input.value == "") return;
    if (event.key == "Enter") {
        addTask(input.value);
        input.value = "";
        saveData();
    }
});

const addTask = (item) => {
    let listitem = document.createElement("li");
    listitem.innerHTML = `
        ${item}
        <span>\u00d7</span>
    `;
    listbox.appendChild(listitem);
}
listbox.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("data", listbox.innerHTML);
};
const getData = () => {
    listbox.innerHTML = localStorage.getItem("data");
};
getData();