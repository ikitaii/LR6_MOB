document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.setting-header').forEach(function (header) {
        header.addEventListener('click', function () {
            this.parentElement.classList.toggle('open');
        });
    });

    document.querySelectorAll('.toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});
