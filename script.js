// --- Download Functionality ---

// Get the download button element from the DOM
const downloadButton = document.getElementById('downloadBtn');

// Add a click event listener to the button
downloadButton.addEventListener('click', () => {
    // Define the name of the file to be downloaded.
    const fileName = 'Krishnaraj_Singh_Bais_New_CV.pdf';
    const filePath = './pdf/' + fileName; // Assuming the file is in the same directory

    // Create a temporary anchor (<a>) element to trigger the download
    const link = document.createElement('a');

    // Set the href attribute to the path of the file
    link.href = filePath;

    // Set the download attribute to force download
    link.download = fileName;

    // Append link to body (required in some browsers)
    document.body.appendChild(link);

    // Trigger download
    link.click();

    // Remove temporary link
    document.body.removeChild(link);
});
