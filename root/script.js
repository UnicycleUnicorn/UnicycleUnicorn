const sections = document.getElementsByClassName('main-section');
const projects = document.getElementsByClassName("project")
const style = document.documentElement.style;
const projectRadios = document.getElementsByClassName("projSelector");

function hide(element) {
    element.classList.add("hidden");
}

function unhide(element) {
    element.classList.remove("hidden");
}

function projectSelected() {
    swapProject(getCheckedProjectIndex());
}

function projectUp() {
    let index = getCheckedProjectIndex() - 1;
    if (index < 0) {
        index = projectRadios.length - 1;
    }
    projectRadios[index].checked = true;
    swapProject(index);
}

function swapProject(index) {
    for (let i = 0 ; i < projects.length ; i ++) {
        let element = projects[i];
        if (i == index) {
            unhide(element);
        } else {
            hide(element);
        }
    }
}

function projectDown() {
    let index = getCheckedProjectIndex() + 1;
    if (index >= projectRadios.length) {
        index = 0;
    }
    projectRadios[index].checked = true;
    swapProject(index);
}

function getCheckedProjectIndex() {
    let index;

    for (let i = 0; i < projectRadios.length; i++) {
        if (projectRadios[i].checked) {
            index = i;
            break;
        }
    }
    return index;
}

function swapSection(swap) {
    for (let i = 0 ; i < sections.length ; i ++) {
        let element = sections[i];
        if (element.id == swap) {
            unhide(element);
        } else {
            hide(element);
        }
    }
}

function changeColor(variable) {
    style.setProperty("--" + variable.name, variable.value);
}

window.onload = function() {
    let colors = document.getElementById('colors');
    let element = document.documentElement;
    let computedStyles = window.getComputedStyle(element);
    let customs = ['backgroundBottomRight', 'backgroundTopLeft', 'headerBackColor', 'nameTextColor', 'hamburgerTextColor', 'hamburgerHoverTextColor', 'optionTextColor', 'optionHoverTextColor', 'optionBackColor', 'optionHoverBackColor', 'footerColor', 'footerTextColor', 'footerTextHoverColor'];
    
    for (let i = 0 ; i < customs.length ; i ++) {
        let newColorLi = document.createElement("li");
        let newColorInput = document.createElement("input");
        let newColorLabel = document.createElement("label");
        
        newColorInput.type = 'color';
        newColorInput.name = customs[i];
        newColorInput.addEventListener("input", function() {changeColor(this)});
        newColorInput.value = computedStyles.getPropertyValue("--" + customs[i]).trim();

        newColorLabel.for = customs[i];
        let name = customs[i].replace(/([a-z])([A-Z])/g, '$1 $2');
        newColorLabel.textContent = name[0].toUpperCase() + name.substr(1);
        
        newColorLi.appendChild(newColorInput);
        newColorLi.appendChild(newColorLabel);
        colors.appendChild(newColorLi);        
    }
};
