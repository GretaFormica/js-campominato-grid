//on load
const griglia = document.getElementById("grid");
generagriglia(griglia);

//funzioni

function generagriglia(grid) {
    for (let i = 0; i < 100; i++) {

        const box = document.createElement("div");
        box.classList.add("square");

        box.addEventListener(
            'click',

            function () {
                this.classList.toggle("active")
            }
        )

        grid.append(box);
    }
}