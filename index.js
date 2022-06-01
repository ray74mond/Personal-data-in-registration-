<html>
  <head>
  <p id="demo"></p>
<script>
    document.getElementById("demo").innerHTML="Developments under Departments";
</script>
</html>
















let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.listen(port);
