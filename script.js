// Select elements and play music on load
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const message3 = document.getElementById('message3');
const bigQuestion = document.getElementById('bigQuestion');
const questionButtons = document.getElementById('questionButtons');
const responseDiv = document.getElementById('response');
const heartContainer = document.getElementById('heartContainer');
const bgMusic = document.getElementById('bgMusic');

// Play music when the page loads
// window.onload = function() {
//     bgMusic.play(); // Play romantic background music
//     createHearts(); // Start heart animation
// };
document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById('bgMusic');

    // Try to play the music automatically
    bgMusic.play().catch(() => {
        // If the autoplay is blocked, show a button to start the music
        const musicPrompt = document.createElement('div');
        musicPrompt.innerHTML = `<p>Click to enable sound 🎶</p>`;
        musicPrompt.style.position = 'absolute';
        musicPrompt.style.top = '50%';
        musicPrompt.style.left = '50%';
        musicPrompt.style.transform = 'translate(-50%, -50%)';
        musicPrompt.style.backgroundColor = '#ff99c8';
        musicPrompt.style.padding = '10px';
        musicPrompt.style.borderRadius = '10px';
        musicPrompt.style.color = '#fff';
        musicPrompt.style.cursor = 'pointer';
        musicPrompt.style.zIndex = '1000';
        document.body.appendChild(musicPrompt);

        // Start the music when the user clicks
        musicPrompt.addEventListener('click', () => {
            bgMusic.play();
            musicPrompt.remove(); // Remove the prompt after interaction
        });
    });
});

// Function to fade out and in between messages
function fadeOutAndIn(currentMessage, nextMessage) {
    currentMessage.classList.remove('fade-in');
    setTimeout(() => {
        currentMessage.style.display = 'none'; // Hide current message
        nextMessage.style.display = 'block';  // Show next message
        setTimeout(() => {
            nextMessage.classList.add('fade-in');  // Fade in the next message
        }, 10);
    }, 800);  // Wait for fade-out transition to finish
}

// Message click events
message1.addEventListener('click', () => {
    fadeOutAndIn(message1, message2);
});
message2.addEventListener('click', () => {
    fadeOutAndIn(message2, message3);
});
message3.addEventListener('click', () => {
    fadeOutAndIn(message3, bigQuestion);
    setTimeout(() => {
        questionButtons.style.display = 'block';  // Show the buttons after question
        questionButtons.classList.add('fade-in');
    }, 1000);
});

// Select the image element
const gemPicture = document.getElementById('gemPicture');

// Button click logic for Yes and No
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
    responseDiv.textContent = 'I Love you, Gem!💖';
    responseDiv.style.color = '#ff5d8f';
    startConfetti(); // Start confetti animation
    setTimeout(showHeartTransition, 5000); // Show heart transition after confetti end
    setTimeout(() => {
        gemPicture.classList.remove('hidden');
        gemPicture.classList.add('show');
    }, 15000); // 15 seconds delay
});

noBtn.addEventListener('click', () => {
    responseDiv.textContent = 'I Really Love You Baby Girl 💕';
    responseDiv.style.color = '#6495ED';
    startConfetti(); // Start confetti animation
    setTimeout(showHeartTransition, 5000); // Show heart transition after confetti ends
    setTimeout(() => {
        gemPicture.classList.remove('hidden');
        gemPicture.classList.add('show');
    }, 15000); // 15 seconds delay
});

// Function to create floating hearts
function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random speed

        // Append heart to container
        heartContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 5000); // Hearts last 5 seconds
    }, 300); // A new heart appears every 300ms
}

// Confetti animation
function startConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 150; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = Math.random() * 100 + 'vw'; // Random position
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration
        confettiPiece.style.backgroundColor = getRandomColor(); // Random color
        confettiContainer.appendChild(confettiPiece);
    }

    // Remove confetti after 5 seconds
    setTimeout(() => {
        confettiContainer.remove();
    }, 5000); // Confetti lasts 5 seconds
}

// Random color generator for confetti
function getRandomColor() {
    const colors = ['#ff99c8', '#7209b7', '#4cc9f0', '#ff5d8f', '#ff99c8'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Heart transition after confetti
function showHeartTransition() {
    const largeHeart = document.createElement('div');
    largeHeart.classList.add('heart-large');
    document.body.appendChild(largeHeart);

    // Trigger the heart growth transition
    setTimeout(() => {
        largeHeart.classList.add('heart-show');
    }, 100);

    // Show a final message after the heart grows
    setTimeout(() => {
        const finalMessage = document.createElement('p');
        finalMessage.textContent = "I'm so happy you're mine! 💖 Wait... Hope this wasn't too much";
        finalMessage.style.fontSize = '1.5rem';
        finalMessage.style.color = '#191970';
        finalMessage.style.textAlign = 'center';
        document.body.appendChild(finalMessage);

        // Remove the heart after showing the message
        setTimeout(() => {
            largeHeart.remove();
        }, 3000); // Heart lasts for 3 seconds
    }, 2000); // Display the message 2 seconds after heart grows
}
