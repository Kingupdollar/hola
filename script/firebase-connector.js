
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "AIzaSyAEMxX5UXEd3fzojfiyWrhPXu5vb7qC2Ps",
        authDomain: "beyond-perfect-learning-tool.firebaseapp.com",
        databaseURL: "https://beyond-perfect-learning-tool-default-rtdb.firebaseio.com",
        projectId: "beyond-perfect-learning-tool",
        storageBucket: "beyond-perfect-learning-tool.appspot.com",
        messagingSenderId: "1001127952321",
        appId: "1:1001127952321:web:9ca643a8488d1158bcf940",
        measurementId: "G-KSGYMQN4K4"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      let myFlashcards = [ 
        {
          "question": "Name this species of bird.",
          "image" : "images/barn-owl-2550068__340.webp",
          "answer": "Barn Owl"
        },
        {
          "question": "Name this species of bird.",
          "image" : "images/dove-2516641__340.webp",
          "answer": "Dove"
        },
        {
          "question": "Name this species of bird.",
          "image" : "images/hummingbird-2139279__340.webp",
          "answer": "Hummingbird"
        }
      ];
      
      
      //store
      let dbLocation = firebase.database().ref('deck/flashcards'); 
      dbLocation.set(myFlashcards);  
      
      
      //update
      let updateQ = {
        question: "hahaha",
        answer: "hehehe"
      }
      db.ref('deck/flashcards/0').update(updateQ)
      
      
      //retrieve
      let fc = firebase.database().ref('deck/flashcards');
      let jsonString;
      fc.on("value", function(retrieve) {
        let queryData = retrieve.val();
        jsonString = JSON.stringify(queryData);
      });
      console.log (' JSON string:' + jsonString )
      
