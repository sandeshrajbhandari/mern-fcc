import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;
let restaurants;

export default class RestaurantsDAO {
  static async injectDB(conn) {
    if (restaurants) {
      return; // if restaurants connection is made by try return.
    }
    try {
      //make connections
      restaurants = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("restaurants");
      //collection("retaurants') is the entry inside collection in mongodb atlas cluster)
      //sample_restaurants.restaurants sample_restaurantsis colletion.
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`
      );
    }
  }

  static async getRestaurants({
    filters = null,
    page = 0,
    restaurantsPerPage = 20,
  } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      } else if ("cuisine" in filters) {
        query = { cuisine: { $eq: filters["cuisine"] } };
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } };
      }
    }
    //now the query for the given filter is set
    let cursor;
    //find all restaurants with the query passed just before.,
    try {
      cursor = await restaurants.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }

    cons display
  }
}
