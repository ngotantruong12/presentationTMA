async  function getJSONAsync() {

        // The await keyword saves us from having to write a .then() block.
        let json = await axios.get('https://tutorialzine.com/misc/files/example.json');

        // The result of the GET request is available in the json variable.
        // We return it just like in a regular synchronous function.
        return json;
    }

    getJSONAsync().then( function(result) {
      // Do something with result.
  });