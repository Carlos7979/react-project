import cartShopping from '../../assets/cart-shopping.svg'
import styles from './CartWidget.module.css'

const CartWidget = () => {
    const notificationValue = 15
    return (
        <>
            <img className={styles.cartShopping} src={cartShopping} alt='' />
            <div className={styles.notificationBubbleContainer}>
				<div className={styles.notificationBubble}>{notificationValue}</div>
			</div>
        </>
    )
}

export default CartWidget
