import { PageLayout } from "@/components/PageLayout";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: news, isLoading } = useQuery({
    queryKey: ["news-detail", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id!)
        .eq("published", true)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/4 mb-8" />
          <Skeleton className="aspect-video w-full mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </PageLayout>
    );
  }

  if (!news) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Notícia não encontrada</h1>
          <Link to="/" className="btn-accent inline-block">Voltar ao Início</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-accent font-semibold text-sm mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Voltar às notícias
          </Link>

          {news.category && (
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-bold uppercase tracking-wide">{news.category}</span>
            </div>
          )}

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            {news.title}
          </h1>

          {news.excerpt && (
            <p className="text-lg text-muted-foreground mb-6">{news.excerpt}</p>
          )}

          <div className="flex items-center text-muted-foreground text-sm mb-8">
            <Clock className="w-4 h-4 mr-2" />
            {format(new Date(news.created_at), "dd 'de' MMMM 'de' yyyy, HH:mm", { locale: ptBR })}
          </div>

          {news.image_url && (
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img src={news.image_url} alt={news.title} className="w-full h-full object-cover" />
            </div>
          )}

          {news.content && (
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed whitespace-pre-line">
              {news.content}
            </div>
          )}
        </div>
      </article>
    </PageLayout>
  );
}
