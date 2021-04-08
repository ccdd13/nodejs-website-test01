wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

# Don't copy + paste this
export NVM_DIR="$HOME/.nvm"
[ -f "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
[ -f "$NVM_DIR/bash_completion" ] && source "$NVM_DIR/bash_completion"

which nvm
nvm install --lts
nvm use --lts

tput setaf 6;
printf "\n\n"
printf "If running node/nvm doesn't work, run:\n\n"
tput setaf 2;
printf 'export NVM_DIR="$HOME/.nvm" &&\n'
printf '[ -f "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh" && \n'
printf '[ -f "$NVM_DIR/bash_completion" ] && source "$NVM_DIR/bash_completion" && \n'
printf '\nnvm install --lts &&\nnvm use --lts\n'
tput setaf 6;
printf '\nOr, just copy and paste the commands inside the script.\n\n\n'
tput init

npm install --global npm@latest yarn@latest synp@latest
npm update --global
oldcwd=$(pwd)
#cd ~/.config/yarn/global
cd ~
yarn global add --force npm@latest yarn@latest synp@latest
yarn global add --force
cd $oldcwd

echo

oldcwd=$(pwd) && \
echo Node.JS      $(node --version) && \
echo NPM          $(npm --version) && \
cd ~ && \
echo YARN classic $(yarn --version) && \
cd $oldcwd && \
echo YARN berry   $(yarn --version)
