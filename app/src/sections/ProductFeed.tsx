import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { productsConfig } from '../config';
import type { Product } from '../config';
import ProductCard from '../components/ProductCard';

const filterProducts = (category: string, query: string): Product[] => {
  const q = query.trim().toLowerCase();
  return productsConfig.products.filter((p) => {
    const inCategory = category === 'All' || p.category === category;
    if (!inCategory) return false;
    if (!q) return true;
    return (
      p.name.en.toLowerCase().includes(q) ||
      p.name.zh.toLowerCase().includes(q) ||
      p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });
};

/** Pinned-badge products first, then newest date first. */
const sortProducts = (products: Product[]): Product[] =>
  [...products].sort((a, b) => {
    const aPinned = a.badge === 'pinned' ? 1 : 0;
    const bPinned = b.badge === 'pinned' ? 1 : 0;
    if (aPinned !== bPinned) return bPinned - aPinned;
    return b.date.localeCompare(a.date);
  });

const ProductFeed = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const [activeCategory, setActiveCategory] = useState<string>(productsConfig.categories[0]);

  const filtered = sortProducts(filterProducts(activeCategory, query));

  return (
    <section id="products" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-[60px]">
        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          {productsConfig.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#8b6d4b] text-white'
                  : 'bg-[#fafafa] text-[#696969] hover:bg-[#f0f0f0]'
              }`}
            >
              {t(`resources.categories.${category.toLowerCase()}`)}
            </button>
          ))}
        </div>

        {/* Masonry waterfall */}
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-[#696969]">{t('feed.empty')}</p>
        ) : (
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFeed;
