# Utiliser une image officielle PHP avec Apache
FROM php:8.2-apache

# Copier les fichiers de l'application
COPY . /var/www/html/

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_mysql

# Exposer le port 8080 (attendu par Fly.io)
EXPOSE 8080

# Commande pour démarrer Apache
CMD ["apache2-foreground"]
