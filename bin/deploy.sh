#!/usr/bin/env bash

## check remotes are set
# git remote -v
# if not add the heroku remote
# heroku git:remote -a APP

# heroku git:remote -a prod-casterdex

## if its already set in the .git/config edit to this:
#[remote "heroku"]
#	url = git@heroku.com:mviz.git


git push heroku master


## for a specific branch use:
# git push heroku yourbranch:master


heroku open --app prod-casterdex &
heroku logs --tail
