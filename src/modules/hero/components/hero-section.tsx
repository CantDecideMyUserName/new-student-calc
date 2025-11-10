import Link from "next/link";

type CTA = {
  href: string;
  label: string;
  ariaLabel?: string;
  variant?: "primary" | "outline";
};

type HeroProps = {
  eyebrow?: string;
  brand?: string;
  title: string;
  subtitle?: string;
  note?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export default function Hero({
  brand = "Student Loan Calculator UK",
  title,
  subtitle = "Trusted tools, expert guides, and calculators built for UK students and graduates.",
  note = "No login required. Updated for 2025 UK loan rules.",
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <div className="container mx-auto px-4 mb-4 mt-4">
      <section
        className="bg-gradient-to-br from-[#1A4FCC] to-blue-700 text-white py-15 rounded-3xl shadow-lg"
        role="banner"
        aria-label="Main banner"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy + CTAs */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#3DDC97] rounded-lg flex items-center justify-center mr-3">
                  {/* Envelope icon */}
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-xl text-white/90 font-medium font-['Inter']">
                  {brand}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Inter'] leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-xl md:text-2xl mb-6 text-blue-100 font-['Open_Sans'] max-w-xl">
                  {subtitle}
                </p>
              )}

              {note && (
                <p className="text-blue-100 mb-8 font-['Open_Sans']">{note}</p>
              )}

              <div className="flex flex-wrap gap-4">
                <Link
                  href={primaryCta.href}
                  aria-label={primaryCta.ariaLabel ?? primaryCta.label}
                  className="bg-[#3DDC97] text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 text-lg flex items-center"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    aria-label={secondaryCta.ariaLabel ?? secondaryCta.label}
                    className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-lg flex items-center"
                  >
                    {secondaryCta.label}
                    <Spark className="w-5 h-5 ml-2" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right: Decorative graphic */}
            <div className="relative flex justify-center">
              <div
                className="absolute w-72 h-72 bg-[#3DDC97]/20 rounded-full animate-pulse"
                aria-hidden="true"
              />
              <div
                className="absolute w-80 h-80 border-4 border-[#F9A825]/30 rounded-full"
                aria-hidden="true"
              />
              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="relative z-10 bg-[#1A4FCC] bg-opacity-80 p-8 rounded-2xl shadow-xl">
                  <svg
                    className="w-40 h-40 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Envelope illustration"
                  >
                    <path
                      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Small inline icons --- */
function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
