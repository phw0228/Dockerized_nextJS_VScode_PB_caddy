/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IyhtSCvEaUV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Board() {
  return (
    <div className="bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Income</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Team Leader</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Project Phoenix</TableCell>
              <TableCell>10:00 - 18:00</TableCell>
              <TableCell>$4,200</TableCell>
              <TableCell>15</TableCell>
              <TableCell>Jane Doe</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Today Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Time Tracked</p>
                <p>00:00</p>
              </div>
              <div>
                <p className="font-medium">Revenue</p>
                <p>$0.00</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline">Edit</Button>
          </CardFooter>
        </Card>
        <div>
          <h2 className="text-xl font-semibold mb-2">History</h2>
          <div className="border p-4">
            <p className="mb-2">24,000.00</p>
            <p>08:00 - 19:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

