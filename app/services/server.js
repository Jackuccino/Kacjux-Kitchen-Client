const apiFinishOrder = "http://96.41.173.63:8080/api/orders/finish-order/";
const apiGetOrders = "http://96.41.173.63:8080/api/orders/";
const apiGetItem = "http://96.41.173.63:8080/api/items/";

exports.finishOrder = id => {
  return $.ajax({
    method: "PATCH",
    url: apiFinishOrder + id
  });
};

exports.getOrders = () => {
  return $.ajax({
    method: "GET",
    url: apiGetOrders
  });
};

exports.getItem = id => {
  return $.ajax({
    method: "GET",
    url: apiGetItem + id
  });
};
