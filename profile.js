document.addEventListener('DOMContentLoaded', function() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const editProfileSection = document.getElementById('editProfile');
    const profileInfoSection = document.querySelector('.profile-info');

    // Show the edit profile section when the edit button is clicked
    editProfileBtn.addEventListener('click', function() {
        editProfileSection.style.display = 'block';
        profileInfoSection.style.display = 'none';
    });

    // Save changes and update the profile information
    saveProfileBtn.addEventListener('click', function() {
        const userName = document.getElementById('editName').value;
        const userContact = document.getElementById('editContact').value;
        const emergencyContact = document.getElementById('editEmergencyContact').value;

        // Update the profile information
        document.getElementById('userName').textContent = userName;
        document.getElementById('userContact').textContent = userContact;
        document.getElementById('emergencyContact').textContent = emergencyContact;

        // Hide the edit profile section and show the profile info
        editProfileSection.style.display = 'none';
        profileInfoSection.style.display = 'block';
    });

    // Cancel editing and hide the edit profile section
    cancelEditBtn.addEventListener('click', function() {
        editProfileSection.style.display = 'none';
        profileInfoSection.style.display = 'block';
    });
});