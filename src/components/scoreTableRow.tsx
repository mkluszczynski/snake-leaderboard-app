import {TableCell, TableRow} from "@/components/ui/table";

export function ScoreTableRow({place, username, score, date}: Readonly<{place: string, username: string, score: string, date: string}>){

   const dateObj = new Date(date);

    const parsedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

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
                {parsedDate}
          </TableCell>
      </TableRow>
  );
}