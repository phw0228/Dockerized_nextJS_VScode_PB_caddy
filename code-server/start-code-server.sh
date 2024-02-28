#!/bin/bash

# 환경 변수 DOMAIN이 설정되어 있지 않으면, 스크립트 종료
if [ -z "$DOMAIN" ]; then
    echo "DOMAIN environment variable is not set."
    exit 1
fi

# SSL/TLS 인증서 경로 설정
CERT="/data/caddy/certificates/acme.zerossl.com-v2-dv90/${DOMAIN}/${DOMAIN}.crt"
CERT_KEY="/data/caddy/certificates/acme.zerossl.com-v2-dv90/${DOMAIN}/${DOMAIN}.key"

# /config 디렉토리가 없으면 생성
if [ ! -d "/config" ]; then
    mkdir -p /config
fi

# config.yaml 파일이 존재하지 않으면 기본 설정으로 생성
if [ ! -f "/config/config.yaml" ]; then
    echo "bind-addr: 0.0.0.0:8080" > /config/config.yaml
    echo "auth: password" >> /config/config.yaml
    echo "password: \"$PASSWORD\"" >> /config/config.yaml # 비밀번호 설정
    echo "cert: \"$CERT\"" >> /config/config.yaml
    echo "cert-key: \"$CERT_KEY\"" >> /config/config.yaml
fi

# 작업 디렉토리로 이동
cd /home/app

# code-server 시작
exec /usr/bin/entrypoint.sh --bind-addr "0.0.0.0:8080" "$@"

