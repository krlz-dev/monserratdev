let hashLanguage = getHashValue("language") === null ? "ENGLISH" : getHashValue("language")

const contentLocalization = () => {
    if (hashLanguage === "SPANISH") {
        return spanishContentLocalization
    }

    if (hashLanguage === "ENGLISH") {
        return englishContentLocalization
    }
}

const contentMap = new Map();

const divContentChange = (id) => {
    const divContent = document.createElement("div")
    contentMap.set(id, divContent)
    divContent.innerHTML = contentLocalization()[id]

    document.getElementById(id).appendChild(divContent)
}
window.onhashchange = () => {
    hashLanguage = getHashValue("language")
    contentMap.forEach((content,id) => {
       content.innerHTML = contentLocalization()[id]
    })
}

divContentChange("aboutMeDetail")
divContentChange("aboutMe")
divContentChange("cv")


