npm install mysql
sudo apt-get install mariadb-server
sudo mysql_secure_installation
Change the root password? [Y/n] n

sudo systemctl stop mariadb
sudo nano /etc/mysql/mariadb.conf
24行目
port = 3003

sudo mysql -u root -p
create database yoshida;
use yoshida

GRANT ALL PRIVILEGES ON *.* TO yoshida@localhost IDENTIFIED BY 'yoshida' WITH GRANT OPTION;
