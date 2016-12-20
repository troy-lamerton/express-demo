const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('home',{
    heading: 'This is the home page',
    message: 'Render whatever into the template by passing information like this.'
  });
});

router.get('/blog', function(req, res) {
  res.render('blog', {
    heading: 'This is the blog page',
    blogTitle: 'Render whatever into the template by passing information like this.',
    blogText: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo a justo posuere molestie. ',
    'Morbi scelerisque interdum nisi ac fringilla. Donec rhoncus vehicula elit, auctor efficitur lectus auctor sed. ',
    'Pellentesque quam lacus, suscipit non varius cursus, posuere eu ipsum. Suspendisse lobortis cursus quam, nec ',
    'volutpat lorem. Nulla eu aliquam nisl. Vivamus ut tellus et elit rutrum molestie. ',
    '\n\nProin interdum odio sit amet mi viverra, ac rutrum lacus imperdiet. Duis consequat lobortis eros, id ',
    'ornare neque venenatis aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce et velit ',
    'vel velit auctor blandit. Quisque ante ligula, tempus a porttitor eu, lacinia sit amet quam. Nunc malesuada ex',
     'accumsan, aliquet nunc id, molestie velit. Mauris egestas sollicitudin nulla eu pretium. ',
     'Donec nibh turpis, mattis eu dui eu, auctor porta nulla. Proin volutpat tortor nunc, at varius nulla luctus ornare.', 
     'Sed aliquet blandit ipsum, ut eleifend mauris lacinia id. Fusce arcu metus, tempor vitae augue in, laoreet ',
     'aliquet libero. Duis placerat urna at dolor tincidunt, porttitor tempus nisl maximus. Sed felis dui, ',
     'lacinia vel cursus aliquet, tincidunt eu risus. Duis hendrerit molestie lorem, eget mattis purus tristique ',
     'eu.'].join(''),
  });
});

module.exports = router;
