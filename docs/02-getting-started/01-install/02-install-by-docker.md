# Install by docker

Starcoin supports running nodes through Docker, and provides `starcoin` application images, which can be directly pulled to run locally.

## Pull the Docker image

```shell
docker pull starcoin/starcoin:latest
```

Starcoin binary at `/starcoin` dir in the docker image.

## Image tag description

* latest: indicates the latest release version, including pre-release versions.
* v1.10.1: indicates the v1.10.1 version of Starcoin.
* master: The image built from the master branch of the Starcoin repository.
* sha-7ab632b: indicates the version built from the git commit [7ab632b](https://github.com/starcoinorg/starcoin/commit/7ab632b36a039439d424c83951ca8d2366d311c7). `7ab632b` is the first 7 chars of the commit's hash.

For example:

```shell
docker pull starcoin/starcoin:v1.10.1
docker pull starcoin/starcoin:master
docker pull starcoin/starcoin:sha-7ab632b
```

## Run check

```shell
$ docker container run -it starcoin/starcoin:latest bash

# Note: When the prompt changes, it means that the interactive operation has been successfully entered
root@4d622b3fc3b4:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  starcoin  sys  tmp  usr  var

# The version information is successfully output, indicating that the installation is successful
root@4d622b3fc3b4:/# ./starcoin/starcoin --version
starcoin 1.11.7-rc (build:1.11.7-rc)
```

## Supported image repositories

* Docker hub: https://hub.docker.com/r/starcoin/starcoin/
* Github package: https://github.com/starcoinorg/starcoin/pkgs/container/starcoin
