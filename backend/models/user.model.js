import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },

    email: {
        type: String,
        required: [true, "E-mail is required"],
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },

    cartItems: [{
        quantity: {
            type: Number,
            default: 1
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "product"
        }
    }],

    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    }

}, {
    timestamps: true
    }

);



//pre-save hook to hash password before saving to databasse
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    try {
        const salt= await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

        next()

    } catch (error) {
        next(error)

    }
})

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);


};

const User = mongoose.model("User", userSchema);

export default User;


//refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzMzMjkxNzI0MDE0ZjMwYzkxMDE0MzMiLCJpYXQiOjE3MzE0MDYxMDMsImV4cCI6MTczMjAxMDkwM30.7uThqZUiz5qmyxh14PCVdqKTgqT6c1-XIFlBSDRdRb4; Path=/; HttpOnly; Expires=Tue, 19 Nov 2024 10:08:22 GMT;