// 1. Change the background color of the body to black when the checkbox is checked
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('click').addEventListener('change', () => {
        document.body.classList.toggle('black-background', this.checked);
        document.querySelector('.wishes').classList.toggle('outside', this.checked);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const clickCheckbox = document.getElementById('click');
    const birthdayGift = document.querySelector('.birthday-gift');

    clickCheckbox.addEventListener('change', function () {
        if (this.checked) {
            birthdayGift.classList.add('clicked');
        } else {
            birthdayGift.classList.remove('clicked');
        }
    });
});
