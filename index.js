<html>
  <head>
  <p id="demo" style="text-align:center;"></p>
<p id="demo1" style="text-align:center;"></p>
<script>
    document.getElementById("demo").innerHTML="DEVELOPMENTS UNDER DEPARTMENT";
  document.getElementById("demo1").innerHTML="Projects under Departments. Full Project that contains objectives and main objective.";
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
