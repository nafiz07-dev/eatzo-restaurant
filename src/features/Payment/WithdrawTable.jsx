import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function WithdrawTable({ tableContent }) {
  return (
    <Table>
      <TableCaption>A list of all the income before last withdraw</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Item</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Time</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableContent.map((content, key) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{content.title}</TableCell>
            <TableCell>x{content.quantity}</TableCell>
            <TableCell>{content.time}</TableCell>
            <TableCell className="text-right">{content.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{"৳2,500.00"}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default WithdrawTable;
