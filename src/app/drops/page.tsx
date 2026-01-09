import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Drops() {

    const collectionDates: Record<string, string> = {
        "Void Genesis": "DEC 12, 2024",
        "Urban Drifter": "NOV 05, 2024",
        "Neon Nights": "OCT 20, 2024",
    };

    return (
        <main className="min-h-screen bg-deep-black font-sans selection:bg-accent-purple selection:text-warm-white">
            <Navigation />

            <div className="pt-32 px-4 pb-24 max-w-[1200px] mx-auto">
                {Object.entries(
                    products.reduce((acc, product) => {
                        const collection = product.collection || "Unclassified";
                        if (!acc[collection]) acc[collection] = [];
                        acc[collection].push(product);
                        return acc;
                    }, {} as Record<string, typeof products>)
                ).map(([collectionName, collectionProducts]) => (
                    <div key={collectionName} className="mb-24 last:mb-0">
                        <div className="flex items-end justify-between mb-8 border-b border-secondary-border pb-4">
                            <h2 className="text-2xl font-light text-warm-white">
                                {collectionName}
                            </h2>
                            <span className="text-xs tracking-[0.2em] text-secondary-gray uppercase">
                                Dropped {collectionDates[collectionName] || "N/A"}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                            {collectionProducts.map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
