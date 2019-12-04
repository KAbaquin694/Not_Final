var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Final Project' });
});

// router.get('/', function(req, res, next) {
// res.render('index', { poke: sylveon });
// });

// function sylveon() {
//   fetch('https://pokeapi.co/api/v2/pokemon/sylveon/')
//   .then( res  => res.json() )
//   .then(
//       data => {
//           const{...img} = data.sprites;
//           console.log( img.front_default );
//           selector = document.querySelector('.pokemon');
//           pokeIMG = `<img src="${img.front_default}">`;
//           selector.innerHTML = pokeIMG;
//       }
//   );
// }

module.exports = router;
