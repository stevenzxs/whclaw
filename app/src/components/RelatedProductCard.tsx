import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { useLocalized } from '../hooks/use-localized';
import type { Product } from '../config';

interface RelatedProductCardProps {
  product: Product;
}

const RelatedProductCard = ({ product }: RelatedProductCardProps) => {
  const localize = useLocalized();

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block border border-[#f0f0f0] bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={product.icon}
        alt={localize(product.name)}
        className="w-full h-32 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-serif text-base text-black truncate group-hover:text-[#8b6d4b] transition-colors">
          {localize(product.name)}
        </h3>
        <p className="text-xs text-[#696969] mt-1">v{product.version}</p>
        <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
          <span>{product.date}</span>
          <span className="inline-flex items-center gap-1">
            <Eye size={14} />
            {product.views.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RelatedProductCard;
