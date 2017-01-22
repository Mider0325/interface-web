.PHONY: dist test

dev:
	@npm run dev

dist:
	@npm run dist

deploy:
	@npm run deploy

sync-dev:
	rsync -az -v -r --delete-after --force \
	  --filter="- node_modules" \
	  -e "ssh -p 22" \
	  ./dist/ \
	  root@114.215.120.151:/home/deploy/web
deploy-dev:sync-dev