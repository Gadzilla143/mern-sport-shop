import React from 'react';

import { formatPrice } from '../../utils/format';
import { PurchaseContent } from './styles';

const Purchase = ({ purchaseData }) => {
  const { order, buyer } = purchaseData;

  return (
    <PurchaseContent>
      {!(order === undefined || buyer === undefined) && (
        <>
          <h1>Покупка проведена успешно!</h1>
          <h2>Детали запроса ниже:</h2>
          <h3>Клиент: <strong>{`${buyer.name} ${buyer.last_name}`}</strong></h3>
          <h4>Товар: </h4>
          <ul>
            {order.map(product => (
              <li key={product.product_id}>
                <p>
                  <strong>Вещь: </strong>
                  {`${product.title}, Quantidade: ${product.amount}`}
                </p>
                <p><strong>Итого:</strong>{formatPrice(product.subtotal)}</p>
                <hr></hr>
              </li>
            ))}
          </ul>
        </>
      )}
    </PurchaseContent>
  );
};

export default Purchase;
