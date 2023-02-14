const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
function playSound() {
    sound.play();
}

// btn.addEventListener("click", () => {
//     let inpWord = document.getElementById("inp-word").value;
//     fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inpWord}?key=a38eed67-a651-4dc5-81bb-140b3dc81217`)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             //console.log(data[0].fl);
//             result.innerHTML = `
//             <div class="word">
//                     <h3>${inpWord}</h3>
                    
//                 </div>
//                 <div class="details">
//                     <p>${data[0].fl}</p>
//                     <p>/${data[0].hwi.prs[0].mw}/</p>
//                 </div>
//                 <p class="word-example">
//                    ${data[0].shortdef[0]}
//                 </p>
//                 `;
            
//         })
//         .catch(() => {
//             result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
//         });
// });
