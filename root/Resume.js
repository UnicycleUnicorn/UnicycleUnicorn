function changeDark() {
    var style = document.documentElement.style;
    style.setProperty('--background_color','#fbfbfb');
    style.setProperty('--background_image','linear-gradient(to bottom right, #ffffff, #f1f1f1)');

    style.setProperty('--header_text_color',"lightgray");
    style.setProperty('--sub_header_text_color',"black");
    style.setProperty('--content_text_color',"darkslategray");

    style.setProperty('--url_highlight_color','white');

    style.setProperty('--accent_color','darkred');
    style.setProperty('--sub_accent_color','rgb(102, 4, 4)');

    style.setProperty('--icon_color_filter','brightness(0%)');

    var darkModeImage = document.getElementsByName("dark_light_mode_image")[0];
    darkModeImage.setAttribute('title','Dark Mode');
    darkModeImage.setAttribute('onClick','changeLight()');
    darkModeImage.setAttribute('src','root/Moon_icon.png');
}

function changeLight() {
    var style = document.documentElement.style;
    style.setProperty('--background_color','#151010');
    style.setProperty('--background_image','linear-gradient(to bottom right, #101010, #1b1313)');

    style.setProperty('--header_text_color',"white");
    style.setProperty('--sub_header_text_color',"rgb(191, 196, 203)");
    style.setProperty('--content_text_color',"slategray");

    style.setProperty('--url_highlight_color','blue');

    style.setProperty('--accent_color','darkslateblue');
    style.setProperty('--sub_accent_color','rgb(48, 42, 87)');

    style.setProperty('--icon_color_filter','brightness(0%) invert(100%)');

    var darkModeImage = document.getElementsByName("dark_light_mode_image")[0];
    darkModeImage.setAttribute('title','Light Mode');
    darkModeImage.setAttribute('onClick','changeDark()');
    darkModeImage.setAttribute('src','root/Sun_icon.png');
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    });
}