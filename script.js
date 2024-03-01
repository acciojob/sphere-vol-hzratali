function volume_sphere() {
    //Write your code here
	event.preventDefault(); // Prevent the default form submission behavior
    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById('radius').value;
    // Convert the radius input to a floating-point number
    const radius = parseFloat(radiusInput);
    // Check if the input is a valid number and non-negative
    if (!isNaN(radius) && radius >= 0) {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        // Display the calculated volume in the output field rounded to four decimal places
        document.getElementById('volume').value = volume.toFixed(4);
    } else {
        // Display 'NaN' for invalid input
        document.getElementById('volume').value = 'NaN';
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
