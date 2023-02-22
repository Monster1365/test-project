document.addEventListener("DOMContentLoaded",
    function(e) {
        let nameEditButton = document.querySelector("#nameEditButton")
        let editName = document.querySelector("#editNameField")
        let newName = document.querySelector("#newName")
        let okButton = document.querySelector("#okButton")
        let nameHere = document.querySelector("#nameHere")

        nameEditButton.addEventListener("click",
            function(e) {
                editName.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )

        okButton.addEventListener("click",
            function(e) {
                nameHere.textContent = newName.value
                editName.style.display = "none"
                nameEditButton.style.display = "inline"
            }
        )
        const para = document.querySelector('p');

        para.addEventListener('click', updateName);

        function updateName() {
         const name = prompt('Enter a new name');
        para.textContent = `Player 1: ${name}`;
        }
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);

    }
)
