
function bookService() {
    localStorage.setItem('selectedService', 'Preventive Maintenance');
    location.assign('booking.html');
} //muskan will provide the link to me


// Go back to the previous page that is my services page 
function goBack() {
    location.assign('services.html');
}
