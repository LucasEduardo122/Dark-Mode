const toogle = document.querySelector('input#switch');
const html = document.querySelector('html');

const getStyles = (element, style) => 
    window.getComputedStyle(element).getPropertyValue(style)


const initialColors = {
    bg: getStyles(html, "--bg"),
    bgPanel: getStyles(html, "--bg-panel"),
    colorHeadings: getStyles(html, "--color-headings"),
    colorText: getStyles(html, "--color-text")
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF" ,
    colorText:  "#B5B5B5"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key])
    });
}


toogle.addEventListener('change', ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
});