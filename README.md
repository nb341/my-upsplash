# my-upsplash

## Steps to set up this project locally as currently is.
1. git clone repo.
2. cd my-unspash && yarn install (or npm install (delete yarn.lock first))
3. python3 -m venv venv
4. source venv/bin/activate (activates virtual environment to install requirements for backend)
5. pip install -r requirements.txt (important make sure your virtual environment is running, you will see ) 
6. cd api && python manage.py migrate
7. ./manage.py runserver
8. go to new terminal
9. cd .. && yarn start

## To do
1. Add redux for better statement of forms and retrieval of data from api