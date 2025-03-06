import { Card, CardHeader, CardTitle } from "./_components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
