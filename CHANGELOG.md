# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Fixed Tailwind CSS configuration issue by renaming `tailwind.config.js` to `tailwind.config.cjs` for ES module compatibility

### Changed
- Changed brand name from "Alex Chen" to "Wh Claw" across all content
- Updated i18n translations for brand name change in both English and Chinese

### Added
- Added multi-language support for Footer component (Chinese/English)
- Added multi-language support for Products section (Chinese/English)
- Added i18n keys for resources section: tag, heading, description, categories, items

### Removed
- Removed price display from product cards
- Removed price display from shopping cart items
- Removed subtotal section from shopping cart

## [1.0.0] - 2026-03-13

### Added
- Initial release of Wh Claw website
- React + TypeScript + Vite setup
- Tailwind CSS styling
- shadcn/ui component library integration
- Internationalization (i18n) support for English and Chinese
- Hero section with parallax background
- Products section with category filtering
- Features section with animated icons
- Blog section with post previews
- FAQ section with accordion
- About section with philosophy quotes
- Contact section with form
- Footer with newsletter signup
- Shopping cart functionality
- Language switcher component
- Responsive design for mobile and desktop
