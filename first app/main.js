function saveText() {
    let selectBox = document.getElementById("List");
    let selectedOption = selectBox.options[selectBox.selectedIndex];
    let newText = document.getElementById("textIn").value;
    selectedOption.text = newText;
    selectedOption.value = newText;
}