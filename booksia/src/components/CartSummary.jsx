export default function CartSummary({ totalPrice }) {
    return (
        <section className="flex flex-col">
            <h3 className="text-xl font-semibold">Summary</h3>
            <hr className="border-1 border-black mt-1"/>
            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Product Cost:</p>
                    <p className="text-lg font-semibold">{totalPrice} LEI</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Delivery Cost</p>
                    <p>0 LEI</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold">Total Price:</p>
                    <p className="text-lg font-semibold">{totalPrice} LEI</p>
                </div>
            </div>
        </section>
    );
}
