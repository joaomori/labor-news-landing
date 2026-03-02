
## Área Admin para Cadastro de Notícias

### Pré-requisito
Conectar o Supabase (via Lovable Cloud ou projeto externo) para banco de dados e autenticação.

### 1. Banco de Dados (Migrations)

**Tabela `news`:**
- `id` (uuid, PK)
- `title` (text, not null)
- `excerpt` (text)
- `content` (text)
- `category` (text)
- `image_url` (text)
- `featured` (boolean, default false)
- `published` (boolean, default false)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)
- `author_id` (uuid, FK para auth.users)

**Tabela `user_roles`:**
- Seguindo o padrão de segurança com enum `app_role` ('admin', 'user')
- Função `has_role()` com SECURITY DEFINER
- RLS policies: apenas admins podem criar/editar/deletar notícias; leitura pública para notícias publicadas

### 2. Autenticação

**Página `/login`:**
- Formulário de email/senha com Supabase Auth
- Redirecionamento para `/admin` após login bem-sucedido

**Proteção de rotas:**
- Componente `ProtectedRoute` que verifica autenticação e role admin
- Hook `useAuth` para gerenciar sessão

### 3. Área Admin (`/admin`)

**Layout:**
- Sidebar com navegação (Dashboard, Notícias, Sair)
- Header com nome do usuário

**Dashboard (`/admin`):**
- Contadores: total de notícias, publicadas, rascunhos
- Lista das últimas notícias cadastradas

**Gerenciamento de Notícias (`/admin/news`):**
- Tabela listando todas as notícias com status, categoria, data
- Botões de ação: Editar, Excluir, Publicar/Despublicar
- Botão "Nova Notícia"

**Formulário de Notícia (`/admin/news/new` e `/admin/news/:id/edit`):**
- Campos: Título, Resumo, Conteúdo, Categoria (select), URL da imagem, Destaque (switch), Publicado (switch)
- Validação com Zod
- Salvamento via Supabase

### 4. Frontend Público

- Atualizar `NewsSection` e `Hero` para buscar notícias do banco de dados em vez de dados estáticos
- Hook `useNews` com React Query para fetch das notícias publicadas

### 5. Arquivos a criar/modificar

| Arquivo | Ação |
|---|---|
| `src/integrations/supabase/` | Gerado automaticamente |
| `src/hooks/useAuth.tsx` | Criar - hook de autenticação |
| `src/hooks/useNews.tsx` | Criar - hook para buscar notícias |
| `src/components/ProtectedRoute.tsx` | Criar - proteção de rota admin |
| `src/pages/Login.tsx` | Criar - página de login |
| `src/pages/admin/Dashboard.tsx` | Criar - painel admin |
| `src/pages/admin/NewsList.tsx` | Criar - listagem de notícias |
| `src/pages/admin/NewsForm.tsx` | Criar - formulário de notícia |
| `src/pages/admin/AdminLayout.tsx` | Criar - layout do admin |
| `src/App.tsx` | Modificar - adicionar rotas |
| `src/components/NewsSection.tsx` | Modificar - dados dinâmicos |
| `src/components/Hero.tsx` | Modificar - dados dinâmicos |

### Detalhes Técnicos
- Validação de inputs com Zod no formulário
- React Query para cache e refetch de dados
- RLS no Supabase garante segurança server-side
- Role admin verificada via função `has_role()` com SECURITY DEFINER (sem verificação client-side)
