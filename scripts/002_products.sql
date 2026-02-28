CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name_az TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_az TEXT,
  description_en TEXT,
  price_in_cents INTEGER NOT NULL,
  category_id UUID REFERENCES categories(id),
  images TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read products" ON products FOR SELECT USING (true);
