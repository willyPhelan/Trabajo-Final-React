export default class Service {

    static async getUsers() {
      return await fetch("https://fakestoreapi.com/users").then((res) =>
        res.json()
      ) 
    }
  
    static async getProducts() {
      return await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      )
    }
  
    static async getUserCarts(userId) {
      const url = "https://fakestoreapi.com/carts/user/" + userId;
      return await fetch(url).then((res) => res.json())
    }
  
    static async getSingleProduct(productId) {
      const url = "https://fakestoreapi.com/products/" + productId;
      const res = await fetch(url)
      return await res.json()
    }
  }
  