import React from 'react'

export const SubscribeSection: React.FC = () => (
    <section className="px-1 py-6 bg-white">
        <div className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            {/* Left text */}
            <div className="flex-1">
                <p className="text-lg font-medium text-center sm:text-left max-w-md">
                    💡 Don’t miss out on the latest insights, update news, and tips!
                </p>
            </div>

            {/* Right form */}
            <form className="flex flex-col sm:flex-row items-center sm:items-center gap-2">
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="px-3 py-1 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                    required
                />
                <button
                    type="submit"
                    className="px-3 py-1 rounded-2xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                >
                    Subscribe
                </button>
                <label className="flex items-center text-sm text-gray-600 mt-0.5 sm:mt-0">
                    <input type="checkbox" className="mr-1" />
                    By submitting this form you agree to our{' '}
                    <a href="/" className="underline ml-1">
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/" className="underline ml-1">
                        Terms of Service
                    </a>
                </label>
            </form>
        </div>
    </section>
)
