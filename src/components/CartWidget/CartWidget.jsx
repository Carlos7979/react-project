import cartShopping from '../../assets/cart-shopping.svg'
import styles from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <>
			<img className={styles.cartShopping} src={cartShopping} alt="" />
        </>
    )
}

export default CartWidget