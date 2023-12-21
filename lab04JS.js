document.getElementById('validateButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Function to validate name and phone number
    function validateForm() {
        // Name validation: Only letters
        const nameRegex = /^[A-Za-z]+$/;
        const isNameValid = nameRegex.test(name);

        // Phone number validation: (###) ###-####
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        const isPhoneValid = phoneRegex.test(phone);

        return isNameValid && isPhoneValid;
    }

    // Function to format the phone number
    function formatPhoneNumber(phone) {
        const parts = phone.match(/^(\d{3}) (\d{3})-(\d{4})$/);
        return parts ? `${parts[1]}-${parts[2]}-${parts[3]}` : phone;
    }

    const isValid = validateForm();
    if (isValid) {
        const address = document.getElementById('address').value;
        const formattedPhone = formatPhoneNumber(phone);

        const displayResult = document.getElementById('displayResult');
        displayResult.innerHTML = `
            <p style="font-size: 24px;">Name: ${name}</p>
            <p style="font-size: 24px;">Address: ${address}</p>
            <p style="font-size: 24px;">Phone Number: ${formattedPhone}</p>
        `;
    } else {
        alert('Please enter valid name and phone number.');
    }
});

// Problem 2: 
const charCountTextarea = document.getElementById('charCountTextarea');
const charCountResult = document.getElementById('charCountResult');
const letterCountResult = document.getElementById('letterCountResult');

charCountTextarea.addEventListener('input', function () {
    const text = charCountTextarea.value;
    charCountResult.textContent = `Character Count: ${text.length}`;

    // Function to count only letters
    function countLetters(text) {
        const letterRegex = /[A-Za-z]/g;
        const letterMatches = text.match(letterRegex);
        return letterMatches ? letterMatches.length : 0;
    }

    const letterCount = countLetters(text);
    letterCountResult.textContent = `Letter Count: ${letterCount}`;
});

// Problem 3: 
function createBookmarkList() {
    const bookmarks = [
        { url: "https://www.torontomu.ca/programs/undergraduate/computer-science/", secure: true },
        { url: "http://clhs.lisp.se/", secure: false }
    ];

    const bookmarkListDiv = document.getElementById("bookmarkList");

    for (const bookmark of bookmarks) {
        const bookmarkItem = document.createElement("div");
        bookmarkItem.className = "bookmark-item";

        const icon = document.createElement("span");
        icon.className = "icon";
        if (bookmark.secure) {
            
            icon.innerHTML = '<i class="fas fa-lock" style="color: green;"></i>';

        } else {
            
            icon.innerHTML = '<i class="fas fa-lock-open" style="color: red;"></i>';
            
        }

        const link = document.createElement("a");
        link.href = bookmark.url;
        link.textContent = bookmark.url;

        bookmarkItem.appendChild(icon);
        bookmarkItem.appendChild(link);
        bookmarkListDiv.appendChild(bookmarkItem);
    }
}

createBookmarkList();