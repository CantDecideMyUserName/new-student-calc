import Link from "next/link";

export default function WhyTrust() {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 rounded-3xl shadow-sm mt-12"
      aria-labelledby="trust-heading"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#1A4FCC] font-medium text-sm mb-4 font-['Inter']">
          TRUSTED BY THOUSANDS
        </span>
        <h2
          id="trust-heading"
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Poppins']"
        >
          Why Trust Our Calculators
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Roboto']">
          Backed by research, built with clarity, loved by thousands of UK students
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white rounded-2xl shadow-md p-10 mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1A4FCC] via-[#3DDC97] to-[#F9A825]" />
        <div className="absolute -right-8 -bottom-8 text-[#3DDC97] opacity-10" aria-hidden="true">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-700 font-['Open_Sans'] italic mb-8 max-w-4xl mx-auto">
            &quot;The loan comparison calculator helped me understand exactly how Plan 5 would affect my
            future finances compared to Plan 2. I was able to make an informed decision about my
            postgraduate studies thanks to these tools.&quot;
          </p>

          <div className="flex items-center justify-center mb-2">
            <div className="flex text-[#F9A825]" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-[#1A4FCC]/10 rounded-full flex items-center justify-center mr-3">
              <span className="text-[#1A4FCC] font-bold">JD</span>
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800">James Davies</p>
              <p className="text-gray-500 text-sm">MSc Student, University of Manchester</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-8 group relative overflow-hidden">
          <div className="absolute -right-6 -top-6 bg-[#F9A825] w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="text-[#F9A825] mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-['Inter']">Trusted by Students</h3>
          <div className="flex mb-4">
            <div className="flex text-[#F9A825]" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-600 font-['Open_Sans']">
            Thousands of UK students rely on our calculators to plan their finances and understand their loan repayments.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center bg-white p-6 rounded-xl shadow-sm">
          <div className="text-[#1A4FCC] mb-4 flex justify-center" aria-hidden="true">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Inter']">Data Transparency</h3>
          <p className="text-gray-600 font-['Open_Sans']">
            Our calculators use the latest official data from Student Finance England, Student Loans Company, and HMRC.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center bg-white p-6 rounded-xl shadow-sm">
          <div className="text-[#3DDC97] mb-4 flex justify-center" aria-hidden="true">
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Inter']">UK-Specific</h3>
          <p className="text-gray-600 font-['Open_Sans']">
            Built specifically for UK student loans, with attention to the unique rules and thresholds for each nation.
          </p>
        </div>
      </div>

      {/* CTA Links */}
      <div className="text-center mt-8">
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/about"
            className="text-[#1A4FCC] font-medium hover:text-blue-800 inline-flex items-center"
          >
            About Us
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link
            href="/faqs"
            className="text-[#1A4FCC] font-medium hover:text-blue-800 inline-flex items-center"
          >
            FAQs
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
