from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time

"""
I wasn't able to generate a service account JSON, but if I could
here's what I would do to then push these directly to the database.

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

... later
db.collection(u'entries').add({
  u'name': ...relevant info...
})

"""

URL = "https://frontiergaps.softr.app/"

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get(URL)

time.sleep(7)

html = driver.page_source

soup = BeautifulSoup(html, "html.parser")

all_divs = soup.find_all("div", {"class" : "list-item-wrapper"})
for div in all_divs[:10]:
    anchor = div.find_next("a")
    heading = div.find_next("h3")
    link = "https://frontiergaps.softr.app/" + anchor["href"]
    text = heading.text
    print(link, text)