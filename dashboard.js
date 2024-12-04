const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

document.getElementById('updateStatusBtn').addEventListener('click', function() {
    const newStatus = prompt("Enter your new safety status (Safe/Not Safe):");
    if (newStatus) {
        document.getElementById('status').innerText = newStatus;
        alert('Safety status updated to: ' + newStatus);
    }
});

document.getElementById('checkInBtn').addEventListener('click', function() {
    alert('Check-in successful!');
    // Here you would typically send the check-in status to your server
});

document.getElementById('submitCodeBtn').addEventListener('click', function() {
    const checkInCode = document.getElementById('checkInCode').value.trim();
    const messageElement = document.getElementById('message');

    if (checkInCode === "") {
        messageElement.innerText = "Please enter a valid check-in code.";
        messageElement.style.color = "red";
    } else {
        // Here you would typically send the check-in code to your server
        messageElement.innerText = "Check-in code submitted successfully: " + checkInCode;
        messageElement.style.color = "green";
        
        // Clear the input field
        document.getElementById('checkInCode').value = "";
    }
});

/*communication*/
document.addEventListener('DOMContentLoaded', function() {
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    sendMessageBtn.addEventListener('click', function() {
        const messageText = messageInput.value.trim();

        if (messageText === "") {
            alert("Please enter a message before sending.");
            return;
        }

        // Create a new message element
        const messageElement = document.createElement('p');
        messageElement.textContent = messageText;

        // Append the new message to the messages container
        messagesContainer.appendChild(messageElement);

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom of the messages container
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });

    // Optional: Allow sending messages with the Enter key
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessageBtn.click();
        }
    });
});
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
