document.addEventListener("DOMContentLoaded", function() {
    const floorSelect = document.getElementById("floor");
    const roomSelect = document.getElementById("room");

    for (let i = 3; i <= 27; i++) {
        floorSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }

    for (let i = 1; i <= 10; i++) {
        roomSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }

    document.getElementById("submit").addEventListener("click", function() {
        const tower = document.getElementById("tower").value;
        const floor = document.getElementById("floor").value;
        const room = document.getElementById("room").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const comment = document.getElementById("comment").value;

        const jsonData = {
            tower: tower,
            floor: floor,
            room: room,
            date: date,
            time: time,
            comment: comment
        };

        console.log(JSON.stringify(jsonData));
    });

    document.getElementById("reset").addEventListener("click", function() {
        document.getElementById("tower").value = "A";
        document.getElementById("floor").value = "3";
        document.getElementById("room").value = "1";
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        document.getElementById("comment").value = "";
    });
});