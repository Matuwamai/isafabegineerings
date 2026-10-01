# Deploying to the Contabo VPS

The site is plain static files (HTML, CSS, JS, images), so the VPS only needs a web server. No Node.js, database
or backend. The site gets its own folder and its own Nginx config file, so the other projects on the VPS are not
touched.

Replace `USER` and `VPS_IP` below with the real SSH user and server IP.

## 1. Point the domain at the VPS

At the registrar where you bought `isafabengineering.co.ke`, open **DNS management** and add:

| Type | Name / Host | Value |
|---|---|---|
| A | `@` | `VPS_IP` |
| A | `www` | `VPS_IP` |

If the VPS has an IPv6 address, also add two `AAAA` records the same way. DNS can take from a few minutes up to a
few hours. Check it with `ping isafabengineering.co.ke`: it should show the VPS IP.

## 2. Check which web server the VPS uses

```bash
ssh USER@VPS_IP
sudo ss -tlnp | grep -E ':80 |:443 '
```

- If you see **nginx**, continue below.
- If you see apache2, caddy, traefik or docker-proxy instead, stop here: the config needs to be written for that server.

Also check the Nginx layout: `ls /etc/nginx`. Most servers have `sites-available/` and `sites-enabled/`
(used below). If there is only `conf.d/`, put the config file in `/etc/nginx/conf.d/` instead.

## 3. Create the site folder (on the VPS)

```bash
sudo mkdir -p /var/www/isafabengineering.co.ke
sudo chown -R $USER:$USER /var/www/isafabengineering.co.ke
```

## 4. Upload the site (from your computer, in this project folder)

```bash
DEPLOY_HOST=USER@VPS_IP npm run deploy
```

This builds the site and uploads `dist/` to the VPS folder with rsync.

## 5. Add the Nginx config

From your computer:

```bash
scp deploy/nginx-isafabengineering.co.ke.conf USER@VPS_IP:/tmp/
```

On the VPS:

```bash
sudo mv /tmp/nginx-isafabengineering.co.ke.conf /etc/nginx/sites-available/isafabengineering.co.ke
sudo ln -s /etc/nginx/sites-available/isafabengineering.co.ke /etc/nginx/sites-enabled/
sudo nginx -t            # must say "syntax is ok" and "test is successful"
sudo systemctl reload nginx
```

**Only reload if `nginx -t` passes.** If it fails, Nginx keeps running the old config and the other sites are
unaffected. Remove the symlink and ask for help.

## 6. Turn on HTTPS (after DNS from step 1 is working)

Certbot is probably already installed if the other projects use HTTPS (`certbot --version`). If not:
`sudo apt install certbot python3-certbot-nginx`.

```bash
sudo certbot --nginx -d isafabengineering.co.ke -d www.isafabengineering.co.ke --redirect
```

Certbot gets a free SSL certificate, adds HTTPS to this site's config only, and renews it automatically.

## 7. Check it

- https://isafabengineering.co.ke opens the site with a padlock
- https://www.isafabengineering.co.ke redirects to https://isafabengineering.co.ke
- https://isafabengineering.co.ke/services and /contact open directly
- A wrong address like /xyz shows the "Page not found" page

## Updating the site later

After any change, from your computer:

```bash
DEPLOY_HOST=USER@VPS_IP npm run deploy
```

Nothing needs to be restarted on the VPS.

## After launch

1. **Google Search Console** (search.google.com/search-console): add `isafabengineering.co.ke`, verify it, and
   submit `https://isafabengineering.co.ke/sitemap.xml`.
2. **Google Business Profile** (business.google.com): create a service-area business for Thika / Kiganjo, and add
   the website, phone and WhatsApp.
3. Add the website link to the Facebook, TikTok and Instagram bios.
