#!/usr/bin/env bash

## check remotes are set
# git remote -v
# if not add the heroku remote
# heroku git:remote -a APPXX


## if its already set in the .git/config edit to this:
#[remote "heroku"]
#	url = git@heroku.com:XX.git


git push heroku master
heroku ps:restart		# dunno why it doesnt do this anyway

## for a specific branch use:
# git push heroku yourbranch:master

heroku open --app ltel &
heroku logs --tail
