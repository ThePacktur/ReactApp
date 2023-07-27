import { User } from "../Interfaces/IForm";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./FirebaseApp";





export const registrarUser = async(p:User)=>{
    
    
    const docRef = await addDoc(collection(db, "user"), p)

}

export const obtenerUsuario = async()=>{
  const querySnapshot = await getDocs(collection(db, "user));
  console.log("CHAOOO")
  console.log(querySnapshot)
  var <user:User></user:User>[] = []
  querySnapshot.forEach((d)=>{
      console.log(d.id)
      console.log(d.data())
      var p:User = {
          nombre:d.data().nombre,
          apellido:d.data().apellido,
          edad:parseInt(d.data().edad),
          idUsuario:d.id
      } 
      user.push(p)
  })
  return user
}
export const obtenerUsuario = async(idUsuario:string)=>{
  const docRef = doc(db, "user", idUsuario);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      const p:User = {
          nombre:docSnap.data().nombre,
          apellido:docSnap.data().apellido,
          edad:docSnap.data().edad,
          idUsuario:docSnap.id
      }
      return p
  } else {
  // docSnap.data() will be undefined in this case
      return undefined
  }
}
export const actualizarUsuario = async(idUsuario:string,p:User)=>{
  const docRef = doc(db, "user", idUsuario);

// Set the "capital" field of the city 'DC'
  await updateDoc(docRef, {...p});
}
export const eliminarUsuario = async(idUsuario:string)=>{
  await deleteDoc(doc(db, "user", idUsuario));
}