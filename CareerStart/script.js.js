// Handle Resume Upload
document.getElementById('resume-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from actually submitting
  const fileInput = document.getElementById('resume-file');
  const messageDiv = document.getElementById('resume-message');

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    // In a real application, you would upload the file to a server here.
    messageDiv.textContent = `Resume "${file.name}" uploaded successfully!`;
    messageDiv.classList.add('success'); // You might want to add a success class for styling
  } else {
    messageDiv.textContent = 'Please select a resume to upload.';
    messageDiv.classList.add('error'); // You might want to add an error class for styling
  }
});

// Handle Certificate Upload (similar to resume upload)
document.getElementById('certificate-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    const fileInput = document.getElementById('certificate-file');
    const messageDiv = document.getElementById('certificate-message');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // In a real application, you would upload the file to a server here.
        messageDiv.textContent = `Certificate "${file.name}" uploaded successfully!`;
        messageDiv.classList.add('success'); // You might want to add a success class for styling
    } else {
        messageDiv.textContent = 'Please select a certificate to upload.';
        messageDiv.classList.add('error'); // You might want to add an error class for styling
    }
});

// Handle Contact Form Submission (basic example)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const messageDiv = document.getElementById('contact-message');

  // In a real application, you would send this data to a server.
  messageDiv.textContent = `Thank you, ${name}! Your message has been received.`;
  messageDiv.classList.add('success');
});