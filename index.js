const paraGraphs = document.querySelectorAll('#para');
const openBtns = document.querySelectorAll('#openBtn');
const cardContain = document.getElementById('card');

openBtns.forEach((openBtn, index) => {
    openBtn.addEventListener('click', () => {
        const paraGraph = paraGraphs[index];  // Get the corresponding paragraph

        if (openBtn.src.includes('icon-plus.svg')) {
            paraGraph.classList.add('show');
            openBtn.src = './assets/images/icon-minus.svg';
        } else {
            paraGraph.classList.remove('show');
            openBtn.src = './assets/images/icon-plus.svg';
        }
    });
});
