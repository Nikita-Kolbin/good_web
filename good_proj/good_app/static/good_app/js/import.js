const addTextInput = ()=>{
    document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const textArea = document.getElementById("inputField");
    fileInput.addEventListener("change", ()=> {
        var file = fileInput.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                textArea.value = e.target.result;
            };
            reader.readAsText(file);
        }
    });
});
};
export {addTextInput}