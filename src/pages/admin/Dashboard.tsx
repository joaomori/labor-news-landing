import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Eye, FileText } from "lucide-react";

export default function Dashboard() {
  const { data: stats } = useQuery({
    queryKey: ["admin-news-stats"],
    queryFn: async () => {
      const { data: all } = await supabase.from("news").select("id, published");
      const total = all?.length ?? 0;
      const published = all?.filter((n) => n.published).length ?? 0;
      const drafts = total - published;
      return { total, published, drafts };
    },
  });

  const { data: recentNews } = useQuery({
    queryKey: ["admin-recent-news"],
    queryFn: async () => {
      const { data } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);
      return data ?? [];
    },
  });

  const statCards = [
    { label: "Total de Notícias", value: stats?.total ?? 0, icon: Newspaper },
    { label: "Publicadas", value: stats?.published ?? 0, icon: Eye },
    { label: "Rascunhos", value: stats?.drafts ?? 0, icon: FileText },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">Dashboard</h2>

      <div className="grid sm:grid-cols-3 gap-4">
        {statCards.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
              <s.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{s.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Últimas Notícias</CardTitle>
        </CardHeader>
        <CardContent>
          {recentNews && recentNews.length > 0 ? (
            <div className="space-y-3">
              {recentNews.map((news) => (
                <div key={news.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{news.title}</p>
                    <p className="text-xs text-muted-foreground">{news.category} · {new Date(news.created_at).toLocaleDateString("pt-BR")}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${news.published ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                    {news.published ? "Publicada" : "Rascunho"}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">Nenhuma notícia cadastrada.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
