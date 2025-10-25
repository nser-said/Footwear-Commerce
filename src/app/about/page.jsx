"use client";

export default function AboutUs() {
  return (
    <main className="flex-grow bg-background-light dark:bg-background-dark font-display text-black dark:text-white">
      {/* Section: Intro */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
              About Footwear Emporium
            </h1>
            <p className="mt-4 text-lg text-black/60 dark:text-white/60">
              Crafting quality footwear since 2010. We believe in style,
              comfort, and durability that steps with you.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Our Story */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB93VUCKSpdR8Q4WKDeB_qCxxwH1hG9nWHAURIKAyOGkg-JuGLGPLEs2HnE6kCn8OAL781VUkRvfQY4FjIPw-0AHTRYQA9DVj62s4IH_Vf6Z1oqJNLaljbxSBvKBSI6k36Dl8WWOXImFjbsLbbhRoqxCvhgjKWzsUPqPDMp6-xA9lS2_N_vf7qBinnZ7kGhWR3cR3JemCch9dPYKqBCDt9p0vFKQ_tVlk6gfuwoqkB653760bZVZ2w4azW1bpD-lVl6YThZwtA4hqs8"
                alt="Shoe crafting process"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-black/70 dark:text-white/70 leading-relaxed mb-6">
                Founded on a passion for exceptional footwear, Footwear Emporium
                started as a small workshop dedicated to reviving the art of
                shoemaking. We've grown into a brand synonymous with quality,
                combining timeless designs with modern innovation. Our journey
                is paved with a commitment to craftsmanship and a deep respect
                for the materials we use. Each pair of shoes tells a story of
                dedication, from the initial sketch to the final stitch.
              </p>
              <button className="bg-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                Discover Our History
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mission & Values */}
      <section className="bg-white dark:bg-black/20 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-black/60 dark:text-white/60">
              We are driven by a simple yet powerful mission: to provide our
              customers with footwear that doesn't just look good, but feels
              great and lasts long. Our values are the bedrock of our company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Craftsmanship */}
            <div className="text-center p-8 rounded-xl bg-background-light dark:bg-background-dark shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20 mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l4.293 4.293a1 1 0 010 1.414L12 20m8-8l-2.293-2.293a1 1 0 00-1.414 0L12 14l-4.293-4.293a1 1 0 00-1.414 0L4 12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
              <p className="text-black/60 dark:text-white/60">
                Every stitch matters. We use only the finest materials and
                artisanal techniques to ensure superior quality.
              </p>
            </div>

            {/* Innovative Design */}
            <div className="text-center p-8 rounded-xl bg-background-light dark:bg-background-dark shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20 mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovative Design</h3>
              <p className="text-black/60 dark:text-white/60">
                We blend classic styles with contemporary trends to create
                footwear that is both timeless and modern.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="text-center p-8 rounded-xl bg-background-light dark:bg-background-dark shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20 mx-auto mb-6">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-black/60 dark:text-white/60">
                Our customers are at the heart of everything we do. We strive to
                exceed expectations with every pair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Team */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <p className="mt-4 text-lg text-black/60 dark:text-white/60">
              The passionate individuals behind our brand. A group of designers,
              artisans, and dreamers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7g0O31Ay7Uh7XZ7V89YCiCFlhZ6yD_q7-R0koiWe5PfJTXj82RrgxADug4TEyRJOx3yNrE-oL66xSFDEyp43ESNC78q8I0Ra6sZMI_i2lkGfWiEQg22H0_aiQgbfm1GwhEfgQf8EDn5xJ2lNDQGJwpO6ZX07bivDXFWJauwegZxTvpzsqHMYQthKKG6zavGh6RXxOaTVMLab5zinqu9i40JMO16cM5a0btCI_lMQUnTIaXrbCceq8-oSB3KUMUlv92zJPXlLqZgio",
              },
              {
                name: " Garcia",
                role: "Head of Design",
                 img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLialQ6NtE4FBSRbcFzf7AL6oAydkwOTyEsoPkWrMOpgI94V1ksPomVt-p2YxVFhhyJwnVUxzQs_uVGa8Rfffcy2R-b0YS1NeJ4ahyIkKKab5nItSFIKbcKFFETI2x7nJ4LzM-rQBQ9Jzp_E_Yl34SHNJ-T5y2bAtEMycBRnkcfm2yZ7evUqgOL5ZXkaszZH_hrmHcotf9elH8dmt4ukDwauofmBtljv-yRQb4mEoTP9HMzPWOM04B4N-CnSWaB3We3_ds1wOGXEwB",
              
               
              },
              {
                name: "David Chen",
                role: "Lead Artisan",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLialQ6NtE4FBSRbcFzf7AL6oAydkwOTyEsoPkWrMOpgI94V1ksPomVt-p2YxVFhhyJwnVUxzQs_uVGa8Rfffcy2R-b0YS1NeJ4ahyIkKKab5nItSFIKbcKFFETI2x7nJ4LzM-rQBQ9Jzp_E_Yl34SHNJ-T5y2bAtEMycBRnkcfm2yZ7evUqgOL5ZXkaszZH_hrmHcotf9elH8dmt4ukDwauofmBtljv-yRQb4mEoTP9HMzPWOM04B4N-CnSWaB3We3_ds1wOGXEwB",
              },
              {
                name: "Sarah Miller",
                role: "Marketing Director",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs9NwBZsDKZ9cs_o0ce9BBVlV0HnaAttIZ3RlZ4lrQ1IV4w-wr-AUmjH2bL5Hlzq5jxpdCLz6busvDgmCasj_4f9J4Smfem8eb9Hv8N0CEkQLZIuLiiNWQeQNfs4XQX7o42WtYYuQDaGdo9nG_lbJ_U21xNSHsPCgPlabKsHIXpylr0ALzZDXuVCmRzJKS2VYp_yZ7MiMlOj3slK7hcL0dhRmi1eBAhJPvMSf_njvACowz5ZPRo4NthnjRxJoAs-LzWE2oKGS0FTFh",
              },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
