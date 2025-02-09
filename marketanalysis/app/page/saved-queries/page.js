import SavedQueryCard from "@/app/components/SavedQueryCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function SavedQueriesPage() {
  const savedQueries = [
    {
      id: 1,
      text: "Fetch top 5 laptops under $1000 from Amazon",
      lastRun: "2023-04-01T10:00:00Z",
    },
    {
      id: 2,
      text: "Compare smartphone prices on Flipkart and Amazon",
      lastRun: "2023-03-28T14:30:00Z",
    },
   
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Saved Queries</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Query
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {savedQueries.map((query) => (
          <SavedQueryCard key={query.id} query={query} />
        ))}
      </div>
    </div>
  );
}
