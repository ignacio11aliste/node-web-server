// toda la configuracion del servidor
const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  //para poder usar middleware se usa use
  app.use(express.static(public_path)); // contenido estatico disponible para que se use

  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });

  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};

module.exports = {
  startServer,
};
