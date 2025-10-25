export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a')] bg-cover bg-center flex items-center justify-center">
      <div className="max-w-2xl text-center text-white bg-black/40 p-8 rounded-xl">
        <h1 className="text-5xl font-black leading-tight">Step Into Style</h1>
        <p className="mt-4 text-lg text-white/80">
          Discover the latest trends in footwear with our curated collection.
        </p>
        <button className="btn-primary mt-8">Shop Now</button>
      </div>
    </section>
  );
}
