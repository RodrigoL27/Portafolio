document.addEventListener('DOMContentLoaded', function () {
 
    const buttons = document.querySelectorAll('nav button');


    const sections = document.querySelectorAll('.section');

   
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target'); 
            const targetSection = document.getElementById(targetId); 

            if (targetSection) {
             
                sections.forEach(section => {
                    section.classList.add('hidden');
                });

              
                targetSection.classList.remove('hidden');

           
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'     
                });
            }
        });
    });

    document.getElementById('home').classList.remove('hidden');
});