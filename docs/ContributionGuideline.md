---
slug: 'contribution-guideline'
---

# Contribution Guideline

## Contribution prerequisites

* When you start on a task please mention that on issue
* Always base of your branch from latest `dev` branch
* Write tests for your code
* Always include issue number with a hash on your commit and pull request (e.g `#43`)
* Follow the coding style [Code Style](https://github.com/iluminar/goodwork/wiki/Contribution-Guideline#coding-style)

> [Minimum Viable Pull Request](https://dev.to/jmfayard/the-minimum-viable-pull-request-5e7p)

## Git workflow

### First time setup

[Fork the repo if you are outside collaborator.]

1. Clone the project to your local pc

``` bash
$ git clone git@github.com:iluminar/goodwork.git
```

for outside collaborator
``` bash
$ git clone git@github.com:{yourusername}/goodwork.git
```

2. Configure remotes:

``` bash
$ cd goodwork
$ git remote add origin git@github.com:iluminar/goodwork.git
```

3. Setup application

#### Using docker

> Docker & Docker Compose must be installed

a) Copy `.env` from `.env.example`

```
cp .env.example .env
```

b) Define environment variable

Set app port, db credentials and mail driver credentials in `.env` file. Also provide `SSL_CERT_DOMAIN`(your domain) and `SSL_CERT_DIR`(directory of your ssl certificates file) values for ssl setup.(Not needed for local development)

c) Run the installer

```bash
sudo chmod +x install.sh
./install.sh local
```

> To stop server: `./cmd stop` & to start server `./cmd start`


Login Credentials for Admin User
`email: admin@example.com`
`password: secret`

[Useful Commands](https://github.com/iluminar/goodwork/wiki/Installation#shortcuts-for-running-command)

#### Install Manually

``` bash
$ git checkout dev
$ git pull origin dev
$ composer install
$ cp .env.example .env
$ php artisan key:generate
$ npm install
```


### Regular workflow
1. Create a branch for new issue from `dev` branch latest commit (the branch name should be as “issue[number]”. E.g. – “issue7”):
``` bash
$ git checkout -b issue[number]
```

2. Develop on issue[number] branch, but Do not merge the upstream master with your development branch!!
3. Run test to ensure all tests are passed before commiting
4. Commit changes to issue[number] branch:
``` bash
$ git add .
$ git commit -m "commit message"
```

5. Push branch to Github:
``` bash
$ git push origin issue[number]
```

6. Repeat steps 2-5 till development is complete.
7. Fetch upstream changes that were done by other contributors:
``` bash
$ git fetch origin
```

8. Update local `dev` branch:
``` bash
$ git checkout dev
$ git pull origin dev
```

9. Rebase issue[number] branch on top of the upstream `dev`:
``` bash
$ git checkout issue[number]
$ git rebase dev
```

10. In the process of the rebase, it may discover conflicts. In that case it will stop and allow you to fix the conflicts. After fixing conflicts,run all test to ensure nothing breaks and then just run:
``` bash
$ git add .
$ git rebase --continue
```

11. Push branch to GitHub (force changes to your issue branch, it is not a common branch). Rebasing means recreation of commits, so noway to push without force. NEVER force to common branch.:
``` bash
$ git push origin issue[number] --force
```

12. Send a Pull Request.
Attention: Please, recheck that in your pull request you send only your changes, and no other changes!!
Check it by command:
``` bash
$ git diff issue[number] upstream/dev
```

13. Remove issue branch after successful pull request:
``` bash
$ git branch -D issue[number]
$ git push origin :issue[number]
```

**N.B:**
* Never push to `master` or `dev` branch
* Work on `feature` branch
* Don't name your local working branch `feature`, rather give it name of your task id e.g `issue7`
* Test before you push. Do not push half-done work.
* Create a pull request in `dev` branch
* Code will be reviewed by peers, if everything seems right then code will be merged

### Commit and messages
* Commit message should be brief but descriptive enough to convey the message of what has been done in this commit, example

> Add delete user option in the dashboard

Or like this
> Replace jQuery onReady listener with plain JS; fixes #13
* Add issue number in final commit message when the task is complete

## Coding style
Goodwork follows the [PSR-2](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md) coding standard and the [PSR-4](https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md) autoloading standard and StandardJS style for Javascript file [StandardJS](https://standardjs.com/rules.html).

## Changelog

Notable changes in source file should be recorded in `CHANGELOG.md` file.
Format of the record should be like below

```md
## Version no. (Release date)

## Change
- Message [Issue no](Issue url)
```

Types of changes
* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for soon-to-be removed features.
* `Removed` for now removed features.
* `Fixed` for any bug fixes.
* `Security` in case of vulnerabilities.