import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function SavedQueryCard({ query }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-gray-500 mb-2">Query #{query.id}</p>
        <p className="text-gray-700 mb-4">{query.text}</p>
        <p className="text-xs text-gray-500">
          Last run: {new Date(query.lastRun).toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Run Again
        </Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="outline" size="sm">
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
export default SavedQueryCard;
