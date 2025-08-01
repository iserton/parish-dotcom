FROM alpine:latest

# Instalacja lighttpd
RUN apk add --no-cache lighttpd && \
    mkdir -p /var/www

# Kopiowanie plików
COPY index.html /var/www/index.html
COPY public /var/www/public
COPY lighttpd.conf /etc/lighttpd/lighttpd.conf

# Nadanie praw własności dla użytkownika lighttpd
RUN chown -R lighttpd:lighttpd /var/www

EXPOSE 80

CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]