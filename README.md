# Fino

Plataforma de faturamento e cobrança automática para pequenos negócios, construída com **Astro 4.x** e **TypeScript**.

## 🚀 Características

- ⚡ **Performance**: Otimizado com Astro para máxima velocidade
- 🔍 **SEO**: Estrutura semântica e metadados otimizados
- 📱 **Responsivo**: Design adaptável para todos os dispositivos
- 🎨 **Tailwind CSS**: Estilização moderna (opcional)
- 🧪 **Testes**: Configurado com Vitest e Playwright
- 🚀 **Deploy**: GitHub Actions para GitHub Pages e Netlify

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fino.git
cd fino

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🛠️ Scripts Disponíveis

| Comando            | Descrição                                |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento     |
| `npm run build`    | Gera build de produção                   |
| `npm run preview`  | Visualiza o build de produção localmente |
| `npm run format`   | Formata o código com Prettier            |
| `npm run test`     | Executa testes unitários                 |
| `npm run test:ui`  | Executa testes com interface visual      |
| `npm run test:e2e` | Executa testes end-to-end                |

## 🎨 Tailwind CSS

O Tailwind CSS está configurado mas **desabilitado por padrão**. Para habilitar:

1. Descomente a linha `tailwind()` no arquivo `astro.config.mjs`
2. Execute `npm install` para instalar as dependências
3. Remova os estilos inline dos componentes

## 📁 Estrutura do Projeto

```
fino/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── layouts/        # Layouts base
│   └── pages/          # Páginas do site
├── public/             # Arquivos estáticos
├── .github/            # GitHub Actions
└── astro.config.mjs    # Configuração do Astro
```

## 🚀 Deploy

### GitHub Pages (Automático)

O projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Netlify (Opcional)

Para deploy no Netlify:

1. Configure as variáveis de ambiente no GitHub:
   - `NETLIFY_AUTH_TOKEN`: Token de autenticação do Netlify
   - `NETLIFY_SITE_ID`: ID do site no Netlify

2. O GitHub Actions detectará automaticamente e fará deploy no Netlify.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

Desenvolvido com ❤️ usando [Astro](https://astro.build)
