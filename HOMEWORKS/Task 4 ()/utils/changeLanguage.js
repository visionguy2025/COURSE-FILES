// HANDLE CHANGE LANGUAGE
function changeLanguage(element=false) {
    let selectLanguage = JSON.parse(localStorage.getItem('language')) || document.getElementById('languageBar_options__lang_en').textContent
    let langOption = element || false

    if(element) {
        langOption = element.id
        langOption = langOption.slice(langOption.length-2, langOption.length+1)
        if(langOption == 'en') {
            selectLanguage = element.textContent
            localStorage.setItem('language', JSON.stringify(selectLanguage))
        } else if(langOption == 'az') {
            selectLanguage = element.textContent
            localStorage.setItem('language', JSON.stringify(selectLanguage))
        } else if(langOption == 'tr') {
            selectLanguage = element.textContent
            localStorage.setItem('language', JSON.stringify(selectLanguage))
        }
    } else {
    }

    document.getElementById('languageBar_currentLanguage').textContent = selectLanguage
}
