import { useState} from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import e from "express";


const categories = ["jean", "t-shirt", "shoe", "glasses", "jacket", "suit", "bag"];

const CreateProductForm = () => {
const [newProduct, setNewProduct] = useState({
  name: "",
  description: "",
  price: "",
  category: "",
  image: "",

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
  }

});

  return (
    <motion.div
    className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">Create New Product</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Product Name
          </label>
          <input 
          type="number"
          id="name"
          name="name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white
          focus:outline-none focus:ring-2
           focus:ring-emerald-500 focus:border-emerald-500"
          required
          />
        </div>
        <div>
					<label htmlFor='description' className='block text-sm font-medium text-gray-300'>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={newProduct.description}
						onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
						rows='3'
						className='mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
						 py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 
						 focus:border-emerald-500'
						required
					/>
				</div>
        
      </form>

    </motion.div>
  )
}

export default CreateProductForm