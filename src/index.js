const app = require('./app').server;

app.listen(process.env.PORT || 4000, () => {
  console.log('App running on port', process.env.PORT || 4000);
});
