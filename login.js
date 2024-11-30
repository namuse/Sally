document.addEventListener('DOMContentLoaded', () => {
    let wrapper = document.querySelector('.wrapper'),
        signUpLink = document.querySelector('.link .signup-link'),
        signInLink = document.querySelector('.link .signin-link');

    signUpLink.addEventListener('click', () => {
            wrapper.classList.remove('animated-signin');
            wrapper.classList.add('animated-signup');
            
        });

    signInLink.addEventListener('click', () => {
        wrapper.classList.remove('animated-signup');
        wrapper.classList.add('animated-signin');
    });
});
