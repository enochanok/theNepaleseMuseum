// function passwordValidation(password){
//     var isCorrect = true;
//     if (password.length < 8){
//         alert('Password length need to be greater than seven');
//         isCorrect = false;
//     }
//     if (!/[a-z]/.test(password)){
//         alert('Password needs atleast one lowercase character');
//         isCorrect = false;
//     }
//     if (!/[A-Z]/.test(password)) {
//         alert('Password needs atleast one uppercase character');
//         isCorrect = false;
//     }
//     if (!/[0-9]/.test(password)) {
//         alert('Password needs atleast one digit.');
//         isCorrect = false;
//     }
//     return isCorrect;
// }
//
// function login(){
//     event.preventDefault();
//         if (passwordValidation()){
//             window.location.href = "adminPanelAmenities.html";
//         }else{
//             console.log('false');
//         }
// }