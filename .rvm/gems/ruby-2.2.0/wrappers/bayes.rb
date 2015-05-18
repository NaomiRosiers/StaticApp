#!/usr/bin/env bash

if
  [[ -s "/home/naomirosiers/.rvm/gems/ruby-2.2.0/environment" ]]
then
  source "/home/naomirosiers/.rvm/gems/ruby-2.2.0/environment"
  exec ruby bayes.rb "$@"
else
  echo "ERROR: Missing RVM environment file: '/home/naomirosiers/.rvm/gems/ruby-2.2.0/environment'" >&2
  exit 1
fi
