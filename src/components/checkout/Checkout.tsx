import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CartContext from "../../contexts/cart/CartContext";

enum CheckoutStatus {
  Success = "success",
  Cancel = "cancel",
}

const Checkout = () => {
  const { clearCart } = useContext(CartContext);
  const { checkoutStatus } = useParams<{ checkoutStatus: CheckoutStatus }>();

  const navigate = useNavigate();

  useEffect(() => {
    if (checkoutStatus === "success") {
      clearCart();
    } else if (checkoutStatus !== "cancel") {
      navigate("/notfound", { replace: true });
    }
  }, [checkoutStatus, clearCart, navigate]);

  return (
    <>
      <section className="w-full bg-secondary-900 px-8 py-10 dark:bg-gray-900 lg:pt-14">
        <div className="mx-auto max-w-screen-sm py-10 sm:py-16 lg:max-w-screen-xl lg:px-6">
          <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight text-gray-200 dark:text-white">
            {checkoutStatus === "success" ? (
              <>
                <p>Nazdrave!🥂</p>
                <p>Thank You For Your Purchase</p>
              </>
            ) : checkoutStatus === "cancel" ? (
              <>
                <p>Checkout Session Unsuccessful</p>
                <p>Please try again!</p>
              </>
            ) : null}
          </h2>
        </div>
      </section>
      <section className="w-full bg-secondary-50 px-8 dark:bg-gray-900">
        <div className="container mx-auto flex h-auto min-h-[70vh] justify-center p-4 lg:max-w-screen-xl lg:p-6">
          {checkoutStatus === "success" ? (
            <div className="flex flex-col items-center gap-4 py-10 text-lg lg:text-xl">
              <p>
                Your order is being prepared and will be shipped as soon as
                possible!
              </p>
              <p>
                Be on the lookout for a confirmation email for your purchase
              </p>
              <Link
                to="/shop"
                className="rounded-md py-10 text-center text-2xl font-medium hover:text-secondary-700 lg:text-start lg:text-2xl"
              >
                Click Here to Continue Shopping
              </Link>
            </div>
          ) : checkoutStatus === "cancel" ? (
            <div className="flex flex-col items-center gap-4 py-10 text-lg lg:text-xl">
              <p>Click below to return to cart</p>
              <Link
                to="/cart"
                className="rounded-md py-10 text-center text-2xl font-medium hover:text-secondary-700 lg:text-start lg:text-2xl"
              >
                Go To Cart 🛒
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Checkout;
