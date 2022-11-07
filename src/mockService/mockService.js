import products from "../data/products";

  const itemsDB = products


export default function getItemsFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsDB);
    }, 500);
  });
}

export function getSingleItemFromAPI(idParams) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      let itemRequested = itemsDB.find((item) => item.id === Number(idParams));
            
      if (itemRequested) {
        resolve(itemRequested);
      } else {
        reject(new Error("El item no existe."));
      }
    }, 500);
  });
}

export function getItemsFromAPIByCategory(categoryid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let itemsRequested = itemsDB.filter(
        (item) => item.category === categoryid
      );
      console.log(itemsRequested)
      resolve(itemsRequested);
    }, 500);
  });
}