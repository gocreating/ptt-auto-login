# PTT Auto Login

This is a bot helps you automatically login ptt.

## Add `accounts.json`

Here is the example format:

```
{
  "accounts": [{
    "username": "obov",
    "password": "qq"
  }]
}
```

## Usage

```
crontab -e
```

Add the following rule

```
0 12 * * * node /absolute/path/to/ptt.js
```
