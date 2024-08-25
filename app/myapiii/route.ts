import myproducts from "../mydb/mydata";

export const GET = () => {
  return new Response(JSON.stringify(myproducts) )
};
