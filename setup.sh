# Do not listen on port 80
sudo sed -i 's/Listen 80$//' /etc/apache2/ports.conf
# Change port 80 to localhost:8080
sudo sed -i 's/<VirtualHost \*:80>/ServerName 127.0.0.1\n<VirtualHost \*:8080>/' /etc/apache2/sites-enabled/000-default.conf
# Start apache
apache2ctl start