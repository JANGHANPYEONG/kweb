function work() {
    var arr_chance = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
    var num_level = 0;
    var num_attempts = 0;
    var gaugebar = document.getElementById("gauge-bar");
    var currentlevelElement = document.getElementById("current-level");
    var attemptsElement = document.getElementById("attempts");
    var startBtn = document.getElementById("start-btn");
    startBtn.addEventListener("click", tryLevelUp);

    function getRandomBinaryResult(rate) {
        return Math.random() * 100 < rate;
    }

    function tryLevelUp() {
        num_attempts++;

        if (num_level < 10) {
            if (getRandomBinaryResult(arr_chance[num_level])) {
                num_level++;
                currentlevelElement.textContent = num_level;
            }
            gaugebar.style.width = ((num_level / 10) * 300) + "px";
        }
        attemptsElement.textContent = num_attempts;
    }
}

work();