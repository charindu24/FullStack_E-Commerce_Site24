import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from '../stores/useProductStore';

const ProductList = () => {
  const {deleteproduct, toggleFeatureProduct, products } = useproductStore();
  console.log("products", products);

  return (
    <div>ProductList</div>
  )
}

export default ProductList