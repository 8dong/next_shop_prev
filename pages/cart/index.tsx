import { useState, useContext } from 'react';

import CartHeader from '../../components/pages/cart/CartHeader';
import CartProductItemList from '../../components/pages/cart/CartProductItemList';
import CartStateContext from '../../store/CartStateContext';
import CartDispatchContext from '../../store/CartDispatchContext';

import type { Product } from '../../data/productsItem';

const Cart = () => {
  const cartList = useContext(CartStateContext)!;
  const [selectedProducts, setSelectedProducts] = useState(cartList);

  const { editCartList } = useContext(CartDispatchContext)!;

  const allSelectHandler = () => {
    setSelectedProducts([...cartList]);
  };

  const removeCartHandler = (target: 'selected' | 'product', removedProduct?: Product) => {
    return () => {
      let newCartList: Product[] = [];
      let newSelectedProducts: Product[] = [];

      if (target === 'selected') {
        newCartList = cartList.filter((cartProduct) => {
          return !selectedProducts.some((selectedProduct) => selectedProduct.id === cartProduct.id);
        });
      } else if (target === 'product' && removedProduct) {
        newCartList = cartList.filter((cartproduct) => {
          return cartproduct.id !== removedProduct.id;
        });

        newSelectedProducts = selectedProducts.filter(
          (selectedProduct) => selectedProduct.id !== removedProduct.id
        );
      }

      editCartList(newCartList);
      setSelectedProducts(newSelectedProducts);
    };
  };

  const isSelectedValid = (productId: string) => {
    return selectedProducts.some((selectedProduct) => selectedProduct.id === productId);
  };

  const selectHandler = (product: Product) => {
    return () => {
      const isSelected = isSelectedValid(product.id);
      let newSelectedProducts;

      if (isSelected) {
        newSelectedProducts = selectedProducts.filter(
          (selectedProduct) => selectedProduct.id !== product.id
        );
      } else {
        newSelectedProducts = [...selectedProducts, product];
      }

      setSelectedProducts(newSelectedProducts);
    };
  };

  return (
    <>
      <CartHeader allSelectHandler={allSelectHandler} removeCartHandler={removeCartHandler} />
      <CartProductItemList
        isSelectedValid={isSelectedValid}
        selectHandler={selectHandler}
        removeCartHandler={removeCartHandler}
      />
    </>
  );
};

export default Cart;
