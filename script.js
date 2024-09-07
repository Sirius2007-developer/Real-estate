const themes = {
    light: {
        "--body-bg": "white",
        "--button-background": "#025595",
        "--text-color": "#16100D",
        "--button-text": "white",
        "--nav-header-bg": "#EFF8FF",
        "--header-card-bg": "#fff",
    },
    dark: {
        "--body-bg": "black",
        "--button-background": "#025595",
        "--text-color": "#ffffff",
        "--button-text": "White",
        "--nav-header-bg": "#000",
        "--header-card-bg": "#000"
    },
}

const btnTheme = document.querySelector('.btn-theme')
btnTheme.addEventListener('click', selectTheme);

function selectTheme() {
    if(btnTheme.classList.contains('light')){
        btnTheme.classList.remove('light');
        btnTheme.classList.add('dark');
        btnTheme.setAttribute('data-theme', 'dark');
        btnTheme.innerHTML = "Dark"
    }
    else{
        btnTheme.classList.remove('dark');
        btnTheme.classList.add('light');
        btnTheme.setAttribute('data-theme', 'light');
        btnTheme.innerHTML = "Light"
    }
    const themeAttr = btnTheme.getAttribute('data-theme');
    const themeObj = themes[themeAttr];
    let themeStr = ''
    for(let prop in themeObj){
        themeStr += `${prop}: ${themeObj[prop]};`;
    }
    document.documentElement.style = themeStr;
}
