document.getElementById('dropdown').addEventListener('click', function () {
    var content = document.getElementById('dropdown-content');
    var icon = document.getElementById('dropdown-icon');

    content.classList.toggle('show');

    if (icon.classList.contains('rotate')) {
        icon.classList.remove('rotate');
        icon.classList.add('rotate-back');
    } else {
        icon.classList.remove('rotate-back');
        icon.classList.add('rotate');
    }
});