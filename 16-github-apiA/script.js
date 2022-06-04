const nameInput = document.querySelector(`#nameInput`);
const findButton = document.querySelector(`#submitButton`);
const infoTemplate = document.querySelector(`#conactTemplate`).innerHTML;
const userInfoDiv = document.querySelector(`.userInfoDiv`);
const gitRequest = " https://api.github.com/users/{{AlyonaLn}}";


findButton.addEventListener(`click`, onFindButtonClick);

function onFindButtonClick(e) {
    e.preventDefault()

    const name = nameInput.value;

    if (!name) {
        return alert(`Empty input`)
    }

    getGitUser(name)
    .then((user) => {
        renderUser(user);
        clearForm();
    })
    .catch((e)=> {
      alert(e.massage);
    }) 

}

function getGitUser(name){
    const url = getUserUrl(name);

    return fetch(url)
        .then((res) => {
            if(res.oK){
                return res.json();
            }
        throw new Error(`Пользователь с именем '${name}' не найден`);
        });
}


function getUserUrl(userName){
    return gitRequest.replace("{{AlyonaLn}}",  userName)
}

function renderUser(info) {
    const infoHtml = infoTemplate
    .replace("{{src}}", info.avatar_url)
    .replace("{{srreposc}}", `Repos: ${info.public_repos}`)
    .replace("{{followers}}", `Followers: ${info.followers}`)
    .replace("{{following}}", `Following: ${info.following}`);

    userInfoDiv.insertAdjacentHTML(`afterbegin`, infoHtml);
}

function clearForm() {
    nameInput.value = ``
}