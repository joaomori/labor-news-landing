import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";

const categories = [
  "Análises Clínicas",
  "Instrumentação",
  "Mercado",
  "Tecnologia",
  "Regulamentação",
  "Eventos",
  "Sustentabilidade",
  "Educação",
];

const newsSchema = z.object({
  title: z.string().trim().min(1, "Título obrigatório").max(200),
  excerpt: z.string().trim().max(500).optional().or(z.literal("")),
  content: z.string().trim().max(50000).optional().or(z.literal("")),
  category: z.string().optional().or(z.literal("")),
  image_url: z.string().optional().or(z.literal("")),
  featured: z.boolean(),
  published: z.boolean(),
});

type NewsFormValues = z.infer<typeof newsSchema>;

export default function NewsForm() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const form = useForm<NewsFormValues>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      image_url: "",
      featured: false,
      published: false,
    },
  });

  const { data: existingNews } = useQuery({
    queryKey: ["admin-news", id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase.from("news").select("*").eq("id", id).single();
      if (error) throw error;
      return data;
    },
    enabled: isEditing,
  });

  useEffect(() => {
    if (existingNews) {
      form.reset({
        title: existingNews.title,
        excerpt: existingNews.excerpt ?? "",
        content: existingNews.content ?? "",
        category: existingNews.category ?? "",
        image_url: existingNews.image_url ?? "",
        featured: existingNews.featured,
        published: existingNews.published,
      });
    }
  }, [existingNews, form]);

  const saveMutation = useMutation({
    mutationFn: async (values: NewsFormValues) => {
      const payload = {
        title: values.title,
        category: values.category || null,
        excerpt: values.excerpt || null,
        content: values.content || null,
        image_url: values.image_url || null,
        featured: values.featured,
        published: values.published,
        author_id: user?.id ?? null,
      };

      if (isEditing) {
        const { error } = await supabase.from("news").update(payload).eq("id", id!);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("news").insert([payload]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-news"] });
      toast({ title: isEditing ? "Notícia atualizada!" : "Notícia criada!" });
      navigate("/admin/news");
    },
    onError: () => {
      toast({ title: "Erro ao salvar", variant: "destructive" });
    },
  });

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/admin/news")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-heading font-bold text-foreground">
          {isEditing ? "Editar Notícia" : "Nova Notícia"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit((v) => saveMutation.mutate(v))} className="space-y-4">
          <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl><Input {...field} placeholder="Título da notícia" /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="excerpt" render={({ field }) => (
            <FormItem>
              <FormLabel>Resumo</FormLabel>
              <FormControl><Textarea {...field} placeholder="Breve resumo da notícia" rows={3} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="content" render={({ field }) => (
            <FormItem>
              <FormLabel>Conteúdo</FormLabel>
              <FormControl><Textarea {...field} placeholder="Conteúdo completo" rows={8} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="category" render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="image_url" render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              <FormControl>
                <ImageUpload value={field.value ?? ""} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="flex gap-8">
            <FormField control={form.control} name="featured" render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormLabel className="mt-0">Destaque</FormLabel>
                <FormControl><Switch checked={field.value} onCheckedChange={field.onChange} /></FormControl>
              </FormItem>
            )} />

            <FormField control={form.control} name="published" render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormLabel className="mt-0">Publicado</FormLabel>
                <FormControl><Switch checked={field.value} onCheckedChange={field.onChange} /></FormControl>
              </FormItem>
            )} />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={saveMutation.isPending}>
              {saveMutation.isPending ? "Salvando..." : "Salvar"}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate("/admin/news")}>
              Cancelar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
