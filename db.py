import pymysql

# MySQL 데이터베이스 연결
db = pymysql.connect(host='127.0.0.1', user='root', password='1234', db='shop', charset='utf8')

# 데이터에 접근
cursor = db.cursor()

# SQL query 작성
sql = "select * from users"

# SQL query 실행
cursor.execute(sql)

# Database 닫기
db.close()