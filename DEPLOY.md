# Deploy

Site publicado em **https://grama.josuedev.tech** (servidor `187.127.2.118`).

## Contexto do servidor

A máquina **já hospeda outro projeto** (`corretoras`), cujo **Traefik v3.6 ocupa
as portas 80 e 443**. Por isso:

- **Não use o `docker-compose.yml` da raiz.** Ele sobe um `jwilder/nginx-proxy`
  que tentaria tomar 80/443 e derrubaria o site que já está no ar.
- Use sempre **`docker-compose.deploy.yml`**, que se registra no Traefik
  existente por labels e publica também em `8080:3000` para conferência por IP.

O certificado TLS é emitido pelo resolver `letsencrypt` do próprio Traefik,
automaticamente, assim que o DNS resolver para o servidor.

## DNS

Um registro **A** é o suficiente:

```
grama.josuedev.tech.   A   187.127.2.118
```

Depois da propagação, o Traefik reemite o certificado sozinho na próxima
tentativa (poucos minutos). Para forçar, basta reiniciar o container:
`docker restart grama-web`.

## Publicar uma atualização

```bash
ssh -i ~/.ssh/id_ed25519 root@187.127.2.118
cd /opt/grama-web-git
git pull
NEXT_PUBLIC_SITE_URL="https://grama.josuedev.tech" NEXT_PUBLIC_INDEXAVEL=false \
  docker compose -f docker-compose.deploy.yml up -d --build
```

## Variáveis

| Variável | Efeito |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base de canonical, sitemap e Open Graph |
| `NEXT_PUBLIC_INDEXAVEL` | `true` libera a indexação; qualquer outro valor faz o `robots.txt` retornar `Disallow: /` |

São lidas **no build** (o Next embute valores `NEXT_PUBLIC_*` no bundle), então
mudá-las exige `--build`, não apenas reiniciar o container.

## Indexação

Hoje o site está com `noindex`, porque nome, telefone, e-mail e CNPJ ainda são
placeholders — ver os `TODO` em `src/helpers/contato.ts` e `src/helpers/seo.ts`.

Depois de preencher os dados reais, subir com `NEXT_PUBLIC_INDEXAVEL=true` e,
em seguida, cadastrar o site no Google Search Console enviando
`https://grama.josuedev.tech/sitemap.xml`.
