-- Fix seed data with correct column names matching the actual schema

-- Seed categories
INSERT INTO public.categories (slug, name_az, name_en, description_az, description_en, image_url) VALUES
  ('electronics', 'Elektronika', 'Electronics', 'Ən son texnologiya məhsulları', 'Latest technology products', '/images/categories/electronics.jpg'),
  ('fashion', 'Moda', 'Fashion', 'Kişi və qadın geyimləri', 'Men and women clothing', '/images/categories/fashion.jpg'),
  ('home', 'Ev və Bağ', 'Home & Garden', 'Ev dekorasiyası və bağ məhsulları', 'Home decor and garden products', '/images/categories/home.jpg'),
  ('sports', 'İdman', 'Sports', 'İdman geyimləri və avadanlıqları', 'Sports clothing and equipment', '/images/categories/sports.jpg')
ON CONFLICT (slug) DO NOTHING;

-- Electronics products
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'simsiz-qulaqliq', 'Simsiz Qulaqlıq', 'Wireless Headphones', 'Bluetooth 5.0 texnologiyası ilə simsiz qulaqlıq. 24 saat batareya ömrü.', 'Wireless headphones with Bluetooth 5.0. 24-hour battery life.', 12999, 'AZN', '/images/products/headphones.jpg', c.id, true, true
FROM public.categories c WHERE c.slug = 'electronics'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'agilli-saat', 'Ağıllı Saat', 'Smart Watch', 'Fitness izləmə, bildirişlər və daha çoxu. Suya davamlı dizayn.', 'Fitness tracking, notifications and more. Water-resistant design.', 19999, 'AZN', '/images/products/smartwatch.jpg', c.id, true, true
FROM public.categories c WHERE c.slug = 'electronics'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'portativ-sarj', 'Portativ Şarj Cihazı', 'Portable Charger', '20000mAh portativ şarj cihazı. İki USB çıxışı.', '20000mAh portable charger. Dual USB output.', 3999, 'AZN', '/images/products/powerbank.jpg', c.id, true, false
FROM public.categories c WHERE c.slug = 'electronics'
ON CONFLICT (slug) DO NOTHING;

-- Fashion products
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'klassik-koyneyi', 'Klassik Kişi Köynəyi', 'Classic Men Shirt', 'Yüksək keyfiyyətli pambıq parçadan hazırlanmış klassik kişi köynəyi.', 'High-quality cotton classic men shirt. Suitable for every occasion.', 4999, 'AZN', '/images/products/shirt.jpg', c.id, true, true
FROM public.categories c WHERE c.slug = 'fashion'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'qadin-paltar', 'Qadın Yay Paltarı', 'Women Summer Dress', 'Yüngül və rahat yay paltarı. Gündəlik geyim üçün ideal.', 'Lightweight and comfortable summer dress. Ideal for everyday wear.', 7999, 'AZN', '/images/products/dress.jpg', c.id, true, true
FROM public.categories c WHERE c.slug = 'fashion'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'deri-kemer', 'Dəri Kəmər', 'Leather Belt', 'Əsl dəridən hazırlanmış kişi kəməri.', 'Genuine leather men belt.', 2999, 'AZN', '/images/products/belt.jpg', c.id, true, false
FROM public.categories c WHERE c.slug = 'fashion'
ON CONFLICT (slug) DO NOTHING;

-- Home & Garden products
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'dekorativ-yastiq', 'Dekorativ Yastıq Dəsti', 'Decorative Pillow Set', '4 ədəd dekorativ yastıq dəsti. Müxtəlif rənglərdə mövcuddur.', '4 piece decorative pillow set. Available in various colors.', 3499, 'AZN', '/images/products/pillows.jpg', c.id, true, false
FROM public.categories c WHERE c.slug = 'home'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'seramik-vazo', 'Seramik Vazo', 'Ceramic Vase', 'Əl işi seramik vazo. Evinizə zəriflik qatır.', 'Handcrafted ceramic vase. Adds elegance to your home.', 4499, 'AZN', '/images/products/vase.jpg', c.id, true, true
FROM public.categories c WHERE c.slug = 'home'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'masa-lampasi', 'Masa Lampası', 'Desk Lamp', 'Modern dizaynlı LED masa lampası. 3 parlaqlıq səviyyəsi.', 'Modern LED desk lamp. 3 brightness levels.', 5999, 'AZN', '/images/products/lamp.jpg', c.id, true, false
FROM public.categories c WHERE c.slug = 'home'
ON CONFLICT (slug) DO NOTHING;

-- Sports products
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'yoga-xalcasi', 'Yoga Xalçası', 'Yoga Mat', 'Sürüşməyə davamlı yoga xalçası. 6mm qalınlıq.', 'Non-slip yoga mat. 6mm thickness.', 2499, 'AZN', '/images/products/yogamat.jpg', c.id, true, false
FROM public.categories c WHERE c.slug = 'sports'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'idman-cantasi', 'İdman Çantası', 'Sports Bag', 'Su keçirməyən idman çantası. Geniş həcm.', 'Waterproof sports bag. Large capacity.', 5999, 'AZN', '/images/products/sportsbag.jpg', c.id, true, true
FROM public.categories c WHERE c.slug = 'sports'
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured)
SELECT 'qacis-ayaqqabisi', 'Qaçış Ayaqqabısı', 'Running Shoes', 'Yüngül və rahat qaçış ayaqqabısı. Hər səth üçün uyğun.', 'Lightweight and comfortable running shoes. Suitable for all surfaces.', 8999, 'AZN', '/images/products/shoes.jpg', c.id, true, true
FROM public.categories c WHERE c.slug = 'sports'
ON CONFLICT (slug) DO NOTHING;
