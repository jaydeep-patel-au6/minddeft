live link -> https://minddeft.vercel.app/
REPO LINK -> https://github.com/jaydeep-patel-au6/minddeft

for start project in local windows machine

1. git clone https://github.com/jaydeep-patel-au6/minddeft.git
2. go to the minddeft folder
3. yarn
4. yarn start

now project is running on localhost:3000

For change the item per page goto app.js and change <Pagination itemsPerPage={20} /> to <Pagination itemsPerPage={YOUR NUMBER} />

For more data goto Pagination.js and change the size in baseURL ("https://api.instantwebtools.net/v1/passenger?page=1&size=100"; to "https://api.instantwebtools.net/v1/passenger?page=1&size={YOUR NUMBER}";)
