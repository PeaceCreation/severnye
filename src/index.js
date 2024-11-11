import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.min';
import './sass/main.scss';
// import './sass/main.scss';


const date = new Date().getFullYear();

const year = document.getElementById('year').innerHTML = date;