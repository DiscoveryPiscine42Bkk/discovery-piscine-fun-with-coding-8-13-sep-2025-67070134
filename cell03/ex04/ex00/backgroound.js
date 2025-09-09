function random_bg_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        $("body").css("background", bgColor);
        return bgColor;
}

$(document).ready(function() {
    $("button").click(function() {
        random_bg_color();
    });

    random_bg_color();
});