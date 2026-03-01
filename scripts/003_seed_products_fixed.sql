-- Seed categories with correct column names (name_az, name_en, description_az, description_en)
INSERT INTO public.categories (id, slug, name_az, name_en, description_az, description_en, image_url) VALUES
  ('a1000000-0000-0000-0000-000000000001', 'geyimler', 'Geyimlər', 'Clothing', 'Kişi və qadın geyimləri', 'Men and women clothing', '/images/categories/clothing.jpg'),
  ('a1000000-0000-0000-0000-000000000002', 'elektronika', 'Elektronika', 'Electronics', 'Ən son texnologiya məhsulları', 'Latest technology products', '/images/categories/electronics.jpg'),
  ('a1000000-0000-0000-0000-000000000003', 'ev-bag', 'Ev və Bağ', 'Home & Garden', 'Ev dekorasiyası və bağ məhsulları', 'Home decoration and garden products', '/images/categories/home.jpg'),
  ('a1000000-0000-0000-0000-000000000004', 'idman', 'İdman', 'Sports', 'İdman geyimləri və avadanlıqları', 'Sports clothing and equipment', '/images/categories/sports.jpg')
ON CONFLICT (slug) DO NOTHING;

-- Seed products for Geyimlər (Clothing)
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured) VALUES
  ('klassik-kisi-koyneyi', 'Klassik Kişi Köynəyi', 'Classic Men Shirt', 'Yüksək keyfiyyətli pambıq parçadan hazırlanmış klassik kişi köynəyi.', 'Classic men shirt made from high quality cotton fabric.', 4999, 'AZN', '/images/products/shirt.jpg', 'a1000000-0000-0000-0000-000000000001', true, true),
  ('qadin-yay-paltari', 'Qadın Yay Paltarı', 'Women Summer Dress', 'Yüngül və rahat yay paltarı. Gündəlik geyim üçün ideal.', 'Lightweight and comfortable summer dress. Ideal for daily wear.', 7999, 'AZN', '/images/products/dress.jpg', 'a1000000-0000-0000-0000-000000000001', true, true),
  ('deri-kemer', 'Dəri Kəmər', 'Leather Belt', 'Əsl dəridən hazırlanmış kişi kəməri.', 'Men belt made from genuine leather.', 2999, 'AZN', '/images/products/belt.jpg', 'a1000000-0000-0000-0000-000000000001', true, false)
ON CONFLICT (slug) DO NOTHING;

-- Seed products for Elektronika (Electronics)
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured) VALUES
  ('simsiz-qulaqliq', 'Simsiz Qulaqlıq', 'Wireless Headphones', 'Bluetooth 5.0 texnologiyası ilə simsiz qulaqlıq. 24 saat batareya ömrü.', 'Wireless headphones with Bluetooth 5.0 technology. 24 hour battery life.', 12999, 'AZN', '/images/products/headphones.jpg', 'a1000000-0000-0000-0000-000000000002', true, true),
  ('agilli-saat', 'Ağıllı Saat', 'Smart Watch', 'Fitness izləmə, bildirişlər və daha çoxu. Suya davamlı dizayn.', 'Fitness tracking, notifications and more. Water resistant design.', 19999, 'AZN', '/images/products/smartwatch.jpg', 'a1000000-0000-0000-0000-000000000002', true, true),
  ('portativ-sarj', 'Portativ Şarj Cihazı', 'Portable Charger', '20000mAh portativ şarj cihazı. İki USB çıxışı.', '20000mAh portable charger. Two USB outputs.', 3999, 'AZN', '/images/products/powerbank.jpg', 'a1000000-0000-0000-0000-000000000002', true, false)
ON CONFLICT (slug) DO NOTHING;

-- Seed products for Ev və Bağ (Home & Garden)
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured) VALUES
  ('dekorativ-yastiq', 'Dekorativ Yastıq Dəsti', 'Decorative Pillow Set', '4 ədəd dekorativ yastıq dəsti. Müxtəlif rənglərdə mövcuddur.', 'Set of 4 decorative pillows. Available in various colors.', 3499, 'AZN', '/images/products/pillows.jpg', 'a1000000-0000-0000-0000-000000000003', true, false),
  ('seramik-vazo', 'Seramik Vazo', 'Ceramic Vase', 'Əl işi seramik vazo. Evinizə zəriflik qatır.', 'Handmade ceramic vase. Adds elegance to your home.', 4499, 'AZN', '/images/products/vase.jpg', 'a1000000-0000-0000-0000-000000000003', true, true),
  ('masa-lampasi', 'Masa Lampası', 'Table Lamp', 'Müasir dizaynlı masa lampası. LED işıqlandırma.', 'Modern design table lamp. LED lighting.', 5999, 'AZN', '/images/products/lamp.jpg', 'a1000000-0000-0000-0000-000000000003', true, false)
ON CONFLICT (slug) DO NOTHING;

-- Seed products for İdman (Sports)
INSERT INTO public.products (slug, name_az, name_en, description_az, description_en, price_in_cents, currency, image_url, category_id, in_stock, featured) VALUES
  ('yoga-xalcasi', 'Yoga Xalçası', 'Yoga Mat', 'Sürüşməyə davamlı yoga xalçası. 6mm qalınlıq.', 'Non-slip yoga mat. 6mm thickness.', 2499, 'AZN', '/images/products/yogamat.jpg', 'a1000000-0000-0000-0000-000000000004', true, false),
  ('idman-cantasi', 'İdman Çantası', 'Sports Bag', 'Su keçirməyən idman çantası. Geniş həcm.', 'Waterproof sports bag. Large capacity.', 5999, 'AZN', '/images/products/sportsbag.jpg', 'a1000000-0000-0000-0000-000000000004', true, true),
  ('qacis-ayaqqabisi', 'Qaçış Ayaqqabısı', 'Running Shoes', 'Yüngül və rahat qaçış ayaqqabısı. Hər səth üçün uyğun.', 'Lightweight and comfortable running shoes. Suitable for all surfaces.', 8999, 'AZN', '/images/products/shoes.jpg', 'a1000000-0000-0000-0000-000000000004', true, true)
ON CONFLICT (slug) DO NOTHING;
