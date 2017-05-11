#测试环境代码发布
sync-dev:
	rsync -az -v -r --delete-after --force \
	  --filter="- node_modules" \
	  -e "ssh -p 22" \
	  ./dist/ \
      root@192.168.199.131:~/server/interface-server/app/public

deploy-dev:sync-dev