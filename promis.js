// // if (window.Promise) {
// //     console.log('Promise found');
  
// //     var promise = new Promise(function(resolve, reject) {
// //       var request = new XMLHttpRequest();
  
// //       request.open('GET', 'http://api.icndb.com/jokes/random');
// //       request.onload = function() {
// //         if (request.status == 200) {
// //           resolve(request.response); // we got data here, so resolve the Promise
// //         } else {
// //           reject(Error(request.statusText)); // status is not 200 OK, so reject
// //         }
// //       };
  
// //       request.onerror = function() {
// //         reject(Error('Error fetching data.')); // error occurred, reject the  Promise
// //       };
  
// //       request.send(); //send the request
// //     });
  
// //     console.log('Asynchronous request made.');
  







// //     promise.then(function(data) {
// //       console.log('Got data! Promise fulfilled.');
// //       document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value.joke;
// //     }, function(error) {
// //       console.log('Promise rejected.');
// //       console.log(error.message);
// //     });
// //   } else {
// //     console.log('Promise not available');
// //   }
  

// // var promise = new Promise(function(resolve, reject){
// //    //resolve("success");
// //   reject("failure")
// // })

// // promise
// //   .then(function(aa){
// //       console.log(aa)
// //   })
// //   .catch(function(err){
// //     console.log(err)
// //   })

// let money = 2000
// const duthahoBuysCake = cakeType => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (money > 1000) {
//         resolve(cakeType)
//       } else {
//         reject('không đủ tiền')
//       }
//     }, 1000)
//     console.log("2222222")
//   })
// }


// const promise = duthahoBuysCake('bánh sinh nhật')
// promise
//   .then(function(aa){
//       console.log(aa)
//   })
//   .catch(function(err){
//     console.log(err)
//   })


// routes/router.js

router.post('/login', (req, res, next) => {
  db.query(
    `SELECT * FROM users WHERE username = ${db.escape(req.body.username)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }

      if (!result.length) {
        return res.status(401).send({
          msg: 'Username or password is incorrect!'
        });
      }

      // check password
      bcrypt.compare(
        req.body.password,
        result[0]['password'],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }

          if (bResult) {
            const token = jwt.sign({
                username: result[0].username,
                userId: result[0].id
              },
              'SECRETKEY', {
                expiresIn: '7d'
              }
            );

            db.query(
              `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
            );
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'Username or password is incorrect!'
          });
        }
      );
    }
  );
});