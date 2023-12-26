const createDownloadButtons = ()=>{
    const downloadButtons = document.querySelectorAll(".download-button");
    downloadButtons.forEach((downloadButton)=>{
        const textArea = downloadButton.parentNode.parentNode.querySelector('.input-textaera')
        downloadButton.addEventListener("click", ()=> {
            // Получаем содержимое textarea
            var content = textArea.value;
    
            // Создаем Blob с текстовым содержимым
            var blob = new Blob([content], { type: "text/plain" });
    
            // Создаем ссылку для скачивания
            var link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "file.txt";
    
            // Добавляем ссылку на страницу и эмулируем клик для скачивания
            document.body.appendChild(link);
            link.click();
    
            // Удаляем ссылку из DOM
            document.body.removeChild(link);
        });
    });
}
const addDownloadButtons = ()=> document.addEventListener("DOMContentLoaded", createDownloadButtons);

export {addDownloadButtons, createDownloadButtons};
