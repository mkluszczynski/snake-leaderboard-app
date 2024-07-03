import {TableCell, TableRow} from "@/components/ui/table";

export function ScoreTableRow({place, username, score, date}: Readonly<{place: string, username: string, score: string, date: string}>){
  return (
      <TableRow>
          <TableCell>
              {place}
          </TableCell>
          <TableCell>
              {username}
          </TableCell>
          <TableCell>
              {score}
          </TableCell>
          <TableCell>
                {date}
          </TableCell>
      </TableRow>
  );
}