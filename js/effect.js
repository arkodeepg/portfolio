let words = ['fornt end developer', 'ui/ux developer', 'python developer'];

let count = 0;
let index = 0;

(function typing() {
    if (count === words.length) {
        count = 0;
    }
    document.getElementById("print").innerHTML = words[count].slice(0, ++index);

    if (index === words[count].length) {
        count++;
        index = 0;
    }

    setTimeout(typing, 400);

})();

//document.getElementById("print").innerHTML = "hello worlds";    