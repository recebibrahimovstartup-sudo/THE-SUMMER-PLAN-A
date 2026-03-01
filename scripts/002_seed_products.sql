-- Seed categories
INSERT INTO categories (id, name, slug, description, image_url) VALUES
  (gen_random_uuid(), 'Geyimlər', 'geyimler', 'Kişi və qadın geyimləri', '/images/categories/clothing.jpg'),
  (gen_random_uuid(), 'Elektronika', 'elektronika', 'Ən son texnologiya məhsulları', '/images/categories/electronics.jpg'),
  (gen_random_uuid(), 'Ev və Bağ', 'ev-bag', 'Ev dekorasiyası və bağ məhsulları', '/images/categories/home.jpg'),
  (gen_random_uuid(), 'İdman', 'idman', 'İdman geyimləri və avadanlıqları', '/images/categories/sports.jpg')
ON CONFLICT DO NOTHING;

-- Seed products for Geyimlər (Clothing)
INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Klassik Kişi Köynəyi', 'klassik-kisi-koyneyi', 'Yüksək keyfiyyətli pambıq parçadan hazırlanmış klassik kişi köynəyi. Hər mərasimə uyğun.', 49.99, '/images/products/shirt.jpg', id, 50, true
FROM categories WHERE slug = 'geyimler';

INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Qadın Yay Paltarı', 'qadin-yay-paltari', 'Yüngül və rahat yay paltarı. Gündəlik geyim üçün ideal.', 79.99, '/images/products/dress.jpg', id, 30, true
FROM categories WHERE slug = 'geyimler';

INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Dəri Kəmər', 'deri-kemer', 'Əsl dəridən hazırlanmış kişi kəməri.', 29.99, '/images/products/belt.jpg', id, 100, false
FROM categories WHERE slug = 'geyimler';

-- Seed products for Elektronika (Electronics)
INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Simsiz Qulaqlıq', 'simsiz-qulaqliq', 'Bluetooth 5.0 texnologiyası ilə simsiz qulaqlıq. 24 saat batareya ömrü.', 129.99, '/images/products/headphones.jpg', id, 75, true
FROM categories WHERE slug = 'elektronika';

INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Ağıllı Saat', 'agilli-saat', 'Fitness izləmə, bildirişlər və daha çoxu. Suya davamlı dizayn.', 199.99, '/images/products/smartwatch.jpg', id, 40, true
FROM categories WHERE slug = 'elektronika';

INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Portativ Şarj Cihazı', 'portativ-sarj', '20000mAh portativ şarj cihazı. İki USB çıxışı.', 39.99, '/images/products/powerbank.jpg', id, 120, false
FROM categories WHERE slug = 'elektronika';

-- Seed products for Ev və Bağ (Home & Garden)
INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Dekorativ Yastıq Dəsti', 'dekorativ-yastiq', '4 ədəd dekorativ yastıq dəsti. Müxtəlif rənglərdə mövcuddur.', 34.99, '/images/products/pillows.jpg', id, 60, false
FROM categories WHERE slug = 'ev-bag';

INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Seramik Vazo', 'seramik-vazo', 'Əl işi seramik vazo. Evinizə zəriflik qatır.', 44.99, '/images/products/vase.jpg', id, 25, true
FROM categories WHERE slug = 'ev-bag';

-- Seed products for İdman (Sports)
INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Yoga Xalçası', 'yoga-xalcasi', 'Sürüşməyə davamlı yoga xalçası. 6mm qalınlıq.', 24.99, '/images/products/yogamat.jpg', id, 80, false
FROM categories WHERE slug = 'idman';

INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'İdman Çantası', 'idman-cantasi', 'Su keçirməyən idman çantası. Geniş həcm.', 59.99, '/images/products/sportsbag.jpg', id, 45, true
FROM categories WHERE slug = 'idman';

INSERT INTO products (name, slug, description, price, image_url, category_id, stock, featured)
SELECT 'Qaçış Ayaqqabısı', 'qacis-ayaqqabisi', 'Yüngül və rahat qaçış ayaqqabısı. Hər səth üçün uyğun.', 89.99, '/images/products/shoes.jpg', id, 55, true
FROM categories WHERE slug = 'idman';
