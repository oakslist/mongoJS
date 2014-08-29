don't forget npm install libs!

to import json file:
mongoimport -d test -c grades grades.json
or
mongoimport -host localhost:27017 -db test -collection grades < c:\grades.json