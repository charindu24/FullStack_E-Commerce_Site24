import product from "../models/product.model.js";


export const getCartProduct = async (req, res) => {
    try {
        const products = await product.find({_id:{$in:req.user.cartItems}});
        // add quanity for each product

        const cartItems = product.map(product => {
            const item = req.user.cartItems.find(cartItems => cartItems.id === product.id);
            return {...product.toJSON(),quantity:item.quanity}
        })
        res.json(cartItems)
    } catch (error) {
        console.log("Error in getCartProducts controller", error.message);
        res.status(500).json({ message: "Server Error", error: error.message});
        
    }
};

export const addToCart = async (req, res) => {
    try {
        const {productId} = req.body;
        const user = req.user;

        const existingItem = user.cartItems.find(item => item.id === productId);
        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            user.cartItems.push(productId);
        }

        await user.save();
        res.json(user.cartItems)

        
    } catch (error) {
        console.log("Error in addToCart controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

export const removeAllFromCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const user = req.user;
        if (!productId) {
            user.cartItems = [];
        } else {
            user.cartItems = user.cartItems.filter((item) => item.id !== productId); //filter out product from the cart items
        }
        await user.save();
        res.json(user.cartItems);

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

export const updateQuantity = async (req, res) => {
    try {
        const {id} = req.params;
        const {quantity} = req.body;
        const user = req.user;
        const existingItem = user.cartItems.find((item) => item.id === productId);

        if(existingItem) {
            if(quanity === 0) {
                user.cartItems = user.cartItems.filter((item) => item.id !== productId);
                await user.save();
                return res.json(user.cartItems);
            }
            existingItem.quanity = quantity;
            await user.save();
            res.json(user.cartItems);

        } else {
            res.status(404).json({message: "Product not found"});
        }

    } catch (error) {
        console.log("Error in updateQuantity controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });

        
    }
}
