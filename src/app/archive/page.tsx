import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Archive() {
    // Filter for archived items
    const archivedProducts = products.filter(p => p.status === 'archived');

    return (
        <main className="min-h-screen bg-deep-black font-sans selection:bg-accent-purple selection:text-warm-white">
            <Navigation />

            <div className="pt-32 px-4 pb-24 max-w-[1200px] mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-light mb-6 text-secondary-gray">
                        Archive
                    </h1>
                    <p className="text-secondary-gray/60 max-w-md mx-auto text-sm leading-relaxed">
                        Past collections and prototypes. Preserved for reflection.
                        <br />
                        <span className="text-secondary-gray/40 text-xs mt-2 inline-block tracking-widest">UNAVAILABLE FOR PURCHASE</span>
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {archivedProducts.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
