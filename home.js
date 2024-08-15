import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"
import { auth , db } from "./config.js"
import { collection, addDoc , getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"; 


const logout = document.querySelector('#logout')
const div = document.querySelector('#div')

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);    
      
      getData()

      logout.addEventListener('click' , ()=> {
        signOut(auth).then(() => {
            console.log('logout successfully');
            window.location = 'index.html'    
          }).catch((error) => {
            console.log(error);
            
          });
      })

    } else {
        window.location = 'index.html'
    }
  });

 


 async function getData() {
  const arr = []
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
    arr.push(doc.data())  
  });
  console.log(arr);
  div.innerHTML = '';
  arr.forEach((item) => {
    div.innerHTML += `
    <h2>Title: ${item.title}</h2>
    <p>Description: ${item.description}</p>
    `
  })
  title.value = ''
  description.value = ''
}


  const form = document.querySelector("#form")
  const title = document.querySelector("#title")
  const description = document.querySelector("#description")
 

  form.addEventListener('submit' , async (event) => {
    event.preventDefault()
    // console.log(title.value);
    // console.log(description.value);
    
  
    try {
      const docRef = await addDoc(collection(db, "users"), {
        title: title.value,
        description: description.value,
        uid: auth.currentUser.uid,
      });
      console.log("Document written with ID: ", docRef.id);
      getData()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })

 
