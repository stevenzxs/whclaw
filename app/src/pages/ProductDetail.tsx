import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  Check,
  Download,
  Eye,
  Github,
  MessageCircle,
  ThumbsUp,
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../config';
import type { ProductBadge } from '../config';
import { useLocalized } from '../hooks/use-localized';
import RelatedProductCard from '../components/RelatedProductCard';

const badgeStyles: Record<ProductBadge, string> = {
  recommended: 'bg-[#2f7d4f] text-white',
  new: 'bg-[#c0392b] text-white',
  pinned: 'bg-[#c0392b] text-white',
};

const ProductDetail = () => {
  const { t } = useTranslation();
  const localize = useLocalized();
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-32 text-center animate-fade-in">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8b6d4b]">404</p>
        <h1 className="font-serif text-4xl text-black mt-4">{t('product.notFound')}</h1>
        <p className="text-[#696969] mt-4">{t('product.notFoundDesc')}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-[#8b6d4b] text-white tracking-wide hover:opacity-90 transition-opacity"
        >
          <ArrowLeft size={16} />
          {t('product.back')}
        </Link>
      </div>
    );
  }

  const categoryLabel = t(`resources.categories.${product.category.toLowerCase()}`);
  const relatedProducts = getRelatedProducts(product, 4);

  const specRows: Array<{ label: string; value: string }> = [
    { label: t('product.version'), value: product.version },
    { label: t('product.platform'), value: product.platform },
    { label: t('product.size'), value: product.size },
    { label: t('product.license'), value: product.license },
    { label: t('product.category'), value: categoryLabel },
    { label: t('product.updated'), value: product.date },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 md:py-14 animate-fade-up">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-xs text-gray-400 tracking-wide">
        <Link to="/" className="hover:text-[#8b6d4b] transition-colors">
          {t('nav.home')}
        </Link>
        <span>/</span>
        <Link to="/" className="hover:text-[#8b6d4b] transition-colors">
          {t('product.breadcrumbList')}
        </Link>
        <span>/</span>
        <span>{categoryLabel}</span>
        <span>/</span>
        <span className="text-[#696969]">{localize(product.name)}</span>
      </nav>

      {/* Two-column layout */}
      <div className="mt-8 lg:flex lg:items-start lg:gap-10">
        {/* Main column */}
        <article className="flex-1 min-w-0">
          {product.badge && (
            <span
              className={`inline-block px-3 py-1 text-xs tracking-wide mb-4 ${badgeStyles[product.badge]}`}
            >
              {t(`product.badge.${product.badge}`)}
            </span>
          )}

          <h1 className="font-serif text-3xl md:text-4xl text-black leading-tight">
            {localize(product.name)}{' '}
            <span className="text-gray-400 text-xl md:text-2xl font-sans font-light">
              v{product.version}
            </span>
          </h1>

          {/* Meta stats */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-gray-400">
            <span>{product.date}</span>
            <span className="inline-flex items-center gap-1.5">
              <Eye size={16} />
              {product.views.toLocaleString()}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ThumbsUp size={16} />
              {product.likes.toLocaleString()}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle size={16} />
              {product.comments.toLocaleString()}
            </span>
          </div>

          {/* Cover */}
          <img
            src={product.icon}
            alt={localize(product.name)}
            className="w-full h-auto mt-8 border border-[#f0f0f0]"
          />

          {/* About */}
          <section className="mt-12">
            <h2 className="font-serif text-2xl text-black flex items-center gap-3">
              <span className="inline-block w-1 h-6 bg-[#8b6d4b]" aria-hidden="true" />
              {t('product.about')}
            </h2>
            <div className="mt-5 space-y-5">
              {product.description.map((paragraph, i) => (
                <p key={i} className="leading-8 text-[#333]">
                  {localize(paragraph)}
                </p>
              ))}
            </div>
          </section>

          {/* Features */}
          {product.features.length > 0 && (
            <section className="mt-12">
              <h2 className="font-serif text-2xl text-black flex items-center gap-3">
                <span className="inline-block w-1 h-6 bg-[#8b6d4b]" aria-hidden="true" />
                {t('product.features')}
              </h2>
              <ul className="mt-5 space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#333] leading-7">
                    <Check size={18} className="text-[#8b6d4b] mt-1 shrink-0" />
                    <span>{localize(feature)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Screenshots */}
          {product.screenshots.length > 0 && (
            <section className="mt-12">
              <h2 className="font-serif text-2xl text-black flex items-center gap-3">
                <span className="inline-block w-1 h-6 bg-[#8b6d4b]" aria-hidden="true" />
                {t('product.screenshots')}
              </h2>
              <div className="mt-5 space-y-6">
                {product.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${localize(product.name)} ${i + 1}`}
                    className="w-full h-auto border border-[#f0f0f0]"
                    loading="lazy"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs tracking-wide text-[#696969] bg-[#fafafa] border border-[#f0f0f0]"
                >
                  # {tag}
                </span>
              ))}
            </div>
          )}

          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-10 text-[#8b6d4b] hover:underline"
          >
            <ArrowLeft size={16} />
            {t('product.back')}
          </Link>
        </article>

        {/* Sidebar */}
        <aside className="mt-12 lg:mt-0 lg:w-[320px] lg:shrink-0 lg:sticky lg:top-24 self-start">
          <div className="border border-[#f0ebe3] bg-white p-6">
            <div className="flex items-center gap-4">
              <img
                src={product.icon}
                alt={localize(product.name)}
                className="w-20 h-20 object-cover"
              />
              <div className="min-w-0">
                <p className="font-serif text-lg text-black leading-snug">
                  {localize(product.name)}
                </p>
                <p className="text-xs text-[#696969] mt-1">v{product.version}</p>
              </div>
            </div>

            <dl className="mt-6 border-t border-[#f0f0f0]">
              {specRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-4 py-2.5 border-b border-[#f0f0f0] text-sm"
                >
                  <dt className="text-gray-400 shrink-0">{row.label}</dt>
                  <dd className="text-[#333] text-right">{row.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={product.downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#8b6d4b] text-white tracking-wide hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              {t('product.download')}
            </a>
            <a
              href={product.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-center gap-2 w-full px-6 py-3 border border-[#8b6d4b] text-[#8b6d4b] tracking-wide hover:bg-[#8b6d4b] hover:text-white transition-colors"
            >
              <Github size={16} />
              {t('product.viewRepo')}
            </a>
          </div>
        </aside>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 pt-10 border-t border-[#f0f0f0]">
          <h2 className="font-serif text-2xl text-black flex items-center gap-3">
            <span className="inline-block w-1 h-6 bg-[#8b6d4b]" aria-hidden="true" />
            {t('product.related')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {relatedProducts.map((related) => (
              <RelatedProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
