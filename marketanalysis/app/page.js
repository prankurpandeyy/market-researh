import { ResultsTable } from "./components/ResultTable";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <ResultsTable />
    </div>
  )
}

