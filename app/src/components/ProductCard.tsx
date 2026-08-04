import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eye, ThumbsUp, MessageCircle } from 'lucide-react';
import type { Product } from '../config';
import { useLocalized } from '../hooks/use-localized';

/** 12840 -> "12.8k", 326 -> "326" */
const formatCount = (n: number): string =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(n);

interface ProductCardProps {
  product: Product;
  /** Position in the feed — drives the staggered entrance delay. */
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { t } = useTranslation();
  const localize = useLocalized();

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group mb-6 inline-block w-full break-inside-avoid border border-[#f0f0f0] bg-white opacity-0 animate-fade-up transition-shadow duration-300 hover:shadow-lg"
      style={{ animationDelay: `${Math.min(index, 11) * 60}ms` }}
    >
      {/* Cover */}
      <div className="relative overflow-hidden">
        <img
          src={product.icon}
          alt={localize(product.name)}
          loading="lazy"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge === 'pinned' && (
          <span className="absolute left-3 top-3 rounded-sm bg-[#d9534f] px-1.5 py-0.5 text-xs text-white">
            {t('product.badge.pinned')}
          </span>
        )}
        {product.badge === 'recommended' && (
          <span className="absolute left-3 top-3 rounded-sm bg-[#5cb85c] px-1.5 py-0.5 text-xs text-white">
            {t('product.badge.recommended')}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-serif text-xl text-black transition-colors group-hover:text-[#8b6d4b]">
          {localize(product.name)}
          <span className="ml-2 align-middle text-sm font-sans text-[#999999]">
            {product.version}
          </span>
          {product.badge === 'new' && (
            <span className="ml-2 inline-block rounded-sm bg-[#d9534f] px-1.5 py-0.5 align-middle text-xs font-sans text-white">
              {t('product.badge.new')}
            </span>
          )}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-[#696969]">
          {localize(product.excerpt)}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {product.tags.map((tag) => (
            <span key={tag} className="text-xs text-[#8b6d4b]">
              # {tag}
            </span>
          ))}
        </div>

        {/* Meta footer */}
        <div className="mt-4 flex items-center justify-between border-t border-[#f0f0f0] pt-3 text-xs text-gray-400">
          <span>{product.date}</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Eye size={14} />
              {formatCount(product.views)}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp size={14} />
              {formatCount(product.likes)}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={14} />
              {formatCount(product.comments)}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
