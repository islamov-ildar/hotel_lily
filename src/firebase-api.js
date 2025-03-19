import {initializeApp} from "firebase/app";

import {child, get, getDatabase, ref, set} from "firebase/database";
// import { getStorage, getDownloadURL , ref as storageRef, listAll } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBYgrhIcJ_P4fy5XiOheGF9j0_S-7SyNlo",
    authDomain: "hotel-lily.firebaseapp.com",
    projectId: "hotel-lily",
    storageBucket: "hotel-lily.appspot.com",
    messagingSenderId: "946929350279",
    appId: "1:946929350279:web:800bda296c1b8c64302a22",
    measurementId: "G-D1Y61TJEJ6",
    databaseURL: "https://hotel-lily-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

const dbRef = ref(getDatabase());

export const getAll = async () => {
    const snapshot = await get(child(dbRef, 'allData'));
    return snapshot.exists() ? snapshot.val() : '"No data available"';
}

export async function writeAllData(allData) {
    const db = getDatabase();
    set(ref(db, 'allData'), allData).then(res => console.log(res))
        .catch(err => console.log(err));
}

// const storage = getStorage();
//
// const listRef = storageRef(storage, 'icons');
//
// listAll(listRef)
//     .then((res) => {
//
//         res.items.forEach((itemRef) => {
//             getDownloadURL(itemRef).then((res) => {console.log(res)})
//         });
//     }).catch((error) => {});



