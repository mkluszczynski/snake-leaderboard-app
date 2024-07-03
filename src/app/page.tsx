import Image from "next/image";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ScoreTableRow} from "@/components/scoreTableRow";

type ScoreDto = {
    id: number;
    user: {
        id: number;
        username: string;
    };
    value: number;
    date: string;
}

async function getScores(){
    const response = await fetch('https://snake-leaderboard.mkluszczynski.dev/scores?take=10&skip=0');

    if(!response.ok) return [{id: 1, user: {id: 1, username: 'error',}, value: 0, date: 'error'}]

    const data: ScoreDto[] = await response.json();
    return data;
}

export default async function Home() {
   const scores = await getScores();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <h1>snake-leaderboard-app</h1>
        <Table>
            <TableCaption>snake-leaderboard</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Place</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {scores.map((score: ScoreDto, index) => (
                    <ScoreTableRow
                        key={score.id}
                        place={(index + 1).toString()}
                        username={score.user.username}
                        score={score.value.toString()}
                        date={score.date}
                    />
                ))}

            </TableBody>
        </Table>
    </main>
  );
}
