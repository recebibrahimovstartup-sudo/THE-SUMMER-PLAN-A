-- Seed Categories
INSERT INTO categories (slug, name_az, name_en, description_az, description_en, image_url) VALUES
  ('electronics', 'Elektronika', 'Electronics', 'Ən son texnologiya və elektron cihazlar', 'Latest technology and electronic devices', 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80'),
  ('fashion', 'Moda', 'Fashion', 'Geyim, ayaqqabı və aksesuarlar', 'Clothing, shoes and accessories', 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80'),
  ('home', 'Ev və Bağ', 'Home & Garden', 'Ev dekorasiyası, mebel və bağ ləvazimatları', 'Home decor, furniture and garden supplies', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80')
ON CONFLICT (slug) DO NOTHING;

-- Seed Electronics Products
INSERT INTO products (slug, name_az, name_en, description_az, description_en, price_in_cents, category_id, images, featured, in_stock) VALUES
  ('wireless-headphones', 'Simsiz Qulaqlıq', 'Wireless Headphones', 'Yüksək keyfiyyətli səs-küy ləğvedici simsiz qulaqlıq', 'High-quality noise-cancelling wireless headphones', 14999, (SELECT id FROM categories WHERE slug = 'electronics'), ARRAY['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80'], true, true),
  ('smart-watch', 'Ağıllı Saat', 'Smart Watch', 'Fitness izləmə və bildirişlərlə ağıllı saat', 'Smart watch with fitness tracking and notifications', 24999, (SELECT id FROM categories WHERE slug = 'electronics'), ARRAY['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'], true, true),
  ('bluetooth-speaker', 'Bluetooth Dinamik', 'Bluetooth Speaker', 'Portativ suya davamlı Bluetooth dinamik', 'Portable waterproof Bluetooth speaker', 7999, (SELECT id FROM categories WHERE slug = 'electronics'), ARRAY['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80'], false, true),
  ('laptop-stand', 'Noutbuk Altlığı', 'Laptop Stand', 'Ergonomik alüminium noutbuk altlığı', 'Ergonomic aluminum laptop stand', 4999, (SELECT id FROM categories WHERE slug = 'electronics'), ARRAY['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80'], false, true),
  ('mechanical-keyboard', 'Mexaniki Klaviatura', 'Mechanical Keyboard', 'RGB işıqlandırmalı mexaniki oyun klaviaturası', 'RGB backlit mechanical gaming keyboard', 11999, (SELECT id FROM categories WHERE slug = 'electronics'), ARRAY['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80'], true, true),
  ('wireless-mouse', 'Simsiz Siçan', 'Wireless Mouse', 'Erqonomik simsiz optik siçan', 'Ergonomic wireless optical mouse', 3999, (SELECT id FROM categories WHERE slug = 'electronics'), ARRAY['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80'], false, true)
ON CONFLICT (slug) DO NOTHING;

-- Seed Fashion Products
INSERT INTO products (slug, name_az, name_en, description_az, description_en, price_in_cents, category_id, images, featured, in_stock) VALUES
  ('leather-jacket', 'Dəri Gödəkçə', 'Leather Jacket', 'Premium keyfiyyətli qara dəri gödəkçə', 'Premium quality black leather jacket', 19999, (SELECT id FROM categories WHERE slug = 'fashion'), ARRAY['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'], true, true),
  ('cotton-tshirt', 'Pambıq Futbolka', 'Cotton T-Shirt', 'Yumşaq pambıqdan hazırlanmış rahat futbolka', 'Comfortable t-shirt made from soft cotton', 2999, (SELECT id FROM categories WHERE slug = 'fashion'), ARRAY['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'], false, true),
  ('running-shoes', 'Qaçış Ayaqqabısı', 'Running Shoes', 'Yüngül və rahat qaçış ayaqqabısı', 'Lightweight and comfortable running shoes', 12999, (SELECT id FROM categories WHERE slug = 'fashion'), ARRAY['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'], true, true),
  ('denim-jeans', 'Cins Şalvar', 'Denim Jeans', 'Klassik kəsimli mavi cins şalvar', 'Classic fit blue denim jeans', 8999, (SELECT id FROM categories WHERE slug = 'fashion'), ARRAY['https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80'], false, true),
  ('wool-scarf', 'Yun Şərf', 'Wool Scarf', 'İsti yun qış şərfi', 'Warm wool winter scarf', 3499, (SELECT id FROM categories WHERE slug = 'fashion'), ARRAY['https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80'], false, true),
  ('sunglasses', 'Eynək', 'Sunglasses', 'UV qorumalı dəbli günəş eynəyi', 'Stylish sunglasses with UV protection', 5999, (SELECT id FROM categories WHERE slug = 'fashion'), ARRAY['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80'], true, true)
ON CONFLICT (slug) DO NOTHING;

-- Seed Home Products
INSERT INTO products (slug, name_az, name_en, description_az, description_en, price_in_cents, category_id, images, featured, in_stock) VALUES
  ('ceramic-vase', 'Keramika Vaza', 'Ceramic Vase', 'Əl ilə hazırlanmış dekorativ keramika vaza', 'Handcrafted decorative ceramic vase', 4999, (SELECT id FROM categories WHERE slug = 'home'), ARRAY['https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80'], true, true),
  ('scented-candle', 'Ətirli Şam', 'Scented Candle', 'Təbii soya mumundan hazırlanmış ətirli şam', 'Natural soy wax scented candle', 1999, (SELECT id FROM categories WHERE slug = 'home'), ARRAY['https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80'], false, true),
  ('throw-pillow', 'Dekorativ Yastıq', 'Throw Pillow', 'Yumşaq toxuma dekorativ yastıq', 'Soft woven decorative throw pillow', 2999, (SELECT id FROM categories WHERE slug = 'home'), ARRAY['https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80'], false, true),
  ('table-lamp', 'Masa Lampası', 'Table Lamp', 'Müasir dizaynlı masa lampası', 'Modern design table lamp', 6999, (SELECT id FROM categories WHERE slug = 'home'), ARRAY['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=800&q=80'], true, true),
  ('plant-pot', 'Gül Qabı', 'Plant Pot', 'Minimalist beton gül qabı', 'Minimalist concrete plant pot', 2499, (SELECT id FROM categories WHERE slug = 'home'), ARRAY['https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80'], false, true),
  ('wall-clock', 'Divar Saatı', 'Wall Clock', 'Sadə dizaynlı böyük divar saatı', 'Large wall clock with simple design', 3999, (SELECT id FROM categories WHERE slug = 'home'), ARRAY['https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80'], false, true)
ON CONFLICT (slug) DO NOTHING;
