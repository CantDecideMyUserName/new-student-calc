import React from 'react'

const DrLilaDesc = () => {
    return (
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👩‍🎓</span>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Dr. Lila Sharma
                    </h3>
                    <p className="text-gray-600 mb-2">
                        UK Education Policy Specialist
                    </p>
                    <p className="text-gray-600">
                        With over 15 years of experience in UK education policy and
                        student finance, Dr. Sharma founded Student Loan Calculator UK to
                        help students navigate the complex world of student loans.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DrLilaDesc