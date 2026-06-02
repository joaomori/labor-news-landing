CREATE TABLE public.newspapers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  edition TEXT,
  edition_date DATE,
  description TEXT,
  pdf_url TEXT,
  cover_image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.newspapers TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.newspapers TO authenticated;
GRANT ALL ON public.newspapers TO service_role;

ALTER TABLE public.newspapers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published newspapers" ON public.newspapers
  FOR SELECT USING (published = true);

CREATE POLICY "Admins can manage all newspapers" ON public.newspapers
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can read all newspapers" ON public.newspapers
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_newspapers_updated_at
  BEFORE UPDATE ON public.newspapers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();