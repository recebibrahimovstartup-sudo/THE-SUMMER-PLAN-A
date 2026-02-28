export type Locale = 'az' | 'en'

export const translationsMap = {
  // Navigation
  'nav.home': { az: 'Ana Səhifə', en: 'Home' },
  'nav.categories': { az: 'Kateqoriyalar', en: 'Categories' },
  'nav.cart': { az: 'Səbət', en: 'Cart' },
  'nav.account': { az: 'Hesab', en: 'Account' },
  'nav.login': { az: 'Daxil ol', en: 'Login' },
  'nav.signup': { az: 'Qeydiyyat', en: 'Sign Up' },
  'nav.logout': { az: 'Çıxış', en: 'Logout' },
  'nav.orders': { az: 'Sifarişlər', en: 'Orders' },
  'nav.search': { az: 'Axtar...', en: 'Search...' },

  // Homepage
  'home.hero.title': { az: 'ShopAZ-a Xoş Gəlmisiniz', en: 'Welcome to ShopAZ' },
  'home.hero.subtitle': {
    az: 'Ən yaxşı məhsulları kəşf edin',
    en: 'Discover the best products',
  },
  'home.hero.cta': { az: 'Alış-verişə Başla', en: 'Start Shopping' },
  'home.featured': { az: 'Seçilmiş Məhsullar', en: 'Featured Products' },
  'home.categories': { az: 'Kateqoriyalar', en: 'Categories' },
  'home.viewAll': { az: 'Hamısına Bax', en: 'View All' },

  // Products
  'product.addToCart': { az: 'Səbətə Əlavə Et', en: 'Add to Cart' },
  'product.outOfStock': { az: 'Stokda Yoxdur', en: 'Out of Stock' },
  'product.inStock': { az: 'Stokda Var', en: 'In Stock' },
  'product.description': { az: 'Təsvir', en: 'Description' },
  'product.price': { az: 'Qiymət', en: 'Price' },
  'product.featured': { az: 'Seçilmiş', en: 'Featured' },

  // Cart
  'cart.title': { az: 'Alış-veriş Səbəti', en: 'Shopping Cart' },
  'cart.empty': { az: 'Səbətiniz boşdur', en: 'Your cart is empty' },
  'cart.total': { az: 'Cəmi', en: 'Total' },
  'cart.checkout': { az: 'Ödəniş Et', en: 'Checkout' },
  'cart.remove': { az: 'Sil', en: 'Remove' },
  'cart.continueShopping': { az: 'Alış-verişə Davam Et', en: 'Continue Shopping' },
  'cart.quantity': { az: 'Miqdar', en: 'Quantity' },
  'cart.subtotal': { az: 'Ara Cəm', en: 'Subtotal' },
  'cart.items': { az: 'məhsul', en: 'items' },

  // Auth
  'auth.login': { az: 'Daxil Ol', en: 'Login' },
  'auth.signup': { az: 'Qeydiyyatdan Keç', en: 'Sign Up' },
  'auth.email': { az: 'E-poçt', en: 'Email' },
  'auth.password': { az: 'Şifrə', en: 'Password' },
  'auth.repeatPassword': { az: 'Şifrəni Təkrarla', en: 'Repeat Password' },
  'auth.fullName': { az: 'Ad Soyad', en: 'Full Name' },
  'auth.loginDesc': { az: 'Hesabınıza daxil olun', en: 'Sign in to your account' },
  'auth.signupDesc': { az: 'Yeni hesab yaradın', en: 'Create a new account' },
  'auth.noAccount': { az: 'Hesabınız yoxdur?', en: "Don't have an account?" },
  'auth.hasAccount': { az: 'Artıq hesabınız var?', en: 'Already have an account?' },
  'auth.loginWithGoogle': { az: 'Google ilə Daxil Ol', en: 'Login with Google' },
  'auth.or': { az: 'və ya', en: 'or' },
  'auth.signingIn': { az: 'Daxil olunur...', en: 'Signing in...' },
  'auth.creatingAccount': { az: 'Hesab yaradılır...', en: 'Creating account...' },
  'auth.signupSuccess': { az: 'Qeydiyyat uğurlu oldu!', en: 'Sign up successful!' },
  'auth.checkEmail': {
    az: 'E-poçtunuzu yoxlayın və hesabınızı təsdiqləyin.',
    en: 'Please check your email to confirm your account.',
  },
  'auth.error': { az: 'Xəta baş verdi', en: 'An error occurred' },

  // Checkout
  'checkout.title': { az: 'Ödəniş', en: 'Checkout' },
  'checkout.success': { az: 'Ödəniş Uğurlu!', en: 'Payment Successful!' },
  'checkout.successDesc': {
    az: 'Sifarişiniz qəbul edildi. Təşəkkür edirik!',
    en: 'Your order has been placed. Thank you!',
  },

  // Account
  'account.title': { az: 'Hesabım', en: 'My Account' },
  'account.profile': { az: 'Profil', en: 'Profile' },
  'account.orderHistory': { az: 'Sifariş Tarixçəsi', en: 'Order History' },
  'account.noOrders': { az: 'Hələ sifarişiniz yoxdur', en: 'No orders yet' },
  'account.save': { az: 'Yadda Saxla', en: 'Save' },
  'account.phone': { az: 'Telefon', en: 'Phone' },
  'account.address': { az: 'Ünvan', en: 'Address' },

  // Footer
  'footer.rights': { az: 'Bütün hüquqlar qorunur', en: 'All rights reserved' },
  'footer.about': { az: 'Haqqımızda', en: 'About Us' },
  'footer.contact': { az: 'Əlaqə', en: 'Contact' },
  'footer.privacy': { az: 'Gizlilik', en: 'Privacy' },
  'footer.terms': { az: 'Şərtlər', en: 'Terms' },

  // General
  'general.loading': { az: 'Yüklənir...', en: 'Loading...' },
  'general.error': { az: 'Xəta baş verdi', en: 'An error occurred' },
  'general.currency': { az: 'AZN', en: 'AZN' },
} as const

export type TranslationKey = keyof typeof translationsMap

type TranslationRecord = Record<TranslationKey, string>

export const translations: Record<Locale, TranslationRecord> = {
  az: Object.fromEntries(
    Object.entries(translationsMap).map(([key, val]) => [key, val.az]),
  ) as TranslationRecord,
  en: Object.fromEntries(
    Object.entries(translationsMap).map(([key, val]) => [key, val.en]),
  ) as TranslationRecord,
}
