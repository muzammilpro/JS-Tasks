        // Morse code dictionary
        var morseCode = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
            'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
            'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
            'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
            '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
        };

        // Function to translate text to Morse code
        function translateText() {
            var textInput = document.getElementById("textInput").value.toUpperCase();
            var translatedText = '';

            for (var i = 0; i < textInput.length; i++) {
                var character = textInput[i];
                if (morseCode.hasOwnProperty(character)) {
                    translatedText += morseCode[character] + ' ';
                } else {
                    translatedText += character + ' ';
                }
            }

            document.getElementById("output").innerHTML = translatedText;
        }