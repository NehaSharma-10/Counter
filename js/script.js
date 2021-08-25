let count = 0;
const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const style = e.currentTarget.classList;
        // console.log(style);
        if (style.contains('increase')) {
            count++;
        } else if (style.contains('decrease')) {
            count--;
        } else if (style.contains('reset')) {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "white";
        }

        value.textContent = count;
    })
})