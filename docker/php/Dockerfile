FROM php:7.0-fpm
MAINTAINER ALEXANDER POBEREZNICHENKO <apobereznichenko@gmail.com>
# Install modules

RUN apt-get update && apt-get install -y \
    libicu-dev \
    libpq-dev \

    && pecl install xdebug-2.4.0RC2 \
    && docker-php-ext-enable opcache \
    && docker-php-ext-install intl pdo_pgsql

COPY ./php.ini /usr/local/etc/php/

CMD ["php-fpm"]

