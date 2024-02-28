# 기본 이미지로 Alpine Linux를 기반으로 하는 Nginx 1.19 사용
FROM caddy:2-alpine

RUN apk add --no-cache gettext
RUN apk add --no-cache vim

# ARG 정의
ARG DOMAIN
ARG EMAIL

ENV DOMAIN=$DOMAIN
ENV ACME_EMAIL=$EMAIL

# 사용자 정의 Caddyfile 설정 파일 복사
COPY caddy/Caddyfile.temp /etc/caddy/Caddyfile.temp
RUN envsubst < /etc/caddy/Caddyfile.temp > /etc/caddy/Caddyfile && \
    rm /etc/caddy/Caddyfile.temp

RUN caddy fmt --overwrite /etc/caddy/Caddyfile

WORKDIR /etc/caddy

# Caddy 실행
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
