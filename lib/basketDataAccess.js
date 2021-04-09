import ProductData from "../data/products.json";
import AWS from "aws-sdk";

let endpoint;
if (process.env.NODE_ENV === "development"){
  endpoint = "http://localhost:8000"
} else {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_MYAPP,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_MYAPP,
    region: "eu-west-1",
  });
}

const service = new AWS.DynamoDB({
  endpoint,
  region: "eu-west-1"
});

const client = new AWS.DynamoDB.DocumentClient({
  service
});
const TableName = "MyBasket";

export const getBasketProducts = async () => {
  const { Items } = await client.scan({
    TableName,
    Select: "ALL_ATTRIBUTES"
  }).promise();

  return Items.map(item => {
    const productDetails = ProductData.find(pd => pd.id === item.ProductID);
    return {...productDetails, qty: item.qty};
  });
};

export const addToBasket = (product) => {
  return client.update({
    TableName,
    Key: {
      ProductID: product.id
    },
    UpdateExpression: "ADD qty :qty",
    ExpressionAttributeValues: {
      ":qty": 1
    }
  }).promise();
};

export const removeFromBasket = async (productId) => {
  return client.delete({
    TableName,
    Key: {
      ProductID: productId
    }
  }).promise();
};

export const updateProductQty = async (productId, qty) => {
  return client.update({
    TableName,
    Key: {
      ProductID: productId
    },
    UpdateExpression: "set qty = :qty",
    ExpressionAttributeValues: {
      ":qty": qty
    }
  }).promise();
};
