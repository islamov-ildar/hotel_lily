import {initializeApp} from "firebase/app";

import {child, get, getDatabase, ref, set} from "firebase/database";
import { getStorage, ref as storageRef, listAll } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket

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
    console.log('getAll', snapshot, snapshot.val());
    return snapshot.exists() ? snapshot.val() : '"No data available"';
}

export async function writeAllData(allData) {
    console.log('writeAllData')
    const db = getDatabase();
    set(ref(db, 'allData'), allData).then(res => console.log(res))
        .catch(err => console.log(err));
}

const storage = getStorage();

console.log('getStorage', storage)

//
// // Create a storage reference from our storage service
const storageRef0 = storageRef(storage);
const storageRef1 = storageRef(storage, 'aboutCarousel/1.jpg');

console.log('storageRef1', storageRef1)

// storageRef0.listAll().then(res => console.log('listAll', res));

//
// const imagesRef = ref(storage, 'aboutCarousel');
//
// console.log('storageRef', storageRef)
// console.log('imagesRef', imagesRef)

const listRef = storageRef(storage, 'aboutCarousel');

listAll(listRef)
    .then((res) => {
        console.log('listAll', res)

        res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
            // All the items under listRef.
            console.log('item: ', itemRef)
            // itemRef.getDownloadURL().then(url => console.log('url', url))
        });
    }).catch((error) => {
    // Uh-oh, an error occurred!
});