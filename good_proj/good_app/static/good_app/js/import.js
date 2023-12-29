const addTextInput = ()=>{
    document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");

    const textArea = document.querySelector(".input-textaera");
    fileInput.addEventListener("change", ()=> {
        var file = fileInput.files[0];

        if (file) {
            var reader = new FileReader();
            reader.addEventListener('load',(e)=> {
                console.log(e.target);
                textArea.value = e.target.result;
            });
            reader.readAsText(file);
        }
    });
});
};
export {addTextInput}