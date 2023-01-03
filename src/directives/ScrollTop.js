export default {
    name: 'ScrollTop',
    mounted(el, binding) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > binding.value) {
                el.classList.add('scroll');
            } else {
                el.classList.remove('scroll')
            }
        });
    },
}