#!/bin/bash

##批量备份mysql数据库脚本

cd `dirname $0`
BIN_DIR=`pwd`
cd ..
DEPLOY_DIR=`pwd`

##帐号
USER=dumper
##密码
PASSWD=dumper@412319
##文件存储路径
STORED_DIR=$DEPLOY_DIR/storage

## IP地址和端口
HOST=192.168.1.98
PORT=13308

CONNECT_PARAM="-u ${USER} -p${PASSWD} -h ${HOST} -P ${PORT}"
# CONNECT_PARAM="-u ${USER} -p${PASSWD} "
MYSQL_LOGIN="mysql ${CONNECT_PARAM}"

MYSQL_DUMP="mysqldump ${CONNECT_PARAM}  -B -e -R --single-transaction"
DATABASES=`${MYSQL_LOGIN} -e "show databases" |egrep -vi "sys|_schema" `
CURRENT_DATE=$(date +%Y%m%d)

##判断是否存在备份路径，如果不存在，则新建一个
if [ ! -e "${STORED_DIR}/${CURRENT_DATE}" ];then
  mkdir -vp "${STORED_DIR}/${CURRENT_DATE}"
fi

for dbname in $DATABASES
  do
   `$MYSQL_DUMP $dbname|gzip >${STORED_DIR}/${CURRENT_DATE}/${dbname}_${CURRENT_DATE}.sql.gz`
done

#
# ##将77上备份的数据scp到98
# remoteStoragePath=/mnt/DatabaseBackup/
# remoteUser=tsie
# remotehost=192.168.1.98
# remotePort=21911
# `scp -P $remotePort -r  ./storage/$CURRENT_DATE ${remoteUser}@${remotehost}:$remoteStoragePath`
#
#
#
#
# ###本地文件保留30天
# stdStorageDay=30  ##文件保存天数
# storageDateArrays=`ls ./storage`   ##文件夹
# timeEnd=$(date +%s -d "${CURRENT_DATE} 00:00:00")
# for hisdate in $storageDateArrays
# do
#   timeBgn=$(date +%s -d "${hisdate} 00:00:00")
#   day=$[(timeEnd-timeBgn)/60/60/24]      ##相差的天数
#
#   echo "$day $hisdate"
#   ##如果时间差大于30,需要删除之前的备份文件。
#   if [ $day -gt $stdStorageDay ];then
#     echo "rm -rf ${hisdate}"
#     `rm -rf ./storage/${hisdate}`
#   fi
# done
