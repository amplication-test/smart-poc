import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "ofek";

export const OrderTitle = (record: TOrder): string => {
  return record.ofek || String(record.id);
};
