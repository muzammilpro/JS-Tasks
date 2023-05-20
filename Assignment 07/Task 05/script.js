        // Game state
        var playerLocation = "start";
        var inventory = [];

        // Function to process user input
        function processInput() {
            var input = document.getElementById("input").value.toLowerCase();
            var output = document.getElementById("output");

            // Game logic
            switch (playerLocation) {
                case "start":
                    if (input === "look around") {
                        output.innerHTML += "<p>You are in a dark room. There is a door to the north.</p>";
                    } else if (input === "open door") {
                        output.innerHTML += "<p>You open the door and enter a new room.</p>";
                        playerLocation = "room2";
                    } else {
                        output.innerHTML += "<p>I don't understand that command.</p>";
                    }
                    break;
                case "room2":
                    if (input === "look around") {
                        output.innerHTML += "<p>You are in a bright room. There is a key on the table.</p>";
                    } else if (input === "take key") {
                        output.innerHTML += "<p>You take the key.</p>";
                        inventory.push("key");
                    } else if (input === "use key" && inventory.includes("key")) {
                        output.innerHTML += "<p>You use the key to unlock a secret door.</p>";
                        playerLocation = "secret";
                    } else {
                        output.innerHTML += "<p>I don't understand that command.</p>";
                    }
                    break;
                case "secret":
                    output.innerHTML += "<p>Congratulations! You found the secret room!</p>";
                    break;
            }

            // Clear input field
            document.getElementById("input").value = "";
        }