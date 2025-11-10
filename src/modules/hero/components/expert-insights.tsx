export default function ExpertInsights() {
  return (
    <section
      className="bg-blue-50 py-16 px-6 rounded-2xl"
      aria-labelledby="expert-panel-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="expert-panel-heading" className="text-3xl font-bold text-gray-800 mb-4">
            Expert Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get advice from financial experts and student loan specialists
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              emoji: "👨‍🎓",
              title: "Student Finance Expert",
              text: "Specializing in UK student loan regulations and repayment strategies",
            },
            {
              emoji: "💰",
              title: "Financial Advisor",
              text: "Helping graduates make smart financial decisions about their student loans",
            },
            {
              emoji: "📊",
              title: "Data Analyst",
              text: "Providing insights into student loan trends and repayment patterns",
            },
          ].map((card) => (
            <div key={card.title} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl" aria-hidden="true">
                  {card.emoji}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
