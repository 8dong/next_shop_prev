import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartHeader from '../../components/pages/cart/CartHeader';
import CartProductItemList from '../../components/pages/cart/CartProductItemList';
import cartStateSlice from '../../store/redux/cartStateSlice';
// import CartStateContext from '../../store/context/CartStateContext';
// import CartDispatchContext from '../../store/context/CartDispatchContext';

import type { Product } from '../../data/productsItem';
import PaymentSection from '../../components/pages/cart/PaymentSection';
import { RootState } from '../../store/redux/store';

const Cart = () => {
  const cartList = useSelector((store: RootState) => store.cart.cartList);
  const dispatch = useDispatch();

  // const cartList = useContext(CartStateContext)!;
  const [selectedProducts, setSelectedProducts] = useState(cartList);

  // const { editCartList } = useContext(CartDispatchContext)!;

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

      // editCartList(newCartList);
      dispatch(cartStateSlice.actions.editCartList({ newCartList }));
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
      <PaymentSection selectedProducts={selectedProducts} />
    </>
  );
};

export default Cart;
