const axios = require('axios');

// Esta función obtiene un posteo específico de la API de JSONPlaceholder.
const obtenerPosteo = async (postID) => {
   try {
      const URL = `https://jsonplaceholder.typicode.com/posts/${postID}`;

      const post = (await axios(URL)).data;

      return post;
   } catch (err) {
      if (err.response) console.error(err.response.status, err.response.data);
      else console.error(err.message);
      return null;
   }
};

obtenerPosteo(1).then((post) => console.log(post)); // 200 + { object Post 1 }
obtenerPosteo('Lorem Ipsum').then((post) => console.log(post)); // 404 + null

module.exports = obtenerPosteo;
