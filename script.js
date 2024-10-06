
const cardContent = [
    `Banteay Srei is a 10th-century Cambodian temple dedicated to the Hindu god Shiva and Parvati. This temple is renowned for its intricate carvings and is considered one of the finest examples of Khmer art.`,
    `This temple was consecrated on 22 April 967 A.D., and its construction is credited to courtiers named Vishnukumara and Yajnavaraha. It serves as a symbol of dedication and devotion to Hindu deities.`
];
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const card = button.parentElement; 
        const demo = card.querySelector('.demo'); 
        
        const isShown = demo.style.display === 'block';

        if (isShown) {
           
            demo.style.display = 'none';
            button.textContent = 'Read more';
        } else {
           
            demo.innerHTML = cardContent[index]; 
            demo.style.display = 'block'; 
            button.textContent = 'Hide';
        }
    });
});
