export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image?: string;
    author: string;
    date: string; // ISO string
}

export const posts: Post[] = [
    {
        id: "1",
        title: "Bem-vindo ao Blog Moderno",
        slug: "bem-vindo-ao-blog-moderno",
        excerpt: "Uma introdução ao novo blog moderno construído com Next.js, Tailwind CSS e shadcn UI.",
        content: "# Bem-vindo\n\nEste é o primeiro post do blog. Aqui você encontrará artigos sobre desenvolvimento web, design e tecnologia.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-11-20").toISOString(),
    },
    {
        id: "2",
        title: "Dominando o Shadcn UI",
        slug: "dominando-o-shadcn-ui",
        excerpt: "Um guia completo sobre a biblioteca de componentes shadcn UI e como personalizá-la.",
        content: "# Shadcn UI\n\nO Shadcn UI oferece um conjunto de componentes acessíveis e componíveis que podem ser facilmente personalizados para atender às necessidades do seu projeto. Neste artigo, exploraremos como começar e como tirar o máximo proveito dessa biblioteca incrível.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-11-18").toISOString(),
    },
    {
        id: "3",
        title: "Next.js 14: Novidades e Recursos",
        slug: "nextjs-14-novidades",
        excerpt: "Descubra as principais novidades e recursos do Next.js 14 e como eles podem melhorar seus projetos.",
        content: "# Next.js 14: O Futuro do Desenvolvimento Web\n\nO Next.js 14 trouxe uma série de melhorias de desempenho e novas funcionalidades que estão revolucionando o desenvolvimento web. Neste artigo, vamos explorar as principais atualizações e como você pode aproveitá-las em seus projetos.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-11-15").toISOString(),
    },
    {
        id: "4",
        title: "Tailwind CSS: Dicas e Truques",
        slug: "tailwind-css-dicas",
        excerpt: "Aprenda dicas e truques avançados para dominar o Tailwind CSS em seus projetos.",
        content: "# Dominando o Tailwind CSS\n\nO Tailwind CSS revolucionou a forma como estilizamos nossas aplicações web. Neste guia, compartilho dicas e truques que vão elevar seu nível de proficiência com essa ferramenta incrível.",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-11-10").toISOString(),
    },
    {
        id: "5",
        title: "TypeScript: Melhores Práticas",
        slug: "typescript-melhores-praticas",
        excerpt: "Conheça as melhores práticas para escrever código TypeScript limpo e eficiente.",
        content: "# TypeScript: Escrevendo Código de Qualidade\n\nO TypeScript se tornou essencial para o desenvolvimento web moderno. Neste artigo, compartilho as melhores práticas para escrever código TypeScript limpo, seguro e de fácil manutenção.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-11-05").toISOString(),
    },
    {
        id: "6",
        title: "Acessibilidade Web: Por que é Importante",
        slug: "acessibilidade-web-importancia",
        excerpt: "Entenda a importância da acessibilidade web e como implementá-la em seus projetos.",
        content: "# Acessibilidade Web: Incluindo Todos os Usuários\n\nA acessibilidade web não é apenas uma boa prática, é uma necessidade. Neste artigo, exploramos por que a acessibilidade é importante e como você pode tornar seus sites mais acessíveis para todos os usuários.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-10-28").toISOString(),
    },
    {
        id: "7",
        title: "O Futuro do Desenvolvimento Front-end",
        slug: "futuro-frontend",
        excerpt: "Tendências e previsões para o futuro do desenvolvimento front-end em 2025.",
        content: "# O Amanhã do Front-end\n\nO desenvolvimento front-end está em constante evolução. Neste artigo, exploramos as tendências e tecnologias que estão moldando o futuro do desenvolvimento web e como se preparar para as mudanças que estão por vir.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-10-20").toISOString(),
    },
    {
        id: "8",
        title: "Otimização de Desempenho em Aplicações Web",
        slug: "otimizacao-desempenho-web",
        excerpt: "Técnicas avançadas para melhorar o desempenho de suas aplicações web.",
        content: "# Otimização de Desempenho: Velocidade é Tudo\n\nEm um mundo onde cada segundo conta, a otimização de desempenho é crucial. Neste guia, mostro as melhores práticas e técnicas para tornar suas aplicações web mais rápidas e eficientes.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        author: "admin",
        date: new Date("2025-10-15").toISOString(),
    }
];

// Utility functions for demo purposes (in-memory)
export function listPosts(): Post[] {
    return posts.slice().sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostById(id: string): Post | undefined {
    return posts.find((p) => p.id === id);
}

export function getPostBySlug(slug: string): Post | undefined {
    return posts.find((p) => p.slug === slug);
}

export function listPostsByAuthor(author: string): Post[] {
    return posts.filter((p) => p.author === author).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function createPost(data: Omit<Post, "id" | "date">): Post {
    const id = String(posts.length + 1);
    const date = new Date().toISOString();
    const post: Post = { id, date, ...data };
    posts.unshift(post);
    return post;
}
