export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          The Market Research & Data Aggregator Tool is a powerful platform
          designed to help businesses and researchers gather and analyze market
          data from various sources. Our tool aggregates information from major
          e-commerce platforms, providing valuable insights into product trends,
          pricing strategies, and consumer preferences.
        </p>
        <p className="text-gray-700 mb-4">Key features of our tool include:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Real-time data scraping from multiple platforms</li>
          <li>Advanced filtering and sorting capabilities</li>
          <li>Customizable queries and saved searches</li>
          <li>
            Integration with Google Sheets for easy data export and analysis
          </li>
          <li>
            User-friendly interface for effortless navigation and data
            interpretation
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Whether you're a small business owner looking to understand your
          market position or a large corporation conducting extensive market
          research, our tool provides the data and insights you need to make
          informed decisions and stay ahead of the competition.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-4">
          Our mission is to democratize access to market data and empower
          businesses of all sizes with the information they need to thrive in
          today's competitive landscape. We strive to provide accurate,
          up-to-date, and actionable insights that drive growth and innovation.
        </p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions, feedback, or need support, please don't
          hesitate to reach out to our team at support@marketresearchtool.com.
        </p>
      </div>
    </div>
  );
}
