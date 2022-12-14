import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqtJFH6JYmA2tIvmGD2tHzYbh4C2NxLVk",
  authDomain: "proyecto-react-raul-chang.firebaseapp.com",
  projectId: "proyecto-react-raul-chang",
  storageBucket: "proyecto-react-raul-chang.appspot.com",
  messagingSenderId: "977778288737",
  appId: "1:977778288737:web:83078076f6741532c86220"
};

const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp); 

export function testDatabase() {
  console.log(FirebaseApp);
}

export async function getSingleItemFromAPI(id) {

  const docRef = doc(DB, "products", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {

    return {
      ...docSnap.data(),
      id: docSnap.id,
    };
  } else {
    console.error("El producto no existe");
  }
}

export async function getItemsFromAPI() {
  try {
    const collectionProducts = collection(DB, "products");

    let respuesta = await getDocs(collectionProducts);

    const products = respuesta.docs.map((docu) => {
      return {
        ...docu.data(),
        id: docu.id,
      };
    });

    return products;
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsFromAPIByCategory(categoryId) {
  const productsRef = collection(DB, "products");
  const myQuery = query(productsRef, where("category", "==", categoryId));

  const productsSnap = await getDocs(myQuery);

  const products = productsSnap.docs.map((docu) => {
    return {
      ...docu.data(),
      id: docu.id,
    };
  });

  return products;
}

export async function createBuyOrderFirestore(buyOrderData) {
  const collectionRef = collection(DB, "buyorders");
  const docRef = await addDoc(collectionRef, buyOrderData);

  return docRef.id;
}

export async function createBuyOrderFirestoreWithStock(buyOrderData) {
  const collectionProductsRef = collection(DB, "products");
  const collectionOrdersRef = collection(DB, "buyorders");
  const batch = writeBatch(DB);

  let arrayIds = buyOrderData.items.map((item) => {   
    return item.id;
  });
  
  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));

  let productsSnapshot = await getDocs(q);

  productsSnapshot.docs.forEach((doc) => {
    let stockActual = doc.data().stock;
    let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
    let stockActualizado = stockActual - itemInCart.count;

    batch.update(doc.ref, { stock: stockActualizado });
  });
  
  const docOrderRef = doc(collectionOrdersRef);  
  batch.set(docOrderRef, buyOrderData );

  batch.commit();

  return docOrderRef.id
}

export async function getBuyOrder(id) {

  const docRef = doc(DB, "buyorders", id);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {

    return {
      ...docSnap.data(),
      id: docSnap.id,
    };
  } else {
    console.error("La orden de compra no existe no existe");
  }
}

async function exportItemsToFirestore() {
  const items = [  
    {
      id: 1,
      title: "Monitor ASUS 21.5 Full HD 1ms HDMI VGA VP228HE-J",
      description: "High Quality monitor for all types of content",
      price: 48350,
      stock: 22,
      category: "asus",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27034_Monitor_ASUS_21.5__Full_HD_1ms_HDMI_VGA_VP228HE-J_a797ab9e-grn.jpg",
     
    },
    {
      id: 2,
      title: "Monitor ASUS 24 VA24EHE-J Full HD",
      description: "High Quality monitor for all types of content",
      price: 56000,
      stock: 18,
      category: "asus",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33878_Monitor_ASUS_24__VA24EHE-J_Full_HD_ac877e59-grn.jpg",
    },
    {
      id: 3,
      title: "Monitor ASUS 27 Full HD HDMI VGA VA27EHE-J",
      description: "High Quality monitor for all types of content",
      price: 65350,
      stock: 20,
      category: "asus",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33822_Monitor_ASUS_27__Full_HD_HDMI_VGA_VA27EHE-J_8b229ce8-grn.jpg",
    },
    {
      id: 4,
      title: "Monitor Gamer ASUS 27 GAMING VG278QR 165Hz FHD",
      description: "Gaming monitor for the most demanding content",
      price: 97850,
      stock: 25,
      category: "asus",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26090_Monitor_Gamer_ASUS_27__GAMING_VG278QR_165Hz_FHD_70fa7fe5-grn.jpg",
    },
    {
      id: 5,
      title: "Monitor Gamer ASUS 49 GAMING VG27VQ 165Hz FHD",
      description: "Gaming monitor for the most demanding content",
      price: 160000,
      stock: 16,
      category: "asus",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34429_Monitor_Gamer_ASUS_27__GAMING_VG27VQ_165Hz_FHD_7a81513c-grn.jpg",
    },
    {
      id: 6,
      title: "Monitor LG 20 20MK400H-B VGA HDMI",
      description: "High Quality monitor for all types of content",
      price: 42000,
      stock: 14,
      category: "lg",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13768_Monitor_LG_20__20MK400H-B_VGA_HDMI_bce7a72d-grn.jpg",
    },
    {
      id: 7,
      title: "Monitor LG 22'' 22MP410-B HDMI",
      description: "High Quality monitor for all types of content",
      price: 52700,
      stock: 12,
      category: "lg",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32680_Monitor_LG_22___22MP410-B_HDMI_727724cb-grn.jpg",
    },
    {
      id: 8,
      title: "Monitor LG LED 24 24MP400-B HDMI5",
      description: "High Quality monitor for all types of content",
      price: 54700,
      stock: 28,
      category: "lg",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33043_Monitor_LG_LED_24___24MP400-B_HDMI5_d0cb670b-grn.jpg",
    },
    {
      id: 9,
      title: "Monitor LG 26 26WQ500-B UltraWide 21:9",
      description: "High Quality monitor for all types of content",
      price: 72100,
      stock: 19,
      category: "lg",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16040_Monitor_LG_24__24MK600M_IPS_Full_HD_Bordes_Ultra_Finos_a7b8df97-grn.jpg",
    },
    {
      id: 10,
      title: "Monitor LG 32 32MN500M-B Full HD IPS FreeSync",
      description: "High Quality monitor for all types of content",
      price: 107250,
      stock: 21,
      category: "lg",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19489_Monitor_LG_32__32MN500M-B_Full_HD_IPS_FreeSync_b9da8229-grn.jpg",
    },
    {
      id: 11,
      title: "Monitor Samsung 19 A330N HDMI",
      description: "High Quality monitor for all types of content",
      price: 40200,
      stock: 15,
      category: "samsung",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33534_Monitor_Samsung_19__A330N_HDMI_825ccd95-grn.jpg",
    },
    {
      id: 12,
      title: "Monitor Samsung 22 T350H FHD IPS 75Hz",
      description: "High Quality monitor for all types of content",
      price: 48400,
      stock: 22,
      category: "samsung",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25643_Monitor_Samsung_22__T350H_FHD_IPS_75Hz_a062b781-grn.jpg",
    },
    {
      id: 13,
      title: "Monitor Samsung 24 T350 75Hz IPS FHD FreeSync",
      description: "High Quality monitor for all types of content",
      price: 52500,
      stock: 11,
      category: "samsung",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8720_Monitor_Samsung_24___Curvo_F390_3a4722ad-grn.jpg",
    },
    {
      id: 14,
      title: "Monitor Samsung 27 T350H FHD IPS 75Hz",
      description: "High Quality monitor for all types of content",
      price: 63200,
      stock: 25,
      category: "samsung",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33800_Monitor_Samsung_27__AM500_SMART_WIFI_Bluetooth_76c14512-grn.jpg",
    },
    {
      id: 15,
      title: "Monitor Gamer Samsung 27 G3 Odyssey Full HD 144Hz",
      description: "High Quality monitor for all types of content",
      price: 90800,
      stock: 15,
      category: "samsung",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32204_Monitor_Samsung_Curvo_32__T550_75Hz_cc1e3540-grn.jpg",
    },
    {
      id: 16,
      title: "Monitor Gamer ViewSonic 24 VX2458-MHD 144Hz Full HD",
      description: "High Quality monitor for all types of content",
      price: 71100,
      stock: 26,
      category: "viewsonic",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12580_Monitor_Gamer_ViewSonic_24__VX2458-MHD_144Hz_Full_HD_26d76fa8-grn.jpg",
    },
    {
      id: 17,
      title: "Monitor Gamer Viewsonic 25 XG2530 240Hz FreeSync3",
      description: "High Quality monitor for all types of content",
      price: 138400,
      stock: 18,
      category: "viewsonic",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9147_Monitor_Gamer_Viewsonic_25__XG2530_240Hz_FreeSync3_7d3df810-grn.jpg",
    },
    {
      id: 18,
      title: "Monitor Gamer Viewsonic 27 VX2768-PC-MHD Curvo 165Hz 1 Ms",
      description: "High Quality monitor for all types of content",
      price: 91000,
      stock: 9,
      category: "viewsonic",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22745_Monitor_Gamer_Viewsonic_27__VX2768-PC-MHD_Curvo_165Hz_1_Ms_598085b4-grn.jpg",
    },
    {
      id: 19,
      title: "Monitor Gamer Curvo Viewsonic 27 VX2768 2K 144Hz ",
      description: "High Quality monitor for all types of content",
      price: 118500,
      stock: 17,
      category: "viewsonic",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22304_Monitor_Gamer_ViewSonic_27__XG2705_144Hz_IPS_1ms_591022ad-grn.jpg",
    },
    {
      id: 20,
      title: "Monitor Viewsonic 32 Elite 240Hz 1Ms",
      description: "High Quality monitor for all types of content",
      price: 185000,
      stock: 24,
      category: "viewsonic",
      image: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22739_Monitor_Viewsonic_27__Elite_XG270_240Hz_1Ms_80bab1ec-grn.jpg",
    },
  ];
  const collectionRef = collection(DB, "products");

  /* for of */
  for (let item of items) {
    item.index = item.id;
    delete item.id;
    const docRef = await addDoc(collectionRef, item);
    console.log("Document created with ID", docRef.id);
  }
}


