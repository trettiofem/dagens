// We define the colors again. See main.css
// (global)
const COLOR_RED = "rgb(219, 22, 47)";
const COLOR_YELLOW = "rgb(252, 186, 4)";

const PLAN_URL = "/plan.json";

const c = new Controller();
c.load();

document.getElementById("bruh").addEventListener("click", () => {
    c.alertTest();
});