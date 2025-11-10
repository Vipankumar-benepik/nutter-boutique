import heroImage from "@/assets/hero-dry-fruits.jpg";
import raisinsImage from "@/assets/raisins.jpg";
import almondsImage from "@/assets/almonds.jpg";
import datesImage from "@/assets/dates.jpg";
import mixedNutsImage from "@/assets/mixed-nuts.jpg";
import a from "@/assets/a.jpg"
import b from "@/assets/b.jpg"
import c from "@/assets/c.jpg"
import d from "@/assets/d.jpg"
import aa from "@/assets/aa.jpg"

import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={aa}
          alt="Premium Dry Fruits Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Premium Dry Fruits
            </h1>
            <p className="text-xl md:text-2xl">
              Nature's Finest Selection, Delivered Fresh
            </p>
          </div>
        </div>
      </section>

      {/* Product Section 1 */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={a}
              alt="Golden Raisins"
              className="w-full h-[800px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Golden Raisins</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our premium golden raisins are sun-dried to perfection, preserving their natural sweetness
              and nutritional value. Rich in antioxidants and essential minerals, these delicious treats
              are perfect for snacking or adding to your favorite recipes.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section 2 */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:order-1">
            <h2 className="text-4xl font-bold text-foreground">Premium Almonds</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sourced from the finest orchards, our almonds are packed with protein, healthy fats,
              and vitamin E. Each almond is carefully selected to ensure superior quality and taste.
              A perfect choice for a nutritious and satisfying snack.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg md:order-2">
            <img
              src={b}
              alt="Premium Almonds"
              className="w-full h-[800px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Section 3 */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={c}
              alt="Fresh Dates"
              className="w-full h-[800px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Fresh Dates</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the natural sweetness of our premium dates. Handpicked at peak ripeness,
              these nutrient-dense fruits are an excellent source of fiber, potassium, and natural
              energy. Perfect for a quick energy boost or as a natural sweetener.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section 4 */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-muted">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 md:order-1">
            <h2 className="text-4xl font-bold text-foreground">Mixed Nuts Collection</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our signature mix combines cashews, walnuts, and more for the ultimate healthy snacking
              experience. Each variety brings unique flavors and health benefits, from heart-healthy
              omega-3s to brain-boosting nutrients. Perfectly balanced for your wellness.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg md:order-2">
            <img
              src={d}
              alt="Mixed Nuts"
              className="w-full h-[800px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Sub-Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <MapPin className="w-5 h-5" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm opacity-90">123 Organic Street, Fresh City, FC 12345</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Mail className="w-5 h-5" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm opacity-90">contact@dryfruits.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Phone className="w-5 h-5" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm opacity-90">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
